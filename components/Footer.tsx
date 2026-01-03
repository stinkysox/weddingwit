
import React from 'react';
import { Link } from 'react-router-dom';

// Changed to use React.FC to properly acknowledge the children prop passed via the JSX body
const SocialIcon: React.FC<{ href: string; children: React.ReactNode; label: string }> = ({ href, children, label }) => (
  <a 
    href={href} 
    aria-label={label}
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-10 h-10 flex items-center justify-center rounded-full glass border border-white/10 hover:border-yellow-600 transition-all hover:scale-110"
  >
    {children}
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="max-w-xs">
          <h2 className="text-3xl font-serif mb-4">Weddingwit.</h2>
          <p className="text-gray-500 text-sm leading-relaxed uppercase tracking-widest mb-8">
            A visual boutique for the modern romantic. Based in London, traveling globally.
          </p>
          <div className="flex gap-4">
            <SocialIcon href="https://instagram.com" label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </SocialIcon>
            <SocialIcon href="https://vimeo.com" label="Vimeo">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.99 3.37c-1.35.43-2.1.91-2.25 1.44-.15.53.21 1.63.21 1.63s1.23-.46 1.23-1.38c0-.92-.61-1.31-1.23-1.69a2.53 2.53 0 0 0-3 0c-.86.63-1.12 1.34-1.12 1.34s-.69 3.19-1.33 6.64c-.64 3.45-1.53 5.42-2.31 5.42-.78 0-1.87-2.73-3.23-8.23-1.36-5.5-2.61-6.19-2.61-6.19l-.53.16c1.35 1.12 3 4.13 3.31 6.55.31 2.42-.15 5.5.92 5.5 1.07 0 2.61-5.11 3.53-8.52.92-3.41 2.15-4.52 3.84-4.52 1.69 0 3 .69 4.14 2.15l.48-.16Z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://pinterest.com" label="Pinterest">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/><circle cx="12" cy="12" r="10"/></svg>
            </SocialIcon>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6 text-xs uppercase tracking-widest font-medium">
          <Link to="/" className="hover:text-yellow-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-yellow-600 transition-colors">Story</Link>
          <Link to="/gallery" className="hover:text-yellow-600 transition-colors">Work</Link>
          <Link to="/contact" className="hover:text-yellow-600 transition-colors">Contact</Link>
          <Link to="/book" className="hover:text-yellow-600 transition-colors">Booking</Link>
        </div>
        
        <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-light">
          &copy; {new Date().getFullYear()} Weddingwit Artistry. <br className="md:hidden" /> Crafted for Legacies.
        </div>
      </div>
    </footer>
  );
};
