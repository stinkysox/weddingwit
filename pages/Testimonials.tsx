import React from "react";
import { SectionWrapper } from "../components/SectionWrapper";
interface Testimonial {
  id: string;
  name: string;
  event: string;
  quote: string;
  imageUrl: string;
}

const REVIEWS: Testimonial[] = [
  {
    id: "1",
    name: "Ananya & Rohan",
    event: "The Palace Rites",
    quote:
      "They didn’t just document the day; they captured the soul of our silence. The way they filmed our Varmala sequence felt like a frame from a classic epic.",
    imageUrl:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "2",
    name: "Diya & Arjun",
    event: "The Heritage Reception",
    quote:
      "A masterclass in editorial cinematography. They managed to find quiet, intimate moments even amidst the beautiful chaos of our grand reception.",
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "3",
    name: "Meera & Sameer",
    event: "The Royal Courtyard",
    quote:
      "The attention to detail—from the texture of the heirloom silk to the silent exchange of glances during the Pheras—was absolutely breathtaking.",
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-436ceea16598?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "4",
    name: "Sara & Ishaan",
    event: "The Estate Celebration",
    quote:
      "Seamless, professional, and artistically superior. Weddingwit has a way of seeing light that feels almost supernatural. Our legacy is in safe hands.",
    imageUrl:
      "https://images.unsplash.com/photo-1512101176959-c557f3516787?auto=format&fit=crop&q=80&w=400",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <div className="py-40 bg-[#050505] px-6">
      <SectionWrapper className="max-w-4xl mx-auto text-center mb-32">
        <p className="text-yellow-600 uppercase tracking-[0.5em] text-[10px] font-bold mb-4">
          Reflections
        </p>
        <h2 className="text-6xl md:text-9xl font-serif text-white italic leading-none">
          Kind Words.
        </h2>
      </SectionWrapper>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {REVIEWS.map((review, idx) => (
          <SectionWrapper
            key={review.id}
            direction={idx % 2 === 0 ? "left" : "right"}
            delay={idx * 0.1}
          >
            <div className="glass rounded-[3rem] p-10 md:p-16 border border-white/5 relative overflow-hidden group hover:border-yellow-600/30 transition-all duration-700">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-white/10 group-hover:ring-yellow-600/50 transition-all duration-700 shadow-2xl">
                  <img
                    src={review.imageUrl}
                    alt={review.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-white">
                    {review.name}
                  </h3>
                  <p className="text-[10px] text-yellow-600 uppercase tracking-[0.3em] font-bold">
                    {review.event}
                  </p>
                </div>
              </div>
              <p className="text-xl md:text-2xl italic font-serif leading-relaxed text-gray-400 dark:text-gray-300 relative z-10">
                "{review.quote}"
              </p>
              <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-10 transition-opacity text-white pointer-events-none">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H3.017V21H5.017Z" />
                </svg>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  );
};
