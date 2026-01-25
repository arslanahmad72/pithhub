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
      <section className="py-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/60 shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)] backdrop-blur">
              {/* Replace src with your real image */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/industries-systems.jpg"
                  alt="Systems built around how your business actually runs"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>

            {/* soft blob glow */}
            <div className="pointer-events-none absolute -bottom-8 -left-10 h-40 w-40 rounded-full bg-orange-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -top-10 -right-10 h-52 w-52 rounded-full bg-orange-500/10 blur-3xl" />
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          >
            {/* label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-orange-600 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
              HOW THIS HELPS
            </div>

            {/* heading */}
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Systems that fit your industry —
              <br />
              <span className="font-serif italic text-slate-900">
                not the other way around.
              </span>
            </h2>

            <p className="mt-5 text-slate-600">
              Different industries have different workflows — but the pressure
              is the same when things grow: more staff, more customers, more
              moving parts.
            </p>

            <p className="mt-4 text-slate-600">
              We build clarity into the day-to-day so owners can see what’s
              happening, spot issues early, and run without constant chasing.
            </p>

            {/* bullets */}
            <ul className="mt-6 space-y-3 text-slate-700">
              {[
                "Make work visible (not stuck in WhatsApp, calls, or memory)",
                "Reduce errors, surprises, and owner dependence",
                "Track the flow: jobs → tasks → status → outcomes",
                "Simple dashboards so decisions are fast and confident",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-medium text-white shadow-sm"
              >
                Let’s Talk About Your Business <ArrowRight size={18} />
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 py-3 font-medium text-slate-900 backdrop-blur"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
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
  icon: any;
  title: string;
  common: string[];
  help: string[];
  result: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="rounded-3xl border border-slate-200 bg-white/70 p-8 backdrop-blur shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)]"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-orange-500/10 p-3 text-orange-600">
          <Icon size={22} />
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      </div>

      <p className="font-medium text-slate-800">Common Reality</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600">
        {common.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <p className="mt-4 font-medium text-slate-800">How We Help</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600">
        {help.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <p className="mt-5 font-semibold text-slate-900">{result}</p>
    </motion.div>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-6">{children}</div>;
}
