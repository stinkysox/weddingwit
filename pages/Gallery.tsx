import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_DATA } from "../assets/gallery";
// Assuming GALLERY_DATA is imported or defined in your file
// interface GalleryItem { id: string; imageUrl: string; title: string; category: string; description: string; }

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // Interaction logic: handles desktop hover and mobile tap
  const handleItemInteraction = (id: string, isClick: boolean) => {
    if (isClick) {
      // Toggle for mobile
      setActiveId((prev) => (prev === id ? null : id));
    } else {
      // Hover for desktop
      setActiveId(id);
    }
  };

  const filteredItems = GALLERY_DATA.filter((item) =>
    filter === "All" ? true : item.category === filter
  );

  return (
    <div className="pt-40 pb-24 px-6 min-h-screen bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isLoaded = loadedImages[item.id];
              const isActive = activeId === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="break-inside-avoid"
                >
                  <div
                    className="group relative overflow-hidden rounded-3xl glass-light border border-black/5 dark:border-white/5 shadow-sm cursor-pointer"
                    onClick={() => handleItemInteraction(item.id, true)}
                    onMouseEnter={() => handleItemInteraction(item.id, false)}
                    onMouseLeave={() => setActiveId(null)}
                  >
                    {/* Image Layer */}
                    <motion.img
                      src={item.imageUrl}
                      alt={item.title}
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        filter: isActive
                          ? "brightness(0.4) blur(3px)"
                          : "brightness(1) blur(0px)",
                      }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full object-cover transition-opacity duration-1000 ${
                        isLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() =>
                        setLoadedImages((prev) => ({
                          ...prev,
                          [item.id]: true,
                        }))
                      }
                    />

                    {/* Information Overlay */}
                    <motion.div
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 p-10 flex flex-col justify-end pointer-events-none"
                    >
                      <div className="relative z-10">
                        {/* Category Label */}
                        <motion.p
                          animate={{
                            y: isActive ? 0 : 15,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.4 }}
                          className="text-yellow-500 uppercase text-[9px] tracking-[0.5em] font-bold mb-3"
                        >
                          {item.category}
                        </motion.p>

                        {/* Title */}
                        <motion.h3
                          animate={{
                            y: isActive ? 0 : 15,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, delay: 0.05 }}
                          className="text-3xl md:text-4xl font-serif text-white mb-4 italic tracking-tight leading-tight"
                        >
                          {item.title}
                        </motion.h3>

                        {/* Description - Increased bottom padding since the button is gone */}
                        <motion.p
                          animate={{
                            y: isActive ? 0 : 15,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="text-white/80 text-[12px] md:text-sm leading-relaxed max-w-[260px] mb-4 font-light"
                        >
                          {item.description}
                        </motion.p>
                      </div>
                    </motion.div>

                    {/* Subtle Internal Frame */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
