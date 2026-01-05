import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../src/components/SectionWrapper";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#050505] text-gray-900 dark:text-white pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <SectionWrapper className="max-w-5xl mx-auto px-6 text-center mb-32">
        <span className="text-yellow-600 uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">
          Our Ethos
        </span>
        <h1 className="text-6xl md:text-9xl font-serif mb-10 leading-[0.85] tracking-tighter">
          Cinematic Soul, <br />
          <span className="italic">Timeless Frame.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-3xl mx-auto italic">
          We are a creative house dedicated to documenting the quiet grandeur
          and emotional legacies of the world's most beautiful celebrations.
        </p>
      </SectionWrapper>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <SectionWrapper direction="left">
            <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img
                src="https://i.pinimg.com/736x/f5/94/d1/f594d17e5bcd98234cd36a48f5b56a9a.jpg"
                alt="Architecture"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </SectionWrapper>
          <SectionWrapper direction="right">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Beyond the <br />
              Standard Frame.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 text-lg font-light">
              Weddingwit was founded on a simple belief: wedding cinematography
              should transcend the typical. We blend authentic documentary
              storytelling with a sophisticated editorial aesthetic to create
              films that feel like an archive of emotion.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg font-light">
              Each story is a unique collaboration. We don't just capture
              events; we capture the visual frequency that makes your connection
              one of a kind.
            </p>
            <div className="mt-12 flex gap-8 border-t border-gray-100 dark:border-white/10 pt-12">
              <div>
                <p className="text-3xl font-serif italic mb-1">500+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">
                  Stories Archive
                </p>
              </div>
              <div>
                <p className="text-3xl font-serif italic mb-1">全球</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">
                  Global Reach
                </p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-32 bg-gray-50 dark:bg-white/5 rounded-[5rem] mx-4 mb-48">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-serif mb-6">
              The Pillars
            </h2>
            <p className="text-gray-400 uppercase tracking-[0.3em] text-[10px] font-bold italic">
              The Weddingwit Standard
            </p>
          </SectionWrapper>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Visual Poise",
                desc: "A commitment to capturing the inherent grace and dignity of every subject, regardless of the setting.",
              },
              {
                title: "Atmospheric Light",
                desc: "Utilizing natural light and shadow to create imagery that feels like a classic cinematic masterpiece.",
              },
              {
                title: "Editorial Curation",
                desc: "A meticulous post-production process that treats your film as a piece of high-end editorial art.",
              },
            ].map((pillar, i) => (
              <SectionWrapper key={i} delay={i * 0.15}>
                <div className="p-12 glass rounded-[3rem] border border-white/10 h-full hover:bg-white/10 transition-all duration-700">
                  <h4 className="text-3xl font-serif italic mb-6 text-yellow-600">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-300 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* The Archive Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <SectionWrapper direction="left" className="order-2 md:order-1">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight italic">
              The Archive
            </h2>
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Curation",
                  desc: "We curate the most poignant moments, ensuring the narrative flow is as intentional as a feature film.",
                },
                {
                  step: "02",
                  title: "Authenticity",
                  desc: "We focus on the raw, unscripted glances that carry the most emotional weight.",
                },
                {
                  step: "03",
                  title: "Legacy",
                  desc: "Our end goal is an archive that remains as evocative fifty years from now as it is today.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <span className="text-2xl font-serif italic text-yellow-600/40 group-hover:text-yellow-600 transition-colors">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-xl font-serif mb-2 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>
          <SectionWrapper direction="right" className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden translate-y-12">
                <img
                  src="https://i.pinimg.com/736x/79/21/c2/7921c220ea25456868c005d8b4ef808c.jpg"
                  alt="Detail 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/5f/0e/07/5f0e070f0f88e6d9b78179f74267025a.jpg"
                  alt="Detail 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Final CTA */}
      <SectionWrapper className="text-center px-6">
        <h2 className="text-4xl md:text-7xl font-serif mb-12 italic">
          Join the Legacy.
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            to="/gallery"
            className="px-12 py-5 rounded-full bg-yellow-600 text-white uppercase tracking-[0.2em] text-[10px] font-bold glow-button"
          >
            The Portfolio
          </Link>
          <Link
            to="/book"
            className="px-12 py-5 rounded-full border border-gray-200 dark:border-white/10 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all"
          >
            Book a Consultation
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
};
