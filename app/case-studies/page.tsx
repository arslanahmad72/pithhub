import type { Metadata } from "next";
import CaseStudio from "./CaseStudio";

export const metadata: Metadata = {
  title: "Case Studies | Systems That Reduce Chaos | PithHub Jamaica",
  description:
  "See how we improve control, visibility, accountability and customer experience through practical systems design—not buzzwords or templates.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudioPage() {
  return <CaseStudio />;
}
