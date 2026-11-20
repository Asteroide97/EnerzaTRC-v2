export type CustomerType =
  | "residencial"
  | "comercial"
  | "industrial"
  | "agricola"
  | "mantenimiento";

export type Project = {
  id: string;
  slug: string;
  title: string;
  heading?: string;
  introduction?: string;
  seo?: { title: string; description: string; canonical: string };
  location: string;
  state: string;
  city: string;
  clientType?: CustomerType;
  serviceType: string;
  capacityKwp?: number;
  panelCount?: number;
  panelWatts?: number;
  inverter?: string;
  installationTime?: string;
  estimatedSavings?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  coverImage: string;
  gallery: { src: string; alt: string }[];
  featured: boolean;
  relatedCities: string[];
};
