"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Wrench,
  TrendingUp,
  MessageSquare,
  Package,
  DollarSign,
  Eye,
  Link2,
  ShieldCheck,
  ChevronDown, ArrowRight, CheckCircle2
} from "lucide-react";

type Area = {
  id: string;
  title: string;
  feelTitle: string;
  feel: string[];
  feelNote?: string;
  fixTitle: string;
  fixIntro: string;
  fix: string[];
  changeTitle: string;
  changes: string[];
};
function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl mx-auto px-6">{children}</div>;
}

const AREAS: Area[] = [
  {
    id: "operations-workflow",
    title: "Operations & Workflow Breakdown",
    feelTitle: "What This Feels Like Day-to-Day",
    feel: [
      "Tasks are unclear or constantly changing",
      "Staff are unsure who is responsible for what",
      "Jobs move slowly unless you personally push them",
      "Approvals happen verbally or “when remembered”",
      "Mistakes repeat because nothing is documented",
    ],
    feelNote: "You spend too much time coordinating instead of leading.",
    fixTitle: "What We Fix",
    fixIntro: "We design clear operational systems that define:",
    fix: ["What needs to happen", "Who is responsible", "When it must happen", "How it’s tracked"],
    changeTitle: "What Changes",
    changes: ["Tasks are assigned and visible", "Workflows are consistent", "Less follow-up chasing", "Fewer excuses", "More predictable outcomes"],
  },
  {
    id: "sales-leads",
    title: "Sales, Leads & Follow-Up Leakage",
    feelTitle: "What This Feels Like",
    feel: [
      "Leads come in, but follow-up is inconsistent",
      "You’re not sure who contacted whom",
      "Promises are made but not tracked",
      "Sales depend heavily on one or two people",
      "You can’t confidently forecast revenue",
    ],
    feelNote: "Sales feels busy — but unreliable.",
    fixTitle: "What We Fix",
    fixIntro: "We build simple sales tracking systems that:",
    fix: ["Capture every enquiry", "Assign follow-ups automatically", "Track conversations and outcomes", "Show where deals stand at any time"],
    changeTitle: "What Changes",
    changes: ["No lost leads", "Clear accountability", "Measurable performance", "Predictable sales activity"],
  },
  {
    id: "customer-service",
    title: "Customer Service & Communication Chaos",
    feelTitle: "What This Feels Like",
    feel: [
      "Customers complain about lack of updates",
      "Information is scattered across WhatsApp, calls, and messages",
      "Staff give different answers to the same question",
      "You only hear about issues when customers are already upset",
    ],
    feelNote: "Customer service becomes reactive instead of controlled.",
    fixTitle: "What We Fix",
    fixIntro: "We create customer visibility systems that:",
    fix: ["Centralize communication", "Track requests and status", "Make updates consistent", "Reduce dependency on memory"],
    changeTitle: "What Changes",
    changes: ["Customers feel informed", "Fewer complaints", "Staff are aligned", "Problems are caught earlier"],
  },
  {
    id: "inventory-ordering",
    title: "Inventory, Ordering & Resource Confusion",
    feelTitle: "What This Feels Like",
    feel: [
      "Stock runs out unexpectedly",
      "Items are over-ordered or missing",
      "You don’t trust the numbers you see",
      "Manual checks waste time",
      "Losses go unnoticed",
    ],
    feelNote: "Inventory feels like guesswork.",
    fixTitle: "What We Fix",
    fixIntro: "We design inventory and resource tracking systems that:",
    fix: ["Show real-time stock levels", "Track usage and movement", "Reduce waste and errors", "Support purchasing decisions"],
    changeTitle: "What Changes",
    changes: ["Fewer surprises", "Better planning", "Reduced losses", "Clear accountability"],
  },
  {
    id: "billing-cashflow",
    title: "Billing, Invoicing & Cash Flow Blind Spots",
    feelTitle: "What This Feels Like",
    feel: [
      "Invoices go out late or incorrectly",
      "Payments are not tracked properly",
      "Follow-ups are manual and uncomfortable",
      "You’re unsure who owes what at any given time",
    ],
    feelNote: "Cash flow becomes stressful.",
    fixTitle: "What We Fix",
    fixIntro: "We build billing and receivables systems that:",
    fix: ["Track invoices and payments clearly", "Show outstanding balances", "Support structured follow-up", "Reduce dependency on memory"],
    changeTitle: "What Changes",
    changes: ["Improved cash visibility", "Fewer disputes", "Faster collections", "Less financial stress"],
  },
  {
    id: "owner-visibility",
    title: "Owner & Management Visibility",
    feelTitle: "What This Feels Like",
    feel: [
      "You rely on updates from others",
      "Reports are delayed or unclear",
      "You don’t have one clear view of the business",
      "Decisions are made with partial information",
    ],
    feelNote: "You’re managing blind.",
    fixTitle: "What We Fix",
    fixIntro: "We create simple dashboards that show:",
    fix: ["Sales activity", "Operations status", "Customer issues", "Financial indicators", "All in one place"],
    changeTitle: "What Changes",
    changes: ["Faster decisions", "More confidence", "Less micromanagement", "Better control"],
  },
  {
    id: "disconnected-systems",
    title: "Disconnected Systems",
    feelTitle: "What This Feels Like",
    feel: [
      "Website doesn’t connect to sales",
      "Marketing doesn’t connect to follow-up",
      "Accounting doesn’t match operations",
      "Data has to be re-entered multiple times",
    ],
    feelNote: "Everything works — but nothing works together.",
    fixTitle: "What We Fix",
    fixIntro: "We connect your systems so information flows automatically between:",
    fix: ["Website", "Sales", "Operations", "Customer service", "Finance"],
    changeTitle: "What Changes",
    changes: ["Less duplication", "Fewer errors", "Faster processes", "One source of truth"],
  },
];

function cn(...xs: Array<string | false | undefined | null>) {
  return xs.filter(Boolean).join(" ");
}

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-2 text-sm text-slate-700 leading-relaxed">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SolutionsPage() {
  const [openId, setOpenId] = useState<string>(AREAS[0]?.id ?? "");

  const index = useMemo(
    () =>
      AREAS.map((a, idx) => ({
        id: a.id,
        title: a.title,
        num: String(idx + 1).padStart(2, "0"),
      })),
    []
  );

  return (
    <main className="bg-white text-slate-900">
      {/* HERO (Above the fold) */}
      {/* HERO / PAGE INTRO */}
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
      Solutions
    </h1>

    {/* Breadcrumb */}
    <div className="mt-4 text-sm text-slate-500">
      <a href="/" className="hover:text-slate-700 transition">
        Home
      </a>
      <span className="mx-2">›</span>
      <span className="text-[var(--brand-orange)] font-medium">
        Solutions
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

 {/* SECTION 2 — Image + Intro + 2 feature cards (Digipro style) */}
 <section className="bg-white">
  <Container>
    <div className="py-14 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT CONTENT */}
      <div>
        {/* Pill */}
       

        <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-950">
          You don’t need more software -
          <span className="font-serif italic text-slate-700">
            you need fewer problems.
          </span>
        </h2>

        <p className="mt-5 text-slate-700 leading-relaxed max-w-xl">
          Most businesses don’t wake up looking for “digital solutions.”
          They wake up dealing with confusion, delays, repetition,
          firefighting, and pressure to grow without things falling apart.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">
          This page isn’t about tools. It’s about fixing what’s breaking down
          inside your business.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center rounded-full bg-brand-gradient text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition"
          >
            Find the problem that sounds like you →
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium hover:bg-slate-50 transition"
          >
            Talk to Us
          </Link>
        </div>

        {/* TAGS */}
       {/* TAGS WITH ICONS */}
<div className="mt-6 flex flex-wrap gap-2">
  {[
    { label: "Operations", icon: Wrench },
    { label: "Sales", icon: TrendingUp },
    { label: "Customer Service", icon: MessageSquare },
    { label: "Inventory", icon: Package },
    { label: "Cashflow", icon: DollarSign },
    { label: "Visibility", icon: Eye },
    { label: "Integration", icon: Link2 },
    { label: "Protection", icon: ShieldCheck },
  ].map(({ label, icon: Icon }) => (
    <span
      key={label}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs text-slate-700 shadow-sm"
    >
      <Icon className="h-4 w-4 text-orange-500" />
      {label}
    </span>
  ))}
</div>

      </div>

      {/* RIGHT DASHBOARD CARD */}
      <div className="relative">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_-55px_rgba(0,0,0,.45)]">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                What owners actually want
              </p>
              <p className="text-xs text-slate-500">
                Calm control • clear status • fewer surprises
              </p>
            </div>
          
          </div>

          {/* Cards */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              { title: "Consistency", desc: "Same process, every time." },
              { title: "Accountability", desc: "Clear ownership + logs." },
              { title: "Visibility", desc: "One view of reality." },
              { title: "Protection", desc: "Access + backups built in." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <p className="font-medium text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-900">The result</p>
            <p className="mt-1 text-sm text-slate-600">
              Your business runs on structure — not on memory, WhatsApp
              threads, or you being everywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>



      {/* HOW TO READ THIS PAGE */}
   {/* SOLUTION AREAS GRID (Digipro cards style) */}
<section className="bg-white hidden">
  <div className="max-w-7xl mx-auto px-6 pb-16">
    {/* Heading row */}
    <div className="grid gap-6 lg:grid-cols-[1fr_380px] items-end">
      <div>
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500 flex items-center gap-2">
          <span style={{ color: "var(--brand-orange)" }}>💡</span> OUR SOLUTIONS
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
          Fix the Problems
          <br />
          <span className="font-serif italic">That Create Pressure</span>
        </h2>
      </div>

      <p className="text-slate-600 leading-relaxed">
        Each section below represents a real operational breakdown we see in Jamaican businesses.
        Pick the one that sounds like you — and we’ll design the system to fix it.
      </p>
      
    </div>

    {/* Cards */}
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          id: "operations-workflow",
          num: "01",
          title: "Operations & Workflow Breakdown",
          desc: "Clear ownership, consistent workflows, and visibility — so work moves without you pushing it.",
          icon: "🧩",
        },
        {
          id: "sales-leads",
          num: "02",
          title: "Sales, Leads & Follow-Up Leakage",
          desc: "Capture every enquiry, track follow-ups, and know where deals stand at any time.",
          icon: "📈",
        },
        {
          id: "customer-service",
          num: "03",
          title: "Customer Service & Communication Chaos",
          desc: "Centralize requests and updates so customers feel informed and staff stay aligned.",
          icon: "💬",
        },
        {
          id: "inventory-ordering",
          num: "04",
          title: "Inventory, Ordering & Resource Confusion",
          desc: "Reduce surprises with tracking that supports purchasing, usage, and accountability.",
          icon: "📦",
        },
        {
          id: "billing-cashflow",
          num: "05",
          title: "Billing, Invoicing & Cash Flow Blind Spots",
          desc: "Know who owes what, reduce disputes, and follow up with less stress.",
          icon: "🧾",
        },
        {
          id: "owner-visibility",
          num: "06",
          title: "Owner & Management Visibility",
          desc: "Dashboards for sales, ops, customer issues, and financial indicators — all in one view.",
          icon: "👁️",
        },
        {
          id: "disconnected-systems",
          num: "07",
          title: "Disconnected Systems",
          desc: "Connect your tools so data flows automatically and becomes one source of truth.",
          icon: "🔗",
        },
      ].map((card) => (
        <div
          key={card.id}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition"
        >
          {/* faint big number like reference */}
          <div className="pointer-events-none absolute -top-6 -right-6 text-[90px] font-semibold text-slate-100">
            {card.num}
          </div>

          {/* icon */}
          <div
            className="h-12 w-12 rounded-2xl flex items-center justify-center border"
            style={{
              borderColor: "rgba(255,122,0,0.35)",
              background: "rgba(255,122,0,0.10)",
            }}
          >
            <span className="text-xl">{card.icon}</span>
          </div>

          <h3 className="mt-6 text-xl font-semibold text-slate-900">
            {card.title}
          </h3>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            {card.desc}
          </p>

          <button
            onClick={() => document.getElementById(card.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: "var(--brand-orange)" }}
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


     {/* MODERN TABS SECTION — Left tabs + Right content */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
  <div className="grid gap-8">
      {/* LEFT: Tabs + Content Panel */}
      <div>
        {/* Header */}
        <div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Pick what matches you
          </h2>
          <p className="mt-3 text-slate-600 max-w-3xl leading-relaxed">
            Click the problem that feels familiar. You’ll see what it looks like day-to-day, what we fix,
            and what changes once the system is in place.
          </p>
          {/* TAGS WITH ICONS */}
<div className="mt-6 flex flex-wrap gap-4">
  {[
    { label: "Operations", icon: Wrench },
    { label: "Sales", icon: TrendingUp },
    { label: "Customer Service", icon: MessageSquare },
    { label: "Inventory", icon: Package },
    { label: "Cashflow", icon: DollarSign },
    { label: "Visibility", icon: Eye },
    { label: "Integration", icon: Link2 },
    { label: "Protection", icon: ShieldCheck },
  ].map(({ label, icon: Icon }) => (
    <span
      key={label}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs text-slate-700 shadow-sm"
    >
      <Icon className="h-4 w-4 text-orange-500" />
      {label}
    </span>
  ))}
</div>

        </div>

        {(() => {
          const items = [
            {
              id: "operations-workflow",
              num: "01",
              title: "Operations & Workflow Breakdown",
              tagline: "Work slows unless you push it.",
              feelTitle: "What This Feels Like Day-to-Day",
              feel: [
                "Tasks are unclear or constantly changing",
                "Staff are unsure who is responsible for what",
                "Jobs move slowly unless you personally push them",
                "Approvals happen verbally or “when remembered”",
                "Mistakes repeat because nothing is documented",
              ],
              note: "You spend too much time coordinating instead of leading.",
              fixIntro: "We design clear operational systems that define:",
              fix: ["What needs to happen", "Who is responsible", "When it must happen", "How it’s tracked"],
              changes: ["Tasks are assigned and visible", "Workflows are consistent", "Less follow-up chasing", "Fewer excuses", "More predictable outcomes"],
            },
            {
              id: "sales-leads",
              num: "02",
              title: "Sales, Leads & Follow-Up Leakage",
              tagline: "Busy… but unreliable.",
              feelTitle: "What This Feels Like",
              feel: [
                "Leads come in, but follow-up is inconsistent",
                "You’re not sure who contacted whom",
                "Promises are made but not tracked",
                "Sales depend heavily on one or two people",
                "You can’t confidently forecast revenue",
              ],
              note: "Sales feels busy — but unreliable.",
              fixIntro: "We build simple sales tracking systems that:",
              fix: ["Capture every enquiry", "Assign follow-ups automatically", "Track conversations and outcomes", "Show where deals stand at any time"],
              changes: ["No lost leads", "Clear accountability", "Measurable performance", "Predictable sales activity"],
            },
            {
              id: "customer-service",
              num: "03",
              title: "Customer Service & Communication Chaos",
              tagline: "WhatsApp chaos, mixed answers.",
              feelTitle: "What This Feels Like",
              feel: [
                "Customers complain about lack of updates",
                "Information is scattered across WhatsApp, calls, and messages",
                "Staff give different answers to the same question",
                "You only hear about issues when customers are already upset",
              ],
              note: "Customer service becomes reactive instead of controlled.",
              fixIntro: "We create customer visibility systems that:",
              fix: ["Centralize communication", "Track requests and status", "Make updates consistent", "Reduce dependency on memory"],
              changes: ["Customers feel informed", "Fewer complaints", "Staff are aligned", "Problems are caught earlier"],
            },
            {
              id: "cybersecurity-risk",
              num: "04",
              title: "Cybersecurity & Data Exposure Risk",
              tagline: "Everything works — until one mistake costs you trust.",
              feelTitle: "What This Feels Like Day-to-Day",
              feel: [
                "Passwords are shared or reused across staff",
                "WhatsApp, email, and devices hold sensitive customer data",
                "No clear rules for access, downloads, or data handling",
                "You assume “nothing bad will happen” — until it does",
                "If a staff member leaves, you’re unsure what access they still have",
                "You wouldn’t know where the leak came from if something went wrong",
              ],
              note: "This doesn’t feel like a problem… until it suddenly is.",
              fixIntro: "We design practical security and data-control systems that define:",
              fix: [
                "Who can access what (and who cannot)",
                "How customer, payment, and internal data is handled",
                "What happens when staff join, change roles, or leave",
                "How systems log actions and changes",
                "Where responsibility sits if something goes wrong",
                "No paranoia. No tech overload. Just control.",
              ],
              changes: [
                "Access is intentional, not accidental",
                "Data is protected by process, not trust alone",
                "Fewer internal risks",
                "Clear accountability",
                "Business continuity even if people change",
                "You stop hoping nothing happens — and start knowing you’re protected.",
              ],
            },  
            {
              id: "inventory-ordering",
              num: "05",
              title: "Inventory, Ordering & Resource Confusion",
              tagline: "Stock feels like guesswork.",
              feelTitle: "What This Feels Like",
              feel: [
                "Stock runs out unexpectedly",
                "Items are over-ordered or missing",
                "You don’t trust the numbers you see",
                "Manual checks waste time",
                "Losses go unnoticed",
              ],
              note: "Inventory feels like guesswork.",
              fixIntro: "We design inventory and resource tracking systems that:",
              fix: ["Show real-time stock levels", "Track usage and movement", "Reduce waste and errors", "Support purchasing decisions"],
              changes: ["Fewer surprises", "Better planning", "Reduced losses", "Clear accountability"],
            },
            {
              id: "billing-cashflow",
              num: "06",
              title: "Billing, Invoicing & Cash Flow Blind Spots",
              tagline: "You’re unsure who owes what.",
              feelTitle: "What This Feels Like",
              feel: [
                "Invoices go out late or incorrectly",
                "Payments are not tracked properly",
                "Follow-ups are manual and uncomfortable",
                "You’re unsure who owes what at any given time",
              ],
              note: "Cash flow becomes stressful.",
              fixIntro: "We build billing and receivables systems that:",
              fix: ["Track invoices and payments clearly", "Show outstanding balances", "Support structured follow-up", "Reduce dependency on memory"],
              changes: ["Improved cash visibility", "Fewer disputes", "Faster collections", "Less financial stress"],
            },
            {
              id: "owner-visibility",
              num: "07",
              title: "Owner & Management Visibility",
              tagline: "Managing blind.",
              feelTitle: "What This Feels Like",
              feel: [
                "You rely on updates from others",
                "Reports are delayed or unclear",
                "You don’t have one clear view of the business",
                "Decisions are made with partial information",
              ],
              note: "You’re managing blind.",
              fixIntro: "We create simple dashboards that show:",
              fix: ["Sales activity", "Operations status", "Customer issues", "Financial indicators", "All in one place"],
              changes: ["Faster decisions", "More confidence", "Less micromanagement", "Better control"],
            },
            {
              id: "disconnected-systems",
              num: "08",
              title: "Disconnected Systems",
              tagline: "Everything works — but not together.",
              feelTitle: "What This Feels Like",
              feel: [
                "Website doesn’t connect to sales",
                "Marketing doesn’t connect to follow-up",
                "Accounting doesn’t match operations",
                "Data has to be re-entered multiple times",
              ],
              note: "Everything works — but nothing works together.",
              fixIntro: "We connect your systems so information flows automatically between:",
              fix: ["Website", "Sales", "Operations", "Customer service", "Finance"],
              changes: ["Less duplication", "Fewer errors", "Faster processes", "One source of truth"],
            },
                      
          ];

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [active, setActive] = useState(items[0].id);
          const current = useMemo(() => items.find((x) => x.id === active)!, [active]);

          return (
            <>
              {/* Mobile dropdown selector */}
              <div className="mt-8 lg:hidden">
                <label className="text-sm font-medium text-slate-800">Select an area</label>
                <select
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-300"
                  value={active}
                  onChange={(e) => setActive(e.target.value)}
                >
                  {items.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.num} — {i.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Desktop layout */}
              <div className="mt-8 hidden lg:grid lg:grid-cols-[420px_1fr] gap-6">
                {/* Tabs */}
                <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-slate-200 bg-slate-50/50">
                    <p className="text-sm font-semibold text-slate-900">Problem areas</p>
                    <p className="text-xs text-slate-500 mt-1">Choose one to view full details</p>
                  </div>

                  <div className="divide-y divide-slate-200">
                    {items.map((i) => {
                      const isActive = i.id === active;
                      return (
                        <button
                          key={i.id}
                          onClick={() => setActive(i.id)}
                          className={[
                            "w-full text-left p-5 transition relative",
                            isActive ? "bg-slate-50" : "hover:bg-slate-50/60",
                          ].join(" ")}
                        >
                          {/* active accent bar */}
                          <span
                            className={[
                              "absolute left-0 top-0 h-full w-[3px] transition",
                              isActive ? "opacity-100" : "opacity-0",
                            ].join(" ")}
                            style={{ background: "var(--brand-orange)" }}
                          />

                          <div className="flex items-start gap-4">
                            <div
                              className="h-11 w-11 rounded-2xl flex items-center justify-center border shrink-0"
                              style={{
                                borderColor: "rgba(255,122,0,0.35)",
                                background: isActive ? "rgba(255,122,0,0.16)" : "rgba(255,122,0,0.08)",
                              }}
                            >
                              <span className="font-mono text-sm text-slate-900">{i.num}</span>
                            </div>

                            <div className="flex-1">
                              <p className="font-semibold text-slate-900 leading-snug">{i.title}</p>
                              <p className="mt-1 text-sm text-slate-600">{i.tagline}</p>
                            </div>

                            <ChevronDown
                              className={cn(
                                "h-5 w-5 mt-1 text-slate-500 transition",
                                isActive ? "-rotate-90" : "rotate-0"
                              )}
                            />
                          </div>
                        </button>
                      );
                    })}
                     
                  </div>
                </div>

                {/* Content panel */}
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 md:p-7"
                >
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                    {current.title}
                  </h3>
                  <p className="mt-2 text-slate-600">
                    If this sounds familiar, you’re not alone — it’s a systems issue, not a “people issue”.
                  </p>

                  <div className="mt-6 grid gap-5 md:grid-cols-1">
                    {/* Feels like */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-sm font-semibold text-slate-900">{current.feelTitle}</p>
                      <ul className="mt-3 space-y-2">
                        {current.feel.map((t) => (
                          <li key={t} className="flex gap-2 text-sm text-slate-700 leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                      {current.note && (
                        <p className="mt-4 text-sm font-medium text-slate-900">
                          {current.note}
                        </p>
                      )}
                    </div>

                    {/* What we fix */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <p className="text-sm font-semibold text-slate-900">What We Fix</p>
                      <p className="mt-3 text-sm text-slate-600">{current.fixIntro}</p>
                      <ul className="mt-3 space-y-2">
                        {current.fix.map((t) => (
                          <li key={t} className="flex gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 mt-0.5" style={{ color: "var(--brand-orange)" }} />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What changes */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <p className="text-sm font-semibold text-slate-900">What Changes</p>
                      <ul className="mt-3 space-y-2">
                        {current.changes.map((t) => (
                          <li key={t} className="flex gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 mt-0.5" style={{ color: "var(--brand-orange)" }} />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                 

                  {/* SAFE NEXT STEP CTA */}
<div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
  <p className="text-sm font-semibold text-slate-900">
    A safe next step
  </p>

  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
    If this describes your business, we can identify the simplest first fix
    and what to do next.
  </p>

  <div className="mt-4 grid gap-3">
    <Link
      href="/contact"
      className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white"
      style={{ background: "var(--brand-orange)" }}
    >
      Talk to Us →
    </Link>

    <Link
      href="/how-we-work"
      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 transition"
    >
      How we work
    </Link>
  </div>

  <p className="mt-4 text-xs text-slate-500">
    Calm, business-first. No tech jargon.
  </p>
</div>

                </motion.div>
              </div>

              {/* Mobile content panel (below dropdown) */}
              <div className="mt-6 lg:hidden">
                <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{current.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    If this sounds familiar, you’re not alone — it’s a systems issue, not a “people issue”.
                  </p>

                  <div className="mt-5 space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-sm font-semibold text-slate-900">{current.feelTitle}</p>
                      <ul className="mt-3 space-y-2">
                        {current.feel.map((t) => (
                          <li key={t} className="flex gap-2 text-sm text-slate-700">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                      {current.note && <p className="mt-3 text-sm font-medium text-slate-900">{current.note}</p>}
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <p className="text-sm font-semibold text-slate-900">What We Fix</p>
                      <p className="mt-2 text-sm text-slate-600">{current.fixIntro}</p>
                      <ul className="mt-3 space-y-2">
                        {current.fix.map((t) => (
                          <li key={t} className="flex gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 mt-0.5" style={{ color: "var(--brand-orange)" }} />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <p className="text-sm font-semibold text-slate-900">What Changes</p>
                      <ul className="mt-3 space-y-2">
                        {current.changes.map((t) => (
                          <li key={t} className="flex gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 mt-0.5" style={{ color: "var(--brand-orange)" }} />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium text-black w-full"
                      style={{ background: "var(--brand-orange)" }}
                    >
                      Let’s Identify What’s Breaking Down
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })()}
      </div>

      
    </div>
  </div>
</section>


      {/* REALITY CHECK (full width) */}
      {/* IMPORTANT REALITY CHECK — full-width dark band */}
<section className="relative overflow-hidden">
  {/* Background */}
  <div
    className="absolute inset-0 bg-brand-gradient shadow-[0_25px_90px_-55px_rgba(0,0,0,.55)]"
  />
  {/* Optional side images (remove this whole block if you don't want images) */}
  <div className="pointer-events-none absolute inset-0 hidden lg:block">
    <div className="absolute left-24 top-1/2 -translate-y-1/2">
      <div className="h-44 w-56 rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
        <img
          src="/solution1.png"
          alt="Structure Solution"
          className="h-full w-full object-cover opacity-90"
          loading="lazy"
        />
      </div>
    </div>

    <div className="absolute right-24 top-1/2 -translate-y-1/2">
      <div className="h-52 w-60 rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
        <img
          src="/solution2.png"
          alt="Predictability solution"
          className="h-full w-full object-cover opacity-90"
          loading="lazy"
        />
      </div>
    </div>
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 lg:py-24">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
        IMPORTANT REALITY CHECK
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
        This Is Not About Technology
      </h2>

      <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed">
        Technology is just the tool. What we actually deliver is:
      </p>

      <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
        {["Structure", "Clarity", "Control", "Predictability"].map((t) => (
          <span
            key={t}
            className="text-sm font-semibold px-3 py-1 rounded-full border border-white/10 bg-black/20"
          >
            <span style={{ color: "var(--brand-orange)" }}>•</span>{" "}
            <span className="text-white/90">{t}</span>
          </span>
        ))}
      </div>

      <p className="mt-6 text-white/75 leading-relaxed">
        If your business feels harder to manage than it should —{" "}
        <span className="text-white font-semibold">that’s the signal.</span>
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium text-black"
          style={{ background: "var(--brand-orange)" }}
        >
          Let’s Identify What’s Breaking Down
        </a>

        <a
          href="/how-we-work"
          className="inline-flex items-center justify-center bg-white rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
        >
          How we work
        </a>
      </div>

      <p className="mt-3 text-xs text-white/55">
        One conversation can remove months of frustration.
      </p>
    </div>
  </div>
</section>


      {/* FINAL CTA */}
     {/* FINAL CTA — image + content */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
    <div className="grid gap-10 lg:grid-cols-2 items-center">
      {/* Content */}
      <div>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
          You Don’t Need to Diagnose
          <br />
          the Problem Alone
        </h2>

        <p className="mt-5 text-slate-600 leading-relaxed max-w-xl">
          Most business owners know something is wrong — they just don’t have time to untangle it.{" "}
          <span className="font-semibold text-slate-900">That’s our job.</span>
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:opacity-80 transition"
          >
            Let’s Identify What’s Breaking Down <span aria-hidden>→</span>
          </a>

          <a
            href="/services"
            className="inline-flex items-center bg-brand-gradient justify-center rounded-full px-8 py-3 text-sm font-medium text-white shadow-sm hover:opacity-95 transition"
          >
            See Services
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          One conversation can remove months of frustration.
        </p>
      </div>

      {/* Image */}
      <div className="relative">
        {/* soft orange glow */}
        <div
          className="absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-25"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,122,0,0.35), transparent 60%)",
          }}
        />

        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-100 shadow-sm">
          {/* Replace with your own image */}
          <img
            src="/solution3.jpeg"
            alt="Business clarity discussion"
            className="h-[420px] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
