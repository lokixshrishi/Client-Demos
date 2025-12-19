import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Submitted",
      description: "Thank you for your inquiry. Our team will contact you within 24 business hours.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-secondary py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
              Get In Touch
            </p>
            <h2 className="mb-6 text-3xl font-semibold text-foreground lg:text-4xl">
              Schedule a Consultation
            </h2>
            <p className="mb-8 text-muted-foreground">
              Ready to take control of your financial future? Contact us today to 
              schedule a consultation with one of our experienced professionals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Office Address</p>
                  <p className="text-sm text-muted-foreground">
                    123 Financial District<br />
                    Suite 500, New York, NY 10004
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-foreground">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:info@carterassociates.com" className="text-sm text-muted-foreground hover:text-foreground">
                    info@carterassociates.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Office Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 lg:p-10">
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Request a Consultation
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="(555) 000-0000"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Service Needed
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="tax">Tax Planning & Preparation</option>
                  <option value="audit">Audit & Assurance</option>
                  <option value="advisory">Business Advisory</option>
                  <option value="accounting">Corporate Accounting</option>
                  <option value="wealth">Wealth Management</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
