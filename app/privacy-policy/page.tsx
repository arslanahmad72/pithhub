import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | PithHub",
  description:
    "Learn how PithHub collects, uses, and protects your personal information. We respect your privacy and handle data responsibly.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <div className="mt-4 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700 transition">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--brand-orange)] font-medium">
              Privacy Policy
            </span>
          </div>

          <p className="mt-6 text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            We respect your privacy and are committed to protecting your personal
            information.
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

            {/* 1. INTRODUCTION */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                1. Introduction
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We respect your privacy and are committed to protecting your
                personal information. This Privacy Policy explains how we
                collect, use, store, and protect information when you visit our
                website or contact us regarding our services.
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed">
                By using this website, you agree to the practices described
                below.
              </p>
            </div>

            {/* 2. INFORMATION WE COLLECT */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                2. Information We Collect
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We may collect the following information when you voluntarily
                provide it:
              </p>

              <ul className="mt-4 space-y-2 text-slate-700">
                {[
                  "Name",
                  "Company name",
                  "Email address",
                  "Phone or WhatsApp number",
                  "Business size or general business information",
                  "Any details you choose to share about your business challenges",
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
                We do not collect sensitive personal data unless you voluntarily
                provide it.
              </p>
            </div>

            {/* 3. HOW WE USE INFORMATION */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                3. How We Use Your Information
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We use your information strictly to:
              </p>

              <ul className="mt-4 space-y-2 text-slate-700">
                {[
                  "Respond to enquiries",
                  "Understand your business needs",
                  "Communicate about potential services",
                  "Improve our website and service delivery",
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
                We do not sell, rent, or trade your information to third parties.
              </p>
            </div>

            {/* 4. DATA PROTECTION */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                4. Data Protection & Security
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We take reasonable steps to protect your information against
                unauthorized access, misuse, or disclosure.
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed">
                However, no internet transmission is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            {/* 5. THIRD-PARTY SERVICES */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                5. Third-Party Services
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Our website may use trusted third-party tools for:
              </p>

              <ul className="mt-4 space-y-2 text-slate-700">
                {[
                  "Website analytics",
                  "Form handling",
                  "Communication (email, WhatsApp links, etc.)",
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
                These providers only receive the information necessary to
                perform their services and are required to protect your data.
              </p>
            </div>

            {/* 6. COOKIES */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                6. Cookies
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Our website may use cookies to improve user experience and
                understand how visitors interact with the site.
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed">
                You can control cookie settings through your browser.
              </p>
            </div>

            {/* 7. YOUR RIGHTS */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                7. Your Rights
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                You may request to:
              </p>

              <ul className="mt-4 space-y-2 text-slate-700">
                {[
                  "Access your information",
                  "Correct inaccurate information",
                  "Request deletion of your data (subject to legal or business requirements)",
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
                Requests can be made by contacting us directly.
              </p>
            </div>

            {/* 8. CHANGES */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                8. Changes to This Policy
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be
                posted on this page with an updated date.
              </p>
            </div>

            {/* 9. CONTACT */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                9. Contact
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                If you have questions about this Privacy Policy, please contact
                us through the website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
