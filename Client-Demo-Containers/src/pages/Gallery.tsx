import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceCafe from "@/assets/service-cafe.jpg";
import serviceCustom from "@/assets/service-custom.jpg";
import heroCabin from "@/assets/hero-cabin.jpg";

const galleryImages = [
  { src: gallery1, alt: "Multiple portable cabins at construction site", category: "Projects" },
  { src: gallery2, alt: "Luxury portable cabin interior", category: "Interiors" },
  { src: gallery3, alt: "Portable offices at industrial facility", category: "Projects" },
  { src: gallery4, alt: "Manufacturing facility", category: "Factory" },
  { src: gallery5, alt: "Cabin transportation and delivery", category: "Logistics" },
  { src: gallery6, alt: "Two-story modular building", category: "Projects" },
  { src: serviceOffice, alt: "Portable office interior", category: "Interiors" },
  { src: serviceConstruction, alt: "Construction site cabin", category: "Products" },
  { src: serviceSecurity, alt: "Security booth", category: "Products" },
  { src: serviceCafe, alt: "Modular cafe", category: "Products" },
  { src: serviceCustom, alt: "Custom modular complex", category: "Projects" },
  { src: heroCabin, alt: "Modern portable office cabin", category: "Products" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-neutral-50 section-padding">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h1 className="heading-display text-foreground mb-6 animate-slide-up">
              Project Gallery
            </h1>
            <p className="body-large max-w-3xl animate-slide-up animate-delay-100">
              Browse our portfolio of completed projects, manufacturing processes, 
              and product installations across diverse industries and locations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  filter === category
                    ? "bg-foreground text-background"
                    : "bg-neutral-100 text-muted-foreground hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer card-hover"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {image.category}
                  </span>
                  <p className="text-sm text-background mt-1">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-background" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
