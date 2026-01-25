// app/services/system-integration-automation/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  LayoutDashboard,
  PlugZap,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "System Integration & Automation | PithHub (Jamaica)",
  description:
    "System Integration & Automation. We connect your existing tools so information flows automatically between website, sales, operations, customer service, and finance.",
  alternates: { canonical: "/services/system-integration-automation" },
};

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl mx-auto px-6">{children}</div>;
}

function OrangePill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
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

function OrangeButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
      style={{ background: "var(--brand-orange)" }}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
}

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold bg-white/70 backdrop-blur hover:bg-white transition"
      style={{ borderColor: "rgba(17,17,17,0.14)", color: "#111" }}
    >
      {children}
    </Link>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900">
      {children}
    </div>
  );
}

function ChangeCard({
  icon: Icon,
  title,
}: {
  icon: any;
  title: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div
        className="h-12 w-12 rounded-2xl grid place-items-center border"
        style={{
          borderColor: "rgba(255,122,0,0.35)",
          background: "rgba(255,122,0,0.10)",
        }}
      >
        <Icon className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
      </div>
      <p className="mt-4 text-lg font-semibold text-slate-900">{title}</p>
    </div>
  );
}

function StepCard({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div
          className="h-9 w-9 rounded-xl grid place-items-center text-sm font-semibold"
          style={{ background: "#111", color: "white" }}
        >
          {n}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{title}</p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function SystemIntegrationAutomationPage() {
  // ✅ EXACT CONTENT (Service 5)
  const problemBullets = ["Double work", "Errors", "Delays", "Conflicting information"];

  const doBullets = ["Website", "Sales", "Operations", "Customer service", "Finance"];

  const changeBullets = [
    { icon: ClipboardCheck, title: "One source of truth" },
    { icon: LayoutDashboard, title: "Less re-entry" },
    { icon: PlugZap, title: "Fewer mistakes" },
    { icon: Workflow, title: "Faster operations" },
  ];

  // Keep same right-side 4 cards (use ONLY your “What We Do” items — no new copy)
  const steps = [
    { n: "01", title: "What We Do", desc: "Website" },
    { n: "02", title: "What We Do", desc: "Sales" },
    { n: "03", title: "What We Do", desc: "Operations" },
    { n: "04", title: "What We Do", desc: "Customer service" },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO (same design) */}
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
        <div className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-16 md:pb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            System Integration & Automation
          </h1>

          <div className="mt-4 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700 transition">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:text-slate-700 transition">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span className="font-medium" style={{ color: "var(--brand-orange)" }}>
              Integration & Automation
            </span>
          </div>

          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <OrangeButton href="/contact">Book a Quick Call</OrangeButton>
            <OutlineButton href="/services">Back to Services</OutlineButton>
          </div>
        </div>

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

      {/* SECTION 1 — Split Offer (same design) */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-center">
            {/* Image */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(255,122,0,0.35), transparent 60%)",
                  }}
                />
                <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
                    alt="System integration and automation"
                    width={1600}
                    height={1100}
                    unoptimized
                    className="h-[420px] w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6">
              <OrangePill>SERVICE 5</OrangePill>

              <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                System Integration &{" "}
                <span className="block font-serif italic font-medium text-slate-700">
                  Automation
                </span>
              </h2>

              <p className="mt-6 text-sm font-semibold text-slate-900">
                What Problem This Solves
              </p>

              <p className="mt-2 text-slate-600">Disconnected systems cause:</p>

              <div className="mt-5 space-y-3">
                {problemBullets.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" style={{ color: "var(--brand-orange)" }} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3 flex-wrap">
                <OrangeButton href="/contact">Start the Conversation</OrangeButton>
                <OutlineButton href="/services">Back to Services</OutlineButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — Process (same design + your "What We Do" content) */}
      <section className="bg-slate-50/60">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            {/* Left */}
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
                OUR PROCESS
              </p>

              <h3 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Strategic Steps
                <span className="block font-serif italic font-medium text-slate-700">
                  Operational Clarity
                </span>
              </h3>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">What We Do</p>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  We connect your existing tools so information flows automatically between:
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {doBullets.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80"
                  alt="Automation flow"
                  width={1600}
                  height={1100}
                  unoptimized
                  className="h-[300px] w-full object-cover"
                />
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {steps.map((p) => (
                  <StepCard key={p.n} n={p.n} title={p.title} desc={p.desc} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3 — What This Changes (same design) */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
              <h2 className="text-lg font-semibold text-center text-slate-900">
                What This Changes for You
              </h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {changeBullets.map((c) => (
                  <ChangeCard key={c.title} icon={c.icon} title={c.title} />
                ))}
              </div>

              <div className="mt-6 text-center">
                <OrangeButton href="/contact">Book a Quick Call</OrangeButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
