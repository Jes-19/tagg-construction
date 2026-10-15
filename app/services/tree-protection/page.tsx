import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceLandingPage, treeProtectionPage } from "@/components/service-landing-page"

export const metadata: Metadata = {
  title: "Tree Protection | Tagg Construction Fencing",
  description: "Heras fencing and BS 5837:2012 tree protection solutions for construction sites.",
}

export default function TreeProtectionPage() {
  return (
    <>
      <Header />
      <div className="pt-[140px]">
        <ServiceLandingPage {...treeProtectionPage} />
      </div>
      <Footer />
    </>
  )
}
