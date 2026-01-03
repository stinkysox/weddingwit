
import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Testimonial } from '../types';

const REVIEWS: Testimonial[] = [
  { id: '1', name: 'Sophia & Alexander', event: 'Tuscany, Italy', quote: 'They didn’t just take photos; they captured the feeling of the wind and the silence of our first look. Absolute mastery of the craft.', imageUrl: 'https://picsum.photos/seed/user1/400/400' },
  { id: '2', name: 'Isabella & James', event: 'New York City', quote: 'Weddingwit felt like family with an incredible eye for detail. The final film was like watching a Hollywood production of our own lives.', imageUrl: 'https://picsum.photos/seed/user2/400/400' },
  { id: '3', name: 'Elena & Marcus', event: 'Bali, Indonesia', quote: 'Every single shot is a work of art. The editorial style they brought to our beach wedding was beyond our wildest expectations.', imageUrl: 'https://picsum.photos/seed/user3/400/400' },
  { id: '4', name: 'Claire & Thomas', event: 'Lake Como', quote: 'A seamless experience from booking to delivery. Their ability to find the light in even the busiest moments is supernatural.', imageUrl: 'https://picsum.photos/seed/user4/400/400' },
];

export const Testimonials: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <SectionWrapper className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-8xl font-serif mb-8 italic">Kind Words.</h1>
        <p className="text-lg text-gray-500 tracking-widest uppercase">From our global family</p>
      </SectionWrapper>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {REVIEWS.map((review, idx) => (
          <SectionWrapper key={review.id} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 0.1}>
            <div className="glass rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden group hover:border-yellow-600/30 transition-all duration-700">
              <div className="flex items-center gap-6 mb-8">
                <img src={review.imageUrl} alt={review.name} className="w-16 h-16 rounded-full object-cover ring-2 ring-yellow-600/20" />
                <div>
                  <h3 className="text-xl font-serif">{review.name}</h3>
                  <p className="text-xs text-yellow-600 uppercase tracking-widest">{review.event}</p>
                </div>
              </div>
              <p className="text-xl italic font-serif leading-relaxed text-gray-700 dark:text-gray-300">
                "{review.quote}"
              </p>
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H3.017V21H5.017Z"/></svg>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  );
};
