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
  location: string;
  state: string;
  city: string;
  clientType: CustomerType;
  serviceType: string;
  capacityKwp?: number;
  panelCount?: number;
  inverter?: string;
  installationTime?: string;
  estimatedSavings?: string;
  challenge: string;
  solution: string;
  results: string;
  coverImage: string;
  gallery: string[];
  featured: boolean;
  relatedCities: string[];
};
