"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  Layers,
  TrendingUp,
  Building2,
  CheckCircle2,
  SlidersHorizontal,
  Sparkles,
  ShieldCheck,
  Quote,
  XCircle,
} from "lucide-react";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-6">{children}</div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const tiers = [
  {
    name: "FOUNDATION",
    icon: Layers,
    title: "For Small Businesses Getting Control",
    focus: [
      "Organizing core operations",
      "Replacing manual processes",
      "Creating visibility where none exists",
    ],
    includes: [
      "Website with proper lead capture",
      "Basic customer or job tracking",
      "Simple workflows",
      "Core reporting",
    ],
    bestFor: [
      "Small teams",
      "Owner-managed businesses",
      "Businesses outgrowing spreadsheets",
    ],
    outcome: "Clarity replaces confusion.",
  },
  {
    name: "GROWTH",
    icon: TrendingUp,
    title: "For Businesses Scaling Without Losing Control",
    focus: [
      "Sales tracking and follow-up",
      "Multi-step workflows",
      "Department visibility",
      "System integration",
    ],
    includes: [
      "Custom operational systems",
      "Sales or CRM setup",
      "Inventory or billing workflows",
      "Dashboards for management",
    ],
    bestFor: [
      "Growing teams",
      "Businesses adding staff",
      "Owners feeling stretched",
    ],
    outcome: "Structure replaces firefighting.",
  },
  {
    name: "SCALE",
    icon: Building2,
    title: "For Established Businesses Protecting Performance",
    focus: [
      "Multi-department systems",
      "Role-based access",
      "Advanced reporting",
      "Stability and accountability",
    ],
    includes: [
      "Custom enterprise workflows",
      "Deep system integrations",
      "Performance dashboards",
      "Ongoing support agreements",
    ],
    bestFor: [
      "Larger organizations",
      "Management teams",
      "High operational risk environments",
    ],
    outcome: "Control replaces stress.",
  },
];

const factors = [
  "Number of workflows involved",
  "Number of users or roles",
  "Level of customization required",
  "Integration with existing systems",
  "Reporting and dashboard complexity",
  "Ongoing support needs",
];

const payFor = [
  "Business analysis",
  "System design",
  "Development and testing",
  "Training",
  "Documentation",
  "Initial support",
];

const weDont = [
  "Compete on “cheapest price”",
  "Rush projects without understanding",
  "Build systems without ownership clarity",
  "Leave clients unsupported",
];

const ownerQuotes = [
  "“I didn’t realize how much time we were losing.”",
  "“I didn’t know how blind we were.”",
  "“I didn’t know how much stress this was causing.”",
];

export default function PricingPage() {
  return (
    <main className="overflow-hidden">
         <section className="relative overflow-hidden">
  {/* Background gradient */}
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

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
    {/* ONE H1 */}
    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
      Pricing
    </h1>

    {/* Breadcrumb */}
    <div className="mt-4 text-sm text-slate-500">
      <a href="/" className="hover:text-slate-700 transition">
        Home
      </a>
      <span className="mx-2">›</span>
      <span className="text-[var(--brand-orange)] font-medium">
        Picing
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
      {/* ================= HERO (EXACT STRUCTURE YOU PROVIDED) ================= */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0"
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-orange-600 backdrop-blur"
            >
              <BadgeDollarSign size={14} />
              PRICING
            </motion.div>

            {/* ONE H1 */}
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-slate-900"
            >
              Pricing That Reflects Reality —
              <br />
              <span className="text-brand-gradient">Not Guesswork</span>
            </motion.h1>

            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="mt-4 text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-700 transition">
                Home
              </Link>
              <span className="mx-2">›</span>
              <span className="text-[var(--brand-orange)] font-medium">
                Pricing
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-3xl mx-auto text-lg text-slate-600"
            >
              Every business is different. Every system is different.
              <br />
              So we don’t price by “pages”, “features”, or random packages.
              <br />
              We price based on responsibility and impact.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {[
                "Business complexity",
                "Scope of problems being solved",
                "Level of responsibility and impact",
              ].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm text-orange-600 shadow-sm"
                >
                  {x}
                </span>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="mt-8 text-slate-600">
              This page exists to help you understand how pricing works — not to
              push you into a box.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-10 py-4 font-semibold text-white shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)] transition hover:opacity-90"
              >
                Request a Tailored Estimate <ArrowRight size={18} />
              </Link>

              <Link
                href="/how-we-work"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-10 py-4 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                How We Work
              </Link>
            </motion.div>
          </motion.div>
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

      {/* ================= SECTION 2 — IMAGE + CONTENT (WHITE BG) ================= */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                    alt="Pricing clarity and planning"
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-orange-500/10 blur-3xl" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-orange-600 backdrop-blur"
              >
                <ShieldCheck size={14} />
                IMPORTANT CONTEXT
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl font-semibold text-slate-900"
              >
                Why We Don’t Offer Flat Prices
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-4 text-slate-600">
                If two businesses pay the same amount but have different staff
                sizes, workflows, risks, and expectations — then one of them is
                overpaying or under-served.
              </motion.p>

              <motion.p variants={fadeUp} className="mt-2 text-slate-600">
                We avoid that.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-6 space-y-3">
                {[
                  "We scope based on real operational complexity",
                  "We design before we build",
                  "We explain what drives cost upfront",
                  "We focus on stability, not shortcuts",
                ].map((x) => (
                  <div key={x} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
                    <span>{x}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ================= SECTION 3 — TIERS ================= */}
      <section className="relative bg-soft-blobs py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-5xl"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-semibold text-slate-900"
            >
              We Work Across Three Common Engagement Levels
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-slate-600">
              These are guides, not fixed packages.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-8 lg:grid-cols-3"
            >
              {tiers.map((t) => (
                <TierCard key={t.name} tier={t} />
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ================= SECTION 4 — FACTORS ================= */}
      {/* ================= WHAT AFFECTS PRICING (IMAGE LEFT DESIGN, SAME CONTENT) ================= */}
<section className="bg-white py-20">
  <Container>
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* LEFT IMAGE */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Planning and pricing clarity"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="max-w-xl">
        {/* label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-orange-600">
          <SlidersHorizontal size={14} />
          WHAT AFFECTS PRICING
        </div>

        {/* heading */}
        <h2 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
          Key Factors That Influence <span className="italic">Cost</span>
        </h2>

        <p className="mt-4 text-slate-600">
          We explain all of this before work begins. No surprises.
        </p>

        {/* 2 cards (use same content items) */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">
              {factors[0]}
            </div>
            <p className="mt-2 text-sm text-slate-600">
              The more moving parts, the more structure we design to keep work
              clear and predictable.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">
              {factors[1]}
            </div>
            <p className="mt-2 text-sm text-slate-600">
              More roles usually means more permissions, approvals, and
              visibility rules.
            </p>
          </div>
        </div>

        {/* Remaining factors list (same content) */}
        <div className="mt-8 space-y-3">
          {factors.slice(2).map((x) => (
            <div key={x} className="flex gap-3 text-slate-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
              <span>{x}</span>
            </div>
          ))}
        </div>

        {/* optional CTA line like reference */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 py-3 font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Request a Tailored Estimate <ArrowRight size={18} />
          </Link>
          <Link
            href="/how-we-work"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            How We Work
          </Link>
        </div>
      </div>
    </div>
  </Container>
</section>

      {/* ================= SECTION 5 — WHAT YOU PAY FOR ================= */}
      <section className="bg-white py-20">
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
              <Sparkles size={14} />
              WHAT YOU’RE PAYING FOR
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-semibold text-slate-900"
            >
              Beyond the System Itself
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-slate-600">
              You’re not just paying for software. You’re paying for clarity,
              stability, and reduced risk.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 rounded-3xl border border-slate-200 bg-white/70 p-8 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
            >
              <ul className="grid gap-3 sm:grid-cols-2">
                {payFor.map((x) => (
                  <li key={x} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ================= SECTION 6 — WHAT WE DON’T DO (DARK BAND) ================= */}
      <section className="border-y border-white/10 bg-slate-950 py-20 text-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-semibold md:text-4xl"
            >
              What We Don’t Do
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-white/80">
              If price is the only factor, we’re not the right partner — and
              that’s okay.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-3 sm:grid-cols-2"
            >
              {weDont.map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left"
                >
                  <div className="flex gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 text-white/70" />
                    <span>{x}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ================= SECTION 7 — VALUE NOTE (OWNER QUOTES) ================= */}
      <section className="bg-white py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-5xl"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-semibold text-slate-900"
            >
              Systems Pay for Themselves Quietly
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-slate-600">
              Strong systems don’t just save money. They save energy, time, and
              mental space.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-4 md:grid-cols-3"
            >
              {ownerQuotes.map((q) => (
                <div
                  key={q}
                  className="rounded-3xl border border-slate-200 bg-white/70 p-7 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
                >
                  <div className="flex items-start gap-3">
                    <Quote className="mt-1 h-5 w-5 text-orange-600" />
                    <p className="text-slate-700">{q}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ================= FINAL CTA (WHITE BG + ROUND BRAND BUTTON) ================= */}
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
              The Right Question Isn’t “How Much Does It Cost?”
            </h2>

            <p className="mt-6 text-slate-600">
              The real question is:
              <br />
              <span className="font-semibold text-slate-900">
                “What is disorganization already costing me?”
              </span>
              <br />
              Let’s answer that first.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-10 py-4 font-semibold text-white shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)] transition hover:opacity-90"
            >
              Request a Tailored Estimate <ArrowRight size={18} />
            </Link>

            <p className="mt-4 text-sm text-slate-500">
              We price based on responsibility — not shortcuts.
            </p>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

/* ---------------- Components ---------------- */

function TierCard({ tier }: { tier: any }) {
  const Icon = tier.icon;

  return (
    <motion.article
      variants={fadeUp}
      className="rounded-3xl border border-slate-200 bg-white/70 p-8 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-orange-500/10 p-3 text-orange-600">
          <Icon size={22} />
        </div>
        <div className="min-w-0">
          <div className="text-xs font-semibold tracking-wide text-slate-500">
            {tier.name}
          </div>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">
            {tier.title}
          </h3>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <Block title="Typical focus" items={tier.focus} />
        <Block title="Common inclusions" items={tier.includes} />
        <Block title="Best for" items={tier.bestFor} />

        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
          <div className="text-sm font-semibold text-slate-900">Outcome</div>
          <div className="mt-1 text-slate-700">{tier.outcome}</div>
        </div>
      </div>
    </motion.article>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <ul className="mt-2 space-y-2 text-slate-600">
        {items.map((x) => (
          <li key={x} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
