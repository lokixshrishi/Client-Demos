import React from 'react';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { Footer } from './components/Footer';
import { PROJECTS } from './constants';
import { AdminProvider } from './context/AdminContext';
import { SettingsPanel } from './components/admin/SettingsPanel';

const App: React.FC = () => {
  return (
    <AdminProvider>
      <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-100 selection:text-neutral-900 relative">
        <Hero />

        <main id="showcase" className="px-6 md:px-12 lg:px-24 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-x-20 lg:gap-y-24">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </main>

        <Footer />
        <SettingsPanel />
      </div>
    </AdminProvider>
  );
};

export default App;
