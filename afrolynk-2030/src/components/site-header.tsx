"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { MailIcon, PhoneIcon, socialIcons } from "@/components/icons";

function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <span className="inline-flex items-center rounded-lg bg-green px-3 py-1.5">
      <Image
        src="/img/Afrolynk-Logo-White.png"
        alt="Afrolynk"
        width={200}
        height={54}
        priority
        className={`${className} w-auto`}
      />
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility top bar */}
      <div className="hidden bg-ink text-white/85 lg:block">
        <div className="wrap flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 hover:text-gold"
            >
              <MailIcon className="h-4 w-4 text-gold" /> {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-gold"
            >
              <PhoneIcon className="h-4 w-4 text-gold" /> {site.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="text-white/70 transition-colors hover:text-gold"
                >
                  {Icon ? <Icon className="h-4 w-4" /> : s.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-paper/95 shadow-soft backdrop-blur-md"
            : "bg-paper lg:bg-paper/80 lg:backdrop-blur-sm"
        }`}
      >
        <div className="wrap flex h-[4.5rem] items-center justify-between">
          <Link href="/" aria-label="Afrolynk home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => {
              const active =
                item.href !== "/" && pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`link-underline text-[0.95rem] font-semibold transition-colors ${
                    active ? "text-green" : "text-ink hover:text-green"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-dark"
            >
              Partner with us
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-paper transition-opacity duration-400 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="wrap flex h-full flex-col justify-center gap-3">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ transitionDelay: open ? `${i * 55 + 90}ms` : "0ms" }}
              className={`text-3xl font-extrabold transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } ${pathname.startsWith(item.href) && item.href !== "/" ? "text-green" : "text-ink"}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="mt-8 w-fit font-medium text-green link-underline"
          >
            {site.email}
          </a>
        </div>
      </div>
    </header>
  );
}
