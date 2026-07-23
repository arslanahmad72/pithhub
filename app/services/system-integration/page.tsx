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
  BadgeCheck,
  Layers,
  Link2,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "System Integration & Visibility | PithHub (Jamaica)",
  description:
    "System Integration & Visibility. We connect the tools you already use so information flows cleanly and decisions are based on reality.",
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

function OrangeButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
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

function OutlineButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
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

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((b) => (
        <div key={b} className="flex items-start gap-3 text-sm text-slate-700">
          <span
            className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border"
            style={{
              borderColor: "rgba(255,122,0,0.35)",
              background: "rgba(255,122,0,0.08)",
            }}
          >
            <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "var(--brand-orange)" }} />
          </span>
          <span>{b}</span>
        </div>
      ))}
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
          className="h-10 w-10 rounded-2xl grid place-items-center text-sm font-semibold"
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
  // ✅ EXACT CONTENT (your provided copy)

  const dayToDay = [
    "Information is entered more than once",
    "Sales says one thing, operations says another",
    "Accounting numbers don’t line up with activity",
    "Reports arrive late or need explaining",
    "You double-check everything “just in case”",
  ];

  const typicalConnections = [
    "Website → sales follow-up",
    "Sales → operations",
    "Operations → billing",
    "Billing → receivables tracking",
    "Customer service → status updates",
  ];

  const changesAfter = [
    "Data is entered once",
    "Errors reduce naturally",
    "Reports reflect real activity",
    "Teams work from the same information",
    "Owners trust what they see",
  ];

  const protectionBullets = [
    "Clear data ownership",
    "Controlled access between systems",
    "Logs for key changes",
    "Backup and recovery planning",
  ];

  const whoFor = [
    "Use multiple tools or platforms",
    "Are tired of re-entering data",
    "Experience reporting conflicts",
    "Want a single source of truth",
  ];

  const howWeWork = [
    "Identify where data breaks down",
    "Decide what should talk to what",
    "Connect only what adds value",
    "Test, monitor, and refine",
  ];

  const expectationBullets = [
    "the most painful duplication",
    "the most critical reporting gap",
  ];

  const changeCards = [
    { icon: ClipboardCheck, title: "One source of truth" },
    { icon: LayoutDashboard, title: "Less re-entry" },
    { icon: PlugZap, title: "Fewer errors" },
    { icon: Workflow, title: "Teams aligned" },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
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
            System Integration & Visibility
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
              System Integration
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

      {/* PAGE INTRO (ABOVE THE FOLD) */}
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
                    src="/system.jpeg"
                    alt="System visibility and reporting"
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

              <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                When Everything Works —{" "}
                <span className="block font-serif italic font-medium text-slate-700">
                  But Nothing Works Together
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>Many businesses already have tools. The problem is that each tool lives on its own.</p>
                <p>Sales doesn’t match operations. Operations doesn’t match accounts. Owners don’t trust the numbers they’re seeing.</p>
                <p>
                  This service exists to connect the dots — so information flows cleanly and decisions are based on reality.
                </p>
              </div>

              <div className="mt-8 flex gap-3 flex-wrap">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/solutions">Explore Solutions</OutlineButton>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                One source of truth changes how decisions are made.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT THIS FEELS LIKE DAY-TO-DAY */}
      <section className="bg-slate-50/60">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
             

              <h3 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                If this sounds familiar,
                <span className="block font-serif italic font-medium text-slate-700">
                  systems are disconnected
                </span>
              </h3>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={dayToDay} />
                <p className="mt-5 text-slate-600">Work happens — but clarity doesn’t.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div
                    className="h-12 w-12 rounded-2xl grid place-items-center border"
                    style={{
                      borderColor: "rgba(255,122,0,0.35)",
                      background: "rgba(255,122,0,0.10)",
                    }}
                  >
                    <Layers className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
                  </div>
                  <p className="mt-4 text-base font-semibold text-slate-900">Duplication</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Information is entered more than once — and errors follow.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div
                    className="h-12 w-12 rounded-2xl grid place-items-center border"
                    style={{
                      borderColor: "rgba(255,122,0,0.35)",
                      background: "rgba(255,122,0,0.10)",
                    }}
                  >
                    <Link2 className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
                  </div>
                  <p className="mt-4 text-base font-semibold text-slate-900">Conflicts</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Different teams report different “truths.”
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div
                    className="h-12 w-12 rounded-2xl grid place-items-center border"
                    style={{
                      borderColor: "rgba(255,122,0,0.35)",
                      background: "rgba(255,122,0,0.10)",
                    }}
                  >
                    <LayoutDashboard className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
                  </div>
                  <p className="mt-4 text-base font-semibold text-slate-900">Late reporting</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Reports arrive late — or need explaining.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div
                    className="h-12 w-12 rounded-2xl grid place-items-center border"
                    style={{
                      borderColor: "rgba(255,122,0,0.35)",
                      background: "rgba(255,122,0,0.10)",
                    }}
                  >
                    <BadgeCheck className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
                  </div>
                  <p className="mt-4 text-base font-semibold text-slate-900">Trust</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Owners double-check everything “just in case.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE FIX */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            {/* Left */}
            <div className="lg:col-span-6">

              <h3 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
                We Connect Systems So{" "}
                <span className="block font-serif italic font-medium text-slate-700">
                  Information Moves Automatically
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                We integrate the systems you already use so data flows without duplication.
              </p>

              <p className="mt-5 text-slate-600">Typical connections include:</p>

              <div className="mt-7 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                <BulletList items={typicalConnections} />
                <p className="mt-6 text-slate-700">
                  Once connected, updates happen automatically — not manually.
                </p>
              </div>

              {/* fills any “empty” feeling on desktop */}
              <div className="mt-8 hidden lg:block">
                <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/system_1.jpeg"
                    alt="Connected systems"
                    width={1600}
                    height={1100}
                    unoptimized
                    className="h-[220px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-semibold text-white">
                      One flow. One reality. One clear view.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 4 cards (tight + premium) */}
            <div className="lg:col-span-6">
              <div className="grid gap-5 md:grid-cols-2">
                <StepCard n="01" title="Typical connection" desc="Website → sales follow-up" />
                <StepCard n="02" title="Typical connection" desc="Sales → operations" />
                <StepCard n="03" title="Typical connection" desc="Operations → billing" />
                <StepCard n="04" title="Typical connection" desc="Billing → receivables tracking" />
              </div>

              <div className="mt-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  Customer service → status updates
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Once connected, teams work from the same information.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <OrangeButton href="/contact">Talk to Us</OrangeButton>
                  <OutlineButton href="/solutions">Explore Solutions</OutlineButton>
                </div>
              </div>

              {/* Mobile image (so it doesn’t feel empty) */}
              <div className="mt-6 lg:hidden">
                <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
                    alt="Integration workflow"
                    width={1600}
                    height={1100}
                    unoptimized
                    className="h-[220px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT CHANGES AFTER INTEGRATION (centered) */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20">
            <div className="mx-auto max-w-6xl rounded-[28px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                  What changes after integration
                </h2>
                <p className="mt-3 text-slate-600">When systems are connected:</p>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <BulletList items={changesAfter} />
                    <p className="mt-5 text-slate-600">
                      The business runs as one system, not separate parts.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {changeCards.map((c) => (
                      <ChangeCard key={c.title} icon={c.icon} title={c.title} />
                    ))}
                  </div>

                  <div
                    className="mt-6 rounded-3xl border p-6 shadow-sm"
                    style={{
                      borderColor: "rgba(255,122,0,0.22)",
                      background: "rgba(255,122,0,0.10)",
                    }}
                  >
                    <p className="text-sm text-slate-800">
                      Owners trust what they see.
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    <OrangeButton href="/contact">Talk to Us</OrangeButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BUILT-IN CONTROL & PROTECTION */}
      <section className="bg-slate-50/60">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">

              <h3 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                Visibility Without Risk
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Every integration includes:
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={protectionBullets} />
                <p className="mt-5 text-slate-600">
                  This ensures visibility doesn’t come at the cost of control or security.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div
                    className="h-12 w-12 rounded-2xl grid place-items-center border"
                    style={{
                      borderColor: "rgba(255,122,0,0.35)",
                      background: "rgba(255,122,0,0.10)",
                    }}
                  >
                    <ShieldCheck className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
                  </div>
                  <p className="mt-4 text-base font-semibold text-slate-900">Control</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Controlled access between systems keeps data safe.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div
                    className="h-12 w-12 rounded-2xl grid place-items-center border"
                    style={{
                      borderColor: "rgba(255,122,0,0.35)",
                      background: "rgba(255,122,0,0.10)",
                    }}
                  >
                    <ClipboardCheck className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
                  </div>
                  <p className="mt-4 text-base font-semibold text-slate-900">Ownership</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Clear data ownership prevents confusion and conflicts.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div
                    className="h-12 w-12 rounded-2xl grid place-items-center border"
                    style={{
                      borderColor: "rgba(255,122,0,0.35)",
                      background: "rgba(255,122,0,0.10)",
                    }}
                  >
                    <Workflow className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
                  </div>
                  <p className="mt-4 text-base font-semibold text-slate-900">Logs</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Logs for key changes so accountability is visible.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div
                    className="h-12 w-12 rounded-2xl grid place-items-center border"
                    style={{
                      borderColor: "rgba(255,122,0,0.35)",
                      background: "rgba(255,122,0,0.10)",
                    }}
                  >
                    <PlugZap className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
                  </div>
                  <p className="mt-4 text-base font-semibold text-slate-900">Recovery</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Backup and recovery planning so visibility stays reliable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO THIS SERVICE IS FOR (centered) */}
      <section className="bg-white text-center">
        <Container>
          <div className="py-14 md:py-20">
            <div className="mx-auto max-w-6xl rounded-[28px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                Who this service is for
              </h2>

              <p className="mt-3 text-slate-600">
                This service is ideal for businesses that:
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {whoFor.map((t) => (
                  <div
                    key={t}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-[15px] font-semibold leading-snug text-slate-900">
                      {t}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 rounded-2xl border px-6 py-4"
                style={{
                  borderColor: "rgba(255,122,0,0.22)",
                  background: "rgba(255,122,0,0.10)",
                }}
              >
                <p className="text-sm text-slate-800">
                  If you spend time reconciling numbers instead of acting on them, integration is missing.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-slate-50/60">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">

              <h3 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                We integrate carefully
                <span className="block font-serif italic font-medium text-slate-700">
                  and deliberately
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                No unnecessary complexity. No risky shortcuts.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/services">Back to Services</OutlineButton>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                {howWeWork.map((t, i) => (
                  <StepCard key={t} n={`0${i + 1}`} title="Our approach" desc={t} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* A REALISTIC EXPECTATION (centered beige) */}
      <section className="bg-white text-center">
        <Container>
          <div className="py-14 md:py-20">
            <div
              className="mx-auto max-w-6xl rounded-[28px] border border-slate-200 p-8 md:p-10 shadow-sm"
              style={{ background: "rgba(255,122,0,0.08)" }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                A realistic expectation
              </h2>

              <p className="mt-4 text-slate-900">
                Integration Is About Flow, Not Perfection
              </p>

              <p className="mt-6 text-slate-600">
                You don’t need everything connected at once. Most clients start by linking:
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {expectationBullets.map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold"
                    style={{ color: "var(--brand-orange)" }}
                  >
                    {t}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-slate-700">Small connections create big clarity.</p>

              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/solutions">Explore Solutions</OutlineButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA (centered dark band) */}
      <section className="bg-white text-center">
        <Container>
          <div className="py-14 md:py-20">
            <div
              className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-slate-200 p-8 md:p-10 shadow-sm"
              style={{
                background: `
                  radial-gradient(1000px 600px at 15% 20%, rgba(255,122,0,0.22), transparent 60%),
                  radial-gradient(900px 500px at 85% 80%, rgba(255,122,0,0.10), transparent 55%),
                  linear-gradient(180deg, #0B0B0F 0%, #0F172A 100%)
                `,
              }}
            >
              

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
                Let’s Create One Clear View of the Business
              </h2>

              <p className="mt-4  text-white/80 leading-relaxed">
                You shouldn’t need meetings just to know what’s happening. We’ll help you connect your systems — and trust your data again.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 justify-center">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/services">Back to Services</OutlineButton>
              </div>

              <p className="mt-5 text-sm text-white/70">
                One source of truth changes how decisions are made.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
