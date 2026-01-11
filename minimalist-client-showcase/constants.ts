import { Project } from './types';

export const COMPANY_NAME = "LUMEN STUDIO";
export const HERO_HEADLINE = "Selected Works";
export const HERO_SUBTEXT = "We build digital products that prioritize clarity, performance, and purpose. Below is a curated selection of our recent client demonstrations.";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Hiver',
    description: 'A seasonal dining experience bringing European tradition and festive elegance to modern gastronomy.',
    imageUrl: 'https://picsum.photos/seed/hiver/1200/800',
    link: 'https://restruants-nine.vercel.app/',
    category: 'Restaurant'
  },
  {
    id: '2',
    title: 'Ethereal Aura',
    description: 'Example of a luxury spa and wellness brand focusing on rediscovering inner radiance.',
    imageUrl: 'https://picsum.photos/seed/spa/1200/800',
    link: 'https://spa-vert.vercel.app/',
    category: 'Wellness'
  },
  {
    id: '3',
    title: 'Prime Fitness',
    description: 'A high-energy gym website designed to convert visitors with bold typography and clear calls to action.',
    imageUrl: 'https://picsum.photos/seed/gym/1200/800',
    link: 'https://gym-phi-tan.vercel.app/',
    category: 'Fitness'
  },
  {
    id: '4',
    title: 'Terroir Café',
    description: 'This layout highlights craft and warmth, perfect for specialty coffee houses and local artisanal brands.',
    imageUrl: 'https://picsum.photos/seed/cafe/1200/800',
    link: 'https://cafe-taupe-xi.vercel.app/',
    category: 'Cafe'
  }
];
