import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, TreePine, Leaf, ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    stat: "2,068",
    statUnit: "Linear Metres",
    icon: TreePine,
    title: "Tree Protection Fencing",
    client: "National PLC Housebuilder",
    color: "#03873c",
    image: {
      src: "/images/gallery/heras-tree-protection-field.png",
      alt: "A long run of Heras mesh fencing along the edge of a grass field protecting mature trees",
    },
    summary:
      "Tagg Construction installed 2,068 linear metres of tree protection fencing to safeguard retained trees and root protection areas throughout the construction works.",
    points: [
      "GPS-assisted setting out ensured the fencing followed the specified tree protection boundaries without affecting the proposed development",
      "Installed in accordance with BS 5837:2012 and the project's arboricultural requirements, establishing clearly defined construction exclusion zones",
      "The installation was subsequently altered and delivered in phases to accommodate the client's evolving construction programme",
    ],
  },
  {
    stat: "1,542",
    statUnit: "Linear Metres",
    icon: Leaf,
    title: "Newt Fencing",
    client: "National PLC Housebuilder",
    color: "#0367c4",
    image: {
      src: "/images/gallery/silt-newt-fencing.png",
      alt: "Green silt and newt exclusion fencing on timber posts running along a grass field boundary in front of trees",
    },
    summary:
      "Tagg Construction installed 1,542 linear metres of temporary newt fencing within environmentally sensitive areas of the development.",
    itemsHeading: "The works included",
    points: [
      "GPS-assisted setting out of the approved fencing routes",
      "Clearance of vegetation under the supervision of the project ecologist",
      "Use of compact, low-weight plant approved for the environmentally sensitive location",
      "Installation of both in-ground and non-intrusive sandbagged newt fencing to suit the site conditions",
      "Coordination with the project ecologist throughout the works",
    ],
    footnote:
      "All fencing was installed in accordance with the project's ecological requirements and approved installation details.",
  },
]

export function CaseStudiesDetail() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Work</span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">Case Studies</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A closer look at how we deliver large-scale temporary fencing and environmental protection packages for
            major housebuilders.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {caseStudies.map((study) => (
            <div key={study.title} className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="relative h-56 md:h-full md:col-span-2">
                  <Image
                    src={study.image.src || "/placeholder.svg"}
                    alt={study.image.alt}
                    fill
                    loading="eager"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 40%, ${study.color}CC 100%)`,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <p className="text-3xl md:text-4xl font-bold leading-none">{study.stat}</p>
                    <p className="text-sm font-medium uppercase tracking-wider opacity-90 mt-1">{study.statUnit}</p>
                  </div>
                </div>

                <div className="p-8 md:p-10 md:col-span-3">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${study.color}15` }}
                    >
                      <study.icon className="h-7 w-7" style={{ color: study.color }} />
                    </div>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border-border text-muted-foreground"
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      {study.client}
                    </Badge>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mb-3">{study.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{study.summary}</p>

                  {study.itemsHeading && (
                    <p className="text-sm font-semibold text-foreground mb-3">{study.itemsHeading}</p>
                  )}

                  <ul className="space-y-2.5 mb-6">
                    {study.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Check
                          className="h-4 w-4 mt-0.5 shrink-0"
                          style={{ color: study.color }}
                          aria-hidden="true"
                        />
                        <span className="text-sm text-foreground leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {study.footnote && (
                    <p className="text-sm text-muted-foreground leading-relaxed italic border-t border-border pt-4">
                      {study.footnote}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center rounded-2xl bg-muted/50 border border-border p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">Discuss Your Project</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Planning a temporary fencing, hoarding or environmental protection package? Contact our team to discuss
            your requirements and arrange a site survey.
          </p>
          <Button asChild size="lg">
            <Link href="/#contact">
              Get in Touch
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
