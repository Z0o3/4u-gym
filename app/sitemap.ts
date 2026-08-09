import type { MetadataRoute } from "next";
import { getRequestSiteUrl } from "../src/lib/site-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = await getRequestSiteUrl();

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
