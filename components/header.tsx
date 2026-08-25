"use client"

import { useState, useCallback } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
      const headerOffset = window.innerWidth >= 768 ? 136 : 96
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }

    if (pathname === '/') {
      // Already on homepage, just scroll
      e.preventDefault()
      scrollToSection()
    } else {
      // On another page, navigate to homepage then scroll
      e.preventDefault()
      router.push('/')
      // Wait for navigation, then scroll
      setTimeout(scrollToSection, 500)
    }
  }, [pathname, router])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-end gap-6 text-sm">
          <a href="mailto:info@taggconstruction.co.uk" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="h-4 w-4" />
            <span>info@taggconstruction.co.uk</span>
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/tagg-logo.png" 
              alt="Tagg Construction Fencing" 
              width={480} 
              height={130} 
              className="h-20 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                onClick={(e) => { setIsMenuOpen(false); handleNavClick(e, link.href); }}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href="/#contact" onClick={(e) => { setIsMenuOpen(false); handleNavClick(e, '/#contact'); }}>Get a Quote</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
