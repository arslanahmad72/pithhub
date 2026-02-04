"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/** ✅ Use your canonical Container */
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-6">{children}</div>
);

function useMotion() {
  const reduce = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0 },
  };
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.06 } },
  };
  return { reduce, fadeUp, stagger };
}

/** ===== ABOUT CONTENT (ASCII only to avoid parser issues) ===== */
const weTalkAbout = [
  "Pressure",
  "Responsibility",
  "Things breaking quietly behind the scenes",
  "Owners carrying more than they should",
];

const whyPattern = [
  "Owners working too hard inside the business",
  "Growth creating stress instead of freedom",
  "Good staff held back by unclear systems",
  "Decisions made with incomplete information",
  "Businesses running on memory and effort",
];

const systemsBeliefs = [
  "Effort burns people out.",
  "Memory fails.",
  "Good intentions are not scalable.",
];

const clearSystems = ["Protect the business", "Protect the owner", "Protect the team"];

const weStartWith = [
  "How work actually gets done",
  "Where delays and errors creep in",
  "Where owners lose visibility",
  "Where staff get confused or stuck",
];

const whyBetter = ["Easier to use", "Easier to adopt", "Easier to maintain", "Easier to grow"];

const fitBest = [
  "Owners who value structure",
  "Managers under pressure to deliver",
  "Businesses that are growing or stabilizing",
  "Teams that want clarity, not chaos",
];

const notFit = [
  "Just build anything quickly requests",
  "Cheapest price decisions",
  "Businesses unwilling to improve processes",
];

const successNotBy = ["Projects completed", "Features delivered"];
const successBy = [
  "Reduced owner stress",
  "Fewer operational surprises",
  "Clearer decision making",
  "Businesses running more smoothly",
];

const values = [
  "Clarity over complexity",
  "Structure over improvisation",
  "Understanding before execution",
  "Responsibility over shortcuts",
  "Long-term value over quick wins",
];

const reality = [
  "Resource constraints",
  "Staffing challenges",
  "Fast-changing environments",
  "The need for practical, not theoretical solutions",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-slate-600 backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-brand-gradient" />
      {children}
    </div>
  );
}

/** ✅ IMPORTANT: return a div row (not <li>) so it can be used inside <motion.li> */
function CheckLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-slate-700">
      <span
        className="mt-[9px] h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--brand-orange)" }}
      />
      <span className="leading-relaxed">{children}</span>
    </div>
  );
}

export default function AboutPage() {
  const { fadeUp, stagger, reduce } = useMotion();

  return (
    <div className="bg-white text-slate-950">
      {/* ===== HERO ===== */}
      <section className="bg-soft-blobs">
        <Container>
          <div className="py-14 md:py-20">
            <motion.div variants={stagger} initial="hidden" animate="show" className="text-center">
              <motion.div variants={fadeUp}>
                <Eyebrow>About Us • PithHub (Jamaica)</Eyebrow>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-6 text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight"
              >
                We Did Not Start in <span className="text-brand-gradient">Technology</span> -
                <br className="hidden md:block" />
                We Started in Business Problems
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="mx-auto mt-6 max-w-3xl text-lg text-slate-700 leading-relaxed"
              >
                <p>Most digital companies talk about tools, platforms, and features.</p>
                <p className="mt-4">We talk about:</p>
              </motion.div>

              <motion.div
                variants={stagger}
                className="mx-auto mt-7 max-w-5xl grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-center"
              >
                {weTalkAbout.map((t) => (
                  <motion.div
                    key={t}
                    variants={fadeUp}
                    className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur px-5 py-4
                               shadow-[0_18px_60px_-55px_rgba(0,0,0,.45)]"
                  >
                    <p className="text-sm font-medium text-slate-900 leading-snug">{t}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-3xl text-sm text-slate-600">
                Because that is where real problems live.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-gradient text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition"
                >
                  Start the Conversation
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-white transition"
                >
                  Explore Solutions
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== WHY WE EXIST ===== */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="text-left"
            >
              <motion.div variants={fadeUp}>
                <Eyebrow>Why we exist</Eyebrow>
              </motion.div>

              <motion.h2 variants={fadeUp} className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                Why This Company Was Built
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-5 text-slate-700 leading-relaxed">
                We saw the same pattern again and again across businesses in Jamaica:
              </motion.p>

              <motion.ul variants={stagger} className="mt-6 space-y-3">
                {whyPattern.map((x) => (
                  <motion.li key={x} variants={fadeUp}>
                    <CheckLine>{x}</CheckLine>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={fadeUp}
                className="mt-8 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-7
                           shadow-[0_18px_60px_-55px_rgba(0,0,0,.45)]"
              >
                <p className="text-slate-700 leading-relaxed">Technology was not the issue.</p>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-950">Lack of structure was.</span>
                </p>
                <p className="mt-2 text-slate-700 leading-relaxed">This company exists to fix that.</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white/70 backdrop-blur shadow-[0_20px_70px_-55px_rgba(0,0,0,.45)]">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                  alt="Business systems discussion"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-5 rounded-[26px] border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-[0_18px_60px_-55px_rgba(0,0,0,.45)]">
                <p className="text-sm text-slate-600">The core problem:</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">Businesses running on memory and effort.</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== OUR POINT OF VIEW ===== */}
      <section className="py-16 md:py-20 bg-soft-blobs">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>Our point of view</Eyebrow>
            </motion.div>

            <motion.h2 variants={fadeUp} className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              We Believe Strong Businesses Are Built on Systems, Not Effort
            </motion.h2>

            <motion.div variants={stagger} className="mt-8 grid lg:grid-cols-3 gap-6 text-left">
              {systemsBeliefs.map((t) => (
                <motion.div
                  key={t}
                  variants={fadeUp}
                  className="rounded-[26px] border border-slate-200 bg-white/75 backdrop-blur p-7
                             shadow-[0_18px_60px_-55px_rgba(0,0,0,.45)]"
                >
                  <p className="text-lg font-semibold tracking-tight text-slate-950">{t}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 rounded-[26px] border border-slate-200 bg-white/70 backdrop-blur p-8 text-left"
            >
              <p className="text-sm font-semibold text-slate-900">Clear systems:</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {clearSystems.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-slate-700 leading-relaxed">
                Our work is about designing those systems -{" "}
                <span className="font-semibold text-slate-950">quietly, practically, and deliberately.</span>
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ===== HOW WE THINK DIFFERENTLY ===== */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="text-left"
            >
              <motion.div variants={fadeUp}>
                <Eyebrow>How we think</Eyebrow>
              </motion.div>

              <motion.h2 variants={fadeUp} className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                We Do Not Start With Software
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-5 text-slate-700">
                We start with:
              </motion.p>

              <motion.ul variants={stagger} className="mt-6 space-y-3">
                {weStartWith.map((x) => (
                  <motion.li key={x} variants={fadeUp}>
                    <CheckLine>{x}</CheckLine>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p variants={fadeUp} className="mt-8 text-slate-700 leading-relaxed">
                Only after that do we design technology.
              </motion.p>
            </motion.div>

            {/* Right */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="text-left"
            >
              <motion.div
                variants={fadeUp}
                className="rounded-[28px] overflow-hidden bg-brand-gradient shadow-[0_25px_90px_-60px_rgba(0,0,0,.55)]"
              >
                <div className="relative px-7 py-8 text-white">
                  <div className="pointer-events-none absolute inset-0 opacity-30">
                    <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/25 blur-3xl" />
                    <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
                  </div>

                  <div className="relative">
                    <p className="text-white/85 text-sm font-semibold">That is why our systems are:</p>

                    <div className="mt-5 grid sm:grid-cols-2 gap-3">
                      {whyBetter.map((t) => (
                        <div key={t} className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-sm">
                          {t}
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/services"
                        className="inline-flex items-center justify-center rounded-2xl bg-white text-slate-950 px-5 py-3 text-sm font-medium hover:opacity-95 transition"
                      >
                        See Services
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/15 transition"
                      >
                        Talk to Us
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== WHO WE WORK WITH ===== */}
      <section className="py-16 md:py-20 bg-soft-blobs">
        <Container>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <div className="text-center">
              <motion.div variants={fadeUp}>
                <Eyebrow>Who we work with</Eyebrow>
              </motion.div>

              <motion.h2 variants={fadeUp} className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                The Businesses That Fit Best
              </motion.h2>
            </div>

            <motion.div variants={stagger} className="mt-8 grid lg:grid-cols-2 gap-6 text-left">
              <motion.div
                variants={fadeUp}
                className="rounded-[26px] border border-slate-200 bg-white/75 backdrop-blur p-8
                           shadow-[0_18px_60px_-55px_rgba(0,0,0,.45)]"
              >
                <h3 className="text-lg font-semibold text-slate-950">We work best with</h3>
                <ul className="mt-5 space-y-3">
                  {fitBest.map((x) => (
                    <li key={x}>
                      <CheckLine>{x}</CheckLine>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-[26px] border border-slate-200 bg-white/75 backdrop-blur p-8
                           shadow-[0_18px_60px_-55px_rgba(0,0,0,.45)]"
              >
                <h3 className="text-lg font-semibold text-slate-950">We are not a good fit for</h3>
                <ul className="mt-5 space-y-3">
                  {notFit.map((x) => (
                    <li key={x}>
                      <CheckLine>{x}</CheckLine>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-slate-600">That honesty saves everyone time.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ===== PARTNERSHIP ===== */}
      <section className="py-16 md:py-20">
        <Container>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <div className="text-center">
              <motion.div variants={fadeUp}>
                <Eyebrow>Partnership</Eyebrow>
              </motion.div>

              <motion.h2 variants={fadeUp} className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                This Is Not a Transactional Relationship
              </motion.h2>
            </div>

            <motion.div variants={stagger} className="mt-8 grid lg:grid-cols-2 gap-6 text-left">
              <motion.div
                variants={fadeUp}
                className="rounded-[26px] border border-slate-200 bg-white/75 backdrop-blur p-8
                           shadow-[0_18px_60px_-55px_rgba(0,0,0,.45)]"
              >
                <p className="text-sm font-semibold text-slate-900">We do not measure success by:</p>
                <ul className="mt-5 space-y-3">
                  {successNotBy.map((x) => (
                    <li key={x}>
                      <CheckLine>{x}</CheckLine>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-[26px] border border-slate-200 bg-white/75 backdrop-blur p-8
                           shadow-[0_18px_60px_-55px_rgba(0,0,0,.45)]"
              >
                <p className="text-sm font-semibold text-slate-900">We measure success by:</p>
                <ul className="mt-5 space-y-3">
                  {successBy.map((x) => (
                    <li key={x}>
                      <CheckLine>{x}</CheckLine>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-8 text-slate-700 text-center">
              That is why many clients stay with us long-term.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-16 md:py-20 bg-soft-blobs">
        <Container>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <div className="text-center">
              <motion.div variants={fadeUp}>
                <Eyebrow>Values</Eyebrow>
              </motion.div>

              <motion.h2 variants={fadeUp} className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                What Guides Our Work
              </motion.h2>
            </div>

            <motion.div variants={stagger} className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
              {values.map((v) => (
                <motion.div
                  key={v}
                  variants={fadeUp}
                  className="rounded-[22px] border border-slate-200 bg-white/75 backdrop-blur p-7
                             shadow-[0_18px_60px_-55px_rgba(0,0,0,.45)]"
                >
                  <p className="font-semibold text-slate-950">{v}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="mt-8 text-slate-700 text-center">
              These values show up in how we design, build, and support systems.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ===== EXPERIENCE & CONTEXT ===== */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="text-left"
            >
              <motion.div variants={fadeUp}>
                <Eyebrow>Experience & context</Eyebrow>
              </motion.div>

              <motion.h2 variants={fadeUp} className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                We Understand the Jamaican Business Reality
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-5 text-slate-700">
                We understand:
              </motion.p>

              <motion.ul variants={stagger} className="mt-6 space-y-3">
                {reality.map((x) => (
                  <motion.li key={x} variants={fadeUp}>
                    <CheckLine>{x}</CheckLine>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p variants={fadeUp} className="mt-8 text-slate-700">
                Our systems are designed for <span className="font-semibold text-slate-950">real conditions</span>, not perfect ones.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_20px_70px_-55px_rgba(0,0,0,.45)]">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
                  alt="Operations planning"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -bottom-6 left-6 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="text-xs text-slate-500">Designed for</div>
                <div className="text-sm font-semibold text-slate-900">Practical execution</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== FINAL CTA (50/50 image + text) ===== */}
      <section className="py-16 md:py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="rounded-[32px] overflow-hidden border border-slate-200 bg-white/70 backdrop-blur
                       shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image side */}
              <motion.div variants={fadeUp} className="relative min-h-[260px] lg:min-h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1600&q=80"
                  alt="Calm business operations"
                  fill
                  priority={false}
                  className="object-cover"
                />
                {/* soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-black/10 to-transparent" />
              </motion.div>

              {/* Text side */}
              <motion.div variants={fadeUp} className="p-10 md:p-12 text-left">
                <div className="inline-flex">
                  <Eyebrow>Start here</Eyebrow>
                </div>

                <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
                  If This Way of Thinking Resonates, Lets Talk
                </h2>

                <p className="mt-5 text-lg text-slate-700 leading-relaxed">
                  You do not need to be "ready".<br />
                  You just need to want things to work better.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-brand-gradient px-7 py-3.5 text-sm font-medium text-white shadow-sm hover:opacity-95 transition"
                  >
                    Start the Conversation
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-7 py-3.5 text-sm font-medium text-slate-900 hover:bg-white transition"
                  >
                    Explore Solutions
                  </Link>
                </div>

                <p className="mt-6 text-sm text-slate-600">
                  Strong systems create calm businesses
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
