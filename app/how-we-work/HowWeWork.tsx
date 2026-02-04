"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Map,
  Spline,
  Hammer,
  GraduationCap,
  RefreshCcw,
  CheckCircle2,
  Timer,
  UserCheck,
  AlertTriangle,
} from "lucide-react";

/**
 * app/how-we-work/page.tsx (or component file)
 * ONE FILE ONLY — full design + content.
 */

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-6">{children}</div>
);

// ✅ use a valid easing (cubic-bezier array)
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const steps = [
  {
    number: "1",
    icon: Map,
    title: "Discovery & Business Mapping",
    what: [
      "Your day-to-day operations",
      "How work moves through the business",
      "Where delays, errors, or confusion occur",
      "Who is involved at each stage",
    ],
    why: [
      "Most problems are not where owners initially think they are",
      "Solve the right problem",
      "Avoid building unnecessary features",
      "Design systems that fit reality",
    ],
  },
  {
    number: "2",
    icon: Spline,
    title: "System Design & Structure",
    what: ["Clear workflows", "Defined responsibilities", "Information flow", "Rules and checkpoints"],
    why: ["Easier to use", "Higher staff adoption", "Simpler maintenance", "Scaling becomes possible"],
  },
  {
    number: "3",
    icon: Hammer,
    title: "Build, Test & Refine",
    what: [
      "Core functionality first",
      "Testing with real scenarios",
      "Adjustments based on feedback",
      "You’re not handed something unfamiliar at the end",
    ],
    why: ["Less rework", "Fewer surprises", "Less misalignment", "What you get is something you recognize"],
  },
  {
    number: "4",
    icon: GraduationCap,
    title: "Launch & Training",
    what: [
      "Prepare your team",
      "Train users based on roles",
      "Ensure everyone understands how the system supports their work",
      "Practical training (not technical)",
    ],
    why: ["Systems fail when people don’t understand them", "Ease of use", "Clarity", "Confidence"],
  },
  {
    number: "5",
    icon: RefreshCcw,
    title: "Support & Continuous Improvement",
    what: [
      "Support day-to-day use",
      "Fix issues quickly",
      "Improve systems as needs change",
      "Help the system grow with the business",
    ],
    why: ["Businesses change", "Processes evolve", "Pressure increases", "Strong systems are not static"],
  },
];

const protections = [
  "Paying for features you don’t need",
  "Systems that staff resist",
  "Projects that drag on endlessly",
  "Dependency on one technical person",
  "Lack of ownership or understanding",
];

const timeframes = [
  { title: "Small systems or improvements", desc: "Weeks" },
  { title: "Medium operational systems", desc: "1–3 months" },
  { title: "Larger multi-department systems", desc: "Phased delivery" },
];

const yourRole = [
  "Honest insight into how things really work",
  "Openness to structure",
  "A decision-maker involved at key points",
  "That’s it — you don’t need technical knowledge",
];

export default function HowWeWorkClient() {
  return (
    <main className="overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
          {/* ONE H1 */}
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            How We Work
          </h1>

          {/* Breadcrumb */}
          <div className="mt-4 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700 transition">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--brand-orange)] font-medium">
              How We Work
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

      {/* INTRO SPLIT */}
      <section className="relative bg-white py-20">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT — IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
                    alt="Clear structured process for businesses"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
            </motion.div>

            {/* RIGHT — CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
            >
              {/* IMPORTANT: this is a second H1 in your code before — changed to H2 */}
              <h2 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                No Confusion. No Guessing.
                <br />
                <span className="text-brand-gradient">
                  Just a Clear, Controlled Process.
                </span>
              </h2>

              <p className="mt-6 text-lg text-slate-600">
                Most business owners hesitate to start digital projects for one
                reason: they’ve been burned before — vague timelines, unclear
                costs, technical jargon, or systems that don’t actually work.
              </p>

              <p className="mt-4 text-slate-600">Our process exists to remove that risk.</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  Let’s Start With a Conversation <ArrowRight size={18} />
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3 font-medium text-slate-900 shadow-sm"
                >
                  Explore Solutions
                </Link>
              </div>

              <p className="mt-4 text-sm text-slate-500">Clarity comes before code.</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 1 — SETTING EXPECTATIONS */}
      <section className="py-16">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto "
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-orange-600 backdrop-blur"
            >
              <ShieldCheck size={14} />
              SETTING EXPECTATIONS
            </motion.div>

            <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-semibold">
              This Is Not a “Build It and Disappear” Engagement
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-slate-600">
              We don’t rush to write code. We don’t force solutions.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-3">
              <MiniCard
                icon={Map}
                title="Understand reality"
                text="How your business really operates day-to-day."
              />
              <MiniCard
                icon={AlertTriangle}
                title="Find breakdowns"
                text="Where things break down and create pressure."
              />
              <MiniCard
                icon={UserCheck}
                title="Prioritize outcomes"
                text="What matters most to you as an owner or manager."
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* STEPS */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-5xl"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold">
              The Process
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-slate-600">
              Structured, calm, and designed to reduce risk.
            </motion.p>

            <div className="mt-10 space-y-6">
              {steps.map((s) => (
                <StepCard key={s.number} step={s} />
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* PREVENT */}
      <section className="border-y border-white/10 bg-slate-950 py-20 text-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto  text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold md:text-4xl">
              This Process Is Designed to Prevent
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-10 grid gap-3 sm:grid-cols-2">
              {protections.map((p) => (
                <div
                  key={p}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left"
                >
                  {p}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* TIMEFRAMES */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-5xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-orange-600 backdrop-blur"
            >
              <Timer size={14} />
              TIMEFRAMES
            </motion.div>

            <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-semibold">
              Typical Ranges (Depending on Scope)
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-slate-600">
              We prioritize functionality and stability over speed.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 grid gap-6 md:grid-cols-3">
              {timeframes.map((t) => (
                <div
                  key={t.title}
                  className="rounded-3xl border border-slate-200 bg-white/70 p-7 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
                >
                  <div className="text-sm font-semibold text-slate-900">{t.title}</div>
                  <div className="mt-2 text-2xl font-semibold text-orange-600">{t.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* YOUR ROLE */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
  {/* soft background glow (same vibe) */}
  <div className="pointer-events-none absolute inset-0">
    <div
      className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-20"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,122,0,0.22), transparent 60%)",
      }}
    />
    <div
      className="absolute -bottom-52 -left-52 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-10"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.14), transparent 60%)",
      }}
    />
  </div>

  <Container>
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={stagger}
      className="relative mx-auto  text-center"
    >
      {/* Title (same style as screenshot) */}
      <motion.h2
        variants={fadeUp}
        className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
      >
        What We Need From You.
      </motion.h2>

      {/* Subtitle line */}
      <motion.p
        variants={fadeUp}
        className="mt-6 text-base md:text-lg leading-relaxed text-slate-300"
      >
        Simple alignment. Fast decisions. Clear inputs.
        <br className="hidden md:block" />
        So we can build systems that actually stick.
      </motion.p>

      {/* Pills grid (THIS is the part you want) */}
      <motion.div
        variants={fadeUp}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        {yourRole.map((x) => (
          <div
            key={x}
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6
                       text-base md:text-lg font-medium text-white/90
                       shadow-[0_18px_60px_-45px_rgba(0,0,0,.75)]
                       backdrop-blur"
          >
            {x}
          </div>
        ))}
      </motion.div>
    </motion.div>
  </Container>
</section>


      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-white py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              If You Want Structure Without Stress, This Is the Right Starting Point
            </h2>

            <p className="mt-6 text-slate-600">Good systems don’t add pressure. They remove it.</p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Let’s Start With a Conversation <ArrowRight size={18} />
            </Link>

            <p className="mt-4 text-sm text-slate-500">Clarity comes before code.</p>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

/* ----------------------------- Components ----------------------------- */

function StepCard({
  step,
}: {
  step: {
    number: string;
    icon: any;
    title: string;
    what: string[];
    why: string[];
  };
}) {
  const Icon = step.icon;

  return (
    <motion.article
      variants={fadeUp}
      className="rounded-3xl border border-slate-200 bg-white/70 p-8 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600">
            <Icon size={22} />
          </div>
          <div>
            <div className="text-xs font-semibold tracking-wide text-slate-500">
              STEP {step.number}
            </div>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">{step.title}</h3>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur">
          Clear • Calm • Controlled
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <div className="text-sm font-semibold text-slate-900">What Happens Here</div>
          <ul className="mt-3 space-y-2 text-slate-600">
            {step.what.map((x) => (
              <li key={x} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Why This Matters</div>
          <ul className="mt-3 space-y-2 text-slate-600">
            {step.why.map((x) => (
              <li key={x} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

function MiniCard({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-orange-500/10 p-3 text-orange-600">
          <Icon size={20} />
        </div>
        <div className="text-lg font-semibold text-slate-900">{title}</div>
      </div>
      <p className="mt-3 text-slate-600">{text}</p>
    </div>
  );
}
