"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Youtube, X } from "lucide-react";
import { motion } from "framer-motion";

const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Pricing", href: "/pricing" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const socials = [
  { href: "https://www.x.com/pithhub", Icon: X, label: "X" },
  { href: "https://www.facebook.com/piTHhubja/", Icon: Facebook, label: "Facebook" },
  { href: "https://www.youtube.com/channel/UCI8gFoGyxIudkaz6SCEQWxA", Icon: Youtube, label: "YouTube" },
  { href: "https://jm.linkedin.com/in/pithhub-82a281192", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/pithhub/", Icon: Instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative text-white">
      {/* Top curve */}
      <svg
        className="block w-full h-14 md:h-16"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,120 520,10 720,70 C920,130 1200,25 1440,70 L1440,120 L0,120 Z"
          fill="#0F0F0F"
        />
      </svg>

      {/* Main footer area */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "#000",
        }}
      >
        {/* subtle blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-56 right-0 h-[640px] w-[640px] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-8">
          {/* Top block (like Digipro) */}
          <div className="grid gap-10 lg:grid-cols-[360px_1fr_220px] items-start">
            {/* Brand / short copy */}
            <div>
              <div className="flex items-center gap-3">
                {/* If your logo has big whitespace, replace with a cropped file */}
                <Image
                  src="/pithhub_white.png"
                  alt="PithHub"
                  width={200}
                  height={36}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-sm">
                Systems-first operations for Jamaican businesses. Replace chaos with clarity, visibility, and control.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <p className="text-xs tracking-widest text-white/60 font-medium">FOLLOW US</p>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="mt-3 flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <s.Icon className="h-4 w-4 text-white/80" />
                  </a>
                ))}
              </div>
            </div>

            {/* Big CTA text */}
            <div className="lg:pl-6">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                Let&apos;s Talk About
                <br />
                <span className="font-serif italic text-white/95">Your Business</span>
              </h2>
              <p className="mt-5 text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
                You don’t need to know what tools you need. You just need to know what’s not working.
                We’ll map the mess, fix the leaks, and build a system you can trust.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white text-slate-950 px-5 py-3 text-sm font-medium hover:opacity-95 transition"
                >
                  Book a Call
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/15 transition"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>

            {/* Circular badge (visual accent) */}
            {/* Circular badge (clickable + rotate on hover) */}
<div className="hidden lg:flex justify-end">
  <Link href="/contact" aria-label="Go to contact">
    <motion.div
      className="relative flex items-center justify-center rounded-full cursor-pointer"
      style={{
        width: 176,
        height: 176,
        background: "rgba(10,10,10,0.95)",
        border: "1px solid rgba(255,255,255,0.18)",
      }}
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {/* inner ring */}
      <div className="absolute inset-3 rounded-full border border-white/10" />

      {/* Circular text */}
      <svg
        viewBox="0 0 200 200"
        width="176"
        height="176"
        className="absolute inset-0"
        aria-hidden="true"
      >
        <defs>
          <path
            id="footerCirclePath"
            d="
              M 100,100
              m -72,0
              a 72,72 0 1,1 144,0
              a 72,72 0 1,1 -144,0
            "
          />
        </defs>

        <text fill="rgba(255,255,255,0.88)" fontSize="12" fontWeight="600" letterSpacing="2">
          <textPath href="#footerCirclePath" startOffset="0%">
            {"Let’s Connect • Let’s Connect • Let’s Connect • "}
          </textPath>
        </text>
      </svg>

      {/* center button */}
      <div className="relative z-10 h-14 w-14 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center">
        <span className="text-2xl text-white/90">→</span>
      </div>
    </motion.div>
  </Link>
</div>

          </div>

          {/* Divider */}
          <div className="mt-10 h-px w-full bg-white/10" />

          {/* Links row (like reference) */}
          <div className="mt-10 grid gap-10 md:grid-cols-4">
            {/* Contact */}
            <div>
              <p className="font-medium">Connect With Us</p>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li className="flex gap-2">
                  <Mail className="h-4 w-4 mt-0.5 text-white/60" />
                  <a className="hover:text-white transition" href="mailto:info@pithhub.com">
                    info@pithhub.com
                  </a>
                </li>
                <li className="flex gap-2">
                  <Phone className="h-4 w-4 mt-0.5 text-white/60" />
                  <a className="hover:text-white transition" href="tel:+18765356390">
                    +1 876 535 6390
                  </a>
                </li>
                <li className="flex gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-white/60" />
                  <span>38 Cassia Park Road, Kingston 10, Saint Andrew</span>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="font-medium">Company</p>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {company.map((i) => (
                  <li key={i.href}>
                    <Link className="hover:text-white transition" href={i.href}>
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions / Navigate */}
            <div>
              <p className="font-medium">Navigate</p>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {nav.map((i) => (
                  <li key={i.href}>
                    <Link className="hover:text-white transition" href={i.href}>
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <p className="font-medium">Subscribe</p>
              <p className="mt-3 text-sm text-white/70">
                Monthly insights on operations, systems, and visibility.
              </p>

              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="h-11 w-full rounded-full bg-white/10 border border-white/15 px-4 text-sm outline-none placeholder:text-white/40 focus:border-white/25"
                />
                <button
            type="button"
            className="h-11 rounded-full px-5 text-sm text-white font-medium bg-[var(--brand-orange)] text-black shadow-lg shadow-orange-500/30 hover:opacity-95 transition"
          >
            Subscribe
          </button>

              </form>

              <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/60">
                {legal.map((i) => (
                  <Link key={i.href} href={i.href} className="hover:text-white transition">
                    {i.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <p>© {new Date().getFullYear()} PithHub. All rights reserved.</p>
            <p>Serving Jamaican businesses with systems-first solutions.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
