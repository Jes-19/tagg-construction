import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/images/tagg-logo.png" 
                alt="Tagg Construction Fencing" 
                width={300} 
                height={90} 
                className="h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 max-w-md leading-relaxed mb-6">
              We provide professionally installed perimeter security systems, delivering safe, 
              compliant, and presentable site boundaries. Quality installations and cost-effective 
              solutions, tailored to each client and project.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#03873c] rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">32</span>
              </div>
              <span className="text-background/70">Established for 32 Years</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-background">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { href: "#home", label: "Home" },
                { href: "#services", label: "Services" },
                { href: "#about", label: "About Us" },
                { href: "#accreditations", label: "Accreditations" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-[#03873c] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-background">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@taggconstruction.co.uk" 
                  className="flex items-center gap-3 text-background/70 hover:text-[#0367c4] transition-colors"
                >
                  <Mail className="h-5 w-5 text-[#0367c4]" />
                  <span>info@taggconstruction.co.uk</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="h-5 w-5 text-[#03873c] flex-shrink-0 mt-0.5" />
                <span>Ottershaw Cottage, Foxhills Road, Surrey, KT16 0NQ</span>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold text-background mb-3">Accreditations</h4>
              <p className="text-background/60 text-sm">
                CHAS | SMAS | Constructionline | TWF | FORS | CQMS
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/50 text-sm">
            <p>Copyright {currentYear} Tagg Construction Ltd - All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
