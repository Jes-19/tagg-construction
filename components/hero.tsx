import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-44 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#03873c]/5 via-background to-[#0367c4]/5" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#03873c]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#0367c4]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Established for 32 Years</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Professional Construction Hoarding & Temporary Fencing
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              We provide professionally installed perimeter security systems, delivering safe, 
              compliant, and presentable site boundaries. Quality installations and cost-effective 
              solutions, tailored to each client and project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <a href="#contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 bg-transparent">
                <a href="#services">View Services</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#03873c]/10 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-[#03873c]">29+</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Years</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0367c4]/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-[#0367c4]" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Fully</div>
                  <div className="text-sm text-muted-foreground">Accredited</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">

              <Image
                src="/images/hero-green-hoarding.jpeg"
                alt="Green painted construction site hoarding along a curved road"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-4 flex items-center gap-3 border border-border">
              <div className="w-12 h-12 bg-[#03873c]/10 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-[#03873c]" />
              </div>
              <div>
                <div className="font-bold text-foreground">Safe & Compliant</div>
                <div className="text-sm text-muted-foreground">Industry standards</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card rounded-xl shadow-xl p-4 flex items-center gap-3 border border-border">
              <div className="w-12 h-12 bg-[#0367c4]/10 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-[#0367c4]" />
              </div>
              <div>
                <div className="font-bold text-foreground">CHAS & SMAS</div>
                <div className="text-sm text-muted-foreground">Accredited</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
