import React from 'react';

interface FooterProps {
  companyName: string;
}

/**
 * Footer component is memoized to prevent redundant re-renders when other sections
 * of the landing page are being edited in the Sidebar.
 */
export const Footer = React.memo(({ companyName }: FooterProps) => {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        <div className="flex gap-8 text-gray-400">
          <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
