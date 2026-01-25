import type { Metadata } from "next";
import IndustriesClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Talk to a Systems Partner | PithHub Jamaica",
  description:
  "Start with a conversation, not a commitment. Tell us what’s breaking down—we’ll help you identify the real issue and the best path forward.",
  alternates: { canonical: "/contact" },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
