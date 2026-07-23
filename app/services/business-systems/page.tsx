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
  ShieldCheck,
  Users,
  Settings2,
  ListChecks,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Systems & Process Automation | PithHub (Jamaica)",
  description:
    "Replace chaos with structure. We design operational systems that remove guesswork so work moves forward even when you’re not pushing it.",
  alternates: { canonical: "/services/business-systems" },
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

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((b) => (
        <div key={b} className="flex items-start gap-2 text-sm text-slate-700">
          <CheckCircle2
            className="h-4 w-4 mt-0.5"
            style={{ color: "var(--brand-orange)" }}
          />
          <span>{b}</span>
        </div>
      ))}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900">
      {children}
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
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
      <p className="mt-4 text-base font-semibold text-slate-900">{title}</p>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
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

export default function BusinessSystemsServicePage() {
  // ✅ NEW CONTENT (your “old design” copy), mapped into sections
  const dayToDayBullets = [
    "Tasks are unclear or constantly changing",
    "Staff aren’t sure who is responsible for what",
    "Jobs only move when you personally intervene",
    "Approvals happen verbally or “when remembered”",
    "The same mistakes keep happening",
    "You spend more time coordinating than leading",
  ];

  const definesBullets = [
    "What needs to happen",
    "Who is responsible",
    "When it must happen",
    "How it’s tracked",
  ];

  const typicalAreas = [
    "Job and task tracking",
    "Internal approvals",
    "Customer requests",
    "Staff handoffs",
    "Follow-ups and reminders",
  ];

  const afterImplementation = [
    "Tasks are assigned and visible",
    "Workflows are consistent",
    "Follow-ups reduce naturally",
    "Excuses disappear",
    "Output becomes predictable",
  ];

  const builtInProtection = [
    "Clear role-based access (staff see only what they need)",
    "Approval rules for sensitive actions",
    "Activity tracking (who did what, when)",
    "Data backups and recovery planning",
  ];

  const whoItsFor = [
    "Small businesses outgrowing informal processes",
    "Growing companies losing consistency",
    "Established businesses ready to standardize operations",
  ];

  const steps = [
    {
      n: "01",
      title: "Identify where work breaks down most",
      desc: "We pinpoint the exact moments where tasks stall, mistakes repeat, or ownership becomes unclear.",
    },
    {
      n: "02",
      title: "Map the simplest clear workflow",
      desc: "We define steps, owners, handovers, and approvals — so the flow stays consistent.",
    },
    {
      n: "03",
      title: "Build only what’s needed",
      desc: "No overbuilding. We implement the minimum system that creates maximum clarity and control.",
    },
    {
      n: "04",
      title: "Train staff and support adoption",
      desc: "We onboard the team and refine the workflow so it sticks as you grow.",
    },
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
            Business Systems & Process Automation
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
              Business Systems
            </span>
          </div>

          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <OrangeButton href="/contact">Talk to Us</OrangeButton>
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
                    src="/buiness_solution.jpeg"
                    alt="Operations and clarity"
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
                When the Business Runs on Memory,
                <span className="block font-serif italic font-medium text-slate-700">
                  It Breaks
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Most operational problems don’t come from bad staff or lack of effort.
                  They come from unclear systems.
                </p>
                <p>
                  When work depends on reminders, WhatsApp messages, verbal instructions, and
                  “checking in,” mistakes repeat and owners stay overloaded.
                </p>
                <p>
                  This service exists to replace chaos with structure — so work moves forward
                  even when you’re not pushing it.
                </p>
              </div>

              <div className="mt-8 flex gap-3 flex-wrap">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/solutions">Explore Solutions</OutlineButton>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Micro-copy: One clear system can remove years of daily frustration.
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
                What this feels like
                <span className="block font-serif italic font-medium text-slate-700">
                  inside the business
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                If this sounds familiar, you’re not alone:
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={dayToDayBullets} />
                <p className="mt-5 text-slate-600">Growth feels heavier than it should.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/business_1.jpeg"
                  alt="Workflows and coordination"
                  width={1600}
                  height={1100}
                  unoptimized
                  className="h-[300px] w-full object-cover"
                />
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={LayoutDashboard}
                  title="Visibility"
                  desc="Work stops being hidden in chats, memory, or personal follow-ups."
                />
                <FeatureCard
                  icon={Workflow}
                  title="Flow"
                  desc="Jobs move through consistent steps — without constant intervention."
                />
                <FeatureCard
                  icon={ListChecks}
                  title="Ownership"
                  desc="Everyone knows who is responsible — and what “done” looks like."
                />
                <FeatureCard
                  icon={PlugZap}
                  title="Less repetition"
                  desc="Follow-ups reduce naturally because the system does the reminding."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE FIX */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">

              <h3 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                We Design Clear Systems
                <span className="block font-serif italic font-medium text-slate-700">
                  That Remove Guesswork
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                We design business systems that define:
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={definesBullets} />
                <p className="mt-5 text-slate-600 leading-relaxed">
                  These systems are built around how your business actually operates, not generic templates.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  Typical areas we systemize:
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {typicalAreas.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>

                <div
                  className="mt-6 rounded-2xl border px-5 py-4"
                  style={{
                    borderColor: "rgba(255,122,0,0.25)",
                    background: "rgba(255,122,0,0.08)",
                  }}
                >
                  <p className="text-sm text-slate-800">
                    Everything becomes visible and predictable.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={ClipboardCheck}
                  title="Clear tracking"
                  desc="Work is tracked in one place — not spread across people and messages."
                />
                <FeatureCard
                  icon={Settings2}
                  title="Rules & standards"
                  desc="The process becomes repeatable — so results don’t depend on who’s doing it."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT CHANGES AFTER IMPLEMENTATION */}
      <section className="bg-slate-50/60">
  <Container>
    <div className="py-14 md:py-20">
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            What changes after implementation
          </h2>
          <p className="mt-3 text-slate-600">
            Once structure replaces memory, the business becomes visible, consistent, and easier to manage.
          </p>
        </div>

        {/* KPI STRIP (fills space nicely) */}
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Fewer follow-ups", value: "↓", note: "Work moves without chasing" },
            { label: "Clear ownership", value: "✓", note: "Less confusion, fewer excuses" },
            { label: "Predictable output", value: "→", note: "Consistent steps = consistent results" },
          ].map((k) => (
            <div
              key={k.label}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">{k.label}</p>
                <div
                  className="h-9 w-9 rounded-2xl grid place-items-center border text-sm font-semibold"
                  style={{
                    borderColor: "rgba(255,122,0,0.35)",
                    background: "rgba(255,122,0,0.10)",
                    color: "var(--brand-orange)",
                  }}
                >
                  {k.value}
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-600">{k.note}</p>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          {/* LEFT: bullet list (compact + stronger heading) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Once structure replaces memory:
              </p>
              <div className="mt-4">
                <BulletList items={afterImplementation} />
              </div>

              <div
                className="mt-6 rounded-2xl border px-5 py-4"
                style={{
                  borderColor: "rgba(255,122,0,0.25)",
                  background: "rgba(255,122,0,0.08)",
                }}
              >
                <p className="text-sm text-slate-800">
                  The business stops depending on you to function — because the system holds the workflow.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: 4 tight outcome cards (fills empty space) */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard
                icon={BadgeCheck}
                title="Predictable output"
                desc="You stop hoping things get done — you can see the work moving step-by-step."
              />
              <FeatureCard
                icon={Users}
                title="Less owner-dependence"
                desc="Jobs don’t stall because you’re not watching — ownership is built into the workflow."
              />
              <FeatureCard
                icon={Workflow}
                title="Consistent handoffs"
                desc="No more gaps between teams — handovers are clear, timed, and trackable."
              />
              <FeatureCard
                icon={LayoutDashboard}
                title="Real visibility"
                desc="You can spot delays early, understand what’s happening, and act with confidence."
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Result:</span> Clear work. Clear ownership. Less chasing.
              </p>
              <OrangeButton href="/contact">Talk to Us</OrangeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>


      {/* BUILT-IN CONTROL & PROTECTION */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">

              <h3 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                Structure Without Risk
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Every operational system we build includes:
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={builtInProtection} />
                <p className="mt-5 text-slate-600 leading-relaxed">
                  This protects the business while keeping daily work simple.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={ShieldCheck}
                  title="Role-based visibility"
                  desc="Staff see only what they need — no accidental access or confusion."
                />
                <FeatureCard
                  icon={ClipboardCheck}
                  title="Approvals for sensitive actions"
                  desc="Critical steps require sign-off — not “someone said it’s okay.”"
                />
                <FeatureCard
                  icon={Workflow}
                  title="Activity tracking"
                  desc="You can trace actions clearly — who did what, and when."
                />
                <FeatureCard
                  icon={PlugZap}
                  title="Backup & recovery planning"
                  desc="You’re not exposed if something breaks, changes, or resets."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO THIS SERVICE IS FOR */}
      <section className="bg-slate-50/60 text-center">
        <Container>
          <div className="py-14 md:py-20">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                Who this service is for
              </h2>

              <p className="mt-3 text-slate-600 leading-relaxed">
                This service is designed for:
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {whoItsFor.map((t) => (
                  <div
                    key={t}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="font-semibold text-slate-900">{t}</p>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 rounded-2xl border px-5 py-4"
                style={{
                  borderColor: "rgba(17,17,17,0.14)",
                  background: "rgba(255,255,255,0.70)",
                }}
              >
                <p className="text-sm text-slate-700">
                  If work feels harder than it should — structure is usually the missing piece.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">

              <h3 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                We don’t start with software.
                <span className="block font-serif italic font-medium text-slate-700">
                  We start with understanding.
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                No overbuilding. No unnecessary complexity.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <OrangeButton href="/contact">Start the Conversation</OrangeButton>
                <OutlineButton href="/services">Back to Services</OutlineButton>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="mt-2 grid gap-5 sm:grid-cols-2">
                {steps.map((p) => (
                  <StepCard key={p.n} n={p.n} title={p.title} desc={p.desc} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* REALISTIC EXPECTATION */}
      <section className="bg-slate-50/60 text-center">
        <Container>
          <div className="py-14 md:py-20">
            <div className="rounded-[28px] overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div
                className="p-8 md:p-10"
                style={{
                  background: `
                    radial-gradient(900px 500px at 20% 30%, rgba(255,122,0,0.16), transparent 60%),
                    linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,1))
                  `,
                }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                  You Don’t Need to Fix Everything at Once
                </h2>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  Most clients start with one process — not a full rebuild. We focus on:
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <Chip>the biggest bottleneck</Chip>
                  <Chip>the fastest improvement</Chip>
                  <Chip>the lowest disruption</Chip>
                </div>

                <p className="mt-6 text-slate-700">
                  That’s how change sticks.
                </p>

                <div className="mt-8 flex gap-3 flex-wrap justify-center">
                  <OrangeButton href="/contact">Talk to Us</OrangeButton>
                  <OutlineButton href="/solutions">Explore Solutions</OutlineButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white text-center">
        <Container>
          <div className="py-14 md:py-20">
            <div
              className="rounded-[28px] overflow-hidden border border-slate-200 p-8 md:p-10 shadow-sm"
              style={{
                background: `
                  radial-gradient(1000px 600px at 20% 20%, rgba(255,122,0,0.20), transparent 60%),
                  radial-gradient(900px 500px at 80% 80%, rgba(255,122,0,0.12), transparent 55%),
                  linear-gradient(180deg, #0B0B0F 0%, #0F172A 100%)
                `,
              }}
            >
              <div className="max-w-">
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
Contact Us                </p>

                <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
                  Let’s Bring Order to the Business
                </h2>

                <p className="mt-4 text-white/80 leading-relaxed">
                  You don’t need to manage everything personally for it to work.
                  We’ll help you identify what’s breaking down — and how to fix it properly.
                </p>

                <div className="mt-7 flex gap-3 flex-wrap justify-center">
                  <OrangeButton href="/contact">Talk to Us</OrangeButton>
                  <OutlineButton href="/services">Back to Services</OutlineButton>
                </div>

                <p className="mt-4 text-sm text-white/70">
                  One clear system can remove years of daily frustration.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
