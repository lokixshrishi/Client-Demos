import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Medical Center Drive, Suite 200",
    subValue: "Evergreen Valley, CA 90210",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(123) 456-7890",
    href: "tel:+1234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "care@evergreenclinic.com",
    href: "mailto:care@evergreenclinic.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 8:00 AM - 6:00 PM",
    subValue: "Sat: 9:00 AM - 1:00 PM",
  },
];

const ClinicInfoSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-muted-foreground text-lg">
            We're conveniently located and ready to serve you. 
            Reach out today to schedule your appointment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card
              key={info.label}
              variant="elevated"
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    {info.value}
                  </a>
                ) : (
                  <>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                    {info.subValue && (
                      <p className="text-muted-foreground text-sm">{info.subValue}</p>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicInfoSection;
