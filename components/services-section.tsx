import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      title: "Business Process Outsourcing (BPO)",
      description:
        "End-to-end back-office operations: data entry, document management, transaction processing, and admin support with 99%+ accuracy and 40–60% cost savings.",
      image: "/business-professionals-analyzing-data-and-processe.jpg",
    },
    {
      title: "Customer Experience & Contact Center",
      description:
        "24/7 omnichannel support, tech troubleshooting, sales enablement, multilingual help, and smart AI assistants driving 95%+ CSAT and faster resolutions.",
      image: "/business-meeting-with-professionals-discussing-cus.jpg",
    },
    {
      title: "Technology & Digital Transformation",
      description:
        "Automation, AI, RPA, IDP, cloud, and custom apps to eliminate manual work and modernize legacy—launch faster with 70–80% time saved.",
      image: "/woman-working-on-laptop-in-modern-office-digital-t.jpg",
    },
    {
      title: "Data Analytics & Business Intelligence",
      description:
        "Data warehouses, BI dashboards, predictive models, and real-time reporting to improve forecasting by 40% and surface growth opportunities.",
      image: "/professional-business-team-collaborating-in-modern.jpg",
    },
    {
      title: "Compliance & Risk Management",
      description:
        "KYC/AML automation, compliance testing, QA, risk monitoring, and fraud detection to keep audit-ready with 99%+ compliance.",
      image: "/professional-business-people-in-modern-office-sett.jpg",
    },
    {
      title: "Collections & Recovery Services",
      description:
        "Ethical, compliant outreach across channels, arrangements and settlements, with 30–40% better recovery while protecting relationships.",
      image: "/placeholder.jpg",
    },
    {
      title: "Underwriting & Decision Support",
      description:
        "Application intake, data extraction, verification, risk assessment, and automated workflows to make faster, more accurate decisions.",
      image: "/placeholder-user.jpg",
    },
    {
      title: "Claims Processing & Management",
      description:
        "From FNOL to payment—intake, triage, review, investigation, assessment, fraud detection—for 50% faster resolutions and higher satisfaction.",
      image: "/placeholder-logo.png",
    },
    {
      title: "Consulting & Advisory Services",
      description:
        "Pragmatic strategy for process, tech, and operating models with clear roadmaps, faster ROI, and change that sticks.",
      image: "/placeholder-logo.svg",
    },
    {
      title: "Workforce Solutions",
      description:
        "Contract and permanent staffing, dedicated teams, CoEs, and training to scale skills fast with lower HR overhead.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What We Do</h2>
          <p className="text-muted-foreground text-lg">
            The services that help your business run better
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
