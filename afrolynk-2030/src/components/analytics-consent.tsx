"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

const CLARITY_ID = "yd9jtmjafl";
const STORAGE_KEY = "afrolynk-analytics-consent";

type Choice = "loading" | "unset" | "granted" | "denied";

const claritySnippet = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`;

/**
 * GDPR/ePrivacy-friendly analytics gate. Microsoft Clarity only loads after the
 * visitor grants consent; the choice is remembered in localStorage.
 */
export function AnalyticsConsent() {
  const [choice, setChoice] = useState<Choice>("loading");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setChoice(stored === "granted" || stored === "denied" ? stored : "unset");
  }, []);

  function decide(value: "granted" | "denied") {
    localStorage.setItem(STORAGE_KEY, value);
    setChoice(value);
  }

  return (
    <>
      {choice === "granted" ? (
        <Script id="ms-clarity" strategy="afterInteractive">
          {claritySnippet}
        </Script>
      ) : null}

      {choice === "unset" ? (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-2xl rounded-2xl border border-line bg-paper p-5 shadow-card sm:inset-x-auto sm:right-6 sm:bottom-6 sm:p-6"
        >
          <p className="text-sm leading-relaxed text-body">
            We use privacy-friendly analytics (Microsoft Clarity) to understand
            how visitors use afrolynk.com and improve it. No analytics cookies
            are set until you agree. Read our{" "}
            <Link href="/privacy" className="link-underline font-semibold text-green">
              Privacy Notice
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => decide("granted")}
              className="rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
            >
              Accept analytics
            </button>
            <button
              type="button"
              onClick={() => decide("denied")}
              className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-green hover:text-green"
            >
              Decline
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** Lets a visitor withdraw or change their analytics consent (GDPR withdrawal path). */
export function ManageConsentButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        localStorage.removeItem(STORAGE_KEY);
        window.location.reload();
      }}
      className={
        className ||
        "rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-green hover:text-green"
      }
    >
      Change cookie preferences
    </button>
  );
}
