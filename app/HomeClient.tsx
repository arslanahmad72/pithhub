"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";


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

export default function HomeClient() {
  const { fadeUp, stagger, reduce } = useMotion();

  return (
    <div className="bg-white text-slate-950">
      {/* HERO */}
      <section className="bg-soft-blobs">
        <Container>
          <div className="py-12 md:py-16 grid lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600"
              >
                <span className="h-2 w-2 rounded-full bg-brand-gradient" />
                Jamaica • PithHub & Digital Solutions
              </motion.div>

              <motion.h1 variants={fadeUp} className="mt-5 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                Your Business Should Not Feel{" "}
                <span className="text-brand-gradient">This Hard</span> to Run
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-4 text-lg text-slate-700 leading-relaxed">
                We design simple digital systems that remove confusion, reduce dependence on people, and give business owners real control over operations, sales, and visibility.
              </motion.p>

              <motion.p variants={fadeUp} className="mt-3 text-sm text-slate-600">
                No tech talk. No guesswork. Just systems built around how your business actually works.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-gradient text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition"
                >
                  Let’s Talk About What’s Breaking Down
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-white transition"
                >
                  Explore Solutions
                </Link>
              </motion.div>

              {/* Mini proof row (optional placeholder) */}
              <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4 text-sm text-slate-600">
                <div className="flex -space-x-2">
                  {["A", "B", "C", "D"].map((x) => (
                    <div
                      key={x}
                      className="h-9 w-9 rounded-full border border-white bg-slate-100 grid place-items-center text-xs font-semibold"
                    >
                      {x}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-medium text-slate-900">Business owners & managers</div>
                  <div className="text-xs text-slate-500">Operations clarity • visibility • control</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right image card */}
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white/60 backdrop-blur shadow-[0_20px_70px_-45px_rgba(0,0,0,.45)]">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                  alt="Placeholder team"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
                {/* play button */}
                <div className="absolute inset-0 grid place-items-center">
                  <button
                    type="button"
                    className="group h-14 w-14 rounded-full bg-white/85 backdrop-blur border border-white/40 shadow-sm grid place-items-center hover:scale-[1.03] transition"
                    aria-label="Play"
                  >
                    <span className="h-0 w-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-brandPrimary ml-1" />
                  </button>
                </div>
              </div>

              {/* floating stat chip */}
              <div className="absolute -bottom-6 left-6 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="text-xs text-slate-500">Outcome focus</div>
                <div className="text-sm font-semibold text-slate-900">Clarity • Control • Visibility</div>
              </div>
            </motion.div>
          </div>

          {/* Trusted by strip (placeholder logos) */}
          <div className="pb-10">
            <div className="text-xs text-slate-500 mb-3">Built for business owners who want less chaos and more control</div>
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
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brandPrimary"
          >
            ✨ Systems Reality Check
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]"
          >
            If You’re Honest,{" "}
            <span className="block font-serif italic font-medium text-slate-700 mt-2">
              This Is Probably What’s Happening
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-5 text-slate-700 max-w-xl">
            These patterns show up when a business grows faster than its systems.
            If you recognize even 2–3 of these, you’re not alone.
          </motion.p>
        </div>

        <div className="lg:justify-self-end">
          <motion.div variants={fadeUp} className="text-slate-700 max-w-md">
            <p className="text-sm leading-relaxed">
              Most businesses don’t have a people problem.
              <span className="block font-medium text-slate-950 mt-1">
                They have a systems problem.
              </span>
            </p>

            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-semibold text-brandPrimary">4.9</div>
                <div className="text-xs tracking-widest uppercase text-slate-500 mt-1">
                  clarity score
                </div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-brandPrimary">99%</div>
                <div className="text-xs tracking-widest uppercase text-slate-500 mt-1">
                  issues repeat
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider */}
      <PainSlider />
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

              <motion.div variants={stagger} className="mt-7 grid sm:grid-cols-2 gap-3">
                {["Manual", "Reactive", "Stressful", "Risky"].map((t) => (
                  <motion.div key={t} variants={fadeUp} className="rounded-full border border-slate-200 bg-white/70 backdrop-blur px-5 py-4">
                    <p className="font-medium">{t}</p>
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
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
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
        <motion.p
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brandPrimary"
        >
          😎 Your Partner
        </motion.p>

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
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
              alt="Business discussion"
              width={1600}
              height={900}
              className="w-full h-auto"
            />

            {/* Play Button */}
            <button
              type="button"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
              aria-label="Play"
            >
              <span className="relative grid place-items-center h-16 w-16 rounded-full bg-brand-gradient shadow-lg">
                <span className="h-0 w-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-white ml-1" />
                <span className="absolute inset-0 rounded-full ring-8 ring-white/20 group-hover:ring-white/30 transition" />
              </span>
            </button>

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
      className="mt-10 rounded-[26px] border border-slate-200 bg-white/70 backdrop-blur p-7 shadow-[0_18px_60px_-50px_rgba(0,0,0,.55)]"
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
      <section className="py-16 md:py-20">
        <Container>
          <div className="rounded-[28px] overflow-hidden bg-brand-gradient shadow-[0_25px_90px_-55px_rgba(0,0,0,.55)]">
            <div className="px-6 md:px-10 py-10 md:py-12 text-white relative">
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-white/25 blur-3xl" />
                <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
              </div>

              <div className="relative">
                <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                  <motion.p variants={fadeUp} className="text-white/85 text-sm">
                    What That Looks Like in Real Life
                  </motion.p>
                  <motion.h2 variants={fadeUp} className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
                    Outcomes that reduce chaos and increase control
                  </motion.h2>

                  <motion.div variants={stagger} className="mt-8 grid md:grid-cols-2 gap-5">
                    {solutions.map((s) => (
                      <motion.div key={s.title} variants={fadeUp} className="rounded-3xl bg-white text-slate-950 p-6 shadow-sm">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs text-slate-500">{s.num}</p>
                            <h3 className="mt-1 font-semibold text-lg">{s.title}</h3>
                            <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
                          </div>
                          <div className="h-10 w-10 rounded-full bg-slate-950/5 grid place-items-center text-sm font-semibold">
                            ↗
                          </div>
                        </div>
                        <Link
                          href={s.href}
                          className="mt-5 inline-flex text-sm font-medium underline decoration-slate-400 underline-offset-4"
                        >
                          View in Solutions
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/solutions"
                      className="inline-flex items-center justify-center rounded-full bg-white text-slate-950 px-5 py-3 text-sm font-medium hover:opacity-95 transition"
                    >
                      Explore the full Solutions page
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/15 transition"
                    >
                      Tell us what’s broken — we’ll map the fix
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES (modern cards like agency) */}
      <section className="py-14 md:py-18 bg-soft-blobs">
        <Container>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-semibold tracking-tight">
              Services (Problem → Relief)
            </motion.h2>

            <motion.div variants={stagger} className="mt-8 grid lg:grid-cols-2 gap-6">
              {services.map((srv) => (
                <motion.div
                  key={srv.title}
                  variants={fadeUp}
                  className="rounded-3xl border border-slate-200 bg-white/75 backdrop-blur p-6 shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">{srv.title}</h3>
                      <p className="mt-2 text-slate-700">{srv.desc}</p>
                    </div>
                    <Link href={srv.href} className="text-sm font-medium text-brandPrimary underline underline-offset-4">
                      Details
                    </Link>
                  </div>

                  <div className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    {srv.bullets.map((b) => (
                      <div key={b} className="rounded-full border border-slate-200 bg-white px-4 py-3">
                        {b}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center ">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-brand-gradient text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition"
              >
                View all services
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* WHO IT'S FOR */}
    {/* WHO THIS IS FOR / WHAT WE OFFER – SIMPLE SPLIT */}
<section className="py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* IMAGE */}
      <div className="relative">
        <div className="overflow-hidden rounded-3xl shadow-[0_30px_80px_-40px_rgba(0,0,0,.45)]">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            alt="Business team discussion"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-brandPrimary">
          🎁 What We Offer
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          Cutting-Edge{" "}
          <span className="block font-serif italic font-medium text-slate-700">
            PithHub & Digital Solutions
          </span>
        </h2>

        <p className="mt-5 text-slate-700 leading-relaxed max-w-xl">
          We help real businesses replace chaos with clarity by designing systems
          that support daily operations, sales, and decision-making — without
          unnecessary complexity.
        </p>

        {/* CHECKLIST */}
        <ul className="mt-6 space-y-3">
          {[
            "Built around how your business actually works",
            "Improves visibility across sales, jobs, and performance",
            "Reduces dependence on individuals and memory",
            "Scales as your business grows",
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
            Contact Us
          </a>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* PROCESS (numbered steps like sample) */}
      <section className="py-16 md:py-20 bg-slate-950 text-white">
        <Container>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.p variants={fadeUp} className="text-white/70 text-sm">
              A Clear, Calm Process
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
              No disruption. No overwhelm. No confusion.
            </motion.h2>

            <motion.div variants={stagger} className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st) => (
                <motion.div key={st.title} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs text-white/60">{st.n}</p>
                  <h3 className="mt-2 font-semibold">{st.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{st.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center ">
              <Link
                href="/how-we-work"
                className="inline-flex items-center justify-center rounded-full bg-white text-slate-950 px-5 py-3 text-sm font-medium hover:opacity-95 transition"
              >
                See the full process
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* TRUST SIGNAL */}
      <section className="py-14 md:py-18 bg-soft-blobs">
        <Container>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-semibold tracking-tight">
              We Understand Business Pressure
            </motion.h2>

            <motion.div variants={stagger} className="mt-6 flex flex-wrap gap-3">
              {["Deadlines", "Staff issues", "Customer expectations", "Cash flow", "Growth"].map((t) => (
                <motion.span
                  key={t}
                  variants={fadeUp}
                  className="rounded-full border border-slate-200 bg-white/70 backdrop-blur px-4 py-2 text-sm text-slate-700"
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-slate-700 max-w-3xl">
              Our role is to remove friction — not add another thing for you to manage.
            </motion.p>
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
                  <p className="text-sm text-white/85 font-medium">Quick message</p>
                  <p className="mt-1 text-xs text-white/70">Form UI for now — we connect it later.</p>

                  <div className="mt-5 grid gap-3">
                    <input className="w-full rounded-full bg-white/10 border border-white/15 px-4 py-3 text-sm outline-none placeholder:text-white/50" placeholder="Name" />
                    <input className="w-full rounded-full bg-white/10 border border-white/15 px-4 py-3 text-sm outline-none placeholder:text-white/50" placeholder="Business" />
                    <div className="grid sm:grid-cols-2 gap-3">
                      <input className="w-full rounded-full bg-white/10 border border-white/15 px-4 py-3 text-sm outline-none placeholder:text-white/50" placeholder="Phone / WhatsApp" />
                      <input className="w-full rounded-full bg-white/10 border border-white/15 px-4 py-3 text-sm outline-none placeholder:text-white/50" placeholder="Email" />
                    </div>
                    <textarea className="w-full rounded-full bg-white/10 border border-white/15 px-4 py-3 text-sm outline-none placeholder:text-white/50 min-h-[110px]" placeholder="What’s the main issue?" />
                    <button type="button" className="rounded-full bg-white text-slate-950 px-5 py-3 text-sm font-medium">
                      Send
                    </button>
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
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-slate-600">
          Recognize any of these? You’re not alone.
        </div>

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
