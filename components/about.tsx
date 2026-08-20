import { CheckCircle2, Shield, Compass, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Health, Safety & Environmental",
    description: "We are committed to delivering exemplary standards of quality management. Tagg is accredited with the leading Health & Safety bodies including CHAS and SMAS. All of our timber is ethically sourced from sustainable forests.",
    color: "#03873c",
  },
  {
    icon: Compass,
    title: "Design",
    description: "We can provide a comprehensive temporary works documentation package to support safe, compliant installation. This includes typical spacing and detail drawings, a full structural calculation pack, BS 5975 Category 1 checks and certification, a designer's risk assessment, and a document issue register.",
    color: "#0367c4",
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "With over 29 years of industry experience, we provide expertise, proven knowledge, and innovative solutions. Our teams are led by SSSTS-trained supervisors and SMSTS-qualified project managers.",
    color: "#03873c",
  },
]

const highlights = [
  "Over 29 years of industry experience",
  "CHAS and SMAS accredited",
  "SSSTS and SMSTS qualified teams",
  "Compliance with BS 5975 standards",
  "Temporary Works Forum Member",
]

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Your Trusted Partner in Construction Site Fencing
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tagg Construction Ltd provides professionally installed perimeter security systems with 
            safe, compliant, and presentable site boundaries. Quality installations and cost-effective 
            solutions, tailored to each client and project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="bg-card border-border hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-8">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="h-7 w-7" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#03873c] to-[#0367c4] rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 text-balance">
                Committed to Excellence & Safety
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Our philosophy is straightforward: quality installations and cost-effective solutions. 
                We work to industry best practices.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground flex-shrink-0" />
                  <span className="text-primary-foreground text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
