#!/usr/bin/env bash
# Idempotent provisioning for the Afrolynk Next.js app on Debian 13.
set -euo pipefail
export DEBIAN_FRONTEND=noninteractive

: "${DEPLOY_PUBKEY:?Set DEPLOY_PUBKEY to the deployment SSH public key}"
APP_DIR=/opt/afrolynk
STAGE_DIR=/opt/afrolynk-stage
SVC_USER=afrolynk
SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)

echo ">> apt base packages"
apt-get update -y
apt-get install -y curl git rsync sudo nginx ufw ca-certificates gnupg

echo ">> Node.js 22 (NodeSource)"
if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi

echo ">> certbot"
apt-get install -y certbot python3-certbot-nginx

echo ">> deploy user + app dir"
id "$SVC_USER" >/dev/null 2>&1 || useradd -m -s /bin/bash "$SVC_USER"
install -d -m 755 -o "$SVC_USER" -g "$SVC_USER" "$APP_DIR" "$STAGE_DIR"
install -d -m 755 -o "$SVC_USER" -g "$SVC_USER" "/home/$SVC_USER/bin"
install -m 755 -o "$SVC_USER" -g "$SVC_USER" \
  "$SCRIPT_DIR/deploy-afrolynk" "/home/$SVC_USER/bin/deploy-afrolynk"

echo ">> authorized deploy key"
install -d -m 700 -o "$SVC_USER" -g "$SVC_USER" "/home/$SVC_USER/.ssh"
touch "/home/$SVC_USER/.ssh/authorized_keys"
if ! grep -qxF "$DEPLOY_PUBKEY" "/home/$SVC_USER/.ssh/authorized_keys"; then
  printf '%s\n' "$DEPLOY_PUBKEY" >> "/home/$SVC_USER/.ssh/authorized_keys"
fi
chown "$SVC_USER:$SVC_USER" "/home/$SVC_USER/.ssh/authorized_keys"
chmod 600 "/home/$SVC_USER/.ssh/authorized_keys"

echo ">> narrow sudoers (restart only)"
cat > /etc/sudoers.d/afrolynk <<'EOF'
afrolynk ALL=(root) NOPASSWD: /usr/bin/systemctl restart afrolynk, /usr/bin/systemctl start afrolynk, /usr/bin/systemctl stop afrolynk, /usr/bin/systemctl status afrolynk
EOF
chmod 440 /etc/sudoers.d/afrolynk
visudo -cf /etc/sudoers.d/afrolynk

echo ">> systemd service"
cat > /etc/systemd/system/afrolynk.service <<EOF
[Unit]
Description=Afrolynk Next.js application
After=network.target

[Service]
Type=simple
User=$SVC_USER
WorkingDirectory=$APP_DIR
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/npm run start
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload
systemctl enable afrolynk

echo ">> nginx"
if [[ -f /etc/letsencrypt/live/afrolynk.com/fullchain.pem ]]; then
  install -m 644 "$SCRIPT_DIR/nginx.conf" /etc/nginx/sites-available/afrolynk
else
  install -m 644 "$SCRIPT_DIR/nginx-bootstrap.conf" /etc/nginx/sites-available/afrolynk
fi
ln -sfn /etc/nginx/sites-available/afrolynk /etc/nginx/sites-enabled/afrolynk
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable --now nginx
systemctl reload nginx

echo ">> firewall"
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

echo "PROVISION_DONE node=$(node -v) npm=$(npm -v) nginx=$(nginx -v 2>&1)"
