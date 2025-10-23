export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  available: boolean;
  link?: string;
  category?: string;
  region?: string;
}

export const services: Service[] = [
  {
    id: "real-estate-agents",
    name: "Real Estate Agents",
    description:
      "Verified Algarve property consultants specialising in relocation, investment, and lifestyle acquisitions.",
    icon: "Home",
    available: true,
    category: "Core Network",
    region: "Algarve",
  },
  {
    id: "real-estate-lawyers",
    name: "Real Estate Lawyers",
    description:
      "English-speaking Portuguese legal teams covering CPCV drafting, due diligence, and completion support.",
    icon: "Scale",
    available: true,
    category: "Core Network",
    region: "Portugal",
  },
  {
    id: "constructors",
    name: "Constructors",
    description:
      "Construction partners delivering renovations, structural upgrades, and new-build management throughout the Algarve.",
    icon: "Hammer",
    available: true,
    category: "Extended Network",
    region: "Algarve",
  },
  {
    id: "architects",
    name: "Architects",
    description:
      "Award-winning Algarve architects creating bespoke designs with permitting, sustainability, and 3D visualisation.",
    icon: "Building",
    available: true,
    category: "Extended Network",
    region: "Portugal",
  },
  {
    id: "accountants",
    name: "Accountants",
    description:
      "Property-focused accountants guiding IMI, rental taxation, and cross-border structuring for international buyers.",
    icon: "Wallet",
    available: true,
    category: "Advisory Network",
    region: "Portugal",
  },
  {
    id: "notaries",
    name: "Notaries",
    description:
      "Trusted Algarve notaries to authenticate documents, draft deeds, and register secure transfers.",
    icon: "Pen",
    available: true,
    category: "Core Network",
    region: "Algarve",
  },
  {
    id: "home-inspectors",
    name: "Home Inspectors",
    description:
      "Inspection teams delivering structural, electrical, and plumbing reports before you commit to purchase.",
    icon: "Search",
    available: true,
    category: "Due Diligence",
    region: "Algarve",
  },
  {
    id: "civil-engineers",
    name: "Civil Engineers",
    description:
      "Engineering specialists overseeing site analysis, design compliance, and construction oversight.",
    icon: "Ruler",
    available: true,
    category: "Extended Network",
    region: "Portugal",
  },
  {
    id: "electricians",
    name: "Electricians",
    description:
      "Certified Algarve electricians handling installations, upgrades, safety inspections, and emergency call-outs.",
    icon: "Zap",
    available: true,
    category: "Operational Support",
    region: "Algarve",
  },
];
