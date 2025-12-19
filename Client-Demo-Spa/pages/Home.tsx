
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Heart, ShieldCheck } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/hero/1920/1080"
            alt="Hero Background"
            className="w-full h-full object-cover filter brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <span className="text-gold font-semibold tracking-[0.3em] text-sm uppercase mb-4 block animate-bounce">Professional Artistry & Wellness</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Rediscover Your <br /> <span className="italic">Inner Radiance</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-slate-100 font-light max-w-lg leading-relaxed">
              Experience the pinnacle of luxury spa treatments and professional makeup artistry in the heart of America.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-white text-slate-900 px-10 py-4 text-sm font-bold tracking-widest hover:bg-gold hover:text-white transition-all duration-300 text-center"
              >
                VIEW SERVICES
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-10 py-4 text-sm font-bold tracking-widest hover:bg-white hover:text-slate-900 transition-all duration-300 text-center"
              >
                PORTFOLIO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://picsum.photos/seed/phil/800/1000"
                alt="Philosophy"
                className="rounded-sm shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <div className="w-12 h-1 bg-gold"></div>
              <h2 className="text-4xl font-serif leading-snug">The Ethereal Philosophy: <br /> Holistic Beauty & Precision Artistry</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                We believe beauty is not just skin deep—it is an aura that glows from within. Our studio merges clinical precision with artistic intuition to create experiences that rejuvenate the soul and amplify your natural features.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <Sparkles className="text-gold" />
                  <h4 className="font-bold text-sm tracking-widest uppercase">Luxe Materials</h4>
                  <p className="text-xs text-slate-500">Only the finest medical-grade products and luxury cosmetics.</p>
                </div>
                <div className="space-y-2">
                  <Heart className="text-gold" />
                  <h4 className="font-bold text-sm tracking-widest uppercase">Personalized</h4>
                  <p className="text-xs text-slate-500">Every treatment tailored to your specific skin needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-silk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Our Curated Services</h2>
            <p className="text-slate-500 max-w-xl mx-auto italic font-light">Explore our most sought-after treatments and makeup services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase">
                    {service.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{service.name}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center border-t border-slate-50 pt-4">
                    <span className="text-gold font-bold">{service.price}</span>
                    <Link to="/services" className="text-slate-400 hover:text-gold transition-colors">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10">
          <Sparkles size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-serif mb-6 leading-tight">Trusted by Discriminating Clients</h2>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} className="fill-gold text-gold" />)}
                </div>
                <span className="text-sm tracking-widest text-slate-400">4.9 RATING</span>
              </div>
              <Link to="/contact" className="text-gold font-bold tracking-widest text-xs hover:text-white flex items-center gap-2">
                BECOME ONE OF THEM <ArrowRight size={14} />
              </Link>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-slate-800/50 p-8 rounded-sm border border-slate-700 backdrop-blur-sm">
                  <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div>
                    <h4 className="font-bold text-sm tracking-widest uppercase">{t.name}</h4>
                    <p className="text-xs text-gold uppercase tracking-tighter">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-silk border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-serif mb-6 uppercase tracking-widest">Ready for your transformation?</h2>
          <p className="text-slate-500 mb-10 font-light">Book a private session or a detailed consultation today.</p>
          <Link
            to="/contact"
            className="inline-block bg-slate-900 text-white px-12 py-5 text-sm font-bold tracking-[0.2em] hover:bg-gold transition-all duration-300"
          >
            RESERVE NOW
          </Link>
        </div>
      </section>
    </div>
  );
};
