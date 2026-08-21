"use client"

import React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Clock, Send, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Contact({ hideMaps = false }: { hideMaps?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const form = e.currentTarget
    const fd = new FormData(form)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          company: fd.get("company"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          service: fd.get("service"),
          message: fd.get("message"),
        }),
      })

      const result = await res.json().catch(() => null)

      if (!res.ok) {
        throw new Error(result?.error || "Failed to send enquiry. Please try again.")
      }

      setSubmitted(true)
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ready to discuss your project? Get in touch with our team for expert advice on your 
            hoarding and temporary fencing requirements.
          </p>
        </div>

        {/* Office Location */}
        {!hideMaps && (
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-[#1e293b] text-white p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Contact Us - Office</h3>
              <div className="w-12 h-1 bg-[#03873c] mb-8" />
              
              <p className="text-lg font-semibold mb-6">Tagg Construction Ltd</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#03873c] flex-shrink-0" />
                  <a href="tel:01932873201" className="text-white/80 hover:text-white transition-colors">
                    T: 01932873201
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#03873c] flex-shrink-0" />
                  <a href="mailto:Info@taggconstruction.co.uk" className="text-white/80 hover:text-white transition-colors underline">
                    E: Info@taggconstruction.co.uk
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#03873c] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">
                    A: Ottershaw Cottage, Foxhills Road, Ottershaw, KT16 0NQ
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-[#03873c]" />
                  <h4 className="text-lg font-semibold">Office Hours</h4>
                </div>
                <p className="text-white/80 ml-7">Monday - Friday: 09:00 - 17:00</p>
              </div>

              <Link 
                href="#enquiry-form" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors w-fit"
              >
                HOW CAN WE HELP WITH YOUR PROJECT?
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="min-h-[400px] lg:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4993!2d-0.5565!3d51.3585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876062b9a6fa2a5%3A0x0!2sFoxhills%20Road%2C%20Ottershaw%2C%20Surrey%20KT16%200NQ!5e0!3m2!1sen!2suk!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tagg Construction Office - Ottershaw"
              />
            </div>
          </div>
        </div>
        )}

        {/* Depot Location */}
        {!hideMaps && (
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-[#1e293b] text-white p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Depot (Deliveries)</h3>
              <div className="w-12 h-1 bg-[#03873c] mb-8" />
              
              <p className="text-lg font-semibold mb-6">Tagg Construction Ltd</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#03873c] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">
                    Oldhouse Lane, Bisley, Woking, UK
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-[#03873c]" />
                  <h4 className="text-lg font-semibold">Hours</h4>
                </div>
                <p className="text-white/80 ml-7">Monday - Friday: 07:30 - 16:00</p>
              </div>
            </div>

            <div className="min-h-[400px] lg:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4993!2d-0.6465!3d51.3185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sOldhouse%20Lane%2C%20Bisley%2C%20Woking!5e0!3m2!1sen!2suk!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tagg Construction Depot - Bisley"
              />
            </div>
          </div>
        </div>
        )}
        
        {/* Enquiry Form */}
        <div id="enquiry-form" className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How Can We Help With Your Project?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-[#03873c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-[#03873c]" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Enquiry Sent</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for your enquiry. We will be in touch shortly.
                      </p>
                      <Button variant="outline" onClick={() => setSubmitted(false)}>
                        Send Another Enquiry
                      </Button>
                    </div>
                  ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" placeholder="John Smith" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" name="company" placeholder="Your Company Ltd" />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="07000 000000" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required</Label>
                      <select 
                        id="service"
                        name="service"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                      >
                        <option value="">Select a service...</option>
                        <option value="hoarding">Site Hoarding</option>
                        <option value="heras">Heras Systems</option>
                        <option value="access">Access Options</option>
                        <option value="design">Design Services</option>
                        <option value="signage">Hoarding Signage</option>
                        <option value="security">Security</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Tell us about your project, including location, duration, and any specific requirements..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    {error && (
                      <p className="text-red-600 text-sm">{error}</p>
                    )}

                    <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Enquiry
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-[#03873c] to-[#03873c]/90 border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-primary-foreground">
                      <h4 className="font-bold text-lg">Call Us</h4>
                      <p className="text-primary-foreground/80 text-sm mt-1">Mon-Fri 9am-5pm</p>
                      <a href="tel:01932873201" className="text-base font-medium hover:underline mt-2 block">
                        01932 873201
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#0367c4] to-[#0367c4]/90 border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-primary-foreground">
                      <h4 className="font-bold text-lg">Email Us</h4>
                      <p className="text-primary-foreground/80 text-sm mt-1">Get in touch anytime</p>
                      <a href="mailto:Info@taggconstruction.co.uk" className="text-base font-medium hover:underline mt-2 block">
                        Info@taggconstruction.co.uk
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-foreground mb-3">Why Choose Tagg?</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>Established for 32 years</li>
                    <li>CHAS and SMAS accredited</li>
                    <li>Qualified project managers</li>
                    <li>Sustainable timber sourcing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
