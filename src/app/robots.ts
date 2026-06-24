import type { MetadataRoute } from "next";
import { businessConfig } from "@/config/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${businessConfig.domain}/sitemap.xml`,
    host: businessConfig.domain,
  };
}
