"use client";

import type { Variants } from "framer-motion";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import {
  ArrowRight,
  ClipboardList,
  Store,
  BriefcaseBusiness,
  Hotel,
  Wrench,
  ShieldCheck,
  Fingerprint,
  CheckCircle2,
} from "lucide-react";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-6">{children}</div>
);

/** ✅ Typed variants (fixes your error) */
function useMotionVariants() {
  const reduce = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };

  return { fadeUp, stagger };
}

type CaseStudy = {
  icon: any;
  label: string;
  title: string;
  situation: string[];
  coreProblem: string;
  whatWeDid: string[];
  results: string[];
};

const cases: CaseStudy[] = [
  {
    icon: Wrench,
    label: "CASE STUDY 1",
    title: "Growing Service Business — Operational Breakdown",
    situation: [
      "The owner was involved in everything: assigning tasks, following up, answering customer questions, fixing repeated mistakes.",
      "Work slowed down whenever the owner wasn’t present.",
    ],
    coreProblem: "The business relied on people and memory instead of systems.",
    whatWeDid: [
      "Mapped the full workflow from customer request to completion",
      "Built a job and task tracking system",
      "Defined responsibilities and handoffs",
      "Added simple status visibility for management",
    ],
    results: [
      "Fewer errors",
      "Clear accountability",
      "Reduced owner involvement in daily operations",
      "More predictable delivery",
    ],
  },
  {
    icon: Store,
    label: "CASE STUDY 2",
    title: "Retail / Distribution — Inventory & Sales Confusion",
    situation: [
      "Stock levels were unreliable",
      "Sales happened faster than updates",
      "Items went missing or were over-ordered",
      "Decisions were based on guesswork",
    ],
    coreProblem: "No single source of truth for inventory and sales.",
    whatWeDid: [
      "Built an inventory tracking system",
      "Connected sales activity to stock levels",
      "Introduced reorder alerts",
      "Created a simple owner dashboard",
    ],
    results: [
      "Better inventory control",
      "Reduced losses",
      "Improved planning",
      "Higher confidence in the numbers",
    ],
  },
  {
    icon: BriefcaseBusiness,
    label: "CASE STUDY 3",
    title: "Professional Services Firm — Client & Deadline Pressure",
    situation: [
      "Client communication lived in emails and memory",
      "Deadlines depended on individuals",
      "Billing lagged behind work done",
      "Management had limited visibility",
    ],
    coreProblem: "Work was happening — but not being tracked properly.",
    whatWeDid: [
      "Implemented client and task tracking",
      "Centralized communication history",
      "Added deadline visibility",
      "Integrated billing workflows",
    ],
    results: [
      "Improved client service",
      "Clear workload visibility",
      "Fewer missed deadlines",
      "More reliable billing",
    ],
  },
  {
    icon: Hotel,
    label: "CASE STUDY 4",
    title: "Tourism / Hospitality — Guest Experience Risk",
    situation: [
      "Guest requests were scattered",
      "Maintenance issues escalated late",
      "Staff coordination was manual",
      "Reputation was at risk",
    ],
    coreProblem: "Lack of centralized visibility across operations.",
    whatWeDid: [
      "Built request and issue tracking",
      "Centralized guest communication",
      "Added management oversight tools",
      "Simplified staff workflows",
    ],
    results: [
      "Faster response times",
      "Fewer complaints",
      "Better guest experience",
      "Less owner stress",
    ],
  },
];

export default function CaseStudiesClient() {
  const { fadeUp, stagger } = useMotionVariants();

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
          {/* ✅ ONE H1 only */}
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Case Studies
          </h1>

          <div className="mt-4 text-sm text-slate-500">
            <a href="/" className="hover:text-slate-700 transition">
              Home
            </a>
            <span className="mx-2">›</span>
            <span className="text-[var(--brand-orange)] font-medium">Case Studies</span>
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

      {/* INTRO (image + copy) */}
      <section className="relative py-20">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/60 shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)] backdrop-blur">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                    alt="Real business problems solved with clear systems"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-orange-500/15 blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            >
              {/* ✅ changed to h2 (not h1) */}
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Real Business Problems.
                <br />
                <span className="text-brand-gradient">
                  Clear Systems. Measurable Relief.
                </span>
              </h2>

              <p className="mt-6 text-lg text-slate-600">
                Every project starts the same way — not with software, but with frustration.
              </p>

              <p className="mt-4 text-slate-600">
                This page shows how we’ve helped businesses regain control by fixing how work flows,
                how information moves, and how decisions are made.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  Let’s Talk About Your Situation <ArrowRight size={18} />
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-8 py-3 font-medium text-slate-900 backdrop-blur"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* HOW TO READ */}
      <section className="py-16">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-orange-600 backdrop-blur"
            >
              <ClipboardList size={14} />
              HOW TO READ THESE CASES
            </motion.div>

            <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-semibold">
              Focus on the Problem, Not the Technology
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-slate-600">
              Each case is written the way business owners actually describe their struggles — because that’s how these projects begin.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-2 text-slate-600">
              If a situation sounds familiar, the solution is likely relevant to you.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* CASES GRID */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-2"
          >
            {cases.map((c) => (
              <CaseCard key={c.title} c={c} fadeUp={fadeUp} />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* PATTERN SECTION */}
      <section className="border-y border-slate-200 bg-white py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold">
              The Pattern Is Always the Same
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-slate-600">
              The business wasn’t “failing.” People were trying their best. Growth created complexity — and systems hadn’t kept up.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 grid gap-4 md:grid-cols-3">
              <MiniCard
                icon={ShieldCheck}
                title="Bring structure"
                text="Clear steps, roles, and handoffs—so work doesn’t depend on memory."
              />
              <MiniCard
                icon={Fingerprint}
                title="Make it visible"
                text="Status, accountability, and dashboards—so owners see what’s really happening."
              />
              <MiniCard
                icon={CheckCircle2}
                title="Reduce pressure"
                text="Fewer repeated mistakes, fewer surprises, and calmer operations."
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* CONFIDENTIALITY */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold">
              Important Note on Confidentiality
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-slate-600">
              Many businesses prefer discretion. Because of this:
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 rounded-3xl border border-slate-200 bg-white/70 p-8 text-left shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)] backdrop-blur"
            >
              <ul className="space-y-2 text-slate-700">
                <li>• Some details are generalized</li>
                <li>• Some examples are anonymized</li>
                <li>• The focus is on outcomes, not exposure</li>
              </ul>
              <p className="mt-4 text-slate-600">
                What matters is how problems were solved — not public recognition.
              </p>
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
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Your Business Doesn’t Need to Be Perfect to Improve
            </h2>

            <p className="mt-6 text-slate-600">
              Every business you’ve read about started with frustration — not clarity. That’s normal.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Let’s Talk About Your Situation <ArrowRight size={18} />
            </Link>

            <p className="mt-4 text-sm text-slate-500">
              The right system changes everything.
            </p>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

function CaseCard({
  c,
  fadeUp,
}: {
  c: CaseStudy;
  fadeUp: Variants;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className="rounded-3xl border border-slate-200 bg-white/70 p-8 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-orange-500/10 p-3 text-orange-600">
          <c.icon size={22} />
        </div>
        <div className="min-w-0">
          <div className="text-xs font-semibold tracking-wide text-slate-500">
            {c.label}
          </div>
          <h3 className="mt-1 text-xl font-semibold text-slate-900">
            {c.title}
          </h3>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <Block title="The Situation">
          <ul className="list-disc space-y-1 pl-5 text-slate-600">
            {c.situation.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Block>

        <Block title="The Core Problem">
          <p className="text-slate-600">{c.coreProblem}</p>
        </Block>

        <Block title="What We Did">
          <ul className="list-disc space-y-1 pl-5 text-slate-600">
            {c.whatWeDid.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </Block>

        <Block title="The Result">
          <ul className="list-disc space-y-1 pl-5 text-slate-600">
            {c.results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </Block>
      </div>
    </motion.article>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <div className="mt-2">{children}</div>
    </div>
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
