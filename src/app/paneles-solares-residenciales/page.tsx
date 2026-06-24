import { servicePages } from "@/data/service-pages";
import { createMetadata } from "@/lib/metadata";
import { ServicePageTemplate } from "@/components/pages/service-page-template";

const content = servicePages.residenciales;

export const metadata = createMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.path,
  keywords: content.keywords,
});

export default function PanelesSolaresResidencialesPage() {
  return <ServicePageTemplate content={content} />;
}
