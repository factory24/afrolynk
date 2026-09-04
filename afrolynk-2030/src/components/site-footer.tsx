import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";

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
              className="w-fit text-sm text-white/90 link-underline hover:text-white"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="w-fit text-sm text-white/90 link-underline hover:text-white"
            >
              {site.phone}
            </a>
            <div className="mt-3 flex flex-wrap gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/50 px-3 py-1 text-xs text-white transition-colors hover:bg-white hover:text-green"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/30 pt-6 text-xs text-white/90 sm:flex-row sm:items-center">
          <span>© {year} Afrolynk. All rights reserved.</span>
          <span>Berlin · Africa–global · Since 2016</span>
        </div>
      </div>
    </footer>
  );
}
