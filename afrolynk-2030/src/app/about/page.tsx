import Image from "next/image";
import Link from "next/link";
import { Counter } from "@/components/counter";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import {
  CtaButton,
  Eyebrow,
  IconBox,
  PageHero,
  Section,
  SectionTitle,
} from "@/components/ui";
import { about, stats, team, values } from "@/content/site";

export const metadata = {
  title: "About",
  description:
    "Afrolynk is an impact venture and community organisation based in Berlin, Germany.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Afrolynk"
        title={
          <>
            A bridge between <span className="text-green">Africa & Europe</span>
          </>
        }
        lede={about.intro}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <SectionTitle className="mt-5">
              Building trusted connections that create{" "}
              <span className="text-green">value for good.</span>
            </SectionTitle>
            <p className="mt-6 text-lg leading-relaxed text-body">{about.bridge}</p>
            <Link
              href="/what-we-do"
              className="link-underline mt-7 inline-flex text-sm font-semibold text-green"
            >
              Explore how we work →
            </Link>
          </Reveal>

          <Reveal delay={0.14} className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/img/about.jpg"
                alt="Afrolynk community members connecting in Berlin"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <span className="absolute left-0 top-0 h-24 w-2 bg-gold" />
              <span className="absolute left-0 top-0 h-2 w-24 bg-green" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section dark>
        <Reveal className="max-w-2xl">
          <Eyebrow>Our impact</Eyebrow>
          <SectionTitle onDark className="mt-5">
            A growing bridge for founders and{" "}
            <span className="text-gold">partners.</span>
          </SectionTitle>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="text-5xl font-extrabold text-gold">
                <Counter value={stat.value} />
              </div>
              <p className="mt-3 font-semibold text-white">{stat.label}</p>
              {stat.note && (
                <p className="mt-2 text-sm leading-relaxed text-white/65">{stat.note}</p>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <Reveal className="max-w-3xl">
          <Eyebrow>Our purpose</Eyebrow>
          <SectionTitle className="mt-5">
            Built for transformation through{" "}
            <span className="text-green">innovation.</span>
          </SectionTitle>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 lg:grid-cols-2">
          <StaggerItem className="rounded-2xl border border-line border-l-4 border-l-green bg-paper p-8 shadow-soft sm:p-10">
            <IconBox tone="green">
              <span className="text-lg font-extrabold">V</span>
            </IconBox>
            <h3 className="mt-6 text-2xl font-bold text-ink">Our Vision</h3>
            <p className="mt-4 leading-relaxed text-body">{about.vision}</p>
          </StaggerItem>
          <StaggerItem className="rounded-2xl border border-line border-l-4 border-l-gold bg-paper p-8 shadow-soft sm:p-10">
            <IconBox tone="gold">
              <span className="text-lg font-extrabold">M</span>
            </IconBox>
            <h3 className="mt-6 text-2xl font-bold text-ink">Our Mission</h3>
            <p className="mt-4 leading-relaxed text-body">{about.mission}</p>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section className="bg-light">
        <Reveal className="max-w-3xl">
          <Eyebrow>What we stand for</Eyebrow>
          <SectionTitle className="mt-5">
            Values that guide every{" "}
            <span className="text-green">connection.</span>
          </SectionTitle>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {values.map((value, index) => (
            <StaggerItem
              key={value.title}
              className="flex h-full gap-5 rounded-2xl border border-line bg-paper p-7 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <IconBox tone={index % 2 === 0 ? "green" : "gold"}>
                <span className="text-sm font-extrabold">0{index + 1}</span>
              </IconBox>
              <div>
                <h3 className="text-xl font-bold text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{value.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* <Section>
        <Reveal className="max-w-3xl">
          <Eyebrow>Meet the team</Eyebrow>
          <SectionTitle className="mt-5">
            The people powering the{" "}
            <span className="text-green">Afrolynk bridge.</span>
          </SectionTitle>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <StaggerItem
              key={member.name}
              className="overflow-hidden rounded-2xl border border-line bg-paper transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="aspect-square w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="mt-4 text-sm leading-relaxed text-body">{member.bio}</p>
                )}
                {member.socials && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-green hover:text-green"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section> */}

      <Section dark>
        <Reveal className="max-w-3xl">
          <Eyebrow>Build with us</Eyebrow>
          <SectionTitle onDark className="mt-5">
            Create the next connection that makes a{" "}
            <span className="text-gold">difference.</span>
          </SectionTitle>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton href="/contact">Partner with us</CtaButton>
            <CtaButton href="/what-we-do" variant="outline-light">
              What we do
            </CtaButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
