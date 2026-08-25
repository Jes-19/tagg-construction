"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you offer site surveys?",
    answer:
      "We provide free site surveys to help our clients achieve the most efficient and compliant solution. This allows us to confirm layout, access, ground conditions, and design requirements early, reducing risk, delays, and unexpected costs later in the project.",
  },
  {
    question: "Do you decorate or brand your hoardings?",
    answer:
      "Yes, our services include decoration and installation of vinyl or dibond panels.",
  },
  {
    question: "How quickly can you install?",
    answer:
      "Thanks to our large stock holding and experienced installation teams, we work closely with our clients to deliver important projects within short timeframes. Where required, we can mobilise quickly to meet programme demands and site constraints.",
  },
  {
    question: "Do I need a temporary works design for hoarding?",
    answer:
      "In most cases, yes — hoarding is classed as temporary works under BS 5975, and a design is required wherever there's risk to public safety, nearby structures, or the site itself. The level of design depends on complexity, ranging from a simple Category 0/1 check to a full independent Category 2 or 3 design. If you're unsure what your project needs, our in-house Temporary Works Coordinator can advise.",
  },
  {
    question: "Do you provide TW details?",
    answer:
      "Yes. As standard, we provide a comprehensive temporary works documentation package to support safe, compliant installation. This includes typical spacing and detail drawings, a full structural calculation pack, BS 5975 Category 1 checks and certification, a designer's risk assessment, and a document issue register. Where required, our engineers can also produce Category 2 and Category 3 independent checks.",
  },
  {
    question: "What gate options do you supply?",
    answer:
      "We fabricate and supply a full range of access solutions to suit varying site layouts, security requirements, and traffic flows. Options include pedestrian access gates, vehicle access gates, bi-fold gates, and custom gate solutions designed to suit specific access and security requirements. All gate options can be integrated seamlessly into our fencing and hoarding systems.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Please reach us at{" "}
            <a
              href="mailto:info@taggconstruction.co.uk"
              className="text-[#0367c4] hover:underline font-medium"
            >
              info@taggconstruction.co.uk
            </a>{" "}
            if you cannot find an answer to your question.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
