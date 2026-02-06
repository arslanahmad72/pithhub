"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  FileText,
  Sparkles,
  AlertCircle,
  MessageSquareText,
} from "lucide-react";

/**
 * app/contact/page.tsx
 * ONE FILE ONLY (client page) — full design + your exact content.
 * Uses your PithHub system: soft blobs, rounded cards, orange/black, calm trust style.
 */

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-6">{children}</div>
);

// ✅ FIXED: typed Variants + valid ease array
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// ✅ Intro points as separate cards with icons
const introPoints = [
  { icon: Wrench, text: "You don’t need to know what software you need." },
  { icon: FileText, text: "You don’t need to prepare a proposal." },
  { icon: Sparkles, text: "You don’t need to explain everything perfectly." },
  { icon: AlertCircle, text: "You just need to explain what feels broken." },
  { icon: MessageSquareText, text: "That’s enough to start." },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    size: "1–10",
    challenge: "",
  });

  const canSubmit = useMemo(() => {
    return (
      form.fullName.trim() &&
      form.company.trim() &&
      form.phone.trim() &&
      form.email.trim() &&
      form.challenge.trim()
    );
  }, [form]);

  function onChange(key: keyof typeof form, value: string) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  // ✅ REAL submission (calls /api/contact)
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || status === "sending") return;

    try {
      setErrorMsg("");
      setStatus("sending");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Failed to send. Please try again.");
      }

      setStatus("sent");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong.");
    }
  }

  return (
    <main className="overflow-hidden">
      {/* ================= HERO (same style as your inner-page hero) ================= */}
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
          <motion.div initial="hidden" animate="show" variants={stagger}>
            {/* ONE H1 */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900"
            >
              Start With a Conversation —
              <br />
              <span className="text-brand-gradient">Not a Commitment</span>
            </motion.h1>

            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="mt-4 text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-700 transition">
                Home
              </Link>
              <span className="mx-2">›</span>
              <span className="text-[var(--brand-orange)] font-medium">
                Contact
              </span>
            </motion.div>

            {/* ✅ REPLACED paragraph with separate cards */}
            <motion.div
              variants={stagger}
              className="mt-10 mx-auto max-w-5xl grid gap-4 sm:grid-cols-2 lg:grid-cols-5 text-left"
            >
              {introPoints.map((p) => {
                const Icon = p.icon;
                return (
                  <motion.div
                  key={p.text}
                  variants={fadeUp}
                  className="group rounded-[32px] border border-slate-200 bg-white/70 backdrop-blur
                             shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)] p-7 text-center"
                >
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border shadow-sm"
                    style={{
                      borderColor: "rgba(255,122,0,0.35)",
                      background: "rgba(255,122,0,0.10)",
                    }}
                  >
                    <Icon className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
                  </div>
          
                  <p className="mt-4 text-sm font-small leading-relaxed text-slate-800">
                    {p.text}
                  </p>
                </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-10 py-4 font-semibold text-white shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)] transition hover:opacity-90"
              >
                Send a Message <ArrowRight size={18} />
              </a>

              <Link
                href="/how-we-work"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-10 py-4 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                How We Work
              </Link>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-5 text-sm text-slate-500">
              No pressure. No obligation.
            </motion.p>
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

      {/* ================= SECTION 1 — REASSURANCE ================= */}
      <section className="bg-white py-16">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-5xl"
          >
            {/* ✅ Center heading block like your screenshot */}
            <div className="text-center">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-orange-600"
              >
                <ShieldCheck size={14} />
                REASSURANCE
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mt-5 text-3xl font-semibold text-slate-900"
              >
                What This Conversation Is — and Isn’t
              </motion.h2>
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-6 md:grid-cols-2 text-left"
            >
              <div className="rounded-3xl border border-slate-200 bg-white/70 p-7 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]">
                <div className="text-sm font-semibold text-slate-900">
                  This conversation is:
                </div>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {[
                    "About understanding your business",
                    "About identifying where pressure is coming from",
                    "About seeing if there’s a practical path forward",
                  ].map((x) => (
                    <li key={x} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white/70 p-7 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]">
                <div className="text-sm font-semibold text-slate-900">
                  This conversation is NOT:
                </div>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {[
                    "A sales pitch",
                    "A technical interrogation",
                    "A commitment to move forward",
                  ].map((x) => (
                    <li key={x} className="flex gap-3">
                       <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-700">
                  If we’re not the right fit, we’ll say so.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ================= SECTION 2 — CONTACT FORM (SIMPLE) ================= */}
      <section id="contact-form" className="relative bg-soft-blobs py-20">
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
              Tell Us a Little About You
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-3 text-slate-600">
              Short answers are encouraged.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-8 lg:grid-cols-5"
            >
              {/* Form */}
              <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white/70 p-8 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]">
                <form onSubmit={onSubmit} className="space-y-5">
                  <Field
                    label="Full Name"
                    value={form.fullName}
                    onChange={(v) => onChange("fullName", v)}
                    placeholder="Your name"
                    required
                  />
                  <Field
                    label="Company Name"
                    value={form.company}
                    onChange={(v) => onChange("company", v)}
                    placeholder="Your company"
                    required
                  />
                  <Field
                    label="Phone / WhatsApp Number"
                    value={form.phone}
                    onChange={(v) => onChange("phone", v)}
                    placeholder="+1 / +1876 / WhatsApp"
                    required
                  />
                  <Field
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={(v) => onChange("email", v)}
                    placeholder="you@company.com"
                    required
                  />

                  {/* Company Size */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900">
                      Company Size
                    </label>
                    <div className="mt-2 grid grid-cols-3 gap-3">
                      {["1–10", "10–50", "50+"].map((x) => (
                        <button
                          type="button"
                          key={x}
                          onClick={() => onChange("size", x)}
                          className={[
                            "rounded-2xl border px-4 py-3 text-sm font-medium transition",
                            form.size === x
                              ? "border-orange-300 bg-orange-500/10 text-orange-700"
                              : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
                          ].join(" ")}
                        >
                          {x}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* One Question */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900">
                      One Important Question
                    </label>
                    <p className="mt-1 text-sm text-slate-600">
                      “What is the main challenge you’re dealing with right now?”
                    </p>
                    <textarea
                      value={form.challenge}
                      onChange={(e) => onChange("challenge", e.target.value)}
                      rows={4}
                      required
                      placeholder="Short answer is fine…"
                      className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-500/10"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit || status === "sending"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-sm transition hover:opacity-90 disabled:opacity-60"
                  >
                    {status === "idle" && (
                      <>
                        Send Message <ArrowRight size={18} />
                      </>
                    )}
                    {status === "sending" && "Sending…"}
                    {status === "sent" && "Message Sent ✅"}
                    {status === "error" && "Try Again"}
                  </button>

                  {status === "error" && (
                    <p className="text-center text-sm text-red-600">
                      {errorMsg || "Something went wrong. Please try again."}
                    </p>
                  )}

                  <p className="text-center text-sm text-slate-500">
                    No pressure. No obligation.
                  </p>
                </form>
              </div>

              {/* Side info */}
              <div className="lg:col-span-2 space-y-5">
                <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]">
                  <div className="text-sm font-semibold text-slate-900">
                    Here’s What to Expect After You Submit
                  </div>
                  <ol className="mt-4 space-y-3 text-slate-700">
                    {[
                      "We review your message",
                      "We respond personally (not automated)",
                      "We schedule a short conversation if it makes sense",
                      "We help you clarify what’s actually happening inside the business",
                    ].map((x, i) => (
                      <li key={x} className="flex gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/10 text-sm font-semibold text-orange-700">
                          {i + 1}
                        </span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-4 text-sm text-slate-600">
                    No pressure. No obligation.
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]">
                  <div className="text-sm font-semibold text-slate-900">
                    Prefer a Faster Option?
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    If it’s easier, you can message us directly on WhatsApp or
                    call during business hours.
                  </p>

                  <div className="mt-4 space-y-3">
                    <a
                      href="https://wa.me/+18765356390"
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition hover:bg-slate-50"
                    >
                      <MessageCircle className="text-orange-600" />
                      <div>
                        <div className="text-sm font-semibold">WhatsApp</div>
                        <div className="text-sm text-slate-600">
                          Message us directly
                        </div>
                      </div>
                    </a>

                    <a
                      href="tel:+1 876 535 6390"
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition hover:bg-slate-50"
                    >
                      <Phone className="text-orange-600" />
                      <div>
                        <div className="text-sm font-semibold">Call</div>
                        <div className="text-sm text-slate-600">
                          During business hours
                        </div>
                      </div>
                    </a>

                    <a
                      href="mailto:
                      info@pithhub.com"
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition hover:bg-slate-50"
                    >
                      <Mail className="text-orange-600" />
                      <div>
                        <div className="text-sm font-semibold">Email</div>
                        <div className="text-sm text-slate-600">
                          Send us a message
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]">
                  <div className="text-sm font-semibold text-slate-900">
                    Where We Work
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    We work with businesses across Jamaica and beyond.
                  </p>

                  <div className="mt-4 space-y-3 text-slate-700">
                    <div className="flex gap-3">
                      <MapPin className="text-orange-600" />
                      <span>Phone, video, or in person when appropriate</span>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="text-orange-600" />
                      <span>Business Hours: Monday–Friday</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-600">
                    We respond as quickly as possible during working hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ================= SECTION 6 — FINAL REASSURANCE ================= */}
      <section className="bg-white py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-5xl text-center"
          >
             <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white mb-3 px-4 py-2 text-xs font-semibold tracking-wide text-orange-600"
              >
                <ShieldCheck size={14} />
                REASSURANCE
              </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-semibold text-slate-900"
            >
              If You’ve Been Carrying Too Much, This Is the Right First Step
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-slate-600">
              Many owners wait too long because:
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-4 md:grid-cols-3"
            >
              {[
                "“Things are still working… for now”",
                "“I’ll deal with it later”",
                "“I don’t have time”",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-3xl border border-slate-200 bg-white/70 p-7 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
                >
                  <div className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-600" />
                    <p className="text-slate-700">{x}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="mt-8 text-slate-600">
              Clarity usually comes faster than expected.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 text-center">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-10 py-4 font-semibold text-white shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)] transition hover:opacity-90"
              >
                Start With a Conversation <ArrowRight size={18} />
              </a>
              <p className="mt-4 text-sm text-slate-500">
                Calm, clear, and human — not transactional.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-900">
        {label}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-500/10"
      />
    </div>
  );
}
