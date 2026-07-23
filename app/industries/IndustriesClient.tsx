"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Store,
  HardHat,
  Hotel,
  Stethoscope,
  BriefcaseBusiness,
  Truck,
  CheckCircle2,
  Factory,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export default function IndustriesPage() {
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
    Industries
    </h1>

    {/* Breadcrumb */}
    <div className="mt-4 text-sm text-slate-500">
      <a href="/" className="hover:text-slate-700 transition">
        Home
      </a>
      <span className="mx-2">›</span>
      <span className="text-[var(--brand-orange)] font-medium">
      Industries
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
      {/* HERO */}
      <section className="py-16 md:py-20 bg-white">
  <Container>
    <div className="grid gap-10 lg:grid-cols-2 items-start">
      {/* LEFT */}
      <div className="pt-2">
        {/* top pill */}
        <h2 className="mt-6 text-4xl md:text-4xl font-semibold tracking-tight leading-[1.05] text-slate-950">
          Different Industries.
          <br />
          Same Pressure.
          <br />
          Same Need for Better Systems.
        </h2>

        <p className="mt-6 text-base md:text-lg text-slate-700 leading-relaxed max-w-xl">
          No two businesses operate exactly the same — but the challenges business owners
          face are remarkably similar.
        </p>

        <p className="mt-5 text-base md:text-lg text-slate-700 leading-relaxed max-w-xl">
          As companies grow, complexity increases:
        </p>

        {/* bullets */}
        <ul className="mt-4 space-y-3 max-w-xl">
          {["More customers", "More staff", "More moving parts", "More risk"].map((t) => (
            <li key={t} className="flex items-start gap-3 text-slate-700">
              <span
                className="mt-2 h-2.5 w-2.5 rounded-full"
                style={{ background: "var(--brand-orange)" }}
              />
              <span className="text-base md:text-lg">{t}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-base md:text-lg text-slate-700 leading-relaxed max-w-xl">
          We adapt systems to your industry reality —{" "}
          <span className="font-semibold text-slate-950">not the other way around.</span>
        </p>

        {/* buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-black shadow-sm"
            style={{ background: "var(--brand-orange)" }}
          >
            Start the Conversation
          </Link>

          <Link
            href="/solutions"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Explore Solutions
          </Link>
        </div>
      </div>

      {/* RIGHT (IMPORTANT CONTEXT) */}
      <div className="rounded-[34px] border border-slate-200 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,.22)] p-7 md:p-8">
        

        <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-slate-950">
          We Don’t Force Your Business Into a Template
        </h3>

        {/* quote card */}
        <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-900 font-semibold leading-relaxed">
            “They’ve worked with businesses like mine before — they understand our reality.”
          </p>
        </div>

        {/* reassurance */}
        <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold text-slate-900">
            This approach reassures both:
          </p>

          <ul className="mt-4 space-y-4">
            {[
              {
                title: "Small businesses",
                desc: "You’re not too small for good systems — we build what fits your reality.",
              },
              {
                title: "Larger businesses",
                desc: "You’re not getting “small business solutions” — we build structure that scales.",
              },
            ].map((x) => (
              <li key={x.title} className="flex items-start gap-3 text-slate-700">
                <span
                  className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ background: "rgba(255,122,0,0.12)" }}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: "var(--brand-orange)" }}
                  />
                </span>

                <div>
                  <p className="font-semibold text-slate-900">{x.title}</p>
                  <p className="text-sm text-slate-600 mt-1">{x.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-sm text-slate-600">
          Result:{" "}
          <span className="font-medium text-slate-900">
            systems that match how your industry actually runs — and how your business runs inside it.
          </span>
        </p>
      </div>
    </div>
  </Container>
</section>


      {/* HOW TO USE */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
             
            <h2 className="text-3xl font-semibold">
              If Your Industry Is Listed Below, Read It Carefully
            </h2>
            <p className="mt-4 text-slate-600">
              You’ll see familiar problems described plainly — because they come
              directly from how businesses actually operate day-to-day in
              Jamaica.
            </p>
            <p className="mt-3 text-slate-600">
              If you don’t see your industry listed, don’t assume we can’t help.
              It simply means your challenges are custom, not uncommon.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid gap-8 md:grid-cols-2"
          >
            <IndustryCard
              icon={Store}
              title="Retail & Distribution"
              common={[
                "Stock levels are unclear",
                "Items run out unexpectedly",
                "Sales happen faster than inventory updates",
                "Manual tracking causes losses",
                "Owners don’t fully trust the numbers",
              ]}
              help={[
                "Inventory tracking systems",
                "Sales-to-stock visibility",
                "Reorder alerts",
                "Simple dashboards for owners",
              ]}
              result="Fewer surprises. Better margins. Clear control over stock and sales."
            />

            <IndustryCard
              icon={HardHat}
              title="Construction, Engineering & Contracting"
              common={[
                "Jobs are tracked informally",
                "Materials go missing",
                "Delays aren’t visible until late",
                "Too much depends on site supervisors",
                "Paperwork trails behind reality",
              ]}
              help={[
                "Job and project tracking",
                "Material usage monitoring",
                "Task accountability",
                "Status reporting",
              ]}
              result="Better oversight. Fewer disputes. Projects stay visible from start to finish."
            />

            <IndustryCard
              icon={Hotel}
              title="Tourism, Hospitality & Short-Term Rentals"
              common={[
                "Bookings, maintenance, and staff coordination overlap",
                "Guest communication is fragmented",
                "Issues escalate quickly when missed",
                "Reputation is always on the line",
              ]}
              help={[
                "Booking and request tracking",
                "Centralized guest communication",
                "Maintenance workflows",
                "Management dashboards",
              ]}
              result="Smoother operations. Fewer guest complaints. Better control without micromanaging."
            />

            <IndustryCard
              icon={Stethoscope}
              title="Medical Practices, Clinics & Health Services"
              common={[
                "Appointment scheduling is manual",
                "Patient information is scattered",
                "Follow-ups are inconsistent",
                "Staff juggle too many processes",
              ]}
              help={[
                "Appointment and visit tracking",
                "Patient communication systems",
                "Task and follow-up workflows",
                "Secure information handling",
              ]}
              result="Better patient experience. Less administrative strain. Improved operational flow."
            />

            <IndustryCard
              icon={BriefcaseBusiness}
              title="Professional Services (Legal, Accounting, Consulting)"
              common={[
                "Client communication lives in emails and memory",
                "Deadlines depend on individuals",
                "Work status isn’t always visible",
                "Billing and follow-up lag behind work done",
              ]}
              help={[
                "Client and matter tracking",
                "Task and deadline management",
                "Time and activity visibility",
                "Billing integration",
              ]}
              result="Stronger accountability. Clear client oversight. More predictable operations."
            />

            <IndustryCard
              icon={Truck}
              title="Logistics, Delivery & Transportation"
              common={[
                "Jobs are assigned verbally",
                "Status updates are manual",
                "Delays cause customer frustration",
                "Tracking depends on specific staff",
              ]}
              help={[
                "Job assignment and tracking",
                "Status visibility",
                "Driver or technician workflows",
                "Customer update systems",
              ]}
              result="Better coordination. Fewer complaints. Improved delivery performance."
            />

            <IndustryCard
              icon={Factory}
              title="Manufacturing & Agro-Processing"
              common={[
                "Raw materials and outputs aren’t aligned",
                "Production tracking is manual",
                "Losses go unnoticed",
                "Reporting lags behind reality",
              ]}
              help={[
                "Production tracking systems",
                "Input/output monitoring",
                "Inventory integration",
                "Performance dashboards",
              ]}
              result="Clear production visibility. Reduced waste. Better planning."
            />

            <IndustryCard
              icon={GraduationCap}
              title="Education, Training & Membership-Based Businesses"
              common={[
                "Registrations and records are manual",
                "Communication is fragmented",
                "Payments and attendance are hard to track",
                "Growth creates administrative strain",
              ]}
              help={[
                "Enrollment and member tracking",
                "Payment and attendance visibility",
                "Communication systems",
                "Administrative automation",
              ]}
              result="Cleaner operations. Less admin stress. Better experience for participants."
            />
          </motion.div>
        </Container>
      </section>

      {/* IMPORTANT MESSAGE (DARK BAND) */}
      <section className="border-y border-white/10 bg-slate-950 py-20 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-semibold md:text-4xl">
              Industries Change.
              <br />
              Systems Thinking Doesn’t.
            </h2>

            <p className="mt-6 text-white/80">
              The tools may differ. The workflows may differ.
              <br />
              But the goal is always the same:
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Reduce chaos",
                "Increase clarity",
                "Protect the owner’s time",
                "Support sustainable growth",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  {x}
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
        Your Industry Isn’t the Problem.
        <br />
        Your Systems Just Haven’t Caught Up Yet.
      </h2>

      <p className="mt-6 text-slate-600">
        If any section above felt familiar, that’s where we start.
      </p>

      <a
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
      >
        Let’s Talk About Your Business
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>

      <p className="mt-4 text-sm text-slate-500">
        Every strong business runs on systems — regardless of industry.
      </p>
    </div>
  </div>
</section>

    </main>
  );
}

/* ------------------------------------------------------------------ */
/* COMPONENTS */
/* ------------------------------------------------------------------ */
function IndustryCard({
  icon: Icon,
  title,
  common,
  help,
  result,
}: {
  icon: React.ElementType;
  title: string;
  common: string[];
  help: string[];
  result: string;
}) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/75 backdrop-blur
                 shadow-[0_18px_60px_-45px_rgba(0,0,0,.40)]
                 hover:-translate-y-0.5 hover:shadow-[0_28px_90px_-60px_rgba(0,0,0,.55)] transition"
    >
      {/* soft glow */}
      <div
        className="pointer-events-none absolute -top-28 -right-28 h-72 w-72 rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,122,0,0.18), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,122,0,0.12), transparent 60%)",
        }}
      />

      <div className="relative p-7">
        {/* header */}
        <div className="flex items-start gap-4">
          <div
            className="h-12 w-12 rounded-2xl border grid place-items-center shadow-sm shrink-0"
            style={{
              borderColor: "rgba(255,122,0,0.35)",
              background: "rgba(255,122,0,0.10)",
            }}
          >
            <Icon className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              {title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Systems designed around how this industry actually runs.
            </p>
          </div>
        </div>

        {/* blocks */}
        <div className="mt-6 grid gap-4">
          {/* Common Reality */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">Common Reality</p>
            <ul className="mt-3 space-y-2">
              {common.map((t) => (
                <li key={t} className="flex gap-2 text-sm text-slate-700 leading-relaxed">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--brand-orange)" }}
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How We Help */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">How We Help</p>
            <ul className="mt-3 space-y-2">
              {help.map((t) => (
                <li key={t} className="flex gap-2 text-sm text-slate-700">
                  <CheckCircle2
                    className="h-4 w-4 mt-0.5"
                    style={{ color: "var(--brand-orange)" }}
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* RESULT (always visible) */}
     {/* RESULT */}
<div className="mt-4 rounded-2xl border border-slate-200 bg-white/70 px-7 py-5">
  <p className="text-xs font-semibold tracking-widest uppercase text-slate-500">
    Result
  </p>

  <ul className="mt-3 mt-2 flex flex-wrap gap-2 space-y-1 text-sm font-medium text-slate-900">
    {result
      .split(".")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((item) => (
        <li className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs text-slate-700 shadow-sm" key={item}>{item}</li>
      ))}
  </ul>
</div>

    </motion.div>
  );
}
function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-6">{children}</div>;
}
