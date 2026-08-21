import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Building2, Fence, DoorOpen, Compass, ShieldCheck, PaintBucket, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Building2,
    title: "Hoarding Systems",
    description:
      "We supply and install secure, professional hoarding systems suitable for a wide range of ground conditions, site constraints and project requirements.",
    items: [
      "In-ground timber hoarding",
      "Concrete block-ballasted systems",
      "Scaffold-supported hoarding",
      "Floor-fixed metal bracket systems",
    ],
    color: "#03873c",
    image: {
      src: "/images/gallery/hoarding-systems-composite.png",
      alt: "Three hoarding installations: red hoarding along a footpath, black steel support posts along a roadside, and white hoarding with green trim beside an excavator",
      className: "object-cover",
    },
  },
  {
    icon: Fence,
    title: "Heras Fencing & Tree Protection",
    description:
      "We install temporary fencing for site boundaries, exclusion zones and tree protection areas. Systems can be adapted to suit different ground conditions, wind-loading requirements and environmental constraints.",
    items: [
      "BS 5837:2012 tree protection fencing using default and alternative specifications",
      "Heras fencing installed on timber posts",
      "Weighted Heras fencing systems",
      "Heras Fence-Lok systems",
      "Heras fencing supported by TVCBs",
      "Standard and reinforced fencing arrangements",
    ],
    color: "#0367c4",
    image: {
      src: "/images/gallery/heras-on-posts.png",
      alt: "Heras hoarding panels installed on timber posts along a roadside",
    },
  },
  {
    icon: DoorOpen,
    title: "Site Access Options",
    description:
      "A range of standard stock and bespoke access solutions is available to provide safe, secure and controlled entry to construction sites.",
    items: [
      "Vehicle access gates",
      "Bespoke gate sizes",
      "Bi-fold gate systems",
      "Pedestrian gates",
      "Hoarding doors",
      "Custom solutions for restricted or unusual openings",
    ],
    color: "#03873c",
    image: {
      src: "/images/gallery/site-entrance-gates.jpeg",
      alt: "Construction site entrance with large metal gates and branded hoarding",
    },
  },
  {
    icon: Compass,
    title: "Temporary Works Design Services",
    description:
      "Our temporary works design service supports the safe, compliant and practical installation of hoarding and fencing systems.",
    itemsHeading: "Design packages can include",
    items: [
      "Typical arrangement and installation drawings",
      "Full structural calculation packs",
      "BS 5975 Category 1, 2 or 3 design checks and certification",
      "Designer's risk assessments",
      "Document issue registers",
      "Advice on suitability, buildability and cost-effective solutions",
    ],
    color: "#0367c4",
    image: {
      src: "/images/gallery/pedestrian-walkway.jpeg",
      alt: "Proprietary Fence-Lok system with pull-out testing on a construction site walkway",
      className: "object-cover object-[center_40%]",
    },
  },
  {
    icon: ShieldCheck,
    title: "Site Security",
    description:
      "Our security products can be incorporated into hoarding and temporary fencing installations to help prevent unauthorised access, theft and damage.",
    items: [
      "Temporary vehicle concrete barriers (TVCBs) and similar security blocks",
      "Wireless alarm systems",
      "Wireless and independently powered CCTV systems",
      "Anti-climb products",
      "Security-rated barriers",
      "Crane Security",
    ],
    color: "#03873c",
    image: {
      src: "/images/gallery/crane-security-fencing.jpeg",
      alt: "Black mesh security fencing installed around a crane base",
      className: "object-contain bg-muted",
    },
  },
  {
    icon: PaintBucket,
    title: "Signage, Branding & Decoration",
    description:
      "We provide signage, decoration and branding options to create safe, informative and professional-looking site boundaries.",
    items: [
      "Safety and statutory signage",
      "Hoarding decoration",
      "Dibond panels",
      "Printed hoarding graphics",
      "Project and company branding",
      "Specialist paint finishes",
    ],
    color: "#0367c4",
    images: [
      {
        src: "/images/gallery/signage-tile-1.png",
        alt: "Yellow branded COSHH hoarding panels with black trim",
        flexBasis: "26.44%",
      },
      {
        src: "/images/gallery/signage-tile-3.png",
        alt: "Red, yellow, orange and blue branded hoarding bays housing skips on a construction site",
        flexBasis: "47.12%",
      },
      {
        src: "/images/gallery/signage-tile-2.png",
        alt: "Site office hoarding with printed Crossrail branding and graphics",
        flexBasis: "26.44%",
      },
    ],
  },
]

export function ServicesDetail() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Services</span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Hoarding, Temporary Fencing & Site Security
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            A full perimeter package for projects of any size — from survey, design, installation, alterations and
            removals.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Badge
              variant="outline"
              className="px-4 py-1.5 text-sm font-medium border-[#0367c4]/30 bg-[#0367c4]/10 text-[#0367c4]"
            >
              CHAS & SMAS Accredited
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-1.5 text-sm font-medium border-[#0367c4]/30 bg-[#0367c4]/10 text-[#0367c4]"
            >
              BS 5975 Compliant
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-1.5 text-sm font-medium border-[#0367c4]/30 bg-[#0367c4]/10 text-[#0367c4]"
            >
              Constructionline
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-1.5 text-sm font-medium border-[#0367c4]/30 bg-[#0367c4]/10 text-[#0367c4]"
            >
              CQMS
            </Badge>
          </div>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-border bg-card overflow-hidden">
              {service.image && (
                <div className="relative h-56 md:h-64 w-full">
                  <Image
                    src={service.image.src || "/placeholder.svg"}
                    alt={service.image.alt}
                    fill
                    loading="eager"
                    className={service.image.className || "object-cover"}
                  />
                </div>
              )}

              {service.images && (
                <div className="flex h-56 md:h-64 w-full">
                  {service.images.map((img) => (
                    <div
                      key={img.src}
                      className="relative h-full shrink-0"
                      style={{ flexBasis: img.flexBasis }}
                    >
                      <Image
                        src={img.src || "/placeholder.svg"}
                        alt={img.alt}
                        fill
                        loading="eager"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10">
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon className="h-7 w-7" style={{ color: service.color }} />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                    {service.itemsHeading && (
                      <p className="text-sm font-semibold text-foreground mb-3">{service.itemsHeading}</p>
                    )}

                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check
                            className="h-4 w-4 mt-0.5 shrink-0"
                            style={{ color: service.color }}
                            aria-hidden="true"
                          />
                          <span className="text-sm text-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center rounded-2xl bg-muted/50 border border-border p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Get in touch for expert advice on hoarding, fencing and temporary works requirements.
          </p>
          <Button asChild size="lg">
            <Link href="#contact">
              Get a Quote
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
