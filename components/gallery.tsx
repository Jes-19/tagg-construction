"use client"

import Image from "next/image"
import { useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    src: "/images/gallery/site-entrance-gates.jpeg",
    alt: "Construction site entrance with large metal gates and branded hoarding",
    description: "Site Entrance Gates & Hoarding",
  },
  {
    src: "/images/gallery/field-mesh-fencing.png",
    alt: "Galvanised mesh fencing running across an open field for tree protection",
    description: "Tree Protection Fencing Installed in Accordance with BS 5837:2012 Figure 2 – Default Specification",
    className: "object-cover object-[center_60%]",
  },
  {
    src: "/images/gallery/timber-fence.png",
    alt: "Timber slatted fencing installation on a green hillside",
    description: "Hit and Miss Compound - Timber Slatted",
  },
  {
    src: "/images/gallery/heras-on-posts.png",
    alt: "Heras hoarding panels along a roadside",
    description: "Monarflex Rated Heras System",
  },
  {
    src: "/images/gallery/site-hoarding-excavator.png",
    alt: "White site hoarding with green trim along a road",
    description: "Roadside Site Hoarding Installation",
    className: "object-cover object-[center_75%]",
  },
  {
    src: "/images/gallery/crane-security-fencing.jpeg",
    alt: "Black mesh security fencing around a crane base",
    description: "Crane Base Security Fencing",
    className: "object-contain bg-muted",
  },
  {
    src: "/images/gallery/yellow-hoarding.png",
    alt: "Yellow branded hoarding panels with black trim",
    description: "Branded Hoarding Installation",
    className: "object-contain bg-muted",
  },
  {
    src: "/images/gallery/timber-walkway-cover.jpeg",
    alt: "Timber frame walkway cover structure on a construction site",
    description: "Timber Walkway Protection Cover",
  },
  {
    src: "/images/gallery/pedestrian-walkway.jpeg",
    alt: "Segregated pedestrian walkway on a construction site with mesh fencing and red and white barriers",
    description: "Proprietary Fence-Lok System with Pull-Out Testing",
    className: "object-cover object-[center_40%]",
  },
  {
    src: "/images/gallery/silt-fencing.png",
    alt: "Green newt fencing on timber stakes running across a grassy field",
    description: "Newt Fencing",
  },
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }, [])

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Previous Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#03873c] to-[#0367c4] mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse examples of our hoarding and fencing installations across various construction sites.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-card">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={project.src || "/placeholder.svg"}
                  alt={project.alt}
                  fill
                  className={project.className || "object-cover"}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border-0 shadow-lg h-12 w-12 rounded-full"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border-0 shadow-lg h-12 w-12 rounded-full"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Caption below image */}
          <div className="mt-6 text-center">
            <p className="text-foreground font-semibold text-lg md:text-xl leading-snug max-w-2xl mx-auto">
              {projects[currentIndex].description}
            </p>
          </div>

          {/* Page indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
