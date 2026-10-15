import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceLandingPage, hoardingSystemsPage } from "@/components/service-landing-page"

export const metadata: Metadata = {
  title: "Hoarding Systems | Tagg Construction Fencing",
  description: "Professional construction hoarding systems designed for secure, presentable and compliant site boundaries.",
}

export default function HoardingSystemsPage() {
  return (
    <>
      <Header />
      <div className="pt-[140px]">
        <ServiceLandingPage {...hoardingSystemsPage} />
      </div>
      <Footer />
    </>
  )
}
