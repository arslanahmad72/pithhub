import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | PithHub",
  description:
    "Read the Terms of Service governing the use of the PithHub website and our approach to engagements.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "January 24, 2026"; // update when needed

  return (
    <main className="bg-white text-slate-900">
      {/* HERO / PAGE INTRO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1200px 600px at 20% 20%, rgba(255,122,0,0.18), transparent 60%),
              radial-gradient(900px 500px at 80% 80%, rgba(255,122,0,0.12), transparent 55%),
              linear-gradient(180deg, #F7F7FB 0%, #FFFFFF 100%)
            `,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Terms of Service
          </h1>

          <div className="mt-4 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700 transition">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--brand-orange)] font-medium">
              Terms of Service
            </span>
          </div>

          <p className="mt-6 text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Clear terms so expectations are understood from the start.
          </p>
        </div>

        {/* Bottom wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-16 md:h-20"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,120 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </section>

      {/* CONTENT */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-8 md:p-10 shadow-sm space-y-10">
            {/* LAST UPDATED */}
            <p className="text-sm text-slate-500">
              <strong>Last Updated:</strong> {lastUpdated}
            </p>

            {/* 1. ACCEPTANCE */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                By accessing or using this website, you agree to be bound by
                these Terms of Service. If you do not agree, please do not use
                this website.
              </p>
            </div>

            {/* 2. WEBSITE PURPOSE */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                2. Website Purpose
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                This website provides general information about our services,
                approach, and the types of solutions we offer.
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Information on this website does not constitute a binding
                offer, quotation, or contract.
              </p>
            </div>

            {/* 3. NO GUARANTEES */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                3. No Professional Guarantees
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                While we apply experience, care, and best practices in our work:
              </p>

              <ul className="mt-4 space-y-2 text-slate-700">
                {[
                  "Results may vary by business",
                  "Outcomes depend on implementation, staff adoption, and external factors",
                  "No specific financial, operational, or performance outcomes are guaranteed unless explicitly stated in a written agreement",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--brand-orange)" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. ENGAGEMENT */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                4. Engagement & Agreements
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Any formal work undertaken will be governed by:
              </p>

              <ul className="mt-4 space-y-2 text-slate-700">
                {[
                  "A written agreement",
                  "Defined scope",
                  "Agreed timelines",
                  "Agreed fees",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--brand-orange)" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-slate-700 leading-relaxed">
                Website content alone does not create a business relationship.
              </p>
            </div>

            {/* 5. INTELLECTUAL PROPERTY */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                5. Intellectual Property
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                All website content, including text, structure, branding, and
                materials, is the property of the company unless otherwise
                stated.
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed">
                You may not copy, reproduce, or redistribute content without
                written permission.
              </p>
            </div>

            {/* 6. LIMITATION OF LIABILITY */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                6. Limitation of Liability
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                To the maximum extent permitted by law:
              </p>

              <ul className="mt-4 space-y-2 text-slate-700">
                {[
                  "We are not liable for indirect or consequential losses",
                  "We are not responsible for business decisions made based solely on website information",
                  "We are not liable for interruptions, errors, or temporary unavailability of the website",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--brand-orange)" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 7. EXTERNAL LINKS */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                7. External Links
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                This website may include links to third-party websites for
                convenience.
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We are not responsible for the content, policies, or practices
                of external sites.
              </p>
            </div>

            {/* 8. GOVERNING LAW */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                8. Governing Law
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                These Terms shall be governed by and interpreted in accordance
                with the laws of Jamaica.
              </p>
            </div>

            {/* 9. CHANGES */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                9. Changes to Terms
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We may update these Terms at any time. Continued use of the
                website constitutes acceptance of updated terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
