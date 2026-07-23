// app/services/websites-that-support-the-business/page.tsx
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
  Users,
  LockKeyhole,
  ShieldCheck,
  LineChart,
  ListChecks,
  Link2,
  Smartphone,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Websites That Support the Business | PithHub (Jamaica)",
  description:
    "Websites that actively support sales, follow-up, and operations — clear messaging, structured enquiries, integrations, and mobile-first performance.",
  alternates: { canonical: "/services/websites-that-support-the-business" },
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

export default function WebsitesThatSupportBusinessPage() {
  // ✅ EXACT CONTENT (you provided) — mapped into sections

  // Day-to-day
  const dayToDay = [
    "Enquiries lack important details",
    "Too many time-wasters, not enough real buyers",
    "Follow-up depends on someone remembering",
    "Website forms don’t connect to anything",
    "You can’t see where leads go after they arrive",
  ];

  // What we build
  const whatWeBuild = [
    "Clear messaging that attracts the right enquiries",
    "Structured forms that capture useful information",
    "Direct integration with sales and follow-up systems",
    "Mobile-friendly layouts for real-world use",
  ];

  // Built-in control & protection
  const protection = [
    "Secure form handling",
    "Controlled access for updates",
    "Protection of customer information",
    "Data backups and recovery planning",
  ];

  // What changes after implementation
  const changesAfter = [
    "Enquiries improve in quality",
    "Follow-up becomes structured",
    "Less manual chasing",
    "Fewer missed opportunities",
    "Clear visibility from enquiry to outcome",
  ];

  // Who for
  const whoFor = [
    "Rely on enquiries to drive sales",
    "Want better lead quality",
    "Need the website to connect to internal systems",
    "Are tired of “pretty” sites that don’t perform",
  ];

  // How we work (exact steps)
  const steps = [
    {
      n: "01",
      title: "Understand how enquiries should flow",
      desc: "We start by mapping the real journey from enquiry → follow-up → outcome.",
    },
    {
      n: "02",
      title: "Identify what information matters most",
      desc: "We define what you need to capture so leads are useful and actionable.",
    },
    {
      n: "03",
      title: "Design pages and forms around that",
      desc: "Messaging and structure are built to attract the right enquiries and reduce noise.",
    },
    {
      n: "04",
      title: "Connect everything into your systems",
      desc: "We integrate your website into your sales and follow-up workflow so nothing gets lost.",
    },
  ];

  // Realistic expectation bullets
  const expectation = [
    "evolve with the business",
    "adjust as sales processes change",
    "stay connected to real operations",
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
            Websites That Support the Business
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
              Websites
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
                    src="/websites.png"
                    alt="Websites that support sales, follow-up, and operations"
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
                A Website Should Reduce Work —
                <span className="block font-serif italic font-medium text-slate-700">
                  Not Create More of It
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>Most business websites exist. Very few actually help the business run better.</p>
                <p>
                  When enquiries are poor quality, follow-up is manual, and the website doesn’t connect
                  to internal systems, the result is wasted time and missed opportunities.
                </p>
                <p>
                  This service exists to build websites that actively support sales, follow-up, and
                  operations — not just marketing.
                </p>
              </div>

              <div className="mt-8 flex gap-3 flex-wrap">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/solutions">Explore Solutions</OutlineButton>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Micro-copy: Better enquiries start with better structure.
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
                  the website is part of the problem
                </span>
              </h3>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={dayToDay} />
                <p className="mt-5 text-slate-600">
                  The website creates activity — not clarity.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={ListChecks}
                  title="Better inputs"
                  desc="Capture the information that actually matters, so enquiries are usable."
                />
                <FeatureCard
                  icon={Users}
                  title="Less chasing"
                  desc="Follow-up becomes structured instead of memory-based."
                />
                <FeatureCard
                  icon={Link2}
                  title="Connected systems"
                  desc="Forms and leads don’t sit in inboxes — they go where your workflow goes."
                />
                <FeatureCard
                  icon={LayoutDashboard}
                  title="Visibility"
                  desc="You can track where leads go after they arrive — and what happens next."
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
                Websites Designed
                <span className="block font-serif italic font-medium text-slate-700">
                  to Do a Job
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                We design websites that are clear, focused, and connected to how your business actually works.
              </p>

              <p className="mt-5 text-slate-600">This includes:</p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={whatWeBuild} />
                <p className="mt-5 text-slate-600">
                  The website becomes part of your workflow — not a standalone brochure.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/what-we.jpeg"
                  alt="Website messaging, forms, and workflow integration"
                  width={1600}
                  height={1100}
                  unoptimized
                  className="h-[300px] w-full object-cover"
                />
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {whatWeBuild.map((t, i) => (
                  <StepCard key={t} n={`0${i + 1}`} title="This includes" desc={t} />
                ))}
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={Smartphone}
                  title="Mobile-first"
                  desc="Mobile-friendly layouts built for real-world use."
                />
                <FeatureCard
                  icon={Mail}
                  title="Follow-up ready"
                  desc="Enquiries are structured so follow-up becomes faster and more consistent."
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
                Secure by Design
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Every website we build includes:
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <BulletList items={protection} />
                <p className="mt-5 text-slate-600">
                  This protects both your business and your customers — without slowing anything down.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={LockKeyhole}
                  title="Secure handling"
                  desc="Secure form handling and protection of customer information."
                />
                <FeatureCard
                  icon={ShieldCheck}
                  title="Controlled access"
                  desc="Controlled access for updates — so changes don’t create risk."
                />
                <FeatureCard
                  icon={ClipboardCheck}
                  title="Backups"
                  desc="Data backups and recovery planning built in from day one."
                />
                <FeatureCard
                  icon={BadgeCheck}
                  title="Protection without friction"
                  desc="Security built into the workflow — not added later."
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
                  What changes after implementation
                </h2>
                <p className="mt-3 text-slate-600">
                  Once the website supports the business:
                </p>
              </div>

              {/* KPI strip (fills space, still clean) */}
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Lead quality", value: "↑", note: "Fewer time-wasters" },
                  { label: "Follow-up", value: "✓", note: "Structured and trackable" },
                  { label: "Visibility", value: "→", note: "Enquiry to outcome" },
                ].map((k) => (
                  <div key={k.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
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
                      The website stops being a guessing game.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FeatureCard
                      icon={LineChart}
                      title="Better outcomes"
                      desc="Fewer missed opportunities because follow-up is structured."
                    />
                    <FeatureCard
                      icon={Workflow}
                      title="Less manual chasing"
                      desc="The system supports the process — not a person’s memory."
                    />
                    <FeatureCard
                      icon={LayoutDashboard}
                      title="Clear visibility"
                      desc="See what happens after leads arrive — and where they go next."
                    />
                    <FeatureCard
                      icon={BadgeCheck}
                      title="Real performance"
                      desc="The website earns its keep by supporting sales and operations."
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm text-slate-700">
                      <span className="font-semibold text-slate-900">Result:</span> Clear visibility from enquiry to outcome.
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
                  <div key={t} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
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
                  If your website doesn’t make work easier, it’s not doing its job.
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
                Our approach is simple
                <span className="block font-serif italic font-medium text-slate-700">
                  and practical
                </span>
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                No overdesign. No unnecessary features.
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

      {/* A REALISTIC EXPECTATION */}
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
                  A Good Website Is a System, Not a One-Time Project
                </h2>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  Websites work best when they:
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {expectation.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>

                <p className="mt-6 text-slate-700">We build with that in mind from day one.</p>

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
        
                <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
                  Let’s Make the Website Work for You
                </h2>

                <p className="mt-4 text-white/80 leading-relaxed">
                  You shouldn’t need extra staff just to manage enquiries.
                  We’ll help you turn your website into a reliable part of the business system.
                </p>

                <div className="mt-7 flex gap-3 flex-wrap justify-center">
                  <OrangeButton href="/contact">Talk to Us</OrangeButton>
                  <OutlineButton href="/services">Back to Services</OutlineButton>
                </div>

                <p className="mt-4 text-sm text-white/70">
                  Better enquiries start with better structure.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
