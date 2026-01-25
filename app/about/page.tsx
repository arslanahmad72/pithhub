"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

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

/** ===== ABOUT CONTENT ===== */
const weTalkAbout = ["Pressure", "Responsibility", "Things breaking quietly behind the scenes", "Owners carrying more than they should"];

const whyPattern = [
  "Owners working too hard inside the business",
  "Growth creating stress instead of freedom",
  "Good staff held back by unclear systems",
  "Decisions made with incomplete information",
  "Businesses running on memory and effort",
];

const systemsBeliefs = [
  { title: "Effort burns people out", desc: "If the business requires constant pushing, it will eventually wear people down." },
  { title: "Memory fails", desc: "When key knowledge lives in someone’s head, the business becomes fragile." },
  { title: "Good intentions aren’t scalable", desc: "Growth exposes gaps that kindness and effort can’t solve." },
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

const notFit = ["“Just build anything quickly” requests", "Cheapest-price decisions", "Businesses unwilling to improve processes"];

const notTransactionalA = ["Projects completed", "Features delivered"];
const notTransactionalB = ["Reduced owner stress", "Fewer operational surprises", "Clearer decision-making", "Businesses running more smoothly"];

const values = [
  "Clarity over complexity",
  "Structure over improvisation",
  "Understanding before execution",
  "Responsibility over shortcuts",
  "Long-term value over quick wins",
];

const reality = ["Resource constraints", "Staffing challenges", "Fast-changing environments", "The need for practical, not theoretical solutions"];

export default function AboutPage() {
  const { fadeUp, stagger, reduce } = useMotion();

  return (
    <div className="bg-white text-slate-950">
      {/* HERO */}
      <section className="bg-soft-blobs">
        <Container>
          <div className="py-12 md:py-16">
            <motion.div variants={stagger} initial="hidden" animate="show" className="text-center">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600"
              >
                <span className="h-2 w-2 rounded-full bg-brand-gradient" />
                About • PithHub (Jamaica)
              </motion.div>

              <motion.h1 variants={fadeUp} className="mt-5 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                We Didn’t Start in{" "}
                <span className="text-brand-gradient">Technology</span> —
                <br className="hidden md:block" />
                We Started in Business Problems
              </motion.h1>

              <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-3xl text-lg text-slate-700 leading-relaxed">
                Most digital companies talk about tools, platforms, and features. We talk about what owners and managers actually carry —
                the pressure, the responsibility, and the quiet breakdowns that make a business harder to run than it should be.
              </motion.p>

              <motion.div variants={stagger} className="mx-auto mt-7 max-w-4xl grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
                {weTalkAbout.map((t) => (
                  <motion.div key={t} variants={fadeUp} className="rounded-full border border-slate-200 bg-white/70 backdrop-blur px-5 py-4">
                    <p className="text-sm font-medium text-slate-900">{t}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-gradient text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition"
                >
                  Start the Conversation
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-white transition"
                >
                  Explore Solutions
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 1 — WHY WE EXIST */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
              <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-brandPrimary">
                Why we exist
              </motion.p>
              <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                Why This Company Was Built
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-slate-700 leading-relaxed">
                We saw the same pattern again and again across businesses in Jamaica:
              </motion.p>

              <motion.ul variants={stagger} className="mt-6 space-y-3 text-slate-700">
                {whyPattern.map((x) => (
                  <motion.li key={x} variants={fadeUp} className="flex items-start gap-3">
                    <span className="mt-1 h-6 w-6 rounded-full bg-brand-gradient text-white grid place-items-center text-sm">
                      ✓
                    </span>
                    <span>{x}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p variants={fadeUp} className="mt-7 text-slate-700">
                Technology wasn’t the issue.{" "}
                <span className="font-semibold text-slate-950">Lack of structure was.</span> This company exists to fix that.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white/70 backdrop-blur shadow-[0_20px_70px_-45px_rgba(0,0,0,.45)]">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                  alt="Business systems discussion"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-5 rounded-[26px] border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-[0_18px_60px_-50px_rgba(0,0,0,.55)]">
                <p className="text-sm text-slate-600">The core problem:</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">Businesses running on effort instead of structure.</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — POINT OF VIEW */}
      <section className="py-16 md:py-20 bg-soft-blobs">
        <Container>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-brandPrimary">
              Our point of view
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Strong Businesses Are Built on Systems, Not Effort
            </motion.h2>

            <motion.div variants={stagger} className="mt-8 grid lg:grid-cols-3 gap-6">
              {systemsBeliefs.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="rounded-[26px] border border-slate-200 bg-white/75 backdrop-blur p-6 shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
                >
                  <h3 className="font-semibold text-lg tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 rounded-[26px] border border-slate-200 bg-white/70 backdrop-blur p-7">
              <p className="text-sm text-slate-600">Clear systems:</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {clearSystems.map((t) => (
                  <span key={t} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-slate-700">
                Our work is about designing those systems — <span className="font-semibold">quietly, practically, and deliberately.</span>
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 3 — DIFFERENTLY */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
              <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-brandPrimary">
                How we think differently
              </motion.p>
              <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                We Don’t Start With Software
              </motion.h2>

              <motion.ul variants={stagger} className="mt-6 space-y-3 text-slate-700">
                {weStartWith.map((x) => (
                  <motion.li key={x} variants={fadeUp} className="flex items-start gap-3">
                    <span className="mt-1 h-6 w-6 rounded-full bg-brand-gradient text-white grid place-items-center text-sm">
                      ✓
                    </span>
                    <span>{x}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p variants={fadeUp} className="mt-7 text-slate-700">
                Only after that do we design technology — so it fits your reality, not a template.
              </motion.p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
              <motion.div variants={fadeUp} className="rounded-[28px] overflow-hidden bg-brand-gradient shadow-[0_25px_90px_-55px_rgba(0,0,0,.55)]">
                <div className="px-7 py-8 text-white relative">
                  <div className="pointer-events-none absolute inset-0 opacity-30">
                    <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/25 blur-3xl" />
                    <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
                  </div>

                  <div className="relative">
                    <p className="text-white/85 text-sm">That’s why our systems are:</p>
                    <div className="mt-5 grid sm:grid-cols-2 gap-3">
                      {whyBetter.map((t) => (
                        <div key={t} className="rounded-full bg-white/10 border border-white/15 px-4 py-3 text-sm">
                          {t}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/services"
                        className="inline-flex items-center justify-center rounded-full bg-white text-slate-950 px-5 py-3 text-sm font-medium hover:opacity-95 transition"
                      >
                        See Services
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/15 transition"
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

      {/* SECTION 4 — WHO WE WORK WITH */}
      <section className="py-16 md:py-20 bg-soft-blobs">
        <Container>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-brandPrimary">
              Fit matters
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              The Businesses That Fit Best
            </motion.h2>

            <motion.div variants={stagger} className="mt-8 grid lg:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="rounded-[26px] border border-slate-200 bg-white/75 backdrop-blur p-7">
                <h3 className="font-semibold text-lg">We work best with</h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {fitBest.map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <span className="mt-1 h-6 w-6 rounded-full bg-brand-gradient text-white grid place-items-center text-sm">
                        ✓
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-[26px] border border-slate-200 bg-white/75 backdrop-blur p-7">
                <h3 className="font-semibold text-lg">We are not a good fit for</h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {notFit.map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <span className="mt-1 h-6 w-6 rounded-full border border-slate-200 bg-white grid place-items-center text-sm text-slate-600">
                        !
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-slate-600">That honesty saves everyone time.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 5 — PARTNERSHIP */}
      <section className="py-16 md:py-20">
        <Container>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-brandPrimary">
              Partnership
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              This Is Not a Transactional Relationship
            </motion.h2>

            <motion.div variants={stagger} className="mt-8 grid lg:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="rounded-[26px] border border-slate-200 bg-white/75 backdrop-blur p-7">
                <p className="text-sm text-slate-600">We don’t measure success by:</p>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {notTransactionalA.map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <span className="mt-1 h-6 w-6 rounded-full border border-slate-200 bg-white grid place-items-center text-sm text-slate-600">
                        –
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-[26px] border border-slate-200 bg-white/75 backdrop-blur p-7">
                <p className="text-sm text-slate-600">We measure success by:</p>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {notTransactionalB.map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <span className="mt-1 h-6 w-6 rounded-full bg-brand-gradient text-white grid place-items-center text-sm">
                        ✓
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-7 text-slate-700 max-w-3xl">
              That’s why many clients stay with us long-term.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 6 — VALUES */}
      <section className="py-16 md:py-20 bg-soft-blobs">
        <Container>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-brandPrimary">
              Values
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              What Guides Our Work
            </motion.h2>

            <motion.div variants={stagger} className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v) => (
                <motion.div
                  key={v}
                  variants={fadeUp}
                  className="rounded-[22px] border border-slate-200 bg-white/75 backdrop-blur p-6 shadow-[0_18px_60px_-50px_rgba(0,0,0,.55)]"
                >
                  <div className="h-10 w-10 rounded-full bg-brand-gradient grid place-items-center text-white font-semibold">
                    ✓
                  </div>
                  <p className="mt-4 font-semibold text-slate-950">{v}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="mt-7 text-slate-700 max-w-3xl">
              These values show up in how we design, build, and support systems.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 7 — CONTEXT */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
              <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-brandPrimary">
                Experience & context
              </motion.p>
              <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                We Understand the Jamaican Business Reality
              </motion.h2>

              <motion.ul variants={stagger} className="mt-6 space-y-3 text-slate-700">
                {reality.map((x) => (
                  <motion.li key={x} variants={fadeUp} className="flex items-start gap-3">
                    <span className="mt-1 h-6 w-6 rounded-full bg-brand-gradient text-white grid place-items-center text-sm">
                      ✓
                    </span>
                    <span>{x}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p variants={fadeUp} className="mt-7 text-slate-700">
                Our systems are designed for <span className="font-semibold text-slate-950">real conditions</span>, not perfect ones.
              </motion.p>
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

  
    </div>
  );
}
