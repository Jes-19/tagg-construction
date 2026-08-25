import type { Metadata } from "next"
import { Header } from "@/components/header"
import { CaseStudiesDetail } from "@/components/case-studies-detail"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Case Studies | Tagg Construction Fencing",
  description:
    "Read case studies on our large-scale tree protection and newt fencing installations for national housebuilders across the South East of England.",
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-44">
        <CaseStudiesDetail />
        <Contact hideMaps />
      </div>
      <Footer />
    </main>
  )
}
