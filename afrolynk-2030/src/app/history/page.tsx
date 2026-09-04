import Image from "next/image";
import Link from "next/link";
import { Counter } from "@/components/counter";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import {
  CtaButton,
  Eyebrow,
  PageHero,
  Section,
  SectionTitle,
} from "@/components/ui";
import { historyMedia, site, stats, timeline } from "@/content/site";

export const metadata = {
  title: "Our History",
  description:
    "From a Berlin conference in 2016 to an Africa–global innovation platform — the Afrolynk story.",
  alternates: { canonical: "/history" },
};

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our History"
        title={
          <>
            From Berlin, 2016 — to <span className="text-green">Africa–global</span>
          </>
        }
        lede="What began as a conference bridging African and European founders has grown into a year-round innovation community."
        trail={[{ name: "History", path: "/history" }]}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>How it started</Eyebrow>
            <SectionTitle className="mt-5 max-w-xl">
              A bridge built from <span className="text-green">Berlin outward.</span>
            </SectionTitle>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
              Afrolynk was founded in 2016 by Moses Acquah, a Ghanaian-born technology leader
              (ex-Nokia, ex-Microsoft Ghana), and officially registered in Germany in 2018.
            </p>
            <Link
              href="/about"
              className="link-underline mt-7 inline-block text-sm font-semibold text-green"
            >
              Meet Afrolynk →
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-card">
              <iframe
                src={historyMedia.video.embed}
                title={historyMedia.video.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-xs text-muted">
              {historyMedia.video.title} · Video courtesy of{" "}
              <a
                href={site.youtubeChannel}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-semibold text-green"
              >
                Afrolynk on YouTube
              </a>
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-light">
        <Reveal>
          <Eyebrow>The timeline</Eyebrow>
          <SectionTitle className="mt-5 max-w-3xl">
            Moments that made the <span className="text-green">connection stronger.</span>
          </SectionTitle>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
            From one conference in Berlin to a community with an always-on global outlook.
          </p>
        </Reveal>

        <div className="relative mt-14 sm:mt-16">
          <div className="absolute bottom-10 left-3 top-10 w-px bg-gradient-to-b from-green via-green to-gold md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-8 md:space-y-12">
            {timeline.map((entry, index) => {
              const isLeft = index % 2 === 0;

              return (
                <Reveal
                  key={`${entry.year}-${entry.title}`}
                  delay={index * 0.06}
                  className="relative grid gap-4 pl-10 md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] md:gap-0 md:pl-0"
                >
                  <article
                    className={`group relative rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-7 md:row-start-1 ${
                      isLeft
                        ? "md:col-start-1 md:mr-10"
                        : "md:col-start-3 md:ml-10"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <span
                        className={`text-4xl font-extrabold leading-none sm:text-5xl ${
                          index % 2 === 0 ? "text-green" : "text-gold-dark"
                        }`}
                      >
                        {entry.year}
                      </span>
                      <span className="rounded-full bg-gold-tint px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-gold-dark">
                        Chapter {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-ink">
                      {entry.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
                      {entry.body}
                    </p>

                    {entry.items && (
                      <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm leading-relaxed text-body">
                        {entry.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-green ring-2 ring-gold-tint" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {entry.image && (
                      <div className="relative mt-6 aspect-video overflow-hidden rounded-xl">
                        <Image
                          src={entry.image}
                          alt={`${entry.title} — Afrolynk milestone`}
                          fill
                          sizes="(max-width: 767px) calc(100vw - 5.5rem), (max-width: 1024px) 38vw, 32vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                  </article>

                  <div className="absolute left-3 top-8 flex size-7 -translate-x-1/2 items-center justify-center rounded-full border-4 border-light bg-green shadow-soft md:static md:col-start-2 md:row-start-1 md:mx-auto md:mt-8 md:translate-x-0">
                    <span className="size-2 rounded-full bg-gold" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Milestones in motion</Eyebrow>
            <SectionTitle className="mt-5 max-w-2xl">
              The work keeps <span className="text-green">growing.</span>
            </SectionTitle>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-body">
            A shared platform for founders, partners and communities working across borders.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="bg-paper px-6 py-7 sm:px-7">
              <div className="text-4xl font-extrabold text-green">
                <Counter value={stat.value} />
              </div>
              <p className="mt-3 font-semibold text-ink">{stat.label}</p>
              {stat.note && <p className="mt-1 text-sm leading-relaxed text-muted">{stat.note}</p>}
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-light">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>In the press &amp; media</Eyebrow>
            <SectionTitle className="mt-5 max-w-2xl">
              The story, told <span className="text-green">beyond our walls.</span>
            </SectionTitle>
          </div>
          <CtaButton href={site.youtubeChannel} variant="outline">
            Watch on YouTube
          </CtaButton>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {historyMedia.press.map((article) => (
            <StaggerItem key={article.href}>
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-7"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                  {article.source}
                </span>
                <h3 className="mt-5 text-xl font-bold leading-snug text-ink">{article.title}</h3>
                <span className="mt-7 text-lg font-semibold text-green transition-transform duration-300 group-hover:translate-x-1">
                  Read article ↗
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section dark>
        <Reveal className="max-w-3xl">
          <Eyebrow>What comes next</Eyebrow>
          <SectionTitle onDark className="mt-5">
            Be part of the <span className="text-gold">next chapter.</span>
          </SectionTitle>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Help build the connections, ventures and ideas that move Africa–global innovation forward.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <CtaButton href="/contact" variant="gold">
              Get in touch
            </CtaButton>
            <CtaButton href="/what-we-do" variant="outline-light">
              Explore what we do
            </CtaButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
