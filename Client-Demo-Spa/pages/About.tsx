
import React from 'react';
import { ShieldCheck, Award, Users, Camera, Sparkles, Heart } from 'lucide-react';
import { TEAM_MEMBERS, CERTIFICATIONS } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=800&fit=crop"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Story</h1>
          <p className="text-lg font-light tracking-widest uppercase">Where Art Meets Wellness</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Meet the Artist</span>
              <h2 className="text-4xl font-serif mb-8 leading-tight">Artistic Vision. <br />Expert Care.</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-light mb-6">
                Founded by Julianne Moretti, Ethereal Aura was born from a passion for clinical excellence and the transformative power of professional makeup artistry. With over 15 years in the American luxury spa circuit, Julianne has crafted a sanctuary where modern science meets timeless elegance.
              </p>
              <p className="text-slate-500 font-light mb-10 leading-relaxed italic">
                "My mission is to reveal the most radiant version of you—whether through a rejuvenating deep-tissue session or a bespoke makeup application for your most significant moments."
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <Award className="text-gold" />
                  <span className="text-xs font-bold tracking-widest uppercase">Certified Esthetician</span>
                </div>
                <div className="flex items-center gap-4">
                  <Camera className="text-gold" />
                  <span className="text-xs font-bold tracking-widest uppercase">Celebrity Makeup Artist</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop"
                alt="Julianne Moretti - Founder"
                className="rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="py-20 bg-silk">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Our Sanctuary</h2>
            <p className="text-slate-500 font-light">A glimpse into our luxurious studio space</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=800&fit=crop"
                alt="Spa Interior"
                className="w-full h-full object-cover rounded-sm shadow-lg"
              />
            </div>
            <img
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=400&fit=crop"
              alt="Treatment Room"
              className="w-full h-48 md:h-full object-cover rounded-sm shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=400&fit=crop"
              alt="Hot Stones"
              className="w-full h-48 md:h-full object-cover rounded-sm shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop"
              alt="Makeup Station"
              className="w-full h-48 md:h-full object-cover rounded-sm shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&h=400&fit=crop"
              alt="Products"
              className="w-full h-48 md:h-full object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-4xl font-serif text-gold mb-2">15+</div>
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-gold mb-2">2k+</div>
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-gold mb-2">50+</div>
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">Award Wins</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-gold mb-2">12</div>
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">Signature Techniques</div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4 uppercase tracking-widest">Meet Our Team</h2>
            <p className="text-slate-500 font-light max-w-xl mx-auto">Our talented professionals bring years of expertise and passion to every service.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm font-light">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-xl font-serif uppercase tracking-widest">Certifications & Credentials</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white px-6 py-4 shadow-sm">
                <span className="text-2xl">{cert.icon}</span>
                <span className="text-xs font-bold tracking-widest uppercase text-slate-600">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-silk">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-16 tracking-widest uppercase">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { title: 'Integrity', icon: <ShieldCheck size={32} />, desc: 'We use only clean, non-toxic, and ethical products.' },
              { title: 'Excellence', icon: <Award size={32} />, desc: 'Continuous education to bring you the latest techniques.' },
              { title: 'Connection', icon: <Users size={32} />, desc: 'Building long-term relationships through personal care.' },
              { title: 'Passion', icon: <Heart size={32} />, desc: 'Every treatment is delivered with love and dedication.' },
            ].map((v, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-center text-gold">{v.icon}</div>
                <h3 className="text-xl font-serif uppercase tracking-widest">{v.title}</h3>
                <p className="text-sm text-slate-500 font-light max-w-xs mx-auto">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-8 uppercase tracking-widest">Why Choose Us</h2>
              <div className="space-y-6">
                {[
                  { title: 'Premium Products', desc: 'We exclusively use medical-grade skincare and luxury cosmetics from top brands.' },
                  { title: 'Personalized Approach', desc: 'Every treatment is customized to your unique skin type and preferences.' },
                  { title: 'Serene Environment', desc: 'Our studio is designed to be a peaceful escape from everyday stress.' },
                  { title: 'Ongoing Support', desc: 'We provide aftercare guidance and product recommendations for lasting results.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <Sparkles className="text-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-sm tracking-widest uppercase mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=500&fit=crop"
                alt="Facial Treatment"
                className="w-full h-64 object-cover rounded-sm shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=500&fit=crop"
                alt="Bridal Makeup"
                className="w-full h-64 object-cover rounded-sm shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=500&fit=crop"
                alt="Massage"
                className="w-full h-64 object-cover rounded-sm shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop"
                alt="Glamour"
                className="w-full h-64 object-cover rounded-sm shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
