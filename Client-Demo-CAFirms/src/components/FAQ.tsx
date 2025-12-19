import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What services does Carter & Associates provide?",
    answer: "We offer a comprehensive range of financial services including tax planning and preparation, audit and assurance, business advisory, risk management, corporate accounting, and wealth management. Our team is equipped to handle individual, business, and estate financial needs.",
  },
  {
    question: "How do I schedule an initial consultation?",
    answer: "You can schedule a consultation by filling out the contact form on our website, calling us at (555) 123-4567, or emailing info@carterassociates.com. Our team will respond within 24 business hours to set up a meeting that fits your schedule.",
  },
  {
    question: "What should I bring to my first meeting?",
    answer: "For your initial consultation, please bring recent tax returns (last 2-3 years), financial statements, any relevant business documents, and a list of questions or concerns you'd like to discuss. This helps us provide the most thorough assessment of your situation.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Yes, we serve clients ranging from individual taxpayers and small businesses to mid-sized companies and large corporations. Our services are scalable and tailored to meet the unique needs of each client, regardless of size.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise across multiple industries including real estate, healthcare, manufacturing, retail and e-commerce, construction, and professional services. Our industry specialists understand the unique challenges and opportunities in each sector.",
  },
  {
    question: "How are your fees structured?",
    answer: "Our fee structure depends on the type and scope of services required. We offer both hourly rates and fixed-fee arrangements for certain services. During your initial consultation, we'll provide a clear estimate based on your specific needs.",
  },
  {
    question: "Are my financial records kept confidential?",
    answer: "Absolutely. We maintain strict confidentiality protocols and comply with all professional standards and regulations regarding client information. Your financial data is secured using industry-leading encryption and access controls.",
  },
  {
    question: "Can you help with IRS audits or tax disputes?",
    answer: "Yes, we have extensive experience representing clients before the IRS and state tax authorities. Our team can assist with audit defense, tax dispute resolution, and negotiating payment arrangements when necessary.",
  },
];

const FAQ = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" className="bg-secondary py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
            FAQ
          </p>
          <h2 className="mb-4 text-3xl font-semibold text-foreground lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our services, processes, 
            and how we can help you achieve your financial goals.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-gold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="mb-4 text-muted-foreground">
              Still have questions? We're here to help.
            </p>
            <Button variant="default" onClick={scrollToContact}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
