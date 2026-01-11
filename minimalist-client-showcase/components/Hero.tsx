import React from 'react';
import { ArrowDown } from 'lucide-react';
import { COMPANY_NAME, HERO_HEADLINE, HERO_SUBTEXT } from '../constants';
import { EditableText } from './admin/EditableText';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12 bg-white">
      <div className="max-w-4xl">
        <span className="block text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-8">
          <EditableText id="company-name" defaultText={COMPANY_NAME} />
        </span>

        <EditableText
          id="hero-headline"
          defaultText={HERO_HEADLINE}
          as="h1"
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-neutral-900 mb-8 leading-[0.95]"
          multiline
        />

        <div className="text-lg md:text-2xl text-neutral-500 font-light max-w-2xl leading-relaxed">
          <EditableText
            id="hero-subtext"
            defaultText={HERO_SUBTEXT}
            as="p"
            multiline
          />
        </div>
      </div>

      <div className="mt-24">
        <a
          href="#showcase"
          className="inline-flex items-center gap-3 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors group"
          aria-label="Scroll to demos"
        >
          View Demos
          <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-neutral-400 transition-colors">
            <ArrowDown size={14} />
          </div>
        </a>
      </div>
    </section>
  );
};
