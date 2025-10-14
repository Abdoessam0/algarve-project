// src/app/roadmap/page.tsx
import type { Metadata } from "next";
import { meta } from "@/lib/seo";
import RoadmapClient, { type RoadmapStep } from "./RoadmapClient";

export const metadata: Metadata = meta({
  title: "5-Step Property Roadmap | Real Estate Algarve",
  description:
    "Follow the five-step Algarve property roadmap: from defining your brief and legal kit to due diligence, secure purchase, and autopilot ownership with trusted professionals.",
  canonical: "/roadmap",
});

const ROADMAP_STEPS: RoadmapStep[] = [
  {
    number: 1,
    title: "Brief & Budget",
    subtitle: "Define objectives, financing, and Algarve market benchmarks.",
    summary:
      "We map your lifestyle goals, investment criteria, and funding strategy against Portugal market data to anchor the search plan.",
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
        heading: "Financing and Planning Checklist",
        description: "Timeline the first 90 days so scouting trips convert into actionable offers.",
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
          "A written Portugal buyer brief covering property type, lifestyle goals, and rental strategy.",
          "Budget model with acquisition, taxes, furnishings, and first-year holding costs.",
          "90-day search calendar including professional consultations and mock offer timeline.",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Legal Kit",
    subtitle: "Prepare compliant documentation and representation before you offer.",
    summary:
      "We assemble the Portuguese legal infrastructure so funds, decision-making, and due diligence can move at offer speed.",
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
        heading: "Professional Guidance",
        bullets: [
          "Engage bilingual property lawyer with Algarve transaction experience.",
          "Coordinate with tax advisor on ownership structure and wealth planning.",
          "Confirm notary preferences and translation support for deed day.",
          "Register for digital signature tools used by Portuguese authorities (DocuSign equivalents).",
        ],
      },
      {
        heading: "Outputs from Step 2",
        bullets: [
          "Fully documented client file ready for offers, mortgage underwriting, and CPCV execution.",
          "Appointed legal representative with power to act locally when you are abroad.",
          "Bank account and capital transfer path compliant with Portuguese regulations.",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Property Due Diligence",
    subtitle: "Verify legal status, technical condition, and financial performance.",
    summary:
      "Every shortlisted property is benchmarked by lawyers, engineers, and analysts before deposits are released.",
    sections: [
      {
        heading: "Legal Vetting",
        bullets: [
          "Collect land registry certificates, tax matrices, and condominium minutes.",
          "Confirm planning permissions, usage classification, and habitation licence.",
          "Review existing leases, encumbrances, and energy certificates.",
          "Check outstanding utilities, condominium arrears, and municipal taxes.",
        ],
      },
      {
        heading: "Technical Survey",
        bullets: [
          "Commission structural engineer or surveyor for MEP, moisture, and roofing diagnostics.",
          "Assess insulation, glazing, HVAC systems, and pool or elevator maintenance status.",
          "Request renovation quotes and timelines where upgrades are required.",
          "Validate inventory lists, furnishings, and warranties transferring at completion.",
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
          "Consolidated due diligence report with red, amber, green recommendations.",
          "Negotiation points and price adjustments backed by technical evidence.",
          "Go or no-go decision framework aligned with financing and rental targets.",
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Secure Purchase",
    subtitle: "Negotiate, contract, and fund the transaction with confidence.",
    summary:
      "We choreograph the CPCV, escrow, mortgage, and deed logistics so completion stays on schedule.",
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
                "Mortgage issuance",
                "Bank to lawyer",
                "Loan deed and life insurance finalised 4-6 weeks after appraisal.",
              ],
            },
            {
              cells: [
                "Final deed (Escritura)",
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
    number: 5,
    title: "Autopilot Ownership",
    subtitle: "Transition into operations, compliance, and lifestyle management.",
    summary:
      "After completion we ensure utilities, accounting, and property services run on autopilot with trusted Algarve partners.",
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
