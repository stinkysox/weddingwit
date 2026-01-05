import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../src/components/SectionWrapper";
import { GalleryCategory } from "../types";
import { GALLERY_DATA } from "../assets/gallery";

const CATEGORIES: (GalleryCategory | "All")[] = [
  "All",
  "Wedding",
  "Pre-Wedding",
  "Engagement",
  "Haldi",
  "Sangeeth",
  "Baby Shoot",
  "Maternity",
  "Other",
];

// Animation Variants for the Overlay
const overlayVariants = {
  initial: { opacity: 0, backdropFilter: "blur(0px)" },
  animate: {
    opacity: 1,
    backdropFilter: "blur(4px)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: { opacity: 0, backdropFilter: "blur(0px)" },
};

const textVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.4 } },
};

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const filteredItems = GALLERY_DATA.filter((item) =>
    filter === "All" ? true : item.category === filter
  );

  return (
    <div className="pt-40 pb-24 px-6 min-h-screen">
      <SectionWrapper className="max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-6xl md:text-9xl font-serif mb-8 tracking-tighter">
          The Gallery.
        </h1>
        <p className="text-gray-400 uppercase tracking-[0.4em] text-xs mb-12">
          A curated collection of visual storytelling
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }} // Visual feedback for mobile taps
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full border text-[10px] uppercase tracking-[0.2em] transition-all duration-500 font-bold ${
                filter === cat
                  ? "bg-black text-white border-black dark:bg-white dark:text-black shadow-xl"
                  : "border-gray-200 dark:border-white/10 text-gray-400 hover:border-yellow-600 hover:text-yellow-600"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </SectionWrapper>

      <div className="max-w-7xl mx-auto">
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center text-gray-500 font-serif italic text-2xl">
            Coming soon to this category...
          </div>
        ) : (
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const isLoaded = loadedImages[item.id];

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="break-inside-avoid"
                  >
                    {/* MOBILE FIX: whileHover handles Desktop, whileTap handles Mobile.
                       The "initial", "whileHover", and "whileTap" props propagate 
                       down to the child motion components.
                    */}
                    <motion.div
                      className="group relative overflow-hidden rounded-3xl glass-light border border-black/5 dark:border-white/5 shadow-sm cursor-pointer"
                      initial="initial"
                      whileHover="animate"
                      whileTap="animate"
                    >
                      {/* Shimmer Placeholder */}
                      {!isLoaded && (
                        <div className="absolute inset-0 rounded-3xl bg-gray-100 dark:bg-white/5 animate-pulse" />
                      )}

                      <motion.img
                        src={item.imageUrl}
                        alt={item.title}
                        onLoad={() =>
                          setLoadedImages((prev) => ({
                            ...prev,
                            [item.id]: true,
                          }))
                        }
                        variants={{
                          initial: { scale: 1 },
                          animate: { scale: 1.05 },
                        }}
                        transition={{ duration: 0.8 }}
                        className={`w-full object-cover transition-opacity duration-700 ${
                          isLoaded ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      {/* Hover/Tap Overlay using Framer Motion instead of CSS group-hover */}
                      <motion.div
                        variants={overlayVariants}
                        className="absolute inset-0 bg-black/70 p-10 flex flex-col justify-end"
                      >
                        <motion.p
                          variants={textVariants}
                          className="text-yellow-600 uppercase text-[10px] tracking-[0.3em] font-bold mb-4"
                        >
                          {item.category}
                        </motion.p>
                        <motion.h3
                          variants={textVariants}
                          className="text-3xl font-serif text-white mb-3 tracking-tight"
                        >
                          {item.title}
                        </motion.h3>
                        <motion.p
                          variants={textVariants}
                          className="text-white/60 text-xs italic leading-relaxed max-w-[200px]"
                        >
                          {item.description}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};
