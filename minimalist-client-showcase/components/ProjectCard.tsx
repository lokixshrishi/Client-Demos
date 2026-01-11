import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col gap-6">
      {/* Image Container */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden bg-neutral-100 border border-neutral-200 transition-colors duration-300 hover:border-neutral-400"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
        </div>
      </a>

      {/* Text Content */}
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-medium text-neutral-900 group-hover:text-black transition-colors">
            {project.title}
          </h3>
          {project.category && (
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
              {project.category}
            </span>
          )}
        </div>

        <p className="text-neutral-500 font-light leading-relaxed text-sm md:text-base max-w-md">
          {project.description}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 mt-2 hover:underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-all w-fit"
        >
          View Live Demo
          <ExternalLink size={14} className="text-neutral-400" />
        </a>
      </div>
    </div>
  );
};
