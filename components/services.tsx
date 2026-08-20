import { Card, CardContent } from "@/components/ui/card"
import { Fence, Building2, DoorOpen, Compass, PaintBucket, ShieldCheck } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Hoarding Systems",
    description: "Professional hoarding solutions providing secure site boundaries, visual screening, and a clean, presentable appearance. Systems can be tailored to suit site constraints, finishes, and branding requirements.",
    color: "#03873c",
  },
  {
    icon: Fence,
    title: "Heras Systems",
    description: "Cost-effective perimeter control systems used to prevent unauthorised access and to form compliant exclusion or tree protection zones across construction sites.",
    color: "#0367c4",
  },
  {
    icon: DoorOpen,
    title: "Access Options",
    description: "A range of controlled access solutions including pedestrian gates, vehicle gates, and turnstiles to safely manage site entry and exit points.",
    color: "#03873c",
  },
  {
    icon: Compass,
    title: "Design Services",
    description: "A full temporary works documentation package supporting safe, compliant installation, including drawings, structural calculations, BS 5975 Category 1 certification, and design risk assessments.",
    color: "#0367c4",
  },
  {
    icon: PaintBucket,
    title: "Hoarding Signage",
    description: "Custom printed hoarding graphics and branded panels that enhance site presentation while promoting your business and project identity. We can incorporate specialist paint finishes, vinyl wraps, and bespoke signage to deliver a professional, public-facing appearance.",
    color: "#03873c",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Integrated site security solutions including wireless and self powered CCTV, alarms, anti-climb products, and security-rated barriers and concrete blocks to deter theft and unauthorised access.",
    color: "#0367c4",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Hoarding & Temporary Fencing Systems
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We provide a comprehensive range of temporary fencing and site security solutions, tailored to suit projects of all sizes and complexities. From early planning through to installation, maintenance, and removal, our experienced team ensures every solution is safe, compliant, and fit for purpose.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="h-7 w-7" style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
