// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Workflow,
  Code2,
  Globe,
  Megaphone,
  PlugZap,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
const SITE_URL = "https://pithhub.com"; // ✅ change to your real domain

export const metadata: Metadata = {
  title: "Services | PithHub — Custom Software, Automation & Websites",
  description:
  "Business systems, process automation, custom web/mobile apps, conversion-focused websites, integrations and ongoing support—built for real operations.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    title: "Business Systems",
    desc: "Clear workflows, ownership, and visibility across operations.",
    href: "/services/business-systems",
    num: "01",
  },
  {
    title: "Custom Software",
    desc: "Purpose-built web & mobile tools for your business.",
    href: "/services/custom-software",
    num: "02",
  },
  {
    title: "Websites",
    desc: "Websites that support sales, follow-up, and operations.",
    href: "/services/websites",
    num: "03",
  },
  {
    title: "Cybersecurity, Access & Data Control",
    desc: "Protect customer data, control system access, and reduce internal and external risk.",
    href: "/services/cybersecurity-access-data-control",
    num: "04",
  },  
  {
    title: "Digital Marketing",
    desc: "Track results, not vanity metrics.",
    href: "/services/digital-marketing",
    num: "05",
  },
  {
    title: "System Integration",
    desc: "Connect tools so data flows automatically.",
    href: "/services/system-integration",
    num: "06",
  },
  {
    title: "Support & Training",
    desc: "Ensure systems are used correctly and evolve over time.",
    href: "/services/support",
    num: "07",
  },
];

function OrangePill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
      style={{
        background: "rgba(255,122,0,0.12)",
        color: "#111",
        border: "1px solid rgba(255,122,0,0.25)",
      }}
    >
      {children}
    </span>
  );
}

function OrangeButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-black shadow-sm transition hover:opacity-95",
        className,
      ].join(" ")}
      style={{ background: "var(--brand-orange)" }}
    >
      {children}
    </Link>
  );
}

function OutlineButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition",
        className,
      ].join(" ")}
      style={{
        border: "1px solid rgba(17,17,17,0.14)",
        color: "#111",
        background: "white",
      }}
    >
      {children}
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* =========================
          HERO — EXACT like Solutions screenshot
         ========================= */}
     <section className="relative overflow-hidden">
  {/* Background gradient */}
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

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
    {/* ONE H1 */}
    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
      Services
    </h1>

    {/* Breadcrumb */}
    <div className="mt-4 text-sm text-slate-500">
      <a href="/" className="hover:text-slate-700 transition">
        Home
      </a>
      <span className="mx-2">›</span>
      <span className="text-[var(--brand-orange)] font-medium">
        Services
      </span>
    </div>
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

      {/* =========================
          INTRO COPY (above fold content, clean + strong)
         ========================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <div className="flex items-center gap-3">
                <OrangePill>
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    WHAT WE BUILD
                  </span>
                </OrangePill>
              </div>

              <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                We don’t sell “tech services”.
                <br />
                We design business systems that remove friction.
              </h2>

              <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
                We design business systems that remove friction, reduce dependence on individuals,
                and give owners and managers clear control.
              </p>

              <p className="mt-4 text-slate-700">
                Every service below exists for one reason:{" "}
                <span className="font-semibold text-slate-900">
                  to make your business easier to run as it grows.
                </span>
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <OrangeButton href="/contact">Start the Conversation</OrangeButton>
                <OutlineButton href="/solutions">Explore Solutions</OutlineButton>
              </div>
            </div>

            {/* “Not off-the-shelf” card — matches your clean card style */}
            <div className="rounded-[28px] border border-slate-200 bg-slate-50/60 p-7 md:p-8 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
                IMPORTANT CONTEXT
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                This Is Not Off-the-Shelf Work
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Your business is not generic. Your problems are not generic.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">So our work is never</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Plug-and-play", "Template-based", "One-size-fits-all"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          background: "rgba(17,17,17,0.04)",
                          border: "1px solid rgba(17,17,17,0.08)",
                          color: "#111",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">Everything we build is designed around</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {["Your workflow", "Your staff structure", "Your customers", "Your growth stage"].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5" style={{ color: "var(--brand-orange)" }} />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-5 text-xs text-slate-500">
                Result: systems that fit how your business actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-16">
    {/* Heading */}
    <div className="text-center">
      <p className="inline-flex items-center gap-2 rounded-full bg-brand-gradient text-white p-2 text-xs font-semibold tracking-widest uppercase text-brandPrimary">
        BUILT FOR CONTROL
      </p>

      <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
        Services That Reduce Pressure
      </h2>

      <p className="mt-4 text-slate-600 leading-relaxed">
        Each service exists to remove a specific type of operational stress.
        Click into any service to see exactly what we build and how it works.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Business Systems & Automation",
          desc: "Replace manual coordination with clear workflows and accountability.",
          href: "/services/business-systems",
          num: "01",
          icon: Workflow,
        },
        {
          title: "Custom Software (Web & Mobile)",
          desc: "Purpose-built tools designed around how your business actually operates.",
          href: "/services/custom-software",
          num: "02",
          icon: Code2,
        },
        {
          title: "Websites That Support Operations",
          desc: "Websites that connect to sales, follow-up, and internal systems.",
          href: "/services/websites",
          num: "03",
          icon: Globe,
        },
        {
          title: "Cybersecurity, Access & Data Control",
          desc: "Protect customer data, control system access, and reduce internal and external risk.",
          href: "/services/cybersecurity-access-data-control",
          num: "04",
          icon:ShieldCheck 
        },
        
        {
          title: "Digital Marketing With Accountability",
          desc: "Know exactly what’s working, what’s not, and why.",
          href: "/services/digital-marketing",
          num: "05",
          icon: Megaphone,
        },
        {
          title: "System Integration & Automation",
          desc: "Connect your tools so data flows automatically without duplication.",
          href: "/services/system-integration",
          num: "06",
          icon: PlugZap,
        },
        {
          title: "Support, Training & Improvement",
          desc: "Ongoing support so systems stay useful as your business evolves.",
          href: "/services/support",
          num: "07",
          icon: LifeBuoy,
        },
      ].map((s) => {
        const Icon = s.icon;
        return (
          <Link
            key={s.title}
            href={s.href}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
          >
            {/* Faint number */}
            <div className="absolute -top-6 -right-6 text-[90px] font-semibold text-slate-200/60 pointer-events-none">
              {s.num}
            </div>

            {/* Icon */}
            <div
              className="h-12 w-12 rounded-2xl flex items-center justify-center border"
              style={{
                borderColor: "rgba(255,122,0,0.35)",
                background: "rgba(255,122,0,0.10)",
              }}
            >
              <Icon className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              {s.title}
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {s.desc}
            </p>

            <div
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--brand-orange)" }}
            >
              View details <span aria-hidden>→</span>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
</section>


      {/* =========================
          BLACK/ORANGE BAND — pressure relief message (matches your theme)
         ========================= */}
      {/* =========================
    WHAT THIS IS REALLY ABOUT — (Exact content, black/orange like screenshot)
   ========================= */}
<section className="relative overflow-hidden">
  {/* Background */}
  <div
    className="absolute inset-0"
    style={{
      background: `#000`,
    }}
  />
  <div className="absolute inset-0 bg-black/25" />

  <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs md:text-sm font-semibold tracking-[0.28em] uppercase text-white/70">
        WHAT THIS IS REALLY ABOUT
      </p>

      <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white">
        This Is About Reducing Pressure on You
      </h2>

      <p className="mt-6 text-base md:text-lg leading-relaxed text-white/75">
        Every service above exists to reduce dependence on individuals, reduce firefighting, reduce stress,
        and increase clarity. Technology is just the vehicle.{" "}
        <span className="font-semibold text-white">Control is the destination.</span>
      </p>

      {/* pills */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {["Reduce dependence", "Reduce firefighting", "Reduce stress", "Increase clarity"].map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-white/90"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.16)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
              backdropFilter: "blur(10px)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* =========================
          FINAL CTA — with image (you asked: CTA like other with image)
         ========================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-25"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,122,0,0.35), transparent 60%)",
                }}
              />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-100 shadow-sm">
                {/* Replace with your /public image anytime */}
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
                  alt="PithHub consultation"
                  width={1600}
                  height={1100}
                  unoptimized
                  className="h-[430px] w-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <OrangePill>FINAL CTA</OrangePill>

              <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                If Your Business Feels Heavier Than It Should, Let’s Fix That
              </h2>

              <p className="mt-5 text-slate-600 leading-relaxed max-w-xl">
                You don’t need to know which service you need. You just need to know what’s not working.
                We’ll help you design the right solution.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <OrangeButton href="/contact">Start the Conversation</OrangeButton>

                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:opacity-80 transition"
                >
                  Explore Solutions <span aria-hidden>→</span>
                </Link>
              </div>

              <p className="mt-6 text-sm text-slate-500">
                Strong businesses run on systems — not memory.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
