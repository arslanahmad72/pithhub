import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | PithHub",
  description:
    "Learn how PithHub uses cookies to improve website experience, performance, and anonymous analytics.",
};

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>

          <div className="mt-4 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700 transition">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--brand-orange)] font-medium">
              Cookie Policy
            </span>
          </div>

          <p className="mt-6 text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Simple, transparent information about how cookies are used on this
            website.
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
            <p className="text-sm text-slate-500">
              <strong>Last Updated:</strong> {lastUpdated}
            </p>

            {/* 1. What are cookies */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                1. What Are Cookies?
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Cookies are small text files stored on your device to help
                websites function properly and improve user experience.
              </p>
            </div>

            {/* 2. How we use cookies */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                2. How We Use Cookies
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We use cookies to:
              </p>

              <ul className="mt-4 space-y-2 text-slate-700">
                {[
                  "Understand website usage patterns",
                  "Improve navigation and performance",
                  "Analyze traffic anonymously",
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
                Cookies do not give us access to your personal files or devices.
              </p>
            </div>

            {/* 3. Managing cookies */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                3. Managing Cookies
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                You can choose to:
              </p>

              <ul className="mt-4 space-y-2 text-slate-700">
                {["Accept cookies", "Disable cookies", "Delete existing cookies"].map(
                  (item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 rounded-full"
                        style={{ background: "var(--brand-orange)" }}
                      />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>

              <p className="mt-4 text-slate-700 leading-relaxed">
                This can be done through your browser settings. Disabling cookies
                may affect certain website features.
              </p>
            </div>

            {/* 4. Third-party cookies */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                4. Third-Party Cookies
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Some cookies may be set by third-party tools used for analytics
                or performance tracking. These cookies are governed by the third
                parties’ own policies.
              </p>
            </div>

            {/* 5. Updates */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                5. Updates to This Policy
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We may update this Cookie Policy periodically. Any changes will
                be reflected on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
