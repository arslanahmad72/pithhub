"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const nav = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
];

const SERVICES = [
  { title: "Business Systems", href: "/services/business-systems" },
  { title: "Custom Software", href: "/services/custom-software" },
  { title: "Websites", href: "/services/websites" },
  { title: "Cybersecurity, Access & Data Control", href: "/services/cybersecurity-access-data-control" },
  { title: "Digital Marketing", href: "/services/digital-marketing" },
  { title: "System Integration", href: "/services/system-integration" },
  { title: "Support & Training", href: "/services/support" },

];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setServicesMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Glass background */}
      <div
        className={[
          "absolute inset-0 -z-10 transition",
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-slate-200 shadow-[0_10px_30px_-30px_rgba(0,0,0,.35)]"
            : "bg-transparent",
        ].join(" ")}
      />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/pithhub-logo-black.png"
            alt="PithHub"
            width={180}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 backdrop-blur px-2 py-2">
          {nav.map((item) => {
            if (item.href === "/services") {
              return (
                <div
                  key="services"
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/services"
                    className={[
                      "relative px-4 py-2 rounded-full text-sm inline-flex items-center gap-1",
                      isServicesActive
                        ? "text-slate-950"
                        : "text-slate-600 hover:text-slate-950",
                    ].join(" ")}
                  >
                    Services
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                    {isServicesActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-slate-950/5"
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute left-0 top-[calc(100%+10px)] w-[300px] rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-[0_20px_70px_-45px_rgba(0,0,0,.45)]"
                      >
                        <div className="p-2">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className={[
                                "block px-4 py-3 rounded-2xl text-sm transition",
                                pathname.startsWith(s.href)
                                  ? "bg-slate-950/5 font-medium text-slate-950"
                                  : "text-slate-700 hover:bg-slate-950/5",
                              ].join(" ")}
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "relative px-4 py-2 rounded-full text-sm transition",
                  active
                    ? "text-slate-950"
                    : "text-slate-600 hover:text-slate-950",
                ].join(" ")}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-slate-950/5"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA + MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex rounded-full bg-brand-gradient text-white px-5 py-2.5 text-sm font-medium"
          >
            Let’s Talk
          </Link>

          <button
            className="lg:hidden rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white/80 backdrop-blur-xl border-t border-slate-200"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
              {nav.map((item) => {
                if (item.href === "/services") {
                  return (
                    <div key="m-services" className="rounded-2xl bg-white/70">
                      <div className="flex items-center">
                        <Link
                          href="/services"
                          className="flex-1 px-4 py-3 text-sm font-medium text-slate-900"
                        >
                          Services
                        </Link>

                        <button
                          onClick={() =>
                            setServicesMobileOpen((v) => !v)
                          }
                          className="px-4 py-3"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition ${
                              servicesMobileOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <AnimatePresence>
                        {servicesMobileOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-2 pb-2 space-y-1">
                              {SERVICES.map((s) => (
                                <Link
                                  key={s.href}
                                  href={s.href}
                                  className="block px-4 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-950/5"
                                >
                                  {s.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 rounded-2xl text-sm text-slate-700 hover:bg-slate-950/5"
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className="mt-2 block text-center rounded-2xl bg-brand-gradient text-white px-5 py-3 text-sm font-medium"
              >
                Let’s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
