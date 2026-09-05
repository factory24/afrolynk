import { PageHero, Section, Eyebrow, SectionTitle } from "@/components/ui";
import { ManageConsentButton } from "@/components/analytics-consent";
import { site } from "@/content/site";

export const metadata = {
  title: "Privacy Notice",
  description:
    "How Afrolynk handles your data, including consent-based analytics via Microsoft Clarity, your rights and how to withdraw consent.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "September 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy <span className="text-green">Notice</span>
          </>
        }
        lede="How we handle your data on afrolynk.com — in plain language. We only load analytics after you consent."
        trail={[{ name: "Privacy Notice", path: "/privacy" }]}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          <p className="text-sm text-muted">Last updated: {lastUpdated}</p>

          <div>
            <Eyebrow>1 — Who we are</Eyebrow>
            <SectionTitle className="mt-4">The data controller</SectionTitle>
            <p className="mt-5 leading-relaxed text-body">
              Afrolynk (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is the controller for
              personal data processed on this website. You can reach us at{" "}
              <a href={`mailto:${site.email}`} className="link-underline font-semibold text-green">
                {site.email}
              </a>{" "}
              or by post at {site.address.line1}, {site.address.line2}.
            </p>
          </div>

          <div>
            <Eyebrow>2 — Analytics (Microsoft Clarity)</Eyebrow>
            <SectionTitle className="mt-4">What we collect and why</SectionTitle>
            <p className="mt-5 leading-relaxed text-body">
              With your consent, we use{" "}
              <a
                href="https://learn.microsoft.com/en-us/clarity/"
                target="_blank"
                rel="noreferrer"
                className="link-underline font-semibold text-green"
              >
                Microsoft Clarity
              </a>{" "}
              to understand how visitors use afrolynk.com so we can improve it.
              Clarity captures usage and interaction data — such as pages viewed,
              clicks, scrolling, session recordings and heatmaps, plus device,
              browser and approximate (city-level) location derived from your IP
              address. We use this only in aggregate for product and content
              improvement; we do not use it to identify you personally or to
              advertise to you.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              No analytics cookies or scripts load until you select
              &ldquo;Accept analytics&rdquo; in our cookie banner. If you decline,
              Clarity is never loaded.
            </p>
          </div>

          <div>
            <Eyebrow>3 — Legal basis</Eyebrow>
            <SectionTitle className="mt-4">Your consent</SectionTitle>
            <p className="mt-5 leading-relaxed text-body">
              We process analytics data on the basis of your consent
              (Art. 6(1)(a) GDPR and § 25(1) TDDDG). You are free to give or
              refuse consent, and refusing has no negative effect on your use of
              the site.
            </p>
          </div>

          <div>
            <Eyebrow>4 — International transfers</Eyebrow>
            <SectionTitle className="mt-4">Where data is processed</SectionTitle>
            <p className="mt-5 leading-relaxed text-body">
              Microsoft Clarity is provided by Microsoft Corporation, which may
              process data outside the European Economic Area, including in the
              United States. Such transfers are covered by Microsoft&rsquo;s data
              protection commitments, including EU Standard Contractual Clauses.
              See Microsoft&rsquo;s{" "}
              <a
                href="https://privacy.microsoft.com/en-us/privacystatement"
                target="_blank"
                rel="noreferrer"
                className="link-underline font-semibold text-green"
              >
                Privacy Statement
              </a>{" "}
              for details.
            </p>
          </div>

          <div>
            <Eyebrow>5 — Retention</Eyebrow>
            <SectionTitle className="mt-4">How long we keep data</SectionTitle>
            <p className="mt-5 leading-relaxed text-body">
              Clarity data is retained in line with Microsoft Clarity&rsquo;s
              retention policy (project data is deleted after a defined inactivity
              period). We keep your consent choice in your browser&rsquo;s local
              storage until you change it or clear your browser data.
            </p>
          </div>

          <div>
            <Eyebrow>6 — Your rights</Eyebrow>
            <SectionTitle className="mt-4">Access, erasure and withdrawal</SectionTitle>
            <p className="mt-5 leading-relaxed text-body">
              You have the right to access, rectify, erase, restrict and port your
              personal data, to object to processing, and to lodge a complaint
              with a supervisory authority. You can withdraw your analytics
              consent at any time — it takes effect immediately and does not
              affect prior lawful processing. Contact us at{" "}
              <a href={`mailto:${site.email}`} className="link-underline font-semibold text-green">
                {site.email}
              </a>
              .
            </p>
            <div className="mt-6 rounded-2xl border border-line bg-light p-6">
              <p className="text-sm font-semibold text-ink">
                Manage your cookie preferences
              </p>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Reopen the consent banner to change or withdraw your analytics
                choice.
              </p>
              <div className="mt-4">
                <ManageConsentButton />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
