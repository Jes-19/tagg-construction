import type { Metadata } from "next"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Tree Protection Fencing",
}

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Accreditations } from "@/components/accreditations"
import { GalleryPreview } from "@/components/gallery-preview"
import { OperatingArea } from "@/components/operating-area"
import { Contact } from "@/components/contact"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Accreditations />
      <About />
      <GalleryPreview />
      <OperatingArea />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  )
}
