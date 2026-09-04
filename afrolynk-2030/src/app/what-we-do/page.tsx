import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import {
  CtaButton,
  Eyebrow,
  IconBox,
  PageHero,
  Section,
  SectionTitle,
} from "@/components/ui";
import { icai2, pillars, programs, sectors } from "@/content/site";

export const metadata = {
  title: "What We Do",
  description:
    "Discover Afrolynk's ICAi² model: Innovate, Connect and Accelerate, powered by Intelligence and Impact.",
  alternates: { canonical: "/what-we-do" },
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            Innovate. Connect. <span className="text-green">Accelerate.</span>
          </>
        }
        lede={icai2.explainer}
      />

      <Section>
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow>The ICAi² model</Eyebrow>
          <SectionTitle className="mt-5">
            One connected engine for building what&apos;s next.
          </SectionTitle>
          <div className="mt-8 inline-flex max-w-full rounded-full border border-green/20 bg-green-tint px-5 py-3 text-center text-sm font-bold leading-relaxed text-green sm:px-7 sm:text-base">
            {icai2.formula}
          </div>
          <p className="mt-5 text-base leading-relaxed text-body">
            Intelligence + Impact are the i² powering Accelerate.
          </p>
          <Link
            href="/about"
            className="link-underline mt-6 inline-block text-sm font-semibold text-green"
          >
            Meet Afrolynk →
          </Link>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow>Three core pillars</Eyebrow>
          <SectionTitle className="mt-5 max-w-3xl">
            Built to turn opportunity into{" "}
            <span className="text-green">future-ready ventures.</span>
          </SectionTitle>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <StaggerItem
              key={pillar.key}
              className="flex h-full flex-col rounded-2xl border border-line bg-paper p-7 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <IconBox tone="green">
                <span className="text-3xl font-extrabold">{pillar.letter}</span>
              </IconBox>
              <h3 className="mt-6 text-2xl font-bold text-green">{pillar.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {pillar.tagline}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-body">{pillar.intro}</p>
              <ul className="mt-6 space-y-4 border-t border-line pt-6">
                {pillar.points.map((point) => (
                  <li key={point.title} className="text-sm leading-relaxed text-body">
                    <strong className="text-ink">{point.title}. </strong>
                    {point.body}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-light">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <Eyebrow>Under Accelerate</Eyebrow>
            <SectionTitle className="mt-5">
              Accelerate is powered by <span className="text-green">i².</span>
            </SectionTitle>
            <p className="mt-6 max-w-xl leading-relaxed text-body">
              Intelligence and Impact make acceleration more informed, accountable and enduring.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border-l-4 border-gold bg-gold-tint p-6 text-sm leading-relaxed text-ink">
            Intelligence and Impact are cross-cutting disciplines, not standalone pillars.
          </Reveal>
        </div>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
          {icai2.disciplines.map((discipline, index) => (
            <StaggerItem
              key={discipline.key}
              className="flex h-full gap-5 rounded-2xl border border-line bg-paper p-7 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <IconBox tone={index === 0 ? "gold" : "ink"}>
                <span className="text-xl font-extrabold">i</span>
              </IconBox>
              <div>
                <h3 className="text-2xl font-bold text-green">{discipline.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{discipline.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-light">
        <Reveal>
          <Eyebrow>Flagship programs</Eyebrow>
          <SectionTitle className="mt-5 max-w-3xl">
            Practical places to build, connect and <span className="text-green">transform.</span>
          </SectionTitle>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <StaggerItem
              key={program.key}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-video">
                <Image
                  src={program.image}
                  alt={`${program.name} program`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-bold text-green">{program.name}</h3>
                <p className="mt-2 text-sm font-semibold text-gold-dark">{program.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-body">{program.body}</p>
                {program.href && (
                  <div className="mt-6">
                    <CtaButton href={program.href} variant="outline">
                      Visit {program.name}
                    </CtaButton>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section dark>
        <Reveal className="max-w-3xl">
          <Eyebrow>Where we focus</Eyebrow>
          <SectionTitle onDark className="mt-5">
            Priority sectors for <span className="text-gold">shared progress.</span>
          </SectionTitle>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            We focus our expertise, partnerships and venture-building support where innovation can create lasting value.
          </p>
        </Reveal>
        <Stagger className="mt-10 flex flex-wrap gap-3">
          {sectors.map((sector) => (
            <StaggerItem key={sector} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/85">
              {sector}
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Build with us</Eyebrow>
          <SectionTitle className="mt-5">
            Ready to create <span className="text-green">value for good?</span>
          </SectionTitle>
          <p className="mt-6 text-lg leading-relaxed text-body">
            Connect with Afrolynk to explore partnerships, programs and the projects shaping our shared future.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <CtaButton href="/contact">Get in touch</CtaButton>
            <CtaButton href="/projects" variant="outline">
              Explore projects
            </CtaButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
