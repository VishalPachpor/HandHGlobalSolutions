import { Card } from "@/components/ui/card"
import { Users, Globe, Building, DollarSign } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Team Members",
    },
    {
      icon: Users,
      number: "5000+",
      label: "Clients Served",
    },
    {
      icon: Globe,
      number: "4",
      label: "Countries",
    },
    {
      icon: Building,
      number: "500+",
      label: "Companies Led",
    },
    {
      icon: DollarSign,
      number: "160M+",
      label: "In Savings",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="bg-gray-800 text-white p-8 text-center hover:bg-gray-700 transition-colors">
                <div className="flex justify-center mb-4">
                  <IconComponent className="h-12 w-12 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
