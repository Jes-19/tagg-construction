"use client"

import { useState, useCallback } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/#about", label: "About" },
    { href: "/#accreditations", label: "Accreditations" },
    { href: "/gallery", label: "Gallery" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/#contact", label: "Contact" },
  ]

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf('#')
    if (hashIndex === -1) return // no hash, let normal navigation happen

    const hash = href.substring(hashIndex + 1)

    const scrollToSection = () => {
      const el = document.getElementById(hash)
      if (!el) return
      const headerOffset = window.innerWidth >= 768 ? 148 : 103
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }

    // Retries until the target section has mounted, since navigating from
    // another page means the homepage content isn't in the DOM yet.
    const waitForSectionThenScroll = (attempts = 0) => {
      const el = document.getElementById(hash)
      if (el) {
        scrollToSection()
      } else if (attempts < 40) {
        setTimeout(() => waitForSectionThenScroll(attempts + 1), 50)
      }
    }

    if (pathname === '/') {
      // Already on homepage, just scroll
      e.preventDefault()
      scrollToSection()
    } else {
      // On another page, navigate to homepage then scroll once it mounts.
      // scroll: false stops Next.js from resetting scroll to top after the
      // route change, which would otherwise override our manual scroll.
      e.preventDefault()
      router.push('/', { scroll: false })
      waitForSectionThenScroll()
    }
  }, [pathname, router])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="bg-primary text-primary-foreground py-1.5 hidden md:block">
        <div className="container mx-auto px-4 flex justify-end gap-5 text-sm">
          <a href="mailto:info@taggconstruction.co.uk" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="h-4 w-4" />
            <span>info@taggconstruction.co.uk</span>
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[109px]">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/tagg-logo.png" 
              alt="Tagg Construction Fencing" 
              width={1612} 
              height={632} 
              className="h-[90px] w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setIsServicesMenuOpen(true)}
                  onMouseLeave={() => setIsServicesMenuOpen(false)}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="inline-flex items-center gap-1 text-foreground/80 hover:text-primary font-medium transition-colors py-4"
                    aria-haspopup="true"
                  >
                    Services
                    <ChevronDown className={`size-4 transition-transform ${isServicesMenuOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </a>
                  <div className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 rounded-lg border border-border bg-background p-2 shadow-lg transition-all duration-200 ${isServicesMenuOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}>
                    <Link href="/services" className="block rounded-md px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary">
                      All Services
                    </Link>
                    <Link href="/services/hoarding-systems" className="block rounded-md px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary">
                      Hoarding Systems
                    </Link>
                    <Link href="/services/tree-protection" className="block rounded-md px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary">
                      Tree Protection
                    </Link>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild>
              <a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')}>Get a Quote</a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div key={link.href} className="flex flex-col gap-1">
                  <a
                    href={link.href}
                    className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                    onClick={(e) => { setIsMenuOpen(false); handleNavClick(e, link.href); }}
                  >
                    Services
                  </a>
                  <div className="ml-4 flex flex-col gap-1 border-l border-border pl-4">
                    <Link href="/services" className="py-2 text-sm text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      All Services
                    </Link>
                    <Link href="/services/hoarding-systems" className="py-2 text-sm text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      Hoarding Systems
                    </Link>
                    <Link href="/services/tree-protection" className="py-2 text-sm text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      Tree Protection
                    </Link>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                  onClick={(e) => { setIsMenuOpen(false); handleNavClick(e, link.href); }}
                >
                  {link.label}
                </a>
              ),
            )}
            <Button asChild className="mt-2">
              <a href="/#contact" onClick={(e) => { setIsMenuOpen(false); handleNavClick(e, '/#contact'); }}>Get a Quote</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
