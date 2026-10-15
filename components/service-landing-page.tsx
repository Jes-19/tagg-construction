import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceLandingPageProps {
  eyebrow: string
  title: string
  description: string
  image: { src: string; alt: string }
  items: string[]
  intro: string
  exploreLabel: string
}

export function ServiceLandingPage({
  eyebrow,
  title,
  description,
  image,
  items,
  intro,
  exploreLabel,
}: ServiceLandingPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-muted/50 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">{eyebrow}</span>
              <h1 className="mt-4 text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/#contact">
                    Discuss your project
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">
                    {exploreLabel}
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                className="aspect-[4/3] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">What we provide</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">A practical, compliant solution</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <li key={item} className="flex gap-3 text-foreground">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-primary-foreground md:py-16">
        <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Need help with your site requirements?</h2>
            <p className="mt-2 text-primary-foreground/80">Our team can advise on the right system for your project.</p>
          </div>
          <Button asChild size="lg" variant="secondary">
            <Link href="/#contact">Contact us</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

export const hoardingSystemsPage = {
  eyebrow: "Hoarding Systems",
  title: "Professional construction hoarding systems",
  description:
    "Secure, presentable hoarding designed around your site constraints, ground conditions and project requirements.",
  image: {
    src: "/images/gallery/hoarding-systems-composite-v2.png",
    alt: "Construction hoarding installations used to secure and screen active sites",
  },
  intro:
    "From early planning through to installation, alterations and removal, we provide a complete hoarding service. Our team can help select a system that delivers secure boundaries, public protection and a professional finish.",
  exploreLabel: "Explore Hoarding Systems Services",
  items: [
    "In-ground timber hoarding",
    "Concrete block-ballasted systems",
    "Scaffold-supported hoarding",
    "Floor-fixed metal bracket systems",
    "Branded and decorated finishes",
    "Installation, maintenance and removal",
  ],
}

export const treeProtectionPage = {
  eyebrow: "Tree Protection",
  title: "Heras fencing and tree protection",
  description:
    "Temporary fencing and compliant exclusion zones that help protect trees, people and site boundaries throughout construction.",
  image: {
    src: "/images/gallery/heras-tree-protection-field.png",
    alt: "Heras fencing installed along a field edge to protect mature trees",
  },
  intro:
    "We install temporary fencing for site boundaries, exclusion zones and tree protection areas. Solutions can be adapted to different ground conditions, wind-loading requirements and environmental constraints, with specifications aligned to BS 5837:2012 where required.",
  exploreLabel: "Explore Tree Protection Services",
  items: [
    "BS 5837:2012 tree protection fencing",
    "Heras fencing installed on timber posts",
    "Weighted Heras fencing systems",
    "Heras Fence-Lok systems",
    "TVCB-supported fencing arrangements",
    "Standard and reinforced fencing layouts",
  ],
}
