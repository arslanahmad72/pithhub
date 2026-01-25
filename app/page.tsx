import { buildMetadata } from "@/lib/seo";
import HomeClient from "./HomeClient";

export const metadata = buildMetadata(
  "Business Systems & Digital Solutions for Jamaican Businesses",
  "We design simple digital systems that remove confusion, reduce dependence on people, and give owners real control over operations, sales, and visibility.",
  "/"
);

export default function Page() {
  return <HomeClient />;
}
