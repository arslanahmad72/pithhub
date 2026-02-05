// app/services/support-training-continuous-improvement/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  LayoutDashboard,
  PlugZap,
  LifeBuoy,
  ShieldCheck,
  Users,
  GraduationCap,
  RefreshCcw,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support, Training & Continuous Improvement | PithHub (Jamaica)",
  description:
    "Systems only work if people actually use them. Structured support, training, and continuous improvement to keep your systems useful, followed, and effective as the business evolves.",
  alternates: { canonical: "/services/support-training-continuous-improvement" },
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

function BulletRow({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-slate-700">
      <CheckCircle2
        className="h-4 w-4 mt-0.5"
        style={{ color: "var(--brand-orange)" }}
      />
      <span>{text}</span>
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
      <div className="flex items-start gap-4">
        <div
          className="h-12 w-12 rounded-2xl grid place-items-center border"
          style={{
            borderColor: "rgba(255,122,0,0.35)",
            background: "rgba(255,122,0,0.10)",
          }}
        >
          <Icon className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
        </div>
        <div>
          <p className="font-semibold text-slate-900">{title}</p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
        </div>
      </div>
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

export default function SupportTrainingContinuousImprovementPage() {
  // ✅ EXACT CONTENT (from your copy)
  const introTitle = "Systems Only Work If People Actually Use Them";
  const introLines = [
    "Many systems fail — not because they were built poorly, but because they were left unsupported.",
    "Staff revert to old habits.",
    "Small issues pile up.",
    "Processes drift.",
    "Owners lose confidence.",
    "This service exists to ensure the systems you rely on stay useful, followed, and effective as the business evolves.",
  ];

  const dayToDayBullets = [
    "Staff don’t fully use the system",
    "Small issues turn into daily frustration",
    "New staff aren’t properly onboarded",
    "Processes slowly drift back to “old ways”",
    "You’re unsure whether the system is still being followed",
  ];

  const provideBullets = [
    "System maintenance and adjustments",
    "Staff training and onboarding",
    "Usage monitoring and accountability",
    "Answering questions before problems grow",
  ];

  const trainingBullets = [
    "Staff learn only what they need",
    "Processes are reinforced through the system",
    "Expectations are clear",
    "Responsibility is visible",
  ];

  const improvementBullets = [
    "Identify friction points",
    "Improve workflows",
    "Add clarity where needed",
    "Remove steps that no longer serve the business",
  ];

  const protectionBullets = [
    "Controlled access for changes",
    "Change tracking and accountability",
    "Backup and recovery planning",
    "Clear escalation paths",
  ];

  const whoBullets = [
    "Rely on systems daily",
    "Want consistency across staff",
    "Need confidence the system is being followed",
    "Don’t want to manage technical issues internally",
  ];

  const howSteps = [
    { n: "01", title: "Regular system check-ins", desc: "Support is structured and predictable." },
    { n: "02", title: "Staff guidance and training", desc: "Training is practical and role-based." },
    { n: "03", title: "Small improvements based on real usage", desc: "Incremental and controlled — never disruptive." },
    { n: "04", title: "Clear communication and accountability", desc: "No chaos. No surprises." },
  ];

  // “What changes” cards (keeps same style as other services)
  const changeBullets = [
    { icon: ClipboardCheck, title: "Higher adoption" },
    { icon: LayoutDashboard, title: "Fewer frustrations" },
    { icon: PlugZap, title: "Systems that stay relevant" },
    { icon: LifeBuoy, title: "Long-term value" },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO (same design as your other services) */}
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
            Support, Training & Continuous Improvement
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
              Support & Training
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

      {/* SECTION 1 — Split Offer (same structure as others) */}
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
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                    alt="Support and training"
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
              <OrangePill>SERVICE</OrangePill>

              <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                Support, Training{" "}
                <span className="block font-serif italic font-medium text-slate-700">
                  & Continuous Improvement
                </span>
              </h2>

              <p className="mt-6 text-sm font-semibold text-slate-900">
                PAGE INTRO (ABOVE THE FOLD)
              </p>
              <p className="mt-2 text-slate-600 font-semibold">{introTitle}</p>

              <div className="mt-4 space-y-2 text-slate-600 leading-relaxed">
                {introLines.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>

              <div className="mt-8 flex gap-3 flex-wrap">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <OutlineButton href="/services">Back to Services</OutlineButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — Process (same structure; fill space; no empty gaps) */}
      <section className="bg-slate-50/60">
        <Container>
          <div className="py-14 md:py-20 grid gap-12 lg:grid-cols-12 items-start">
            {/* Left */}
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
                OUR PROCESS
              </p>

              <h3 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Support That Keeps
                <span className="block font-serif italic font-medium text-slate-700">
                  Systems Working
                </span>
              </h3>

              {/* WHAT THIS FEELS LIKE */}
              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                   WHAT THIS FEELS LIKE DAY-TO-DAY
                </p>
                <p className="mt-3 text-slate-600">
                  If this sounds familiar, support is missing:
                </p>

                <div className="mt-4 space-y-3">
                  {dayToDayBullets.map((b) => (
                    <BulletRow key={b} text={b} />
                  ))}
                </div>

                <p className="mt-5 text-slate-700 font-medium">
                  The system exists — but consistency doesn’t.
                </p>
              </div>

              {/* WHAT WE PROVIDE */}
              <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                   WHAT WE PROVIDE
                </p>
                <p className="mt-3 text-slate-600 font-semibold">
                  Ongoing Support That Keeps Systems Working
                </p>
                <p className="mt-2 text-slate-600">
                  We provide structured, ongoing support that focuses on:
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {provideBullets.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>

                <p className="mt-5 text-slate-700 font-medium">
                  Support is proactive — not emergency-based.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-7">
              {/* Big image to remove “empty space” */}
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
                  alt="Ongoing support and improvement"
                  width={1600}
                  height={1100}
                  unoptimized
                  className="h-[300px] w-full object-cover"
                />
              </div>

              {/* Training + Improvement (no dead space) */}
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <FeatureCard
                  icon={GraduationCap}
                  title=" TRAINING THAT MAKES SYSTEMS STICK"
                  desc="Clarity for Staff, Confidence for Owners"
                />
                <FeatureCard
                  icon={RefreshCcw}
                  title=" CONTINUOUS IMPROVEMENT"
                  desc="Systems Must Evolve as the Business Grows"
                />
              </div>

              {/* Bullet cards (tight) */}
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                    Training is delivered in a practical, role-based way:
                  </p>
                  <div className="mt-4 space-y-3">
                    {trainingBullets.map((b) => (
                      <BulletRow key={b} text={b} />
                    ))}
                  </div>
                  <p className="mt-5 text-slate-700 font-medium">
                    This removes confusion and reduces reliance on verbal instructions.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                    As your business changes, systems must adapt. We help you:
                  </p>
                  <div className="mt-4 space-y-3">
                    {improvementBullets.map((b) => (
                      <BulletRow key={b} text={b} />
                    ))}
                  </div>
                  <p className="mt-5 text-slate-700 font-medium">
                    Improvements are incremental and controlled — never disruptive.
                  </p>
                </div>
              </div>

              {/* How we work (4 cards) */}
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {howSteps.map((p) => (
                  <StepCard key={p.n} n={p.n} title={p.title} desc={p.desc} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3 — What This Changes (same style as other services, but includes remaining content) */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-20">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-900">
                What This Changes After Support Is In Place
              </h2>

              <p className="mt-4 text-center text-slate-600">
                Systems stay useful, followed, and effective — even as the business evolves.
              </p>

              <div className="mt-8 grid gap-5 lg:grid-cols-12 items-start">
                {/* Left: Built-in control & protection */}
                <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                     BUILT-IN CONTROL & PROTECTION
                  </p>
                  <p className="mt-3 text-slate-600 font-semibold">Stability Without Risk</p>
                  <p className="mt-2 text-slate-600">All support includes:</p>

                  <div className="mt-4 space-y-3">
                    {protectionBullets.map((b) => (
                      <BulletRow key={b} text={b} />
                    ))}
                  </div>

                  <p className="mt-5 text-slate-700 font-medium">
                    This ensures improvements don’t introduce new problems.
                  </p>
                </div>

                {/* Right: Who this is for */}
                <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                     WHO THIS SERVICE IS FOR
                  </p>
                  <p className="mt-3 text-slate-600">
                    This service is ideal for businesses that:
                  </p>

                  <div className="mt-4 space-y-3">
                    {whoBullets.map((b) => (
                      <BulletRow key={b} text={b} />
                    ))}
                  </div>

                  <p className="mt-5 text-slate-700 font-medium">
                    If your systems matter to operations, support matters too.
                  </p>
                </div>
              </div>

              {/* Change cards (same as your other services) */}
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {changeBullets.map((c) => (
                  <ChangeCard key={c.title} icon={c.icon} title={c.title} />
                ))}
              </div>

              {/* Realistic expectation (kept inside this section to match structure) */}
              <div className="mt-8 grid gap-5 lg:grid-cols-12 items-stretch">
                <div
                  className="lg:col-span-7 rounded-3xl border p-6 shadow-sm"
                  style={{
                    background: "rgba(255,122,0,0.10)",
                    borderColor: "rgba(255,122,0,0.25)",
                  }}
                >
                  <p className="text-sm font-semibold text-slate-900">
                     A REALISTIC EXPECTATION
                  </p>
                  <p className="mt-3 text-slate-900 font-semibold">
                    Support Is About Stability, Not Dependency
                  </p>
                  <p className="mt-3 text-slate-700">
                    Our goal is not to make you dependent on us — it’s to make your systems stable, understood, and reliable.
                  </p>
                  <p className="mt-3 text-slate-700">
                    Support exists to protect your investment and keep the business running smoothly.
                  </p>
                </div>

                <div className="lg:col-span-5 relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
                    alt="Stability and support"
                    width={1600}
                    height={1100}
                    unoptimized
                    className="h-full min-h-[220px] w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <OrangeButton href="/contact">Talk to Us</OrangeButton>
                <p className="mt-4 text-slate-600">Consistency is built, not hoped for</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA (same vibe as other pages) */}
      <section className="bg-white text-center">
        <Container>
          <div className="pb-14 md:pb-20">
            <div
              className="rounded-[28px] overflow-hidden border border-white/10 shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
              style={{
                background: `
                  radial-gradient(1200px 600px at 15% 25%, rgba(255,122,0,0.35), transparent 55%),
                  radial-gradient(900px 520px at 85% 70%, rgba(255,122,0,0.22), transparent 60%),
                  linear-gradient(180deg, #0B0B10 0%, #0F111A 100%)
                `,
              }}
            >
              <div className="p-8 md:p-12">
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                  FINAL CTA — SUPPORT PAGE
                </p>

                <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white">
                  Let’s Keep the Systems Working
                </h2>

                <div className="mt-5 space-y-2 text-white/80">
                  <p>You shouldn’t lose confidence in systems you rely on.</p>
                  <p>We’ll help you keep them clear, followed, and effective.</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                  <OrangeButton href="/contact">Talk to Us</OrangeButton>
                  <OutlineButton href="/services">Back to Services</OutlineButton>
                </div>

                <p className="mt-6 text-white/70">
                  Consistency is built, not hoped for
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
