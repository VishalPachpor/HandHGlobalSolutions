import {
  Building2,
  Shield,
  Landmark,
  Smartphone,
  Truck,
  Headphones,
  Heart,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function IndustriesSection() {
  const industries = [
    {
      id: "mortgage",
      icon: Building2,
      title: "Mortgage Solutions",
      tagline: "Making Home Financing Feel Less Like a Root Canal",
      headache:
        "The process is stuck in the past. Manual data entry, documents scattered across systems, and borrowers checking their email every five minutes for updates. It's exhausting for everyone.",
      fix: "We streamline the chaos. Automated workflows that don't lose documents. Systems that actually talk to each other. Real-time updates so borrowers aren't left in the dark.",
      result:
        "Approval times get cut in half. Fewer late-night scrambles to find missing paperwork. Borrowers who actually feel good about the process.",
    },
    {
      id: "insurance",
      icon: Shield,
      title: "Insurance Solutions",
      tagline: "Because Nobody Likes Waiting for Answers",
      headache:
        "Companies are drowning in claims, policy changes, and questions that all needed answers yesterday. Good customer service is impossible when you're constantly behind.",
      fix: "We speed everything up—without cutting corners. Instant quote systems that work. Claims processing that doesn't take weeks. Customer support that knows how to help.",
      result:
        "Customers get answers in hours, not days. Claims that used to take three weeks now take three days. Your team can finally be proactive instead of reactive.",
    },
    {
      id: "banking",
      icon: Landmark,
      title: "Banking & Financial Services",
      tagline: 'Where "Secure" and "Simple" Actually Go Together',
      headache:
        "You're caught between a rock and a hard place. Customers want banking to be as easy as ordering takeout. Regulators want every transaction documented and compliant with 47 different rules.",
      fix: "We handle the complicated stuff. Compliance monitoring that catches issues before they're problems. Customer service that's actually helpful. Secure systems that just work.",
      result:
        "Customers get the seamless experience they expect. Your compliance team sleeps better at night. You can focus on relationships, not just regulations.",
    },
    {
      id: "digital",
      icon: Smartphone,
      title: "Digital Services",
      tagline: "Tech That Makes Sense (Finally)",
      headache:
        "Every business needs tech, but most vendors either oversell complex solutions you don't need or under-deliver on promises that sounded great in the demo. You're left with expensive tools nobody uses.",
      fix: "We build and automate stuff that solves real problems. That report your team manually creates every Monday? Automated. That data sitting in spreadsheets? Turned into insights you can actually use.",
      result:
        "Your team stops doing boring, repetitive tasks. Processes that took 5 hours now take 5 minutes. You get the benefits of technology without the headaches.",
    },
    {
      id: "logistics",
      icon: Truck,
      title: "Logistics Services",
      tagline: 'Because "It\'s On Its Way" Should Mean Something',
      headache:
        "You're juggling routes, inventory, delivery windows, and driver schedules. One traffic jam, one incorrect spreadsheet entry, can throw off the entire day and lead to unhappy customers.",
      fix: "We optimize the whole operation. Better route planning that saves fuel and time. Inventory systems that tell you what you actually have. Real-time tracking so everyone knows where things are.",
      result:
        "On-time deliveries go up. Fuel costs go down. Customers actually get their stuff when you said they would, and you have the data to prove it.",
      image: "/professional-business-team-collaborating-in-modern.jpg",
    },
    {
      id: "support",
      icon: Headphones,
      title: "Customer Support Services",
      tagline: "Support That Doesn't Make People Want to Scream",
      headache:
        "Most customer support is slow, scripted, and outsourced to people who don't understand your product. Customers can tell when they're just a ticket number, and it kills loyalty.",
      fix: "We become an extension of your team—not a distant call center. Our agents learn your products, understand your customers, and actually care about solving problems.",
      result:
        "Customer satisfaction scores go up. Repeat complaints go down. Your customers feel heard and valued, and they stick around because of it.",
      image: "/business-meeting-with-professionals-discussing-cus.jpg",
    },
    {
      id: "healthcare",
      icon: Heart,
      title: "Healthcare Solutions",
      tagline: "So Doctors Can Actually Be Doctors",
      headache:
        "Healthcare workers didn't sign up to be data entry specialists, but that's what the job has become. Doctors and nurses are buried in paperwork instead of helping patients.",
      fix: "We handle the behind-the-scenes work. Medical billing that gets done right the first time. Claims processing that doesn't take forever. All HIPAA-compliant, of course.",
      result:
        "Healthcare providers spend more time with patients and less time with paperwork. Claims get paid faster, and the administrative burden on your staff is lifted.",
      image: "/professional-business-people-in-modern-office-sett.jpg",
    },
  ];

  return (
    <main className="h-screen">
      <Navigation />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <header className="space-y-4 text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground">
              We Know Your Industry's Headaches
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every industry has its own unique set of problems—the things that
              everyone complains about but no one seems to fix. We do. Here's a
              breakdown of what we typically see, and how we help.
            </p>
          </header>

          {/* Industries List */}
          <div className="space-y-16">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.id} className="space-y-6">
                  {/* Industry Title */}
                  <div className="flex items-center gap-4">
                    <Icon className="w-8 h-8 text-foreground" />
                    <div>
                      <h2 className="text-3xl font-bold">{industry.title}</h2>
                      <p className="text-muted-foreground">
                        {industry.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 pl-12 text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">
                        The Headache:
                      </span>
                      <br />
                      {industry.headache}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">
                        The Fix:
                      </span>
                      <br />
                      {industry.fix}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">
                        The Result:
                      </span>
                      <br />
                      {industry.result}
                    </p>
                    {industry.image && (
                      <div className="pt-2">
                        <img
                          src={industry.image}
                          alt={industry.title}
                          className="w-full max-w-3xl rounded-lg border border-border"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
