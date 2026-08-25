import Image from "next/image"

export function OperatingArea() {
  return (
    <section id="operating-area" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Coverage</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Our Operating Area
          </h2>
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-border">
          <Image
            src="/images/coverage-map.jpg"
            alt="Map highlighting Tagg Construction's main operating area in green, spanning Surrey, London, and surrounding South East counties including Oxford, Reading, Guildford, Crawley, and Maidstone, with the company's Ottershaw base marked at postcode GU24 9DB"
            width={1600}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
