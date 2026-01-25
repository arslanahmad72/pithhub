import type { Metadata } from "next";
import IndustriesClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing for Custom Business Systems | PithHub Jamaica",
  description:
  "Clear pricing logic based on scope, complexity and impact. Foundation, Growth and Scale engagement levels—no guesswork, no surprise costs.",
  alternates: { canonical: "/pricing" },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
