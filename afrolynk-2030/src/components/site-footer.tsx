import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";
import { MailIcon, MapPinIcon, PhoneIcon, socialIcons } from "@/components/icons";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-green text-white">
      <div className="wrap py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.1fr]">
          <div>
            <Image
              src="/img/Afrolynk-Logo-White.png"
              alt="Afrolynk"
              width={190}
              height={51}
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/95">
              A bridge between the African and European start-up ecosystems —
              bringing together a community that creates value for good.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white">
              Innovate · Connect · Accelerate
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Explore
            </span>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-white/90 link-underline hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Get in touch
            </span>
            <a
              href={`mailto:${site.email}`}
              className="flex w-fit items-center gap-3 text-sm text-white/90 transition-colors hover:text-white"
            >
              <MailIcon className="h-4 w-4 shrink-0 text-gold" />
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex w-fit items-center gap-3 text-sm text-white/90 transition-colors hover:text-white"
            >
              <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
              {site.phone}
            </a>
            <span className="flex w-fit items-start gap-3 text-sm text-white/90">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {site.address.line1}, {site.address.line2}
              </span>
            </span>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-green"
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : s.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/30 pt-6 text-xs text-white/90 sm:flex-row sm:items-center">
          <span>© {year} Afrolynk. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="link-underline hover:text-white">
              Privacy Notice
            </Link>
            <span>Berlin · Africa–global · Since 2016</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
