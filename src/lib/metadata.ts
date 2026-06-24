import type { Metadata } from "next";
import { businessConfig } from "@/config/business";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

const defaultImage = "/images/brand/enerza-logo-oficial-cropped.jpg";

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = defaultImage,
  noIndex = false,
}: MetadataInput): Metadata {
  const canonical = new URL(path, businessConfig.domain).toString();
  const fullTitle =
    title === businessConfig.defaultSeo.defaultTitle
      ? title
      : `${title} | ${businessConfig.businessName}`;

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(businessConfig.domain),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "es_MX",
      url: canonical,
      siteName: businessConfig.businessName,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}
