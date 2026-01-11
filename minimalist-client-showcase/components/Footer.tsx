import React from 'react';
import { COMPANY_NAME } from '../constants';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-100 bg-white px-6 md:px-12 lg:px-24 py-12 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="text-sm font-medium tracking-wide text-neutral-900">
          {COMPANY_NAME}
        </div>

        <div className="text-sm text-neutral-400 font-light">
          &copy; {year} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
