// src/app/roadmap/page.tsx
import type { Metadata } from "next";
import { meta } from "@/lib/seo";
import { roadmapSteps as sharedRoadmapSteps } from "@/data/roadmap";
import RoadmapClient, { type RoadmapStep } from "./RoadmapClient";

export const metadata: Metadata = meta({
  title: "5-Step Property Roadmap | Real Estate Algarve",
  description:
    "Follow the five-step Algarve property roadmap: Define Your Goals, Understand the Market, Build Your Team, Buy With Confidence, and Move & Optimize with trusted professionals.",
  canonical: "/roadmap",
});

const roadmapAnchors = [
  "define-your-goals",
  "understand-the-market",
  "build-your-team",
  "buy-with-confidence",
  "move-and-optimize",
] as const;

const metaSteps = sharedRoadmapSteps;

const ROADMAP_STEPS: RoadmapStep[] = [
  {
    number: Number(metaSteps[0]?.number ?? 1),
    title: metaSteps[0]?.title ?? "Define Your Goals",
    subtitle:
      "Clarify lifestyle outcomes, budget, and non-negotiables before we engage the market.",
    summary:
      "We translate your objectives into a structured Algarve acquisition brief, aligning financing, travel windows, and decision timelines.",
    slug: roadmapAnchors[0],
    sections: [
      {
        heading: "Lifestyle & Investment Blueprint",
        bullets: [
          "Document relocation, lifestyle, or rental yield priorities and the Algarve experiences you expect.",
          "List essential property features including bedroom counts, architectural style, outdoor space, and renovation appetite.",
          "Establish target budget ranges covering purchase price, closing costs, furnishings, and improvement reserves.",
          "Define decision-makers, approval process, and readiness to transact in person or through attorneys.",
        ],
      },
      {
        heading: "Financing and Planning Checklist",
        description:
          "Timeline the first 90 days so scouting trips convert into actionable offers.",
        bullets: [
          "Align purchase ceiling, deposit strategy, and available cash versus financing.",
          "Run affordability scenarios with Portuguese lenders to validate loan-to-value ratios.",
          "Plan scouting trip windows, remote viewing alternatives, and decision committees.",
          "Document travel logistics, school or lifestyle needs, and rental yield targets.",
        ],
      },
      {
        heading: "Outputs from Step 1",
        bullets: [
          "A written Algarve buyer brief covering property type, lifestyle goals, and rental strategy.",
          "Budget model with acquisition, taxes, furnishings, and first-year holding costs.",
          "90-day search calendar including professional consultations and mock offer timeline.",
        ],
      },
    ],
  },
  {
    number: Number(metaSteps[1]?.number ?? 2),
    title: metaSteps[1]?.title ?? "Understand the Market",
    subtitle:
      "Use Algarve market analytics to target the right neighbourhoods and price bands.",
    summary:
      "We pair your brief with comparable sales, supply pipelines, and rental data so you focus on zones delivering the lifestyle and returns you expect.",
    slug: roadmapAnchors[1],
    sections: [
      {
        heading: "Macro-Market Snapshot 2024-2025",
        description:
          "Portugal continues to show resilient demand supported by EU relocation, golden visa alumni, and robust tourism-led rentals.",
        metrics: [
          {
            label: "National Average 2025",
            value: "EUR 2,735 per sqm",
            description: "Forecast published by major lenders with 5-8 percent annual growth.",
            accent: "info",
          },
          {
            label: "Median Q3 2024",
            value: "EUR 1,819 per sqm",
            description: "Source: Instituto Nacional de Estatistica residential transactions.",
          },
          {
            label: "Growth Since 2015",
            value: "105 percent",
            description: "Driven by international demand and infrastructure investment.",
            accent: "success",
          },
          {
            label: "2025 Projection",
            value: "5-8 percent",
            description: "Base case for Algarve resort zones across major broker forecasts.",
          },
        ],
      },
      {
        heading: "Price per sqm by Algarve Sub-Region",
        description:
          "Current resale pricing for turnkey homes. Renovation stock often trades 12-18 percent below these averages.",
        table: {
          columns: ["Area", "Prime resale", "Lifestyle homes", "Notes"],
          rows: [
            {
              cells: [
                "Central Algarve",
                "EUR 4,600-6,200",
                "EUR 3,200-4,100",
                "Vilamoura, Quinta do Lago, Vale do Lobo golf communities.",
              ],
            },
            {
              cells: [
                "Western Algarve",
                "EUR 4,200-5,500",
                "EUR 2,900-3,700",
                "Lagos, Sagres, ocean-view villas and boutique condos.",
              ],
            },
            {
              cells: [
                "Eastern Algarve",
                "EUR 3,600-4,800",
                "EUR 2,400-3,100",
                "Tavira, Olhao, slower-paced fishing towns with marina upgrades.",
              ],
            },
            {
              cells: [
                "Interior Algarve",
                "EUR 2,500-3,400",
                "EUR 1,600-2,200",
                "Silves, Monchique, country estates with land and privacy.",
              ],
            },
          ],
          footnote:
            "Values reflect completed resale homes in 2024. New-build premiums range between 8 and 15 percent depending on specification.",
        },
      },
      {
        heading: "Market Discovery Checklist",
        bullets: [
          "Prioritise Algarve municipalities based on commute times, school access, and coastal lifestyle expectations.",
          "Compare turnkey versus renovation inventory to identify value-add opportunities within your risk profile.",
          "Model rental yield scenarios across peak, shoulder, and off-season periods.",
          "Track infrastructure upgrades, hospitality launches, and marina expansions that influence long-term appreciation.",
        ],
      },
      {
        heading: "Outputs from Step 2",
        bullets: [
          "Curated shortlist of Algarve neighbourhoods mapped to lifestyle and investment criteria.",
          "Data-backed pricing bands for villas, townhouses, and apartments within scope.",
          "Preliminary rental yield and appreciation assumptions to validate your business case.",
        ],
      },
    ],
  },
  {
    number: Number(metaSteps[2]?.number ?? 3),
    title: metaSteps[2]?.title ?? "Build Your Team",
    subtitle:
      "Assemble bilingual specialists who protect your interests end-to-end.",
    summary:
      "Our verified Algarve network covers legal, tax, financing, engineering, and property management so you can execute decisions quickly and safely.",
    slug: roadmapAnchors[2],
    sections: [
      {
        heading: "Compliance Foundation",
        description:
          "Lawyers coordinate with tax advisors and banks to ensure AML, identity, and representation checks are complete.",
        bullets: [
          "Obtain Portuguese NIF for each buyer and align with fiscal representative if required.",
          "Open a domestic bank account or activate non-resident onboarding with SEPA transfers.",
          "Complete anti-money-laundering questionnaires with proof of funds and origin statements.",
          "Draft power of attorney for remote signings, translation, or dual-country logistics.",
        ],
      },
      {
        heading: "Document Timeline",
        table: {
          columns: ["Requirement", "Owner", "Target timeline"],
          rows: [
            { cells: ["Portuguese NIF registration", "Buyer + lawyer", "1-2 business days"] },
            { cells: ["Bank account onboarding", "Buyer + bank", "1-2 weeks"] },
            { cells: ["Source of funds dossier", "Buyer", "Within 10 days of request"] },
            { cells: ["Power of attorney drafting", "Lawyer", "5-10 days including notarisation"] },
            { cells: ["Civil status certificates", "Buyer", "2-3 weeks (home country issuance)"] },
          ],
          footnote:
            "Timelines assume digital processing. Apostilled originals may extend lead times depending on issuing country.",
        },
      },
      {
        heading: "Core Advisory Bench",
        bullets: [
          "Engage bilingual property lawyer with Algarve transaction experience.",
          "Coordinate with tax advisor on ownership structure, wealth planning, and NHR considerations.",
          "Confirm notary preferences, translation support, and escrow mechanics for deed day.",
          "Register for digital signature tools used by Portuguese authorities (DocuSign equivalents).",
        ],
      },
      {
        heading: "Due Diligence Network",
        description:
          "Beyond legal counsel, we mobilise surveyors, engineers, and property managers to de-risk each shortlist candidate.",
        bullets: [
          "Lawyers collect land registry certificates, tax matrices, and condominium minutes to flag liabilities.",
          "Specialists confirm planning permissions, use classifications, habitation licences, and outstanding utilities.",
          "Engineers survey structure, MEP systems, waterproofing, and energy efficiency for renovation planning.",
          "Contractors prepare scope, cost, and timeline benchmarks for upgrades or turnkey refresh projects.",
          "Property managers validate inventory lists, warranties, and operational readiness for rental programs.",
        ],
      },
      {
        heading: "Risk and Cost Tracker",
        table: {
          columns: ["Item", "Benchmark", "Notes"],
          rows: [
            ["Structural repairs", "EUR 80-150 per sqm", "Pricing from Algarve chartered engineers."],
            ["Energy upgrades", "EUR 6,000-12,000", "Heat pumps, solar prep, glazing replacements."],
            ["Legal contingencies", "5-10 percent", "Buffer for pending planning or registration updates."],
            ["Condo reserve fund", "EUR 30-90 per month", "Varies by building age and amenity level."],
          ].map((cells) => ({ cells: cells as string[] })),
          footnote:
            "Figures represent recent Algarve projects in 2024. Include inflation buffer for bespoke finishes or imported materials.",
        },
      },
      {
        heading: "Outputs from Step 3",
        bullets: [
          "Fully documented client file ready for offers, mortgage underwriting, and CPCV execution.",
          "Appointed Algarve legal representative with authority to act locally when you are abroad.",
          "Verified survey, engineering, and inspection partners allocated to each shortlisted property.",
          "Negotiation levers documented from legal and technical reports, informing pricing strategy.",
          "Go or no-go decision framework aligned with financing, compliance, and rental objectives.",
        ],
      },
    ],
  },
  {
    number: Number(metaSteps[3]?.number ?? 4),
    title: metaSteps[3]?.title ?? "Buy With Confidence",
    subtitle:
      "Negotiate, contract, and fund the transaction with clarity at every milestone.",
    summary:
      "We choreograph the CPCV, escrow, mortgage, and deed logistics so completion stays on schedule.",
    slug: roadmapAnchors[3],
    sections: [
      {
        heading: "Negotiation and CPCV Strategy",
        bullets: [
          "Agree on headline price, inclusions, and timeline with escalation clauses where needed.",
          "Define CPCV deposit (typically 10-20 percent) and conditions precedent with your lawyer.",
          "Schedule signing, remote notarisation, or in-person execution with translators confirmed.",
          "Document seller deliverables including occupancy status, mortgage releases, and inventory handover.",
        ],
      },
      {
        heading: "Funds Flow Timeline",
        table: {
          columns: ["Stage", "Amount", "Key actions"],
          rows: [
            {
              cells: [
                "Offer acceptance",
                "Reservation as agreed",
                "Issue intent letter, block property from market, and schedule CPCV.",
              ],
            },
            {
              cells: [
                "CPCV deposit",
                "10-20 percent",
                "Deposit transferred to seller or escrow within 7-15 days of offer.",
              ],
            },
            {
              cells: [
                "Mortgage approval",
                "As per lender",
                "Submit valuation, underwriting docs, and bank account confirmations.",
              ],
            },
            {
              cells: [
                "Deed (Escritura)",
                "Balance + taxes",
                "Pay IMT, stamp duty, notary fees; register title within 20 days.",
              ],
            },
          ],
          footnote:
            "Always align transfer cut-off times with Portuguese banking hours and include contingency days for international wires.",
        },
      },
      {
        heading: "Key Stakeholder Calendar",
        table: {
          columns: ["Milestone", "Owner", "Timing"],
          rows: [
            { cells: ["Inspection reports", "Engineer / surveyor", "Within 10 days of CPCV"] },
            { cells: ["Mortgage valuation", "Bank appraiser", "7-10 days post CPCV"] },
            { cells: ["Insurance binding", "Buyer + broker", "5 days before deed"] },
            { cells: ["Utility transfer", "Property manager", "Immediately after deed"] },
          ],
        },
      },
      {
        heading: "Completion Checklist",
        bullets: [
          "Confirm all conditions precedent satisfied and final inspections complete.",
          "Arrange deed-day attendance: buyers or attorney, lawyer, notary, translator if required.",
          "Settle utility readings, insurance binders, and condominium clearances pre-handover.",
          "Register title, mortgage, and beneficial ownership within statutory deadlines.",
        ],
      },
      {
        heading: "Outputs from Step 4",
        bullets: [
          "Signed CPCV, notarised deed, and registration receipts.",
          "Funds flow tracker with confirmed bank confirmations and tax receipts.",
          "Post-completion punch list for property handover and occupancy.",
        ],
      },
    ],
  },
  {
    number: Number(metaSteps[4]?.number ?? 5),
    title: metaSteps[4]?.title ?? "Move & Optimize",
    subtitle: "Transition smoothly into operations, compliance, and lifestyle management.",
    summary:
      "After completion we ensure utilities, accounting, and property services run on autopilot with trusted Algarve partners.",
    slug: roadmapAnchors[4],
    sections: [
      {
        heading: "Transfer and Setup",
        bullets: [
          "Switch utilities, telecoms, and security monitoring to the new ownership data.",
          "Enroll in condominium portals and confirm reserve fund standing.",
          "Bind multi-risk insurance and liability cover with Portugal-based carriers.",
          "Set up local accounting support for IMI tax, rental invoicing, and VAT if applicable.",
        ],
      },
      {
        heading: "Operations Calendar",
        table: {
          columns: ["Service", "Frequency", "Notes"],
          rows: [
            { cells: ["Utilities and telecom", "Monthly", "Automate SEPA debits and monitor seasonal usage."] },
            { cells: ["Insurance review", "Annually", "Update valuations and rental cover if usage changes."] },
            { cells: ["Condominium meetings", "Quarterly", "Vote on budgets, reserves, and major works."] },
            { cells: ["Accounting and IMI filings", "Annual / quarterly", "Coordinate with accountant on deadlines."] },
            { cells: ["Property management", "Ongoing", "Curate housekeeping, maintenance, and guest services."] },
          ],
          footnote: "Rental properties should also register with Turismo de Portugal and maintain guest logs.",
        },
      },
      {
        heading: "Lifestyle and Investment Enhancements",
        bullets: [
          "Implement smart-home monitoring for humidity, alarms, and energy optimisation.",
          "Schedule preventative maintenance calendar with local contractors.",
          "Explore rental licensing, concierge services, or fractional-use programs.",
          "Plan annual portfolio review against Algarve market performance and refinancing options.",
        ],
      },
      {
        heading: "Outputs from Step 5",
        bullets: [
          "Owner handbook with contacts, emergency procedures, and service level agreements.",
          "12-month operations calendar covering compliance, maintenance, and rental tasks.",
          "Performance dashboard to track occupancy, revenue, and capital improvement ROI.",
        ],
      },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 w-1/2 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-100">
              Portugal Property Roadmap
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Navigate Algarve Property with a Proven 5-Step Roadmap
            </h1>
            <p className="mt-5 text-base text-slate-100 md:text-lg">
              Dive into the detailed process our team perfected for Portugal buyers and now custom-built for the Algarve.
              Each step pairs local market intelligence with English-speaking professionals so you stay confident from brief to ownership.
            </p>
          </div>
        </div>
      </section>
      <RoadmapClient steps={ROADMAP_STEPS} />
    </div>
  );
}

