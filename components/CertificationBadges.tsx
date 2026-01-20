'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CertificationBadges() {
  const [currentGroup, setCurrentGroup] = useState(0);

  const badges = [
    { src: '/badges/badge-1.png', alt: 'Certification Badge 1' },
    { src: '/badges/badge-2.png', alt: 'Certification Badge 2' },
    { src: '/badges/badge-3.png', alt: 'Certification Badge 3' },
    { src: '/badges/badge-4.png', alt: 'Certification Badge 4' },
    { src: '/badges/badge-6.png', alt: 'Certification Badge 5' },
    { src: '/badges/badge-5.png', alt: 'Certification Badge 6' },
  ];

  const badgesPerGroup = 3;
  const totalGroups = Math.ceil(badges.length / badgesPerGroup);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % totalGroups);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalGroups]);

  const handlePrev = () => {
    setCurrentGroup((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
  };

  const getCurrentBadges = () => {
    const start = currentGroup * badgesPerGroup;
    return badges.slice(start, start + badgesPerGroup);
  };

  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-4">
        {/* Mobile: Carousel with 3 badges */}
        <div className="md:hidden relative py-4">
          <div className="grid grid-cols-3 gap-4 px-8">
            {getCurrentBadges().map((badge, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="relative w-20 h-20">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Previous badges"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Next badges"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({ length: totalGroups }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGroup(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentGroup ? 'bg-[#70542c] w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to group ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-32 h-32">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
