import type { MetadataRoute } from "next";

// Demo template: keep it out of search indexes.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
