"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useMemo, useState } from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl mx-auto px-6">{children}</div>;
}

function useMotion() {
  const reduce = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0 },
  };
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.07 } },
  };
  return { fadeUp, stagger };
}

type FaqItem = { q: string; a: React.ReactNode };
type FaqGroup = { id: string; title: string; intro?: string; items: FaqItem[] };

function cn(...xs: Array<string | false | undefined | null>) {
  return xs.filter(Boolean).join(" ");
}

function Accordion({
  groups,
}: {
  groups: FaqGroup[];
}) {
  const [open, setOpen] = useState<string>("");

  const toggle = (key: string) => setOpen((v) => (v === key ? "" : key));

  return (
    <div className="grid gap-10 lg:grid-cols-[380px_1fr] items-start">
      {/* Left sticky index */}
      <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm lg:sticky lg:top-24">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
          FAQ Sections
        </p>
        <div className="mt-4 grid gap-2">
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50 transition"
            >
              {g.title}
            </a>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">Still unsure?</p>
          <p className="mt-1 text-sm text-slate-600">
            Start with a conversation. You don’t need the answers yet.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-brand-gradient px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-95 transition"
          >
            Talk to Us
          </Link>
        </div>
      </div>

      {/* Right: accordions */}
      <div className="space-y-10">
        {groups.map((g) => (
          <section key={g.id} id={g.id} className="scroll-mt-24">
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                {g.title}
              </h2>
              {g.intro ? (
                <p className="mt-2 text-slate-600 max-w-3xl">{g.intro}</p>
              ) : null}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              {g.items.map((item, idx) => {
                const key = `${g.id}-${idx}`;
                const isOpen = open === key;

                return (
                  <div key={key} className="border-t border-slate-200 first:border-t-0">
                    <button
                      type="button"
                      onClick={() => toggle(key)}
                      className="w-full text-left px-6 py-5 hover:bg-slate-50/60 transition"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-base font-semibold text-slate-900 leading-snug">
                            {item.q}
                          </p>
                        </div>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 mt-0.5 text-slate-500 transition",
                            isOpen ? "rotate-180" : "rotate-0"
                          )}
                        />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default function FAQsPage() {
  const { fadeUp, stagger } = useMotion();

  const groups: FaqGroup[] = useMemo(
    () => [
      {
        id: "fit-trust",
        title: "General Fit & Trust",
        items: [
          {
            q: "Do you work with small businesses, or only large companies?",
            a: (
              <div className="space-y-3">
                <p>
                  We work with small, growing, and established businesses. What matters most is not size, but complexity.
                </p>
                <ul className="space-y-2">
                  {[
                    "If things feel disorganized",
                    "If you rely too much on memory or individuals",
                    "If growth is creating stress instead of freedom",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p>Then we can help — regardless of company size.</p>
              </div>
            ),
          },
          {
            q: "What if we’re not sure what the problem actually is?",
            a: (
              <div className="space-y-3">
                <p>That’s completely normal.</p>
                <p>Most clients come to us with a feeling, not a diagnosis:</p>
                <ul className="space-y-2">
                  {[
                    "“Things feel messy”",
                    "“We’re always reacting”",
                    "“I can’t see what’s really going on”",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Our job is to help you identify the real problem before proposing any solution.
                </p>
              </div>
            ),
          },
          {
            q: "How do I know you won’t just sell me software I don’t need?",
            a: (
              <div className="space-y-3">
                <p>We don’t start with software. We start with:</p>
                <ul className="space-y-2">
                  {[
                    "Understanding your business",
                    "Mapping how work actually happens",
                    "Identifying where breakdowns occur",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p>If software is not the right answer, we’ll say so.</p>
              </div>
            ),
          },
        ],
      },
      {
        id: "process",
        title: "Process & Delivery",
        items: [
          {
            q: "How long does a typical project take?",
            a: (
              <div className="space-y-3">
                <p>It depends on scope, but generally:</p>
                <ul className="space-y-2">
                  {[
                    "Small systems or improvements: a few weeks",
                    "Medium operational systems: 1–3 months",
                    "Larger, multi-department systems: phased delivery",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p>We prioritize stability and clarity over speed.</p>
              </div>
            ),
          },
          {
            q: "Will this disrupt our daily operations?",
            a: (
              <div className="space-y-3">
                <p>No.</p>
                <p>Our process is designed to:</p>
                <ul className="space-y-2">
                  {[
                    "Build in stages",
                    "Test with real scenarios",
                    "Introduce changes gradually",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p>The goal is to reduce disruption, not create it.</p>
              </div>
            ),
          },
          {
            q: "Do you provide training for staff?",
            a: (
              <div className="space-y-3">
                <p>Yes.</p>
                <p>
                  We train based on roles, not technical ability. Staff don’t need to be “tech people” — they just need clarity.
                </p>
                <p>Good systems should feel intuitive.</p>
              </div>
            ),
          },
        ],
      },
      {
        id: "cost",
        title: "Cost & Value",
        items: [
          {
            q: "Why don’t you list exact prices?",
            a: (
              <div className="space-y-3">
                <p>
                  Because exact prices without understanding scope are misleading. Two businesses can ask for the “same thing” but require very different levels of work.
                </p>
                <p>We explain pricing clearly before any work begins.</p>
              </div>
            ),
          },
          {
            q: "Is this expensive?",
            a: (
              <div className="space-y-3">
                <p>It depends on what you compare it to.</p>
                <p>Many owners later realize the real cost was:</p>
                <ul className="space-y-2">
                  {["Time lost", "Mistakes repeated", "Missed opportunities", "Stress and burnout"].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p>Strong systems quietly pay for themselves over time.</p>
              </div>
            ),
          },
        ],
      },
      {
        id: "ownership",
        title: "Ownership, Support & Long-Term Concerns",
        items: [
          {
            q: "Do we own the system after it’s built?",
            a: (
              <div className="space-y-3">
                <p>Yes.</p>
                <p>
                  You own your system and your data. We believe businesses should not be held hostage by vendors.
                </p>
              </div>
            ),
          },
          {
            q: "What happens after the system is launched?",
            a: (
              <div className="space-y-3">
                <p>We don’t disappear.</p>
                <p>We provide (if required):</p>
                <ul className="space-y-2">
                  {["Ongoing support", "Adjustments as your business evolves", "Improvements as needs change"].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p>Systems should grow with the business.</p>
              </div>
            ),
          },
          {
            q: "What if our staff resists change?",
            a: (
              <div className="space-y-3">
                <p>That’s common — and expected.</p>
                <p>We design systems to:</p>
                <ul className="space-y-2">
                  {["Make work easier, not harder", "Remove confusion", "Reduce pressure on staff"].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p>When people see benefits quickly, resistance fades.</p>
              </div>
            ),
          },
        ],
      },
      {
        id: "technical",
        title: "Technical (Without Jargon)",
        items: [
          {
            q: "Do we need to change everything we’re currently using?",
            a: (
              <div className="space-y-3">
                <p>Not always.</p>
                <p>Sometimes the best solution is:</p>
                <ul className="space-y-2">
                  {["Improving what you already have", "Connecting existing tools", "Replacing only what’s broken"].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p>We don’t believe in unnecessary replacement.</p>
              </div>
            ),
          },
          {
            q: "Are your systems secure?",
            a: (
              <div className="space-y-3">
                <p>Yes.</p>
                <p>
                  Security, access control, and data protection are built into everything we design — without making systems complicated to use.
                </p>
              </div>
            ),
          },
        ],
      },
      {
        id: "final",
        title: "Final Questions",
        items: [
          {
            q: "What if we’re not the right fit?",
            a: (
              <div className="space-y-3">
                <p>We’ll tell you.</p>
                <p>We’d rather be honest early than take on work that won’t deliver value.</p>
              </div>
            ),
          },
          {
            q: "What’s the best way to start?",
            a: (
              <div className="space-y-3">
                <p>Start with a conversation.</p>
                <p>You don’t need answers yet. You just need to explain what feels off.</p>
              </div>
            ),
          },
        ],
      },
    ],
    []
  );

  return (
    <main className="bg-white text-slate-900">
      {/* HERO / PAGE INTRO (same style as your Solutions hero) */}
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
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Frequently Asked Questions
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-4 text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-700 transition">
                Home
              </Link>
              <span className="mx-2">›</span>
              <span className="text-[var(--brand-orange)] font-medium">FAQs</span>
            </motion.div>

            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-3xl text-lg text-slate-700 leading-relaxed">
              Real questions. Straight answers. If you’re considering working with us, you probably have questions you haven’t fully formed yet.
              This page answers the most common — and most important — ones.
            </motion.p>
          </motion.div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full h-16 md:h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,40 C240,120 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </section>

      {/* FAQ BODY */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <Accordion groups={groups} />
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="rounded-[28px] overflow-hidden bg-brand-gradient shadow-[0_25px_90px_-55px_rgba(0,0,0,.55)]">
            <div className="px-6 md:px-10 py-10 md:py-12 text-white relative">
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-white/25 blur-3xl" />
                <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
              </div>

              <div className="relative text-center">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Still Unsure? That’s Okay.
                </h2>
                <p className="mt-4 text-white/85 leading-relaxed max-w-2xl mx-auto">
                  Most clarity starts with a simple conversation.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white text-slate-950 px-6 py-3 text-sm font-medium hover:opacity-95 transition"
                  >
                    Talk to Us
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
                  >
                    Explore Solutions
                  </Link>
                </div>

                <p className="mt-5 text-xs text-white/70">
                  Understanding comes before commitment.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
