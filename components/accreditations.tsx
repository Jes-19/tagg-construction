import Image from "next/image"

const accreditations = [
  {
    name: "CHAS",
    description: "Contractors Health & Safety Assessment Scheme",
    src: "/images/chas.jpg",
  },
  {
    name: "CQMS",
    description: "Construction Quality Management System",
    src: "/images/cqms.jpg",
  },
  {
    name: "Constructionline",
    description: "UK Government Certification Service",
    src: "/images/constructionline.jpg",
  },
  {
    name: "TWF",
    description: "Temporary Works Forum Member",
    src: "/images/twf.jpg",
  },
  {
    name: "FORS Silver",
    description: "Fleet Operator Recognition Scheme",
    src: "/images/fors.png",
  },
  {
    name: "SMAS Worksafe",
    description: "Safety Schemes in Procurement",
    src: "/images/smas.jpg",
  },
]

export function Accreditations() {
  return (
    <section id="accreditations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Trusted & Certified
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Our Accreditations
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are committed to delivering exemplary standards of quality management. Tagg is accredited 
            with the leading Health & Safety bodies and accreditation programmes.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
          {accreditations.map((accreditation) => (
            <div
              key={accreditation.name}
              className="group bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300 w-full max-w-[140px] aspect-square flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={accreditation.src || "/placeholder.svg"}
                  alt={`${accreditation.name} - ${accreditation.description}`}
                  width={100}
                  height={100}
                  className="object-contain max-h-20 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            All of our timber is ethically sourced from sustainable forests around the world, 
            which are either FSC or PEFC approved.
          </p>
        </div>
      </div>
    </section>
  )
}
