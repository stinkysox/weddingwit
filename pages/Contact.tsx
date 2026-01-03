
import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper className="mb-24">
          <h1 className="text-5xl md:text-8xl font-serif mb-6">Connect.</h1>
          <p className="text-xl text-gray-500 font-light">Available for commissions worldwide.</p>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-24">
          <SectionWrapper direction="left">
            <div className="space-y-12">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-yellow-600 mb-4">Studio Location</h3>
                <p className="text-2xl font-serif">12 Soho Square, London<br />W1D 3QF, United Kingdom</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-yellow-600 mb-4">Direct Communication</h3>
                <p className="text-2xl font-serif">hello@weddingwit.com<br />+44 (0) 20 7946 0958</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-yellow-600 mb-4">Follow Our Journey</h3>
                <div className="flex gap-8 text-xl font-serif">
                  <a href="#" className="hover:text-yellow-600 transition-colors">Instagram</a>
                  <a href="#" className="hover:text-yellow-600 transition-colors">Vimeo</a>
                  <a href="#" className="hover:text-yellow-600 transition-colors">Pinterest</a>
                </div>
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper direction="right">
            <form className="glass p-12 rounded-[2rem] space-y-8">
              <div className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-yellow-600 transition-colors" />
                <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-yellow-600 transition-colors" />
                <textarea placeholder="Tell us about your event..." className="w-full bg-transparent border-b border-white/20 py-4 h-32 outline-none focus:border-yellow-600 transition-colors resize-none" />
              </div>
              <button className="w-full py-5 rounded-full bg-black dark:bg-white text-white dark:text-black uppercase tracking-widest font-bold text-sm hover:scale-[1.02] transition-transform">
                Send Inquiry
              </button>
            </form>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};
