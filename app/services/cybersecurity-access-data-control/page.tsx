// app/services/cybersecurity-business-protection/page.tsx
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
  LockKeyhole,
  ListChecks,
  BadgeCheck,
  Users,
  LineChart,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity & Business Protection | PithHub (Jamaica)",
  description:
    "Practical cybersecurity and business protection that reduces risk, improves accountability, and strengthens recovery — without slowing daily operations.",
  alternates: { canonical: "/services/cybersecurity-business-protection" },
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

export default function CybersecurityBusinessProtectionPage() {
  // ✅ EXACT CONTENT (you provided)

  // Intro “risk” bullets
  const riskBullets = [
    "Who has access to what",
    "What happens if something goes wrong",
    "Whether the business could recover quickly",
    "Whether mistakes, misuse, or fraud could slip through",
  ];

  // Day-to-day risk signs
  const dayToDay = [
    "Too many people have access to sensitive information",
    "You’re not sure who changed what — or when",
    "When staff leave, access isn’t fully removed",
    "Customer or financial data lives in too many places",
    "If something breaks or gets compromised, there’s no clear plan",
  ];

  // What we protect
  const protectAreas = [
    "Customer information",
    "Financial data",
    "Internal systems",
    "Staff access and permissions",
    "Business continuity",
  ];

  // What we put in place
  const putInPlace = [
    "Role-based access (right people, right permissions)",
    "Approval controls for sensitive actions",
    "Activity logs for accountability",
    "Secure handling of customer data",
    "Regular data backups",
    "Clear recovery procedures if something goes wrong",
  ];

  // What changes after implementation
  const changesAfter = [
    "Risk is reduced without slowing work",
    "Accountability is clear",
    "Internal misuse becomes harder",
    "External threats are less damaging",
    "Recovery is faster and controlled",
  ];

  // What this is not
  const weDoNot = ["Sell panic", "Promise “nothing can ever go wrong”", "Overload the business with restrictions"];
  const weFocusOn = ["Reducing risk", "Limiting damage", "Ensuring recovery"];

  // Who it’s for
  const whoFor = [
    "Rely on digital systems daily",
    "Handle customer or financial data",
    "Have multiple staff accessing systems",
    "Want peace of mind as they grow",
  ];

  // How we work steps
  const steps = [
    {
      n: "01",
      title: "Identify where real risk exists",
      desc: "We focus on practical exposure — not abstract technical rules.",
    },
    {
      n: "02",
      title: "Decide what actually needs protection",
      desc: "We protect business-critical areas first, without overreach.",
    },
    {
      n: "03",
      title: "Implement simple, effective controls",
      desc: "Role-based access, approvals, and accountability built into daily work.",
    },
    {
      n: "04",
      title: "Ensure recovery plans are clear",
      desc: "So if something breaks or gets compromised, recovery is controlled and fast.",
    },
  ];

  // Realistic expectation
  const expectation = ["reduce exposure", "limit impact", "recover quickly"];

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
            Cybersecurity & Business Protection
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
              Cybersecurity
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
                    src="/cyber.jpeg"
                    alt="Business protection and operational resilience"
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
                Protection That Keeps the Business Running —
                <span className="block font-serif italic font-medium text-slate-700">
                  Not Slowing It Down
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>Most business owners don’t think about “cybersecurity” every day. They think about risk.</p>
              </div>

              <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={riskBullets} />
              </div>

              <p className="mt-5 text-slate-600 leading-relaxed">
                This service exists to protect your systems, data, and operations — quietly, reliably, and
                without disrupting daily work.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/solutions">Explore Solutions</OutlineButton>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Micro-copy: Calm preparation beats reactive damage.
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
                  risk is unmanaged
                </span>
              </h3>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={dayToDay} />
                <p className="mt-5 text-slate-600">The business works — but it feels exposed.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={LockKeyhole}
                  title="Access control"
                  desc="Reduce unnecessary access to sensitive information."
                />
                <FeatureCard
                  icon={ClipboardCheck}
                  title="Accountability"
                  desc="Know who changed what — and when — through clear activity logs."
                />
                <FeatureCard
                  icon={Users}
                  title="Offboarding clarity"
                  desc="When staff leave, access removal is complete — not partial."
                />
                <FeatureCard
                  icon={AlertTriangle}
                  title="Preparedness"
                  desc="If something breaks or gets compromised, there’s a clear plan."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE PROTECT */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">

              <h3 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                Business-Critical Areas
                <span className="block font-serif italic font-medium text-slate-700">
                  That Can’t Be Left to Chance
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                We focus on protecting what actually matters to the business:
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={protectAreas} />
                <p className="mt-5 text-slate-600">
                  Protection is designed around how work really happens, not abstract technical rules.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/what-we-cyber.jpeg"
                  alt="Protecting systems, data, and continuity"
                  width={1600}
                  height={1100}
                  unoptimized
                  className="h-[300px] w-full object-cover"
                />
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={ShieldCheck}
                  title="Protection that fits operations"
                  desc="Designed around real work — so security doesn’t slow the team down."
                />
                <FeatureCard
                  icon={Workflow}
                  title="Continuity-focused"
                  desc="Built to reduce disruption and improve recovery when something goes wrong."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE PUT IN PLACE */}
      <section className="bg-slate-50/60">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">

              <h3 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                Practical Protection
                <span className="block font-serif italic font-medium text-slate-700">
                  Built Into Your Systems
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Depending on your business, this may include:
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={putInPlace} />
                <p className="mt-5 text-slate-600">
                  These protections are built into your systems — not bolted on afterward.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={LockKeyhole}
                  title="Right permissions"
                  desc="Role-based access: right people, right permissions."
                />
                <FeatureCard
                  icon={ListChecks}
                  title="Accountability"
                  desc="Activity logs for accountability, without micromanagement."
                />
                <FeatureCard
                  icon={ClipboardCheck}
                  title="Controls"
                  desc="Approvals for sensitive actions to reduce mistakes and misuse."
                />
                <FeatureCard
                  icon={PlugZap}
                  title="Recovery-ready"
                  desc="Regular backups and clear recovery procedures."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT CHANGES AFTER IMPLEMENTATION (filled + professional) */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                  WHAT CHANGES AFTER IMPLEMENTATION
                </h2>
                <p className="mt-3 text-slate-600">When protection is properly in place:</p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Risk", value: "↓", note: "Reduced without slowing work" },
                  { label: "Accountability", value: "✓", note: "Clear actions and visibility" },
                  { label: "Recovery", value: "→", note: "Faster and controlled" },
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

              <div className="mt-8 grid gap-5 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <BulletList items={changesAfter} />
                    <p className="mt-5 text-slate-600">The business feels safer and more stable.</p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FeatureCard
                      icon={ShieldCheck}
                      title="Less damage"
                      desc="External threats are less damaging when controls and recovery are in place."
                    />
                    <FeatureCard
                      icon={ClipboardCheck}
                      title="Clear accountability"
                      desc="You can trace sensitive actions without chasing people for answers."
                    />
                    <FeatureCard
                      icon={Users}
                      title="Harder misuse"
                      desc="Internal misuse becomes harder when access and approvals are controlled."
                    />
                    <FeatureCard
                      icon={LineChart}
                      title="Stable operations"
                      desc="Risk reduces without slowing work, so daily operations stay smooth."
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm text-slate-700">
                      <span className="font-semibold text-slate-900">Result:</span> Safer, more stable operations.
                    </p>
                    <OrangeButton href="/contact">Talk to Us</OrangeButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT THIS IS NOT */}
      <section className="bg-slate-50/60">
        <Container>
          <div className="py-14 md:py-20">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">

              <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900">
                This Is Not Fear-Based Security
              </h2>

              <div className="mt-6 grid gap-5 lg:grid-cols-12 items-start">
                <div className="lg:col-span-6">
                  <p className="text-sm font-semibold text-slate-900">We do not:</p>
                  <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <BulletList items={weDoNot} />
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-sm font-semibold text-slate-900">Instead, we focus on:</p>
                  <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <BulletList items={weFocusOn} />
                    <p className="mt-5 text-slate-600">
                      That’s what responsible business protection looks like.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO THIS SERVICE IS FOR */}
      <section className="bg-white text-center">
        <Container>
          <div className="py-14 md:py-20">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                WHO THIS SERVICE IS FOR
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
                  If systems are central to your operations, protection should be intentional.
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
                Our approach is calm
                <span className="block font-serif italic font-medium text-slate-700">
                  and practical
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                No over-engineering. No unnecessary restrictions.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/services">Back to Services</OutlineButton>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">No over-engineering.</p>
                <p className="mt-2 text-sm text-slate-600">No unnecessary restrictions.</p>
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

      {/* A REALISTIC EXPECTATION */}
      <section className="bg-white text-center">
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
                  A REALISTIC EXPECTATION
                </h2>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  Security Is About Preparedness, Not Perfection
                </p>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  No business is “perfectly secure.” The goal is to:
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {expectation.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>

                <p className="mt-6 text-slate-700">That’s how resilient businesses operate.</p>

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
              <div className="max-w">
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                  
                </p>

                <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
                  Let’s Protect the Business Without Slowing It Down
                </h2>

                <p className="mt-4 text-white/80 leading-relaxed">
                  You don’t need fear. You need clarity and preparation.
                  We’ll help you identify real risks — and put the right protection in place.
                </p>

                <div className="mt-7 flex gap-3 flex-wrap justify-center">
                  <OrangeButton href="/contact">Talk to Us</OrangeButton>
                  <OutlineButton href="/services">Back to Services</OutlineButton>
                </div>

                <p className="mt-4 text-sm text-white/70">
                  Calm preparation beats reactive damage.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
