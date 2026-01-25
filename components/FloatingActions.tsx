"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Phone, Mail, MessageCircle } from "lucide-react";

function cx(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Show "Top" when user scrolls down enough (and also works near end)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? y / max : 0;

      // show after some scroll OR near end
      setShowTop(y > 500 || progress > 0.6);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close panel on outside click + ESC
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      const t = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(t)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Update these to your real contact
  const phoneDisplay = "+1 876 535 6390";
  const phoneHref = "tel:+18765356390";
  const emailDisplay = "info@pithhub.com";
  const emailHref = "mailto:info@pithhub.com";

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {/* CONTACT PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="mb-1 w-[260px] rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-[0_18px_60px_-35px_rgba(0,0,0,.35)] overflow-hidden"
          >
            <div className="p-4 border-b border-slate-200 bg-white/70">
              <p className="text-sm font-semibold text-slate-900">Quick Contact</p>
              <p className="text-xs text-slate-500 mt-1">
                Choose how you’d like to reach us.
              </p>
            </div>

            <div className="p-4 grid gap-2">
              <a
                href={phoneHref}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 hover:bg-slate-50 transition"
              >
                <span
                  className="h-10 w-10 rounded-2xl grid place-items-center border"
                  style={{
                    borderColor: "rgba(255,122,0,0.35)",
                    background: "rgba(255,122,0,0.10)",
                  }}
                >
                  <Phone className="h-5 w-5" style={{ color: "var(--brand-orange)" }} />
                </span>
                <span className="flex-1">
                  <span className="block font-medium">Call</span>
                  <span className="block text-xs text-slate-500">{phoneDisplay}</span>
                </span>
              </a>

              <a
                href={emailHref}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 hover:bg-slate-50 transition"
              >
                <span
                  className="h-10 w-10 rounded-2xl grid place-items-center border"
                  style={{
                    borderColor: "rgba(255,122,0,0.35)",
                    background: "rgba(255,122,0,0.10)",
                  }}
                >
                  <Mail className="h-5 w-5" style={{ color: "var(--brand-orange)" }} />
                </span>
                <span className="flex-1">
                  <span className="block font-medium">Email</span>
                  <span className="block text-xs text-slate-500">{emailDisplay}</span>
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QUICK CONTACT BUTTON */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Quick contact"
        className={cx(
          "h-12 w-12 rounded-full grid place-items-center shadow-sm transition",
          "border border-white/20"
        )}
        style={{
          background: "var(--brand-orange)",
          color: "#fff",
        }}
      >
        <MessageCircle className="h-5 w-5" />
      </button>

      {/* BACK TO TOP BUTTON (only shows after scroll) */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="h-12 w-12 rounded-full grid place-items-center border border-white/20 shadow-[0_18px_60px_-45px_rgba(0,0,0,.45)] hover:opacity-95 transition"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,122,0,1) 0%, rgba(0,0,0,0.9) 120%)",
              color: "#fff",
            }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
