import { Header } from "@/components/header"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Gallery | Tagg Construction Fencing",
  description: "Browse examples of our hoarding and fencing installations across various construction sites throughout the South East of England.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-44">
        <Gallery />
      </div>
      <Footer />
    </main>
  )
}
