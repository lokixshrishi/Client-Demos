
import React, { useState } from 'react';
import { GALLERY } from '../constants';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Makeup', 'Spa'];

  const filteredGallery = filter === 'All' ? GALLERY : GALLERY.filter(img => img.category === filter);

  return (
    <div className="py-20 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-6 uppercase tracking-tight">Our Gallery</h1>
          <div className="flex justify-center gap-8 border-b border-slate-100 pb-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-bold tracking-[0.3em] uppercase transition-colors ${
                  filter === cat ? 'text-gold border-b border-gold' : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredGallery.map((img) => (
            <div key={img.id} className="relative group overflow-hidden break-inside-avoid shadow-lg">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase mb-1 text-gold">{img.category}</span>
                <h3 className="text-2xl font-serif">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
