import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

const SITE_URL = "https://pithhub.com"; // ✅ change to your real domain

export const metadata: Metadata = {
  title: "Business Problems We Solve with Digital Systems | PithHub Jamaica",
  description:
    "Fix operations, sales leakage, customer service chaos, inventory confusion, billing blind spots, and poor visibility with systems built around your workflow.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solutions",
        item: `${SITE_URL}/solutions`,
      },
    ],
  };

  return (
    <>
      {/* ✅ Breadcrumb schema (SEO only, doesn't affect UI) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SolutionsClient />
    </>
  );
}
