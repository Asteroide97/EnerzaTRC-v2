import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatOptionalMetric(
  value: string | number | undefined,
  fallback = "Dato por confirmar",
) {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  return `${value}`;
}
