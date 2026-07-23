// app/services/custom-software/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  LayoutDashboard,
  PlugZap,
  ShieldCheck,
  Workflow,
  Users,
  BadgeCheck,
  LockKeyhole,
  ListChecks,
  LineChart,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software <br>(Built Around Your Business) | PithHub (Jamaica)",
  description:
    "Custom Software (Built Around Your Business). We build software that fits your operations — not the other way around — with built-in control, security, and clear visibility.",
  alternates: { canonical: "/services/custom-software" },
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

export default function CustomSoftwareServicePage() {
  // ✅ EXACT CONTENT (you provided) — mapped into arrays / sections

  // Day-to-day signs
  const dayToDay = [
    "Off-the-shelf software doesn’t quite fit your process",
    "Staff keep bypassing the system to “get work done”",
    "Simple changes require complicated workarounds",
    "Reports don’t reflect what’s really happening",
    "You rely on people to explain the numbers instead of seeing them",
  ];

  // What we build (foundation bullets)
  const builtAround = ["Your workflows", "Your rules", "Your approvals", "Your pricing and processes"];

  // Common examples
  const examples = [
    "Custom job or project systems",
    "Customer and sales tracking",
    "Internal tools for staff",
    "Dashboards for owners and managers",
  ];

  // Built-in control & protection
  const protection = [
    "Clear access control (who can see and do what)",
    "Approval rules for sensitive actions",
    "Activity logs for accountability",
    "Data protection and backups",
  ];

  // This means (outcomes of protection)
  const protectionMeans = [
    "Fewer internal errors",
    "Reduced misuse or fraud risk",
    "Faster recovery if something goes wrong",
  ];

  // What changes after implementation
  const changesAfter = [
    "Staff follow the system instead of avoiding it",
    "Data becomes reliable",
    "Reporting reflects reality",
    "Decisions are faster and more confident",
    "Growth feels manageable instead of chaotic",
  ];

  // Who this service is for
  const whoFor = [
    "Have outgrown generic software",
    "Operate with unique workflows",
    "Need systems that scale without breaking",
    "Want visibility without micromanaging",
  ];

  // How we work
  const steps = [
    {
      n: "01",
      title: "Understand how work really happens",
      desc: "We start with your real operation — not assumptions, not templates.",
    },
    {
      n: "02",
      title: "Identify where software is failing you",
      desc: "We find the gaps: workarounds, blind spots, and friction that causes errors.",
    },
    {
      n: "03",
      title: "Design only what’s necessary",
      desc: "No bloated systems. No unnecessary features. Just what creates control.",
    },
    {
      n: "04",
      title: "Build, test, train, and support adoption",
      desc: "We deliver practical software and help your team actually use it confidently.",
    },
  ];

  // Staged approach bullets
  const staged = ["one workflow", "one department", "one core problem"];

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
            Custom Software (Built Around Your Business)
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
              Custom Software
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
                    src="/custom.jpeg"
                    alt="Custom software built around operations"
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
                When Software Forces You to Change How You Work,
                <span className="block font-serif italic font-medium text-slate-700">
                  It’s the Wrong Software
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Most businesses don’t fail because they lack software. They struggle because
                  the software they use doesn’t match how they operate.
                </p>
                <p>
                  When staff are forced to “work around” systems, productivity drops, mistakes increase,
                  and owners lose visibility.
                </p>
                <p>
                  This service exists to build software that fits your business — not the other way around.
                </p>
              </div>

              <div className="mt-8 flex gap-3 flex-wrap">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/solutions">Explore Solutions</OutlineButton>
              </div>

              <p className="mt-4 text-xs text-slate-500">Micro-copy: Clarity comes before code.</p>
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
                  day-to-day
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                You may recognize these signs:
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={dayToDay} />
                <p className="mt-5 text-slate-600">The software exists — but control doesn’t.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/custom.jpeg"
                  alt="Teams working around software"
                  width={1600}
                  height={1100}
                  unoptimized
                  className="h-[300px] w-full object-cover"
                />
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={Wrench}
                  title="Workarounds everywhere"
                  desc="When systems don’t match reality, staff build their own shortcuts — and control fades."
                />
                <FeatureCard
                  icon={LayoutDashboard}
                  title="Visibility drops"
                  desc="Reports don’t reflect real operations, so you rely on explanations instead of clarity."
                />
                <FeatureCard
                  icon={Workflow}
                  title="Process breaks"
                  desc="The system becomes something people avoid instead of something they follow."
                />
                <FeatureCard
                  icon={LineChart}
                  title="Decisions slow down"
                  desc="When numbers can’t be trusted, decisions take longer and confidence drops."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE BUILD */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">

              <h3 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                Software Designed
                <span className="block font-serif italic font-medium text-slate-700">
                  Around Real Operations
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                We build custom software based on how your business actually works:
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={builtAround} />
                <p className="mt-5 text-slate-600">
                  Instead of forcing adaptation, the system adapts to you.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Common examples:</p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {examples.map((t) => (
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
                    Everything is built to be simple to use, even for non-technical teams.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={ClipboardCheck}
                  title="Built on your workflow"
                  desc="The software matches how work actually happens — not how a generic tool assumes it should."
                />
                <FeatureCard
                  icon={Users}
                  title="Simple for staff"
                  desc="Clear, practical interfaces so the system gets used — not bypassed."
                />
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
                Control Without Complexity
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Every custom system includes:
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={protection} />
                <p className="mt-5 text-slate-600">
                  Security is part of the system — not an add-on.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={LockKeyhole}
                  title="Access control"
                  desc="Clear permissions: who can see what, and who can do what."
                />
                <FeatureCard
                  icon={ShieldCheck}
                  title="Approval rules"
                  desc="Sensitive actions require approval — not informal “okay” messages."
                />
                <FeatureCard
                  icon={ListChecks}
                  title="Activity logs"
                  desc="Accountability is built in: you can trace actions clearly."
                />
                <FeatureCard
                  icon={PlugZap}
                  title="Protection & backups"
                  desc="Data protection and backup planning so recovery is fast if something goes wrong."
                />
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">This means:</p>
                <div className="mt-4">
                  <BulletList items={protectionMeans} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT CHANGES AFTER IMPLEMENTATION (professional, filled) */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                  What changes after implementation
                </h2>
                <p className="mt-3 text-slate-600">
                  When software finally fits the business:
                </p>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <BulletList items={changesAfter} />
                    <p className="mt-5 text-slate-600">
                      The business gains control without adding pressure.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FeatureCard
                      icon={BadgeCheck}
                      title="Reliable data"
                      desc="Numbers become trustworthy because the system matches real operations."
                    />
                    <FeatureCard
                      icon={LayoutDashboard}
                      title="Reporting reflects reality"
                      desc="You can see what’s happening without needing explanations."
                    />
                    <FeatureCard
                      icon={Workflow}
                      title="Staff follow the system"
                      desc="When the tool fits, adoption becomes natural — not forced."
                    />
                    <FeatureCard
                      icon={LineChart}
                      title="Faster decisions"
                      desc="With clear visibility, decisions become quicker and more confident."
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm text-slate-700">
                      <span className="font-semibold text-slate-900">Result:</span> Growth feels manageable instead of chaotic.
                    </p>
                    <OrangeButton href="/contact">Talk to Us</OrangeButton>
                  </div>
                </div>
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
                This service is ideal for businesses that:
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {whoFor.map((t) => (
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
                  borderColor: "rgba(255,122,0,0.25)",
                  background: "rgba(255,122,0,0.08)",
                }}
              >
                <p className="text-sm text-slate-800">
                  If your operations are specific — your software should be too.
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
                We keep things practical
                <span className="block font-serif italic font-medium text-slate-700">
                  and controlled
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                No bloated systems. No unnecessary features.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
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

      {/* A CLEAR EXPECTATION */}
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
                  Custom Does Not Mean Complicated
                </h2>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  Custom software doesn’t have to be large or expensive. Many clients start with:
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {staged.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>

                <p className="mt-6 text-slate-700">We build in stages — so value is delivered early.</p>

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
              <div className="">
               

                <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
                  Let’s Build Software That Actually Fits
                </h2>

                <p className="mt-4 text-white/80 leading-relaxed">
                  You don’t need more tools. You need tools that match how your business works.
                  We’ll help you decide what to build — and what not to.
                </p>

                <div className="mt-7 flex gap-3 flex-wrap justify-center">
                  <OrangeButton href="/contact">Talk to Us</OrangeButton>
                  <OutlineButton href="/services">Back to Services</OutlineButton>
                </div>

                <p className="mt-4 text-sm text-white/70">Clarity comes before code.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
