import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Building2,
  Cpu,
  Globe2,
  HeartHandshake,
  Landmark,
  Leaf,
  LineChart,
  MapPinned,
  Newspaper,
  PieChart,
  Plane,
  Scale,
  Stethoscope,
} from "lucide-react";

export type CategorySlug =
  | "construction-updates"
  | "expat-investor-focus"
  | "general"
  | "health"
  | "investment-insights"
  | "legal-updates"
  | "lifestyle"
  | "market-trends"
  | "neighborhood-news"
  | "politics"
  | "professional-news"
  | "sustainability-environment"
  | "technology"
  | "tourism";

export const CATEGORY_ICONS: Record<CategorySlug, LucideIcon> = {
  "construction-updates": Building2,
  "expat-investor-focus": Globe2,
  "general": Newspaper,
  "health": Stethoscope,
  "investment-insights": PieChart,
  "legal-updates": Scale,
  "lifestyle": HeartHandshake,
  "market-trends": LineChart,
  "neighborhood-news": MapPinned,
  "politics": Landmark,
  "professional-news": BriefcaseBusiness,
  "sustainability-environment": Leaf,
  "technology": Cpu,
  "tourism": Plane,
};

export function getCategoryIcon(slug?: string): LucideIcon {
  const key = (slug ?? "") as CategorySlug;
  return (CATEGORY_ICONS as Record<string, LucideIcon>)[key] ?? Newspaper;
}
