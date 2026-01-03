
import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <SectionWrapper className="max-w-4xl mx-auto px-6 text-center mb-24">
        <h1 className="text-5xl md:text-8xl font-serif mb-8">The Ethos of Weddingwit.</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Born from a passion for classic cinema and editorial fashion, Weddingwit is more than a photography studio. It is a creative house dedicated to documenting legacy.
        </p>
      </SectionWrapper>

      <div className="max-w-7xl mx-auto px-6 space-y-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <SectionWrapper direction="left">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass">
              <img src="https://picsum.photos/seed/about1/800/1000" alt="Founder" className="w-full h-full object-cover" />
            </div>
          </SectionWrapper>
          <SectionWrapper direction="right">
            <span className="text-yellow-600 uppercase tracking-widest text-xs mb-4 block">Our Origin</span>
            <h2 className="text-4xl font-serif mb-6 leading-tight">Crafting timeless legacies since 2012.</h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Founded by visionaries who believed that wedding imagery should transcend the typical, Weddingwit quickly rose to prominence by blending authentic documentary storytelling with sophisticated editorial staging.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              We believe every couple possesses a unique visual frequency. Our job is to tune in and amplify it through light, shadow, and movement.
            </p>
          </SectionWrapper>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <SectionWrapper direction="left" className="md:order-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass">
              <img src="https://picsum.photos/seed/about2/800/1000" alt="Philosophy" className="w-full h-full object-cover" />
            </div>
          </SectionWrapper>
          <SectionWrapper direction="right" className="md:order-1">
            <span className="text-yellow-600 uppercase tracking-widest text-xs mb-4 block">Our Vision</span>
            <h2 className="text-4xl font-serif mb-6 leading-tight">Beyond the frame. Into the heart.</h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Luxury is not found in the gear we use, but in the attention we give. From the texture of your gown to the silent exchange of glances, we capture the invisible threads of connection.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 glass rounded-2xl">
                <h4 className="font-serif italic text-xl mb-2">Purity</h4>
                <p className="text-xs text-gray-500">Unfiltered emotional depth.</p>
              </div>
              <div className="p-6 glass rounded-2xl">
                <h4 className="font-serif italic text-xl mb-2">Excellence</h4>
                <p className="text-xs text-gray-500">Meticulous post-production.</p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};
