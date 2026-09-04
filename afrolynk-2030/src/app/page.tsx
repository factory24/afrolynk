import Image from "next/image";
import Link from "next/link";
import { Counter } from "@/components/counter";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { CtaButton, Eyebrow, IconBox, Section, SectionTitle } from "@/components/ui";
import {
  about,
  hero,
  pillars,
  programs,
  projects,
  site,
  stats,
  team,
  testimonials,
  partners,
  sectors,
} from "@/content/site";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-light">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[30rem] w-[30rem] rounded-full bg-green-tint blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-gold-tint blur-3xl" />
        <div className="wrap relative grid items-center gap-14 pt-40 pb-16 sm:pt-44 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
          <div>
            <Reveal>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </Reveal>
            <h1 className="display-hero mt-6">
              {hero.titleLines.map((line, i) => (
                <Reveal as="span" key={line} delay={0.08 * i} className="block">
                  <span className={i === 1 ? "text-green" : ""}>{line}</span>
                </Reveal>
              ))}
            </h1>
            <Reveal delay={0.28}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-body">
                {hero.lede}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-9 flex flex-wrap gap-4">
                <CtaButton href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </CtaButton>
                <CtaButton href={hero.secondaryCta.href} variant="outline">
                  {hero.secondaryCta.label}
                </CtaButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/img/carousel-2.jpg"
                alt="African and European founders at an Afrolynk event"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover"
              />
              <span className="absolute left-0 top-0 h-24 w-2 bg-gold" />
              <span className="absolute left-0 top-0 h-2 w-24 bg-green" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-green px-6 py-4 text-white shadow-card">
              <div className="text-3xl font-extrabold leading-none">
                Since <span className="text-gold">2016</span>
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                Berlin roots · Africa–global reach
              </div>
            </div>
          </Reveal>
        </div>

        {/* Sector marquee */}
        <div className="relative border-y border-line bg-paper py-4">
          <div className="flex overflow-hidden">
            <div className="marquee-track flex shrink-0 items-center gap-10 whitespace-nowrap pr-10">
              {[...sectors, ...sectors].map((s, i) => (
                <span
                  key={i}
                  className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink/70"
                >
                  <span className="text-green">◆</span>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact-info strip ───────────────────────────── */}
      <div className="wrap -mt-px grid gap-px overflow-hidden bg-line sm:grid-cols-3">
        {[
          { k: "Visit us", v: `${site.address.line1}, ${site.address.line2}`, icon: "⬡" },
          { k: "Email us", v: site.email, icon: "✉", href: `mailto:${site.email}` },
          { k: "Call us", v: site.phone, icon: "✆", href: `tel:${site.phone.replace(/\s/g, "")}` },
        ].map((item, i) => {
          const inner = (
            <div className={`h-full px-7 py-8 ${i === 1 ? "bg-green text-white" : "bg-paper"}`}>
              <div className={`text-xl ${i === 1 ? "text-gold" : "text-green"}`}>{item.icon}</div>
              <div className={`mt-3 text-xs font-bold uppercase tracking-[0.16em] ${i === 1 ? "text-white/80" : "text-muted"}`}>
                {item.k}
              </div>
              <div className={`mt-1 text-sm font-semibold ${i === 1 ? "text-white" : "text-ink"}`}>
                {item.v}
              </div>
            </div>
          );
          return item.href ? (
            <a key={item.k} href={item.href} className="transition-opacity hover:opacity-90">
              {inner}
            </a>
          ) : (
            <div key={item.k}>{inner}</div>
          );
        })}
      </div>

      {/* ── About intro ──────────────────────────────────── */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/img/about.jpg"
                alt="The Afrolynk community"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gold px-6 py-5 text-ink shadow-card sm:block">
              <div className="text-4xl font-extrabold leading-none">2016</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest">
                Founded in Berlin
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <Eyebrow>Who we are</Eyebrow>
            <SectionTitle className="mt-5">
              A bridge between the African &{" "}
              <span className="text-green">European ecosystems.</span>
            </SectionTitle>
            <p className="mt-6 text-lg leading-relaxed text-body">{about.intro}</p>
            <p className="mt-4 leading-relaxed text-body">{about.bridge}</p>
            <div className="mt-8">
              <CtaButton href="/about" variant="green">
                More about us
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── What we do (ICAi²) ───────────────────────────── */}
      <Section className="bg-light">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <SectionTitle className="mt-5 max-w-2xl">
              Innovate. Connect.{" "}
              <span className="text-green">Accelerate.</span>
            </SectionTitle>
          </div>
          <Link
            href="/what-we-do"
            className="link-underline w-fit text-sm font-semibold text-green"
          >
            Explore the full model →
          </Link>
        </div>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <StaggerItem
              key={p.key}
              className="flex h-full flex-col rounded-2xl border border-line bg-paper p-7 transition-all hover:-translate-y-1 hover:border-green/40 hover:shadow-card"
            >
              <IconBox tone={i === 1 ? "gold" : "green"}>
                <span className="text-lg font-extrabold">{p.letter}</span>
              </IconBox>
              <h3 className="mt-5 text-2xl font-bold text-green">{p.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                {p.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-body">{p.intro}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ── Flagship programs ────────────────────────────── */}
      <Section>
        <Reveal>
          <Eyebrow>What we offer</Eyebrow>
          <SectionTitle className="mt-5 max-w-3xl">
            Supporting entrepreneurs, end to{" "}
            <span className="text-green">end.</span>
          </SectionTitle>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {programs.map((p) => (
            <StaggerItem
              key={p.key}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                  {p.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-body">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ── Impact stats (dark band) ─────────────────────── */}
      <Section dark>
        <Reveal>
          <Eyebrow>Why choose us</Eyebrow>
          <SectionTitle onDark className="mt-5 max-w-3xl">
            A decade of building across two continents.
          </SectionTitle>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((m) => (
            <StaggerItem
              key={m.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <span className="text-5xl font-extrabold text-gold">
                <Counter value={m.value} />
              </span>
              <div className="mt-3 text-sm font-semibold text-white">
                {m.label}
              </div>
              {m.note ? (
                <div className="mt-1 text-xs text-white/60">{m.note}</div>
              ) : null}
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ── Featured projects ────────────────────────────── */}
      <Section>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Projects & initiatives</Eyebrow>
            <SectionTitle className="mt-5 max-w-2xl">
              What the community has{" "}
              <span className="text-green">built.</span>
            </SectionTitle>
          </div>
          <Link
            href="/projects"
            className="link-underline w-fit text-sm font-semibold text-green"
          >
            See all projects →
          </Link>
        </div>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((pr) => (
            <StaggerItem
              key={pr.key}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={pr.image}
                  alt={pr.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-wide">
                  <span className="text-gold-dark">{pr.category}</span>
                  <span className="text-muted">· {pr.year}</span>
                </div>
                <h3 className="mt-2 text-lg font-bold">{pr.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{pr.blurb}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ── Team preview ─────────────────────────────────── */}
      {/* <Section className="bg-light">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Meet the team</Eyebrow>
            <SectionTitle className="mt-5 max-w-2xl">
              The people behind{" "}
              <span className="text-green">Afrolynk.</span>
            </SectionTitle>
          </div>
          <Link
            href="/about"
            className="link-underline w-fit text-sm font-semibold text-green"
          >
            More about us →
          </Link>
        </div>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <StaggerItem
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-line bg-paper transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 30vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                  {member.role}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section> */}

      {/* ── Testimonials ─────────────────────────────────── */}
      <Section>
        <Reveal>
          <Eyebrow>Voices from our programs</Eyebrow>
          <SectionTitle className="mt-5 max-w-3xl">
            Skills that change{" "}
            <span className="text-green">careers.</span>
          </SectionTitle>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-line bg-paper p-8"
            >
              <span className="text-5xl leading-none text-gold">“</span>
              <p className="mt-2 text-lg leading-relaxed text-body">{t.quote}</p>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ── Partners ─────────────────────────────────────── */}
      <Section className="bg-light">
        <Reveal className="text-center">
          <Eyebrow>Our partners</Eyebrow>
          <p className="mt-4 text-sm text-muted">
            Afrolynk & Lynkspace — powered by a global ecosystem
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-3 items-center gap-6 sm:grid-cols-4 lg:grid-cols-6">
          {[...partners.poweredBy, ...partners.ecosystem].slice(0, 12).map((logo, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image
                src={logo}
                alt="Afrolynk partner"
                width={120}
                height={48}
                className="h-12 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="link-underline text-sm font-semibold text-green"
          >
            See our partners & projects →
          </Link>
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <Section dark>
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <SectionTitle onDark className="max-w-2xl">
              Let&apos;s build the next great African venture — together.
            </SectionTitle>
            <p className="mt-5 max-w-xl leading-relaxed text-white/70">
              Whether you&apos;re a founder, corporate, investor or diaspora
              expert, there&apos;s a place for you in the Afrolynk community.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="flex flex-wrap gap-4 lg:justify-end">
            <CtaButton href="/contact" variant="gold">
              Partner with us
            </CtaButton>
            <CtaButton href="/what-we-do" variant="outline-light">
              What we do
            </CtaButton>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
