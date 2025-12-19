
export interface Service {
  id: string;
  category: 'Spa' | 'Makeup';
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Certification {
  name: string;
  icon: string;
}
