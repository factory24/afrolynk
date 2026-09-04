import type { MetadataRoute } from "next";

const SITE_URL = "https://afrolynk.com";

/**
 * Fully open crawl policy: every crawler — search engines, and AI answer/search
 * and training bots alike — is allowed, for maximum discoverability. No bot is
 * singled out or blocked. Tighten here (add per-bot `disallow` rules) only if the
 * organisation later decides to opt specific crawlers out.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
