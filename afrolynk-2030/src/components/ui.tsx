import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd, breadcrumbLd } from "@/components/structured-data";

export function Section({
  children,
  className = "",
  id,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 ${dark ? "on-dark bg-ink text-white/75" : ""} ${className}`}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

/** Signature double-bar (gold over green) section heading. */
export function SectionTitle({
  children,
  onDark = false,
  className = "",
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`section-title display-section ${onDark ? "text-white" : ""} ${className}`}
    >
      {children}
    </h2>
  );
}

export function CtaButton({
  href,
  children,
  variant = "green",
}: {
  href: string;
  children: ReactNode;
  variant?: "green" | "gold" | "outline" | "outline-light";
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles = {
    green: "bg-green text-white hover:bg-green-dark hover:-translate-y-0.5 shadow-soft",
    gold: "bg-gold text-ink hover:bg-gold-dark hover:-translate-y-0.5 shadow-soft",
    outline: "border border-ink/15 text-ink hover:border-green hover:text-green",
    "outline-light":
      "border border-white/30 text-white hover:border-gold hover:text-gold",
  }[variant];

  const isExternal = href.startsWith("http");
  const Cmp = isExternal ? "a" : Link;

  return (
    <Cmp
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`${base} ${styles}`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Cmp>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  trail,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  /** Breadcrumb trail (excluding Home). Renders a visible nav + matching JSON-LD. */
  trail?: { name: string; path: string }[];
}) {
  return (
    <header className="relative overflow-hidden bg-light grain">
      {/* soft brand wash */}
      <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-green-tint blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold-tint blur-3xl" />
      <div className="wrap relative pt-32 pb-16 sm:pt-36 sm:pb-20">
        {trail && trail.length > 0 ? (
          <>
            <JsonLd data={breadcrumbLd(trail)} />
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                <li>
                  <Link href="/" className="transition-colors hover:text-green">
                    Home
                  </Link>
                </li>
                {trail.map((item, i) => (
                  <li key={item.path} className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-muted/50">/</span>
                    {i === trail.length - 1 ? (
                      <span aria-current="page" className="text-green">
                        {item.name}
                      </span>
                    ) : (
                      <Link href={item.path} className="transition-colors hover:text-green">
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </>
        ) : null}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display-hero mt-5 max-w-4xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">{lede}</p>
      </div>
    </header>
  );
}

export function IconBox({
  children,
  tone = "green",
}: {
  children: ReactNode;
  tone?: "green" | "gold" | "ink";
}) {
  const tones = {
    green: "bg-green-tint text-green",
    gold: "bg-gold-tint text-gold-dark",
    ink: "bg-ink text-gold",
  }[tone];
  return <span className={`icon-box ${tones}`}>{children}</span>;
}
