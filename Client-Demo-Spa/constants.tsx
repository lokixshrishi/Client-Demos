
import { Service, Testimonial, GalleryImage } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    category: 'Spa',
    name: 'Aromatherapy Deep Tissue',
    description: 'A therapeutic massage using premium essential oils to release deep-seated tension and promote total relaxation.',
    price: '$140',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop'
  },
  {
    id: 's2',
    category: 'Spa',
    name: 'Hydra-Radiance Facial',
    description: 'Revolutionary skin resurfacing treatment that provides deep cleansing, gentle exfoliation, and intense hydration.',
    price: '$180',
    duration: '75 min',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop'
  },
  {
    id: 's3',
    category: 'Spa',
    name: 'Hot Stone Therapy',
    description: 'Heated basalt stones placed on key points to melt away stress and improve circulation.',
    price: '$160',
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&h=600&fit=crop'
  },
  {
    id: 's4',
    category: 'Spa',
    name: 'Detox Body Wrap',
    description: 'Purifying treatment using mineral-rich clay and seaweed to eliminate toxins and rejuvenate skin.',
    price: '$195',
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop'
  },
  {
    id: 'm1',
    category: 'Makeup',
    name: 'Bridal Couture Makeup',
    description: 'Exquisite, long-lasting bridal makeup tailored to your unique features, skin tone, and wedding theme.',
    price: '$350',
    duration: '120 min',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop'
  },
  {
    id: 'm2',
    category: 'Makeup',
    name: 'Red Carpet Glamour',
    description: 'High-definition makeup for special events, photography sessions, and prestigious galas.',
    price: '$200',
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop'
  },
  {
    id: 'm3',
    category: 'Makeup',
    name: 'Editorial & Fashion',
    description: 'Creative, avant-garde makeup for photoshoots, runway shows, and magazine editorials.',
    price: '$275',
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=800&h=600&fit=crop'
  },
  {
    id: 'm4',
    category: 'Makeup',
    name: 'Natural Glow Enhancement',
    description: 'Subtle, everyday makeup that enhances your natural beauty with a fresh, dewy finish.',
    price: '$120',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&h=600&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Catherine Vance',
    role: 'Fashion Editor',
    text: 'The attention to detail is unparalleled. My skin has never looked better, and her makeup artistry is truly transformative.',
    rating: 5
  },
  {
    id: 't2',
    name: 'James Harrison',
    role: 'Groom',
    text: 'We booked the bridal package and the experience was serene from start to finish. Highly professional and calming.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Sophia Martinez',
    role: 'Actress',
    text: 'I trust no one else for my red carpet looks. The team understands lighting, cameras, and how to make you feel confident.',
    rating: 5
  },
  {
    id: 't4',
    name: 'Emily Chen',
    role: 'Bride',
    text: 'My wedding day makeup was flawless from ceremony to the last dance. Waterproof and absolutely stunning in photos!',
    rating: 5
  }
];

export const GALLERY: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop', title: 'Sunset Glow', category: 'Makeup' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop', title: 'Zen Sanctuary', category: 'Spa' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop', title: 'Elegant Bridal', category: 'Makeup' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&h=600&fit=crop', title: 'Stone Therapy', category: 'Spa' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=800&fit=crop', title: 'Glamour Portrait', category: 'Makeup' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop', title: 'Relaxation Suite', category: 'Spa' },
  { id: 'g7', url: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&h=800&fit=crop', title: 'Natural Beauty', category: 'Makeup' },
  { id: 'g8', url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop', title: 'Aromatherapy', category: 'Spa' },
  { id: 'g9', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop', title: 'Red Carpet Ready', category: 'Makeup' },
  { id: 'g10', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop', title: 'Body Treatment', category: 'Spa' },
  { id: 'g11', url: 'https://images.unsplash.com/photo-1588006173527-6fa9e8a3e853?w=600&h=800&fit=crop', title: 'Editorial Look', category: 'Makeup' },
  { id: 'g12', url: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&h=600&fit=crop', title: 'Facial Glow', category: 'Spa' }
];

export const TEAM_MEMBERS = [
  {
    id: 'team1',
    name: 'Julianne Moretti',
    role: 'Founder & Lead Artist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
    bio: '15+ years in luxury spa and celebrity makeup artistry.'
  },
  {
    id: 'team2',
    name: 'Marcus Chen',
    role: 'Senior Esthetician',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    bio: 'Specialist in advanced facial treatments and skin analysis.'
  },
  {
    id: 'team3',
    name: 'Isabella Rodriguez',
    role: 'Bridal Specialist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
    bio: 'Expert in bridal and special occasion makeup artistry.'
  },
  {
    id: 'team4',
    name: 'David Kim',
    role: 'Massage Therapist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
    bio: 'Certified in deep tissue, hot stone, and aromatherapy massage.'
  }
];

export const CERTIFICATIONS = [
  { name: 'Licensed Esthetician - California Board', icon: '🏆' },
  { name: 'MAC Pro Certified Artist', icon: '💄' },
  { name: 'CIDESCO International Diploma', icon: '🌍' },
  { name: 'Dermalogica Expert', icon: '✨' }
];
