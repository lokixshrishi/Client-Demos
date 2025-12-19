import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We proudly serve the entire Metro Area and surrounding counties within a 25-mile radius. This includes Riverside Heights, Oak Park, Maple Grove, Cedar Hills, and all neighboring communities. For locations outside this area, please call us to discuss your project."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for all projects. Our technician will visit your home, assess the work needed, and provide a detailed written estimate with transparent pricing. There are no hidden fees or surprise charges."
  },
  {
    question: "Are your technicians licensed and insured?",
    answer: "Absolutely. All HomeFirst technicians are fully licensed, bonded, and insured. We also conduct thorough background checks and require ongoing training to ensure our team stays current with the latest techniques, codes, and safety standards."
  },
  {
    question: "What is your warranty policy?",
    answer: "We stand behind our work with a comprehensive warranty. Labor is guaranteed for one full year, and we honor all manufacturer warranties on parts and equipment. If any issue arises from our workmanship, we'll make it right at no additional cost."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we offer 24/7 emergency services for urgent plumbing, electrical, and HVAC issues. Our emergency response team is available nights, weekends, and holidays. Call our main number anytime, and you'll be connected with a live dispatcher."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, checks, and cash. For larger projects, we also offer flexible financing options with approved credit. Payment is due upon completion of work, and we provide detailed invoices for your records."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "Scheduling is easy! You can call us directly at (555) 123-4567, send us an email, or use the contact form on our website. We offer flexible scheduling including early morning and evening appointments to accommodate your busy schedule."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Frequently Asked
              <span className="block text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Have questions? We've got answers. If you don't find what you're looking for, 
              don't hesitate to reach out directly.
            </p>
            
            <div className="bg-card p-6 border border-border/50 shadow-card">
              <h3 className="font-heading text-xl text-foreground mb-3">
                Still have questions?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our team is here to help. Give us a call or send a message.
              </p>
              <Button variant="default" size="default" asChild>
                <a href="tel:+15551234567">
                  <Phone className="w-4 h-4" />
                  Call (555) 123-4567
                </a>
              </Button>
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 shadow-soft overflow-hidden opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-heading text-lg text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
