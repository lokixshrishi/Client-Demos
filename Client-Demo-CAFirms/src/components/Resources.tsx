import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    category: "Tax Guide",
    title: "2024 Business Tax Planning Checklist",
    description: "Essential tax planning strategies and deadlines every business owner needs to know.",
    type: "PDF Download",
  },
  {
    category: "White Paper",
    title: "Navigating Financial Compliance",
    description: "A comprehensive guide to maintaining regulatory compliance in today's complex landscape.",
    type: "PDF Download",
  },
  {
    category: "Article",
    title: "Estate Planning Best Practices",
    description: "Learn how to protect your assets and ensure a smooth wealth transfer to future generations.",
    type: "Read Online",
  },
  {
    category: "Guide",
    title: "Small Business Accounting Essentials",
    description: "From bookkeeping basics to financial reporting, everything you need to manage your finances.",
    type: "PDF Download",
  },
];

const Resources = () => {
  const handleDownload = (title: string) => {
    alert(`Downloading: ${title}\n\nThis is a demo. In production, this would download the actual document.`);
  };

  return (
    <section id="resources" className="bg-secondary py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
            Resources
          </p>
          <h2 className="mb-4 text-3xl font-semibold text-foreground lg:text-4xl">
            Knowledge Center
          </h2>
          <p className="text-muted-foreground">
            Access our collection of guides, articles, and resources to help you 
            make informed financial decisions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="flex gap-5 border border-border bg-card p-6 hover:border-gold/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gold">
                  {resource.category}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {resource.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {resource.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDownload(resource.title)}
                >
                  {resource.type === "PDF Download" ? (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </>
                  ) : (
                    <>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Read Article
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
