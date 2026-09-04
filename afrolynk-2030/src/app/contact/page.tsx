import { ContactForm } from "@/components/contact-form";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Eyebrow, PageHero, Section, SectionTitle } from "@/components/ui";
import { faqs, site } from "@/content/site";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, socialIcons } from "@/components/icons";
import { JsonLd, faqLd } from "@/components/structured-data";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Afrolynk in Berlin. Partner with us as a founder, corporate, investor, diaspora expert, donor or government.",
  alternates: { canonical: "/contact" },
};

const audiences = [
  { title: "Founders", body: "Build, validate and scale your venture with mentoring, skills and market access." },
  { title: "Corporate partners", body: "Run innovation challenges and connect with vetted African ventures." },
  { title: "Investors", body: "Discover investment-ready founders and co-build the pipeline." },
  { title: "Diaspora experts", body: "Share your expertise and open doors across the corridor." },
  { title: "Donors & foundations", body: "Fund inclusive, measurable innovation and skills programs." },
  { title: "Government & institutions", body: "Collaborate on ecosystem building and policy for growth." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Partner with <span className="text-green">Afrolynk</span>
          </>
        }
        lede="Founder, corporate, investor or diaspora expert — there's a place for you in the Afrolynk community. Tell us how you'd like to work together."
        trail={[{ name: "Contact", path: "/contact" }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{site.tagline}</Eyebrow>
            <SectionTitle className="mt-5">
              Let&apos;s <span className="text-green">talk</span>
            </SectionTitle>
            <div className="mt-8 rounded-2xl border border-line bg-paper p-6 shadow-soft sm:p-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.14} className="h-fit">
            <aside className="rounded-2xl border border-line bg-paper p-7 shadow-soft sm:p-8">
              <Eyebrow>Contact details</Eyebrow>
              <dl className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-tint text-green">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Office
                    </dt>
                    <dd className="mt-1 font-semibold text-ink">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-tint text-green">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${site.email}`}
                        className="link-underline font-semibold text-green"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-tint text-green">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${site.phone.replace(/\s/g, "")}`}
                        className="link-underline font-semibold text-ink"
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-tint text-gold-dark">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Opening hours
                    </dt>
                    <dd className="mt-1 font-semibold text-ink">{site.hours}</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-9 border-t border-line pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Follow Afrolynk
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {site.socials.map((social) => {
                    const Icon = socialIcons[social.label];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-green hover:bg-green hover:text-white"
                      >
                        {Icon ? <Icon className="h-4 w-4" /> : social.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-light">
        <Reveal>
          <Eyebrow>Who we work with</Eyebrow>
          <SectionTitle className="mt-5">
            Many ways to <span className="text-green">get involved.</span>
          </SectionTitle>
        </Reveal>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <StaggerItem
              key={item.title}
              className="rounded-2xl border border-line bg-paper p-6 transition-all hover:-translate-y-1 hover:border-green/40 hover:shadow-card"
            >
              <h3 className="text-lg font-bold text-green">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <Reveal className="max-w-3xl">
          <Eyebrow>FAQ</Eyebrow>
          <SectionTitle className="mt-5">
            Frequently asked <span className="text-green">questions.</span>
          </SectionTitle>
        </Reveal>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-ink transition-colors hover:text-green">
                {faq.q}
                <span className="text-2xl leading-none text-gold transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-body">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
