// app/services/digital-marketing-with-accountability/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  LayoutDashboard,
  PlugZap,
  LineChart,
  BadgeCheck,
  Users,
  Workflow,
  ShieldCheck,
  LockKeyhole,
  ListChecks,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing With Accountability | PithHub (Jamaica)",
  description:
    "Marketing that creates clarity — clear objectives, lead tracking, conversion visibility, and simple reporting tied to real outcomes.",
  alternates: { canonical: "/services/digital-marketing-with-accountability" },
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

export default function DigitalMarketingWithAccountabilityPage() {
  // ✅ EXACT CONTENT (your provided copy)

  const introLines = [
    "Most businesses don’t stop marketing because it doesn’t work. They stop because they can’t see what’s actually happening.",
    "Money gets spent. Activity happens. But results feel unpredictable.",
    "This service exists to turn marketing from a guessing game into a controlled, visible system.",
  ];

  const dayToDay = [
    "Ads are running, but results aren’t clear",
    "Leads come in, but quality varies wildly",
    "You don’t know which campaigns work",
    "Follow-up depends on speed and memory",
    "Reports focus on likes, not outcomes",
  ];

  const whatWeFixIncludes = [
    "Clear campaign objectives",
    "Proper lead tracking from first contact",
    "Connection to sales and follow-up systems",
    "Visibility into what converts — and what doesn’t",
  ];

  const deliverBullets = [
    "Search and social campaigns",
    "Lead capture and qualification",
    "Conversion tracking (calls, forms, WhatsApp)",
    "Simple performance dashboards",
  ];

  const protectionBullets = [
    "Clear tracking rules",
    "Access control for changes",
    "Budget visibility",
    "Data protection and backup planning",
  ];

  const preventsBullets = ["wasted spend", "unclear reporting", "dependence on one person"];

  const changesAfter = [
    "You know what’s working",
    "You stop guessing where money goes",
    "Lead quality improves",
    "Follow-up becomes faster and cleaner",
    "Decisions are made with confidence",
  ];

  const whoFor = [
    "Depend on enquiries to drive revenue",
    "Are spending money without clear results",
    "Want predictability instead of hope",
    "Need marketing tied to sales, not vanity metrics",
  ];

  const expectationBullets = [
    "tracking is consistent",
    "follow-up is reliable",
    "messaging is refined over time",
  ];

  const howWeWorkSteps = [
    "Identify what success actually looks like",
    "Set up tracking before spending money",
    "Launch only what can be measured",
    "Review, refine, and improve continuously",
  ];

  const changeCards = [
    { icon: ClipboardCheck, title: "Clear tracking" },
    { icon: LayoutDashboard, title: "Visibility into outcomes" },
    { icon: PlugZap, title: "Less waste" },
    { icon: LineChart, title: "Confidence to scale" },
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
            Digital Marketing With Accountability
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
              Digital Marketing
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

      {/* PAGE INTRO */}
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
                    src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1600&q=80"
                    alt="Accountable digital marketing"
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
              <OrangePill>PAGE INTRO</OrangePill>

              <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                Marketing Should Create Clarity —
                <span className="block font-serif italic font-medium text-slate-700">
                  Not Confusion
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                {introLines.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="mt-8 flex gap-3 flex-wrap">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/solutions">Explore Solutions</OutlineButton>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Clear tracking changes everything.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT THIS FEELS LIKE */}
      <section className="bg-slate-50/60">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
                WHAT THIS FEELS LIKE DAY-TO-DAY
              </p>

              <h3 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                If any of this sounds familiar,
                <span className="block font-serif italic font-medium text-slate-700">
                  marketing lacks structure
                </span>
              </h3>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={dayToDay} />
                <p className="mt-5 text-slate-600">
                  Marketing feels busy — but unreliable.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={LineChart}
                  title="Visibility"
                  desc="Stop guessing what’s working — see outcomes clearly."
                />
                <FeatureCard
                  icon={Users}
                  title="Lead quality"
                  desc="Understand which campaigns bring real buyers."
                />
                <FeatureCard
                  icon={Workflow}
                  title="Follow-up"
                  desc="Reduce dependence on speed and memory by structuring the flow."
                />
                <FeatureCard
                  icon={LayoutDashboard}
                  title="Decision confidence"
                  desc="Reports tied to outcomes, not likes."
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
              <OrangePill>WHAT WE FIX</OrangePill>

              <h3 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                We Build Marketing Systems,
                <span className="block font-serif italic font-medium text-slate-700">
                  Not Just Campaigns
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                We design marketing that connects directly to your business goals.
              </p>

              <p className="mt-5 text-slate-600">This includes:</p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={whatWeFixIncludes} />
                <p className="mt-5 text-slate-600">
                  Marketing becomes measurable and manageable.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=1600&q=80"
                  alt="Marketing system tracking and outcomes"
                  width={1600}
                  height={1100}
                  unoptimized
                  className="h-[300px] w-full object-cover"
                />
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {whatWeFixIncludes.map((t, i) => (
                  <StepCard key={t} n={`0${i + 1}`} title="This includes" desc={t} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ✅ WHAT WE DELIVER (IMPROVED like screenshot + image fills space) */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            {/* Left: Title + bullet box */}
            <div className="lg:col-span-6">
              <OrangePill>WHAT WE DELIVER</OrangePill>

              <h3 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
                <span style={{ color: "var(--brand-orange)" }}>Controlled, Trackable</span>{" "}
                <span className="block font-serif italic font-medium text-slate-700">
                  Growth
                </span>
              </h3>

              <p className="mt-6 text-slate-600">
                Depending on your business, this may include:
              </p>

              <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                <BulletList items={deliverBullets} />

                <p className="mt-6 text-slate-700">
                  Everything is tied to real outcomes, not surface-level metrics.
                </p>
              </div>

              {/* Desktop-only: image fills the “empty” area under left column */}
              <div className="mt-8 hidden lg:block">
                <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
                    alt="Performance and reporting"
                    width={1600}
                    height={1100}
                    unoptimized
                    className="h-[220px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-semibold text-white">
                      Visibility into what converts — and what doesn’t
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 4 cards + small image tile to balance grid */}
            <div className="lg:col-span-6">
              <div className="grid gap-5 md:grid-cols-2">
                <StepCard
                  n="01"
                  title="Depending on your business"
                  desc="Search and social campaigns"
                />
                <StepCard
                  n="02"
                  title="Depending on your business"
                  desc="Lead capture and qualification"
                />
                <StepCard
                  n="03"
                  title="Depending on your business"
                  desc="Conversion tracking (calls, forms, WhatsApp)"
                />
                <StepCard
                  n="04"
                  title="Depending on your business"
                  desc="Simple performance dashboards"
                />
              </div>

              {/* Mobile/tablet: image sits below cards (fills space nicely) */}
              <div className="mt-6 lg:hidden">
                <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=80"
                    alt="Tracking and accountability"
                    width={1600}
                    height={1100}
                    unoptimized
                    className="h-[220px] w-full object-cover"
                  />
                </div>
              </div>

              {/* Desktop: small image tile + CTA row to avoid any “empty” feeling */}
              <div className="mt-6 hidden lg:grid grid-cols-12 gap-5">
                <div className="col-span-7">
                  <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
                      alt="Dashboards and reporting"
                      width={1600}
                      height={1100}
                      unoptimized
                      className="h-[180px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-sm font-semibold text-white">
                        Simple dashboards. Real outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-5">
                  <div className="h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Next step</p>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        We set up tracking before spending money, so results are visible from day one.
                      </p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <OrangeButton href="/contact">Talk to Us</OrangeButton>
                      <OutlineButton href="/solutions">Explore Solutions</OutlineButton>
                    </div>
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
              <OrangePill>BUILT-IN CONTROL & PROTECTION</OrangePill>

              <h3 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                Protection Against Waste
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Every marketing system we set up includes:
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={protectionBullets} />
                <p className="mt-5 text-slate-600">This prevents:</p>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <BulletList items={preventsBullets} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={ListChecks}
                  title="Clear tracking rules"
                  desc="So reporting stays consistent and explainable."
                />
                <FeatureCard
                  icon={LockKeyhole}
                  title="Access control"
                  desc="Control who can change campaigns, tracking, and settings."
                />
                <FeatureCard
                  icon={BadgeCheck}
                  title="Budget visibility"
                  desc="You can see spend clearly — no blind spending."
                />
                <FeatureCard
                  icon={ShieldCheck}
                  title="Data protection"
                  desc="Protection and backups so the system stays reliable."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT CHANGES AFTER IMPLEMENTATION (centered + filled) */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20">
            <div className="mx-auto max-w-6xl rounded-[28px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                  What changes after implementation
                </h2>
                <p className="mt-3 text-slate-600">When marketing becomes accountable:</p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Visibility", value: "✓", note: "You know what’s working" },
                  { label: "Spend", value: "↓", note: "You stop guessing where money goes" },
                  { label: "Confidence", value: "→", note: "Decisions are made with confidence" },
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
                    <p className="mt-5 text-slate-600">
                      Marketing supports growth instead of draining energy.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FeatureCard
                      icon={ClipboardCheck}
                      title="Clear tracking"
                      desc="You know what’s working — and why."
                    />
                    <FeatureCard
                      icon={LayoutDashboard}
                      title="Outcome visibility"
                      desc="See what converts — and what doesn’t."
                    />
                    <FeatureCard
                      icon={Workflow}
                      title="Cleaner follow-up"
                      desc="Follow-up becomes faster and cleaner."
                    />
                    <FeatureCard
                      icon={LineChart}
                      title="Confidence to scale"
                      desc="Scale what works instead of hoping."
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm text-slate-700">
                      <span className="font-semibold text-slate-900">Result:</span>{" "}
                      Controlled, visible marketing.
                    </p>
                    <OrangeButton href="/contact">Talk to Us</OrangeButton>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-semibold text-center text-slate-900">
                  What This Changes for You
                </h3>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {changeCards.map((c) => (
                    <ChangeCard key={c.title} icon={c.icon} title={c.title} />
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <OrangeButton href="/contact">Talk to Us</OrangeButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO THIS SERVICE IS FOR (centered like your screenshot) */}
      <section className="bg-white text-center">
        <Container>
          <div className="py-14 md:py-20">
            <div className="mx-auto max-w-6xl rounded-[28px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                WHO THIS SERVICE IS FOR
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
                  If you can’t explain where your last 10 leads came from, structure is missing.
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
              <OrangePill>HOW WE WORK</OrangePill>

              <h3 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                We keep marketing grounded
                <span className="block font-serif italic font-medium text-slate-700">
                  and controlled
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                No blind spending. No vague reporting.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/services">Back to Services</OutlineButton>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">No blind spending.</p>
                <p className="mt-2 text-sm text-slate-600">No vague reporting.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="mt-2 grid gap-5 sm:grid-cols-2">
                {howWeWorkSteps.map((t, i) => (
                  <StepCard key={t} n={`0${i + 1}`} title="We keep it controlled" desc={t} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* A REALISTIC EXPECTATION (centered beige like your screenshot) */}
      <section className="bg-white text-center">
        <Container>
          <div className="py-14 md:py-20">
            <div
              className="mx-auto max-w-6xl rounded-[28px] border border-slate-200 p-8 md:p-10 shadow-sm"
              style={{ background: "rgba(255,122,0,0.08)" }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                A REALISTIC EXPECTATION
              </h2>

              <p className="mt-4 text-slate-900">
                Marketing Is a System, Not a One-Off
              </p>

              <p className="mt-6 text-slate-600">Results improve when:</p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
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

              <p className="mt-7 text-slate-700">
                We build marketing with long-term clarity in mind.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/solutions">Explore Solutions</OutlineButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA (centered dark band like your screenshot) */}
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
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                FINAL CTA — DIGITAL MARKETING PAGE
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
                Let’s Bring Control to Your Marketing
              </h2>

              <p className="mt-4   text-white/80 leading-relaxed">
                You shouldn’t have to “hope” marketing works. We’ll help you see exactly what’s happening — and why.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 justify-center">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/services">Back to Services</OutlineButton>
              </div>

              <p className="mt-5 text-sm text-white/70">Clear tracking changes everything.</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
