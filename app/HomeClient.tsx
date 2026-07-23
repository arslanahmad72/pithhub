"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Workflow,
  Code2,
  Globe,
  Megaphone,
  PlugZap,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function cx(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl mx-auto px-6">{children}</div>;
}

function useMotion() {
  const reduce = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0 },
  };
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.07 } },
  };
  return { reduce, fadeUp, stagger };
}
function ContactMiniForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      business: formData.get("business"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          name="firstName"
          required
          className="w-full rounded-full bg-white/10 border border-white/15 px-4 py-3 text-sm outline-none placeholder:text-white/50"
          placeholder="First name"
        />
        <input
          name="lastName"
          required
          className="w-full rounded-full bg-white/10 border border-white/15 px-4 py-3 text-sm outline-none placeholder:text-white/50"
          placeholder="Last name"
        />
      </div>

      <input
        name="business"
        className="w-full rounded-full bg-white/10 border border-white/15 px-4 py-3 text-sm outline-none placeholder:text-white/50"
        placeholder="Business"
      />

      <div className="grid sm:grid-cols-2 gap-3">
        <input
          name="phone"
          className="w-full rounded-full bg-white/10 border border-white/15 px-4 py-3 text-sm outline-none placeholder:text-white/50"
          placeholder="Phone / WhatsApp"
        />
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-full bg-white/10 border border-white/15 px-4 py-3 text-sm outline-none placeholder:text-white/50"
          placeholder="Email"
        />
      </div>

      <textarea
        name="message"
        required
        className="w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-sm outline-none placeholder:text-white/50 min-h-[110px]"
        placeholder="What’s the main issue?"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-white text-slate-950 px-5 py-3 text-sm font-medium hover:opacity-95 transition disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send"}
      </button>

      {status === "success" && <p className="text-xs text-green-200">Message sent. We’ll reply shortly.</p>}
      {status === "error" && <p className="text-xs text-red-200">Something went wrong. Please try again.</p>}
    </form>
  );
}

/** ===== CONTENT (your copy) ===== */
const painList = [
  "Too much depends on you being physically present",
  "Staff mean well, but things still fall through the cracks",
  "Information is scattered across WhatsApp, Excel, emails, and memory",
  "You can’t easily see sales, jobs, or performance in one place",
  "Customers complain about delays or lack of updates",
  "Follow-ups don’t happen unless you push them",
  "You spend money on marketing but can’t clearly trace results",
  "Systems exist, but nothing connects properly",
  "When one key person is absent, things slow down or stop",
];

const solutions = [
  {
    title: "Clear Operations",
    desc: "Jobs, tasks, approvals, and responsibilities are defined and tracked — not assumed.",
    href: "/solutions#operations",
    num: "01",
  },
  {
    title: "Sales That Don’t Leak",
    desc: "Leads are captured, followed up, and measured properly — without chasing people.",
    href: "/solutions#sales",
    num: "02",
  },
  {
    title: "Customer Visibility",
    desc: "You know who’s waiting, what’s delayed, and why — before complaints happen.",
    href: "/solutions#support",
    num: "03",
  },
  {
    title: "Accurate Information",
    desc: "Inventory, billing, jobs, and reports live in one place, not five.",
    href: "/solutions#inventory",
    num: "04",
  },
];

const services = [
  {
    title: "Systems & Process Automation",
    desc: "We replace manual routines with clear digital workflows tailored to your business.",
    bullets: [
      "Customer and job tracking",
      "Inventory and ordering",
      "Invoicing and receivables",
      "Staff task accountability",
      "Simple dashboards and reports",
    ],
    href: "/services#systems",
  },
  {
    title: "Custom Software (Web & Mobile)",
    desc: "When off-the-shelf tools don’t fit, we build what does.",
    bullets: ["Designed around your operations", "Scales as you grow", "Easy for staff to use", "No unnecessary features"],
    href: "/services#software",
  },
  {
    title: "Websites That Actually Work",
    desc: "Your website should not just exist — it should support sales and operations.",
    bullets: ["Speak clearly to customers", "Convert enquiries properly", "Connect with WhatsApp, email, CRM"],
    href: "/services#websites",
  },
  {
    title: "Marketing With Accountability",
    desc: "If money is spent, results must be visible.",
    bullets: ["Lead tracking", "Clear reporting", "Know what’s working (and what’s not)"],
    href: "/services#marketing",
  },
];

const whoFor = [
  "Small businesses that feel disorganized",
  "Growing companies outgrowing spreadsheets",
  "Established businesses needing better control",
  "Owners tired of micromanaging",
  "Managers under pressure to “hold things together”",
];

const steps = [
  { n: "01", title: "We Listen", desc: "We understand how your business actually runs — not how it’s supposed to." },
  { n: "02", title: "We Design", desc: "We map processes, roles, and information flow." },
  { n: "03", title: "We Build", desc: "We create systems that fit your reality." },
  { n: "04", title: "We Support", desc: "We stay involved as things evolve." },
];
const SERVICES = [
  {
    title: "Business Systems",
    desc: "Clear workflows, ownership, and visibility across operations.",
    href: "/services/business-systems",
    num: "01",
  },
  {
    title: "Custom Software",
    desc: "Purpose-built web & mobile tools for your business.",
    href: "/services/custom-software",
    num: "02",
  },
  {
    title: "Websites",
    desc: "Websites that support sales, follow-up, and operations.",
    href: "/services/websites",
    num: "03",
  },
  {
    title: "Digital Marketing",
    desc: "Track results, not vanity metrics.",
    href: "/services/digital-marketing",
    num: "04",
  },
  {
    title: "System Integration",
    desc: "Connect tools so data flows automatically.",
    href: "/services/system-integration",
    num: "05",
  },
  {
    title: "Support & Training",
    desc: "Ensure systems are used correctly and evolve over time.",
    href: "/services/support",
    num: "06",
  },
];

export default function HomeClient() {
  const { fadeUp, stagger, reduce } = useMotion();

  return (
    <div className="bg-white text-slate-950">
      {/* HERO */}
     {/* HERO */}
<section className="bg-soft-blobs">
  <Container>
    <div className="py-12 md:py-16 grid lg:grid-cols-2 gap-10 items-center">
      {/* LEFT COPY */}
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600"
        >
          <span className="h-2 w-2 rounded-full bg-brand-gradient" />
          Jamaica • PithHub & Digital Solutions
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-5 text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight"
        >
          Your business doesn’t need more effort.
          <span className="block mt-2">
            It needs{" "}
            <span className="text-brand-gradient">better systems</span>.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-lg text-slate-700 leading-relaxed max-w-xl"
        >
          We design custom digital systems that simplify operations, reduce errors,
          and give business owners real control and visibility.
        </motion.p>

        <motion.p variants={fadeUp} className="mt-3 text-sm text-slate-600 max-w-xl">
          No confusing software. No unnecessary complexity. Just solutions built
          around how your business actually works.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-7 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-gradient text-white px-6 py-3 text-sm font-medium shadow-[0_10px_40px_-15px_rgba(0,0,0,.45)] hover:opacity-95 transition"
          >
            Let’s Fix the Problems in Your Business <span className="ml-2">→</span>
          </Link>

          <Link
            href="/solutions"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-white transition"
          >
            See If This Is Right for You
          </Link>
        </motion.div>

        {/* MINI STAT CARDS */}
        <motion.div variants={fadeUp} className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
          {[
            { k: "Focus", v: "Clarity" },
            { k: "Outcome", v: "Visibility" },
            { k: "Style", v: "Simple" },
          ].map((x) => (
            <div
              key={x.k}
              className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur px-4 py-4 shadow-[0_18px_60px_-55px_rgba(0,0,0,.45)]"
            >
              <div className="text-xs text-slate-500">{x.k}</div>
              <div className="mt-1 font-semibold text-slate-950">{x.v}</div>
            </div>
          ))}
        </motion.div>

        {/* TRUST STRIP */}
        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3 text-xs text-slate-600">
          {["No disruption", "Owner-level insight", "Built around your workflow"].map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-4 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brandPrimary" />
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT: DASHBOARD IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative"
      >
        <div className="relative rounded-[28px] overflow-hidden border border-slate-200 bg-white/70 backdrop-blur shadow-[0_30px_100px_-60px_rgba(0,0,0,.6)]">
          {/* top badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="text-xs rounded-full bg-white/80 backdrop-blur border border-slate-200 px-3 py-1 text-slate-700">
              Dashboard preview
            </span>
          </div>

          {/* DASHBOARD IMAGE */}
          <Image
            src="/dashboard-preview.png"
            alt="Business dashboard preview"
            width={1600}
            height={1100}
            className="w-full h-auto"
            priority
          />

          {/* bottom helper text */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-white/80 to-transparent">
            <p className="text-xs text-slate-600">
              Visual mock only — your system will match your exact business.
            </p>
          </div>
        </div>

        {/* BRAND GLOW */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brandPrimary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-brandPrimary/15 blur-3xl" />
      </motion.div>
    </div>

    {/* Trusted by strip (placeholder) */}
    <div className="pb-10">
      <div className="text-xs text-slate-500 mb-3">
        Built for business owners who want less chaos and more control
      </div>
      <div className="flex flex-wrap items-center gap-6 opacity-70">
        {["Retail", "Construction", "Clinics", "Logistics", "Hospitality", "Services"].map((l) => (
          <div key={l} className="text-sm font-medium text-slate-600">
            {l}
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>


      {/* RECOGNITION */}
     {/* PAIN SECTION — SLIDER STYLE (4 CARDS) */}
<section className="py-16 md:py-20">
  <Container>
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Top row: heading + stats */}
      <div className="grid lg:grid-cols-1 text-center gap-10 items-start">
        <div>
          

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]"
          >
            <span className="block font-serif italic font-medium text-slate-700 mt-2">
            If You’re Honest, This Is Probably What’s Happening
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-5 text-slate-700 ">
           This is where most owner feel it immediately -- because it's real.
          </motion.p>
        </div>

      
      </div>

      {/* Slider */}
      <PainSlider />
      <motion.p variants={fadeUp} className="mt-5 text-slate-700 bg-black text-white text-center p-3 rounded-full">
      Most businesses don’t have a people problem. They have a systems problem
                </motion.p>
    </motion.div>
  </Container>
</section>


      {/* REFRAME (image + copy) */}
      <section className="py-14 md:py-18 bg-soft-blobs">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-semibold tracking-tight">
                The Issue Isn’t That Your Business Is Growing —
                <br className="hidden md:block" />
                <span className="text-brand-gradient">It’s That Your Systems Didn’t Grow With It</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-4 text-slate-700 leading-relaxed">
                Most businesses start simple. Over time, more customers, more staff, more pressure.
                What used to “work” quietly becomes manual, reactive, stressful, and risky.
                You feel it — even if you can’t fully explain it.
              </motion.p>

              <motion.div
  variants={stagger}
  className="mt-7 grid sm:grid-cols-2 gap-4"
>
  {[
    {
      title: "Manual",
      desc: "Work exists in people’s heads, chats, and scattered files.",
    },
    {
      title: "Reactive",
      desc: "Everything moves only when you personally push it.",
    },
    {
      title: "Stressful",
      desc: "Delays, mistakes, and repeats create constant pressure.",
    },
    {
      title: "Risky",
      desc: "When one key person is absent, things slow down or stop.",
    },
  ].map((item) => (
    <motion.div
      key={item.title}
      variants={fadeUp}
      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur px-5 py-4 shadow-[0_14px_50px_-40px_rgba(0,0,0,.45)]"
    >
      {/* CHECK ICON */}
      <div className="mt-0.5 h-9 w-9 rounded-full bg-slate-950 grid place-items-center flex-shrink-0">
        <span className="text-white text-sm font-bold">✓</span>
      </div>

      {/* TEXT */}
      <div>
        <h4 className="font-semibold text-slate-950">
          {item.title}
        </h4>
        <p className="mt-1 text-sm text-slate-600 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_20px_70px_-45px_rgba(0,0,0,.45)]">
                <Image
                  src="/home_image.png"
                  alt="Placeholder"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* WHAT WE DO */}
     {/* WHAT WE DO — DIGIPRO STYLE */}
<section className="py-16 md:py-20 bg-soft-blobs">
  <Container>
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      {/* LEFT */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >

        <motion.h2
          variants={fadeUp}
          className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]"
        >
          This Is What We <span className="text-brand-gradient">Actually</span> Do{" "}
          <span className="block font-serif italic font-medium text-slate-700 mt-2">
            For Clarity & Control
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-slate-700 leading-relaxed max-w-xl"
        >
          We go inside your business, understand how things really happen day-to-day,
          and then design custom digital systems that remove confusion and give owners real oversight.
        </motion.p>

        {/* Image Card */}
        <motion.div variants={fadeUp} className="mt-8">
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_90px_-60px_rgba(0,0,0,.6)]">
            <Image
              src="/image_2.jpeg"
              alt="Business discussion"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
            {/* bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/60 to-transparent" />
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-5"
      >
        {[
          {
            title: "Replace confusion with structure",
            desc: "Clear steps, clear owners, clear accountability — so work moves without chasing.",
          },
          {
            title: "Replace memory with visibility",
            desc: "Key numbers and status are visible without asking ten questions.",
          },
          {
            title: "Replace manual work with automation",
            desc: "Less copying, less retyping, fewer errors — faster flow.",
          },
          {
            title: "Reduce dependence on specific individuals",
            desc: "Your business shouldn’t pause when one person is absent.",
          },
          {
            title: "Give owners and managers clear oversight",
            desc: "See what’s happening, what’s late, and what needs attention — instantly.",
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="group rounded-[22px] border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-[0_18px_60px_-50px_rgba(0,0,0,.55)] hover:-translate-y-0.5 transition"
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 h-10 w-10 rounded-full bg-brand-gradient grid place-items-center shadow-sm">
                <span className="text-white text-sm font-bold">✓</span>
              </div>

              <div>
                <h3 className="font-semibold text-lg tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* subtle gradient border on hover */}
            <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-brandPrimary/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Bottom statement (like your "We don’t sell software") */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mt-10 rounded-full border border-slate-200 bg-white/70 text-center backdrop-blur p-7 shadow-[0_18px_60px_-50px_rgba(0,0,0,.55)]"
    >
      <p className="text-lg text-slate-900 font-semibold">
        We don’t sell software.
      </p>
      <p className="mt-1 text-slate-700">
        We design clarity.
      </p>
    </motion.div>
  </Container>
</section>


      {/* SOLUTIONS PANEL (purple section like example) */}
      {/* SOLUTIONS — CENTERED HEADER, SAME BACKGROUND, WITH ICONS */}
<section className="py-16 md:py-20">
  <Container>
    <div className="rounded-[28px] overflow-hidden bg-brand-gradient shadow-[0_25px_90px_-55px_rgba(0,0,0,.55)] relative">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-white/25 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative px-6 md:px-10 py-10 md:py-12"
      >
        {/* CENTERED HEADER */}
        <div className="text-center max-w-3xl mx-auto">


          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white"
          >
            Outcomes that reduce chaos and increase control
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-white/85 text-sm md:text-base"
          >
            Practical systems that replace guesswork with clarity — without adding
            complexity or micromanagement.
          </motion.p>
        </div>

        {/* ICONS (inline SVG) */}
        {(() => {
          const IconOps = (props: { className?: string }) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
              <path d="M7 7h10v10H7z" />
              <path d="M4 4h4v4H4zM16 16h4v4h-4z" />
              <path d="M8 8l8 8" />
            </svg>
          );

          const IconSales = (props: { className?: string }) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
              <path d="M4 19V5" />
              <path d="M4 19h16" />
              <path d="M7 14l3-3 3 2 5-6" />
              <path d="M18 7v4h-4" />
            </svg>
          );

          const IconChat = (props: { className?: string }) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
              <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
              <path d="M7 9h10M7 13h7" />
            </svg>
          );

          const IconClipboard = (props: { className?: string }) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
              <path d="M9 4h6a2 2 0 0 1 2 2v2H7V6a2 2 0 0 1 2-2z" />
              <path d="M7 8h10v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8z" />
              <path d="M9 12h6M9 16h6" />
            </svg>
          );

          const IconCheckCircle = (props: { className?: string }) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
              <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
              <path d="M7.5 12.5l3 3 6-7" />
            </svg>
          );

          const items = [
            {
              title: "Clear Operations",
              desc: "Jobs, tasks, approvals, and responsibilities are defined and tracked — not assumed.",
              href: "/solutions#operations",
              Icon: IconOps,
            },
            {
              title: "Sales That Don’t Leak",
              desc: "Leads are captured, followed up, and measured properly — without chasing people.",
              href: "/solutions#sales",
              Icon: IconSales,
            },
            {
              title: "Customer Visibility",
              desc: "You know who’s waiting, what’s delayed, and why — before complaints happen.",
              href: "/solutions#support",
              Icon: IconChat,
            },
            {
              title: "Accurate Information",
              desc: "Inventory, billing, jobs, and reports live in one place — not five.",
              href: "/solutions#inventory",
              Icon: IconClipboard,
            },
          ];

          return (
            <>
              {/* SOLUTION CARDS */}
              <motion.div variants={stagger} className="mt-10 grid md:grid-cols-2 gap-5">
                {items.map((s) => (
                  <motion.div
                    key={s.title}
                    variants={fadeUp}
                    className="rounded-[26px] bg-white text-slate-950 p-7 shadow-[0_18px_60px_-50px_rgba(0,0,0,.55)]"
                  >
                    {/* ICON CIRCLE */}
                    <div className="h-12 w-12 rounded-full bg-slate-950 grid place-items-center shadow-sm">
                      <s.Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="mt-5 font-semibold text-lg tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">{s.desc}</p>

                    <Link
                      href={s.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brandPrimary hover:opacity-80 transition"
                    >
                      View solution <span>→</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* OWNER INSIGHT BAR */}
              <motion.div
                variants={fadeUp}
                className="mt-6 rounded-[26px] bg-white text-slate-950 p-6 shadow-[0_18px_60px_-55px_rgba(0,0,0,.45)] flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <div className="font-semibold text-lg">Owner-Level Insight</div>
                  <p className="mt-1 text-sm text-slate-600">
                    You can see what’s happening without asking ten questions.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                  <span className="h-7 w-7 rounded-full border border-slate-200 bg-white grid place-items-center">
                    <IconCheckCircle className="h-4 w-4 text-slate-900" />
                  </span>
                  Visibility without micromanaging
                </div>
              </motion.div>
            </>
          );
        })()}

        {/* CTA ROW */}
        <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center rounded-full bg-white text-slate-950 px-6 py-3 text-sm font-medium hover:opacity-95 transition"
          >
            Explore the full Solutions page
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
          >
            Tell us what’s broken — we’ll map the fix
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </Container>
</section>


      {/* SERVICES (modern cards like agency) */}
      <section className="bg-white">
        <Container>
        <div className="mx-auto px-6 py-16">
    {/* Heading */}
    <div className="text-center">
  

      <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
      Problem → Relief
            </h2>

      <p className="mt-4 text-slate-600 leading-relaxed">
        Each service exists to remove a specific type of operational stress.
        Click into any service to see exactly what we build and how it works.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Business Systems & Automation",
          desc: "Replace manual coordination with clear workflows and accountability.",
          href: "/services/business-systems",
          num: "01",
          icon: Workflow,
        },
        {
          title: "Custom Software (Web & Mobile)",
          desc: "Purpose-built tools designed around how your business actually operates.",
          href: "/services/custom-software",
          num: "02",
          icon: Code2,
        },
        {
          title: "Websites That Support Operations",
          desc: "Websites that connect to sales, follow-up, and internal systems.",
          href: "/services/websites",
          num: "03",
          icon: Globe,
        },
        {
          title: "Digital Marketing With Accountability",
          desc: "Know exactly what’s working, what’s not, and why.",
          href: "/services/digital-marketing",
          num: "04",
          icon: Megaphone,
        },
        {
          title: "System Integration & Automation",
          desc: "Connect your tools so data flows automatically without duplication.",
          href: "/services/system-integration",
          num: "05",
          icon: PlugZap,
        },
        {
          title: "Support, Training & Improvement",
          desc: "Ongoing support so systems stay useful as your business evolves.",
          href: "/services/support",
          num: "06",
          icon: LifeBuoy,
        },
      ].map((s) => {
        const Icon = s.icon;
        return (
          <Link
            key={s.title}
            href={s.href}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
          >
            {/* Faint number */}
            <div className="absolute -top-6 -right-6 text-[90px] font-semibold text-slate-200/60 pointer-events-none">
              {s.num}
            </div>

            {/* Icon */}
            <div
              className="h-12 w-12 rounded-full flex items-center justify-center border"
              style={{
                borderColor: "rgba(255,122,0,0.35)",
                background: "rgba(255,122,0,0.10)",
              }}
            >
              <Icon className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              {s.title}
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {s.desc}
            </p>

            <div
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--brand-orange)" }}
            >
              View details <span aria-hidden>→</span>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
        </Container>
</section>

 {/* SECTION 7 — WHO THIS IS FOR */}
<section className="py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* IMAGE */}
      <div className="relative">
        <div className="overflow-hidden rounded-3xl shadow-[0_30px_80px_-40px_rgba(0,0,0,.45)]">
          <img
            src="/image_3.png"
            alt="Business team discussion"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div>
  

        <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          Built for Real Businesses{" "}
          <span className="block font-serif italic font-medium text-slate-700">
            — Not Just Big Corporations
          </span>
        </h2>

        <p className="mt-5 text-slate-700 leading-relaxed max-w-xl">
          Whether you’re small and feeling disorganized, or established and needing
          tighter control — we build systems that fit your reality and reduce day-to-day pressure.
        </p>

        {/* LIST */}
        <ul className="mt-6 space-y-3">
          {[
            "Small businesses that feel disorganized",
            "Growing companies outgrowing spreadsheets",
            "Established businesses needing better control",
            "Owners tired of micromanaging",
            "Managers under pressure to “hold things together”",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-brand-gradient text-white grid place-items-center text-sm">
                ✓
              </span>
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-gradient text-white px-6 py-3 text-sm font-medium shadow hover:opacity-95 transition"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* PROCESS (numbered steps like sample) */}
    {/* PROCESS — COMPACT, SAME CARD STYLE */}
<section className="py-12 md:py-14 bg-slate-950 text-white">
  <Container>
    {/* HEADER */}
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="text-center"
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-medium"
      >
        How we work
      </motion.span>

      <motion.h2
        variants={fadeUp}
        className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight"
      >
        A Clear, Calm Process
      </motion.h2>
    </motion.div>

    {/* STEP CARDS */}
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-8 grid md:grid-cols-2 gap-5"
    >
      {[
        {
          step: "Step 1",
          title: "We Listen",
          desc: "We understand how your business actually runs — not how it’s supposed to.",
        },
        {
          step: "Step 2",
          title: "We Design",
          desc: "We map processes, roles, and information flow.",
        },
        {
          step: "Step 3",
          title: "We Build",
          desc: "We create systems that fit your reality.",
        },
        {
          step: "Step 4",
          title: "We Support",
          desc: "We stay involved as things evolve.",
        },
      ].map((item) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          className="rounded-3xl bg-white text-slate-950 p-5 shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
        >
          <span className="inline-flex items-center rounded-full bg-slate-950 text-white text-xs px-3 py-1 font-medium">
            {item.step}
          </span>

          <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>

    {/* REASSURANCE CARDS */}
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-8 grid md:grid-cols-3 gap-5"
    >
      {[
        {
          title: "No disruption",
          desc: "We implement in phases so the business keeps moving.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
              <path d="M9 12l2 2 4-5" />
            </svg>
          ),
        },
        {
          title: "No overwhelm",
          desc: "We design simple workflows staff can actually follow.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M20 13a8 8 0 1 0-16 0" />
              <path d="M12 13l3-3" />
            </svg>
          ),
        },
        {
          title: "No confusion",
          desc: "Roles, steps, and ownership are clear — and visible.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l2.5 2.5L16 9" />
            </svg>
          ),
        },
      ].map((item) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          className="rounded-3xl bg-white text-slate-950 p-5 shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
        >
          <div className="h-10 w-10 rounded-full bg-slate-950 text-white grid place-items-center mb-4">
            {item.icon}
          </div>

          <h4 className="font-semibold">{item.title}</h4>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>

    {/* CTA */}
    <motion.div variants={fadeUp} className="mt-10 flex justify-center">
      <Link
        href="/how-we-work"
        className="inline-flex items-center justify-center rounded-full bg-white text-slate-950 px-6 py-3 text-sm font-medium hover:opacity-95 transition"
      >
        See the full process
      </Link>
    </motion.div>
  </Container>
</section>


      {/* TRUST SIGNAL */}
     {/* TRUST — SAME DESIGN + CONTENT */}
<section className="py-14 md:py-18 bg-soft-blobs">
  <Container>
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="text-center"
    >
    

      <motion.h2
        variants={fadeUp}
        className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-slate-950"
      >
        We Understand Business Pressure
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mt-3 text-slate-600 max-w-3xl mx-auto leading-relaxed"
      >
        Deadlines. Staff issues. Customer expectations. Cash flow. Growth. Our role is to remove friction — not add
        another thing for you to manage.
      </motion.p>

      {/* CARDS */}
      <motion.div variants={stagger} className="mt-10 grid md:grid-cols-3 gap-6 text-left">
        {[
          {
            title: "Protect cashflow",
            desc: "Reduce leakage, delays, and avoidable rework",
            icon: (
              // Shield
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
                <path d="M9 12l2 2 4-5" />
              </svg>
            ),
          },
          {
            title: "Reduce friction",
            desc: "Make the day-to-day calmer and more predictable.",
            icon: (
              // Workflow / nodes
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <circle cx="7" cy="7" r="3" />
                <circle cx="17" cy="17" r="3" />
                <path d="M9.5 9.5l5 5" />
                <path d="M14 7h7v7" />
              </svg>
            ),
          },
          {
            title: "Increase control",
            desc: "Visibility for owners and managers — without micromanaging.",
            icon: (
              // Gauge
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M20 13a8 8 0 1 0-16 0" />
                <path d="M12 13l3-3" />
              </svg>
            ),
          },
        ].map((c) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            className="rounded-3xl border border-slate-200 bg-white/75 backdrop-blur p-6 shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
          >
            <div className="h-11 w-11 rounded-full bg-slate-950 text-white grid place-items-center mb-4">
              {c.icon}
            </div>

            <h3 className="font-semibold text-slate-950">{c.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </Container>
</section>


      {/* FINAL CTA */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="rounded-[28px] overflow-hidden bg-brand-gradient">
            <div className="px-6 md:px-10 py-10 md:py-12 text-white relative">
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-white/25 blur-3xl" />
                <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
              </div>

              <div className="relative grid lg:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Start With a Conversation</h2>
                  <p className="mt-4 text-white/85 leading-relaxed">
                    You don’t need to know what software you need. You just need to know what’s not working.
                    We’ll help you make sense of it.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-white text-slate-950 px-5 py-3 text-sm font-medium hover:opacity-95 transition"
                    >
                      Talk to Us
                    </Link>
                    <Link
                      href="/solutions"
                      className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/15 transition"
                    >
                      Explore Solutions
                    </Link>
                  </div>

                  <p className="mt-8 text-sm text-white/70">
                    Clarity over complexity. Systems over stress. Control over chaos.
                  </p>
                </div>

                {/* Mini form shell (UI only) */}
                <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur p-6">
                  <p className="text-sm text-white/85 font-medium">Talk to Us</p>
                  <p className="mt-1 text-xs text-white/70">Share what’s breaking down. We'll reply with clear next steps</p>

                  <div className="mt-5 grid gap-3">
                  <ContactMiniForm />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
function PainSlider() {
  const cards = useMemo(
    () => [
      {
        title: "Owner Dependence",
        role: "Too much depends on you",
        quote:
          "Too much depends on you being physically present — when you’re away, things slow down or stop.",
      },
      {
        title: "Leads Falling Through",
        role: "Follow-ups aren’t consistent",
        quote:
          "Follow-ups don’t happen unless you push them. Leads leak because there’s no system holding the pipeline.",
      },
      {
        title: "Information Scattered",
        role: "WhatsApp + Excel + memory",
        quote:
          "Information is scattered across WhatsApp, Excel, emails, and memory — nothing connects properly.",
      },
      {
        title: "Low Visibility",
        role: "You can’t see performance",
        quote:
          "You can’t easily see sales, jobs, or performance in one place — so decisions are reactive, not controlled.",
      },
      {
        title: "Customer Complaints",
        role: "Delays & no updates",
        quote:
          "Customers complain about delays or lack of updates because status isn’t visible until it becomes a problem.",
      },
      {
        title: "Marketing Unclear",
        role: "Money spent, results unknown",
        quote:
          "You spend money on marketing but can’t clearly trace results — because tracking is missing or broken.",
      },
    ],
    []
  );

  // how many cards visible per slide on desktop
  const perViewDesktop = 4;
  const perViewTablet = 2;
  const perViewMobile = 1;

  const wrapRef = useRef<HTMLDivElement | null>(null);

  const [perView, setPerView] = useState(perViewDesktop);
  const [gap, setGap] = useState(24);
  const [cardW, setCardW] = useState(320);

  // We create clones to do seamless loop:
  // [last N clones] + [real items] + [first N clones]
  const clones = perView;
  const extended = useMemo(() => {
    const head = cards.slice(0, clones);
    const tail = cards.slice(-clones);
    return [...tail, ...cards, ...head];
  }, [cards, clones]);

  // Start at first REAL slide index inside extended array
  const [index, setIndex] = useState(clones);
  const [isAnimating, setIsAnimating] = useState(true);

  // Measure widths (responsive)
  useEffect(() => {
    const measure = () => {
      const w = wrapRef.current?.clientWidth ?? 1200;

      // Decide perView by width
      let pv = perViewDesktop;
      if (w < 640) pv = perViewMobile;
      else if (w < 1024) pv = perViewTablet;

      setPerView(pv);

      // gap (px)
      const g = w < 640 ? 16 : 24;
      setGap(g);

      // card width
      const totalGap = g * (pv - 1);
      const cw = Math.floor((w - totalGap) / pv);
      setCardW(cw);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // When perView changes, reset loop properly
  useEffect(() => {
    // reset to first real index based on new clones
    setIsAnimating(false);
    setIndex(perView);
    const t = setTimeout(() => setIsAnimating(true), 30);
    return () => clearTimeout(t);
  }, [perView]);

  const slideStep = cardW + gap;

  const next = () => {
    setIsAnimating(true);
    setIndex((i) => i + 1);
  };

  const prev = () => {
    setIsAnimating(true);
    setIndex((i) => i - 1);
  };

  // Auto play
  useEffect(() => {
    const t = setInterval(() => next(), 4500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardW, gap, perView]);

  // Seamless loop jump (after animation ends)
  // If we go into clones region, snap back (without animation)
  useEffect(() => {
    const realLen = cards.length;
    const min = perView; // first real
    const max = perView + realLen - 1; // last real

    if (index < min) {
      // moved into left clones -> snap to end real
      const snapTo = perView + realLen - 1;
      const t = setTimeout(() => {
        setIsAnimating(false);
        setIndex(snapTo);
        requestAnimationFrame(() => setIsAnimating(true));
      }, 380);
      return () => clearTimeout(t);
    }

    if (index > max) {
      // moved into right clones -> snap to start real
      const snapTo = perView;
      const t = setTimeout(() => {
        setIsAnimating(false);
        setIndex(snapTo);
        requestAnimationFrame(() => setIsAnimating(true));
      }, 380);
      return () => clearTimeout(t);
    }
  }, [index, cards.length, perView]);

  const translateX = -(index * slideStep);

  return (
    <div className="mt-10">
      {/* arrows */}
      <div className="flex items-center justify-end mb-6">
      
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="h-11 w-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition grid place-items-center"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="h-11 w-11 rounded-full bg-brand-gradient text-white hover:opacity-95 transition grid place-items-center"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {/* viewport */}
      <div ref={wrapRef} className="overflow-hidden">
        {/* track */}
        <div
          className="flex"
          style={{
            gap: `${gap}px`,
            transform: `translate3d(${translateX}px, 0, 0)`,
            transition: isAnimating ? "transform 380ms cubic-bezier(.22,.61,.36,1)" : "none",
            willChange: "transform",
          }}
        >
          {extended.map((c, i) => (
            <div
              key={`${c.title}-${i}`}
              style={{ width: `${cardW}px`, flex: `0 0 ${cardW}px` }}
              className="relative rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_-65px_rgba(0,0,0,.55)]"
            >
             
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-slate-50 border border-slate-200 grid place-items-center font-semibold text-slate-700">
                  {c.title.slice(0, 1)}
                </div>
                <div>
                  <div className="font-semibold text-slate-950">{c.title}</div>
                  <div className="text-xs text-brandPrimary font-medium">{c.role}</div>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {c.quote}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* dots (based on real slides only) */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: cards.length }).map((_, i) => {
          const realIndex = index - perView;
          const active = ((realIndex % cards.length) + cards.length) % cards.length === i;
          return (
            <span
              key={i}
              className={[
                "h-2.5 rounded-full transition",
                active ? "w-8 bg-brandPrimary" : "w-2.5 bg-slate-300",
              ].join(" ")}
            />
          );
        })}
      </div>
    </div>
  );
}
