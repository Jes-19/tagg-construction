import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const previewProjects = [
  {
    src: "/images/gallery/field-mesh-fencing.png",
    alt: "Galvanised mesh fencing running across an open field for tree protection",
    description: "Tree Protection Fencing",
    className: "object-cover object-[left_60%]",
  },
  {
    src: "/images/gallery/heras-on-posts.png",
    alt: "Heras hoarding panels along a roadside",
    description: "Monarflex Rated Heras System",
  },
  {
    src: "/images/gallery/site-hoarding-excavator.png",
    alt: "White site hoarding with green trim along a road",
    description: "In Ground Hoarding Installation",
  },
  {
    src: "/images/gallery/site-entrance-gates.jpeg",
    alt: "Construction site entrance with large metal gates and branded hoarding",
    description: "Ballasted Entrance Gates & Hoarding",
  },
]

export function GalleryPreview() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Installed Solutions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#03873c] to-[#0367c4] mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse examples of our hoarding and fencing installations across various construction sites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {previewProjects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-4 bg-card">
                <Image
                  src={project.src || "/placeholder.svg"}
                  alt={project.alt}
                  fill
                  className={`${project.className ?? "object-cover object-bottom"} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-center text-foreground font-medium leading-snug px-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-[#03873c] hover:bg-[#026b30] text-white">
            <Link href="/gallery">
              See Project Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
