import { Target, TrendingUp, Users, Shield, Home } from "lucide-react";

export const roadmapSteps = [
  {
    number: "1",
    title: "Define Your Goals",
    description:
      "What type of property are you looking for? Investment, family home, or relocation? We start by understanding your unique objectives, budget, and timeline.",
    icon: Target,
    color: "blue",
  },
  {
    number: "2",
    title: "Understand the Market",
    description:
      "Data insights, neighborhoods, pricing trends — all simplified. Our PropTech tools and market analysis help you make informed decisions.",
    icon: TrendingUp,
    color: "green",
  },
  {
    number: "3",
    title: "Build Your Team",
    description:
      "We connect you with vetted local professionals (agents, lawyers, banks). Every professional is personally verified for expertise with international buyers.",
    icon: Users,
    color: "purple",
  },
  {
    number: "4",
    title: "Buy With Confidence",
    description:
      "From negotiation to legal process — every step mapped out clearly. We guide you through offers, due diligence, financing, and closing.",
    icon: Shield,
    color: "orange",
  },
  {
    number: "5",
    title: "Move & Optimize",
    description:
      "Post-purchase support — renovation, rental management, and relocation tips. Your relationship with us doesn't end at closing.",
    icon: Home,
    color: "indigo",
  },
] as const;

export type RoadmapStep = (typeof roadmapSteps)[number];
