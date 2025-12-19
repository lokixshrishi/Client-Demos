
import React from 'react';
import { SERVICES } from '../constants';
import { Sparkles, Clock, DollarSign } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-10 duration-700">
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif mb-4">Our Rituals</h1>
          <p className="text-slate-500 tracking-widest uppercase text-xs">A collection of premium wellness and beauty experiences</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-32">
          {/* Spa Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-serif uppercase tracking-widest">Spa & Wellness</h2>
              <div className="h-px bg-gold flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {SERVICES.filter(s => s.category === 'Spa').map(service => (
                <ServiceItem key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Makeup Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-serif uppercase tracking-widest">Professional Makeup</h2>
              <div className="h-px bg-gold flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {SERVICES.filter(s => s.category === 'Makeup').map(service => (
                <ServiceItem key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceItem: React.FC<{ service: any }> = ({ service }) => (
  <div className="group flex flex-col md:flex-row gap-8 items-center md:items-start bg-white p-6 hover:shadow-lg transition-all">
    <div className="w-full md:w-48 h-48 flex-shrink-0 overflow-hidden">
      <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="flex-grow space-y-4">
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-serif">{service.name}</h3>
        <span className="text-gold font-bold text-xl">{service.price}</span>
      </div>
      <p className="text-slate-500 text-sm leading-relaxed font-light">{service.description}</p>
      <div className="flex gap-6 pt-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
        <span className="flex items-center gap-2"><Clock size={14} /> {service.duration}</span>
        <span className="flex items-center gap-2"><Sparkles size={14} /> PREMIUM QUALITY</span>
      </div>
    </div>
  </div>
);
