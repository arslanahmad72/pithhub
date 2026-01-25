import type { Metadata } from "next";
import HowWeWork from "./HowWeWork";

export const metadata: Metadata = {
  title: "Our Process: Discover, Design, Build, Support | PithHub",
  description:
  "A calm, structured approach—business mapping, system design, phased builds, training and support to reduce risk and ensure adoption.",
    alternates: { canonical: "/how-we-work" },
};

export default function HowWeWorkpage() {
  return <HowWeWork />;
}
