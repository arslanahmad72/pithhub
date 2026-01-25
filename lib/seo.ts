import type { Metadata } from "next";
import { site } from "./site";

export function buildMetadata(
  title: string,
  description: string,
  path = "/"
): Metadata {
  const url = site.url + path;

  return {
    title: `${title} | ${site.shortName}`,
    description,
    alternates: { canonical: url },
  };
}

export function orgWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        areaServed: site.market,
      },
      {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
      },
    ],
  };
}
