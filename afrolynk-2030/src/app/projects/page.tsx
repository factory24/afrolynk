import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { CtaButton, Eyebrow, PageHero, Section, SectionTitle } from "@/components/ui";
import { partners, projects, sectors, testimonials } from "@/content/site";

export const metadata = {
  title: "Projects & Initiatives",
  description:
    "Explore Afrolynk's projects, community stories and partners advancing African and European innovation.",
  alternates: { canonical: "/projects" },
};

const partnerGroups = [
  { label: "Powered by", logos: partners.poweredBy },
  { label: "Ecosystem partners", logos: partners.ecosystem },
  { label: "Media partners", logos: partners.media },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects & Initiatives"
        title={
          <>
            Programs that turn ideas into <span className="text-green">ventures</span>
          </>
        }
        lede="From flagship conferences to skills training and innovation challenges — a look at what the Afrolynk community has built."
      />

      <Section>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <Eyebrow>Portfolio</Eyebrow>
            <SectionTitle className="mt-5">
              Built with community, designed for <span className="text-green">impact.</span>
            </SectionTitle>
            <p className="mt-5 text-lg leading-relaxed text-body">
              From Berlin to communities across Africa and Europe, these initiatives connect people, skills and opportunity.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/what-we-do"
              className="link-underline text-sm font-semibold text-green"
            >
              Explore our approach →
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Focus sectors
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-line bg-light px-3 py-1.5 text-xs font-medium text-ink"
              >
                {sector}
              </span>
            ))}
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem
              key={project.key}
              className="group overflow-hidden rounded-2xl border border-line bg-paper transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-gold-dark">
                  <span>{project.category}</span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
                  <span>{project.year}</span>
                </div>
                <h2 className="mt-4 text-lg font-bold text-ink">{project.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-body">{project.blurb}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-light">
        <Reveal className="max-w-2xl">
          <Eyebrow>Community stories</Eyebrow>
          <SectionTitle className="mt-5">
            What building together <span className="text-green">makes possible.</span>
          </SectionTitle>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <StaggerItem
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl border border-line bg-paper p-7 shadow-soft sm:p-8"
            >
              <span aria-hidden="true" className="text-6xl font-bold leading-none text-gold">
                “
              </span>
              <blockquote className="mt-3 text-lg leading-relaxed text-ink">
                {testimonial.quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-ink">{testimonial.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <Reveal className="max-w-2xl">
          <Eyebrow>Our network</Eyebrow>
          <SectionTitle className="mt-5">
            Better work happens in <span className="text-green">good company.</span>
          </SectionTitle>
        </Reveal>

        <div className="mt-12 space-y-12">
          {partnerGroups.map((group, groupIndex) => (
            <Reveal key={group.label} delay={groupIndex * 0.08}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-green">
                {group.label}
              </h2>
              <div className="mt-6 grid grid-cols-3 items-center gap-5 sm:grid-cols-4 lg:grid-cols-6">
                {group.logos.map((logo) => (
                  <div key={logo} className="flex h-16 items-center justify-center">
                    <Image
                      src={logo}
                      alt="Partner logo"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section dark>
        <Reveal className="max-w-3xl">
          <Eyebrow>Build with Afrolynk</Eyebrow>
          <SectionTitle onDark className="mt-5">
            Have a venture or a <span className="text-gold">challenge?</span>
          </SectionTitle>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Let&apos;s connect the people, expertise and opportunity needed to move it forward.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <CtaButton href="/contact" variant="gold">
              Get in touch
            </CtaButton>
            <CtaButton href="/what-we-do" variant="outline-light">
              See what we do
            </CtaButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
