"use client";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

import { useState } from "react";

const services = [
  {
    title: "Business Process Outsourcing (BPO)",
    blurb:
      "End-to-end back-office operations: data entry, document management, transaction processing, and admin support with 99%+ accuracy and 40–60% cost savings.",
    details: [
      "End-to-end process management",
      "Quality-checked data entry",
      "Document digitization",
      "Transaction processing",
      "Administrative support",
    ],
  },
  {
    title: "Customer Experience & Contact Center",
    blurb:
      "24/7 omnichannel support, troubleshooting, sales support, multilingual assistance in 40+ languages, and AI chatbots for faster, personalized resolutions.",
    details: [
      "24/7 omnichannel support",
      "Technical troubleshooting",
      "Sales enablement",
      "Multilingual assistance (40+ languages)",
      "AI chatbots and automation",
    ],
  },
  {
    title: "Technology & Digital Transformation",
    blurb:
      "Automation, AI, and cloud solutions to remove manual work, modernize legacy, and accelerate launches by 3x with 70–80% less manual effort.",
    details: [
      "Robotic Process Automation (RPA)",
      "Intelligent Document Processing (IDP)",
      "Custom applications",
      "Cloud solutions",
      "Legacy modernization",
    ],
  },
  {
    title: "Data Analytics & Business Intelligence",
    blurb:
      "Turn your data into action with warehouses, BI dashboards, predictive models, and real-time reporting for faster, better decisions.",
    details: [
      "Data warehouses and pipelines",
      "BI dashboards",
      "Customer behavior analysis",
      "Operational performance tracking",
      "Real-time reporting",
    ],
  },
  {
    title: "Compliance & Risk Management",
    blurb:
      "Stay audit-ready with regulatory reporting automation, testing, fraud detection, risk monitoring, and quality assurance.",
    details: [
      "Regulatory reporting automation",
      "Compliance testing",
      "Fraud detection",
      "Risk monitoring",
      "Quality assurance",
    ],
  },
  {
    title: "Collections & Recovery Services",
    blurb:
      "Ethical, compliant collections to improve recovery by 30–40% while preserving customer relationships.",
    details: [
      "Early-stage delinquency management",
      "Payment arrangements and settlement",
      "Contact verification",
      "Multichannel outreach",
      "Legal support coordination",
    ],
  },
  {
    title: "Underwriting & Decision Support",
    blurb:
      "Process applications faster and more accurately with data extraction, verification, risk assessment, and automated workflows.",
    details: [
      "Application processing",
      "Data extraction & verification",
      "Income and asset verification",
      "Risk assessment & credit support",
      "Automated decision workflows",
    ],
  },
  {
    title: "Claims Processing & Management",
    blurb:
      "From intake to payment: triage, review, investigation, assessment, and fraud detection for 50% faster resolutions.",
    details: [
      "FNOL processing",
      "Claims intake and triage",
      "Document review",
      "Investigation coordination",
      "Payment processing & fraud detection",
    ],
  },
  {
    title: "Consulting & Advisory Services",
    blurb:
      "Practical strategy and execution for process optimization, digital transformation, and operating model design with measurable ROI.",
    details: [
      "Process optimization",
      "Digital transformation strategy",
      "Technology evaluation",
      "Operating model design & change mgmt",
      "Performance benchmarking",
    ],
  },
  {
    title: "Workforce Solutions",
    blurb:
      "On-demand expertise via staffing, dedicated teams, CoEs, training programs, and workforce planning.",
    details: [
      "Contract and permanent staffing",
      "Dedicated teams & CoEs",
      "Targeted skill sourcing",
      "Training programs",
      "Workforce planning & performance mgmt",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">What We Do</h1>
            <p className="text-muted-foreground text-lg">
              The services that help your business run better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                blurb={s.blurb}
                details={s.details}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceCard({
  title,
  blurb,
  details,
}: {
  title: string;
  blurb: string;
  details: string[];
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleDetails = expanded ? details : details.slice(0, 3);
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-2 text-foreground">{title}</h2>
        <p className="text-muted-foreground mb-4">{blurb}</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          {visibleDetails.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        {details.length > 3 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 text-primary hover:underline text-sm"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </CardContent>
    </Card>
  );
}
