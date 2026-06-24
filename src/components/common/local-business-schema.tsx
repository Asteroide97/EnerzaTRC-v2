import { getLocalBusinessJsonLd } from "@/lib/json-ld";
import { SEOJsonLd } from "@/components/common/seo-json-ld";

export function LocalBusinessSchema() {
  return <SEOJsonLd data={getLocalBusinessJsonLd()} />;
}
