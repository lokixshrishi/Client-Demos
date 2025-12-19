
import React from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, Instagram, Facebook, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-right-10 duration-700">
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&h=600&fit=crop"
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Get In Touch</h1>
          <p className="text-lg font-light tracking-widest uppercase">We'd Love to Hear From You</p>
        </div>
      </section>

      <div className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-serif mb-8">Inquiry & Booking</h2>
            <p className="text-slate-500 font-light text-lg mb-12 leading-relaxed">
              We look forward to welcoming you. Please provide your details below to schedule your appointment or inquire about our services.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-silk rounded-full text-gold"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest uppercase mb-1">Our Studio</h4>
                  <p className="text-slate-500 text-sm font-light">420 N Beverly Dr, <br /> Beverly Hills, CA 90210</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-silk rounded-full text-gold"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest uppercase mb-1">Inquiries</h4>
                  <p className="text-slate-500 text-sm font-light">+1 (555) 012-3456</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-silk rounded-full text-gold"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest uppercase mb-1">Email</h4>
                  <p className="text-slate-500 text-sm font-light">hello@etherealaura.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-silk rounded-full text-gold"><Clock size={24} /></div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest uppercase mb-1">Studio Hours</h4>
                  <p className="text-slate-500 text-sm font-light">Tue - Sat: 10:00 AM - 7:00 PM <br />Mon: By Appointment Only</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-slate-900 text-white hover:bg-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-slate-900 text-white hover:bg-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-slate-900 text-white hover:bg-gold transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>

          <div className="bg-silk p-8 md:p-12 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-white border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">Email</label>
                <input type="email" className="w-full bg-white border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">Phone</label>
                <input type="tel" className="w-full bg-white border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">Select Service</label>
                <select className="w-full bg-white border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none">
                  <option>Spa - Aromatherapy Deep Tissue</option>
                  <option>Spa - Hydra-Radiance Facial</option>
                  <option>Spa - Hot Stone Therapy</option>
                  <option>Spa - Detox Body Wrap</option>
                  <option>Makeup - Bridal Couture</option>
                  <option>Makeup - Red Carpet Glamour</option>
                  <option>Makeup - Editorial & Fashion</option>
                  <option>Makeup - Natural Glow Enhancement</option>
                  <option>Consultation Only</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">Message</label>
                <textarea className="w-full bg-white border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none h-32 resize-none" placeholder="Tell us about your needs..."></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-gold transition-all duration-300">
                SEND REQUEST
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Studio Images */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Visit Our Studio</h2>
            <p className="text-slate-500 font-light">Experience luxury in the heart of Beverly Hills</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop"
              alt="Studio Interior"
              className="w-full h-64 object-cover rounded-sm shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop"
              alt="Makeup Station"
              className="w-full h-64 object-cover rounded-sm shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop"
              alt="Treatment Room"
              className="w-full h-64 object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 relative">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&h=600&fit=crop"
          alt="Beverly Hills Location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
          <div className="bg-white p-8 shadow-xl text-center">
            <MapPin className="text-gold mx-auto mb-4" size={32} />
            <h3 className="font-serif text-xl mb-2">Ethereal Aura Studio</h3>
            <p className="text-slate-500 text-sm font-light">420 N Beverly Dr, Beverly Hills, CA 90210</p>
          </div>
        </div>
      </section>
    </div>
  );
};
