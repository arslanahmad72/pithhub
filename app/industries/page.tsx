import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries | PithHub — Systems for Retail, Construction, Clinics & More",
  description:
  "Retail, construction, hospitality, clinics, logistics, manufacturing and professional services—systems designed for your industry realities and growth pressure.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
