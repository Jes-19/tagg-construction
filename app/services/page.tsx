import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Services | Tagg Construction Fencing",
  description:
    "Explore our full range of hoarding, temporary fencing, access, design, signage, and security services for construction sites across the South East of England.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-44">
        <Services />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
