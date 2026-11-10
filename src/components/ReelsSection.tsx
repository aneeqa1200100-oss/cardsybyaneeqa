import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles } from 'lucide-react';
import { PRODUCTS, LOGO_URL, buildWhatsAppLink } from '../data/storeData';

import { Product } from '../types';

interface ReelsSectionProps {
  products?: Product[];
}

export const ReelsSection: React.FC<ReelsSectionProps> = ({ products = PRODUCTS }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || products.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, products.length]);

  const handlePrev = () => {
    if (products.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    if (products.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  // Show 4 visible cards on desktop, 2 on tablet, 1 on mobile
  const getVisibleProducts = () => {
    if (products.length === 0) return [];
    const items = [];
    const count = Math.min(4, products.length);
    for (let i = 0; i < count; i++) {
      items.push(products[(currentIndex + i) % products.length]);
    }
    return items;
  };

  const visibleProducts = getVisibleProducts();

  return (
    <section
      id="reels"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#FFF8F9] to-[#FDF0F2] border-t border-[#F9D5D9]/60 scroll-mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#F9D5D9] text-xs font-semibold text-[#82444D] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Explore Menu Gallery
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1618]">
            Our Custom Creations Gallery
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-[#D47986] -mt-1">
            Handcrafted with love in Muzaffarabad
          </p>
        </div>

        {/* Sliding Gallery */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="group silk-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#F9D5D9]/80 hover:border-[#D4AF37]/60 flex flex-col justify-between bg-white"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#FFF0F2]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Top-Left Watermark */}
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs border border-[#F9D5D9]">
                    <img
                      src={LOGO_URL}
                      alt="Watermark"
                      className="w-5 h-5 rounded-full object-cover ring-1 ring-[#D4AF37]"
                    />
                    <div className="flex flex-col">
                      <span className="font-script text-sm leading-none text-[#1C1618]">
                        Cardsy
                      </span>
                      <span className="text-[7px] font-bold tracking-widest text-[#82444D] uppercase">
                        BY ANEEQA
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-2.5">
                  <h3 className="font-serif-luxury text-base font-bold text-[#1C1618] line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-[#82444D]">
                      Price After Direct Contact
                    </span>
                    <a
                      href={buildWhatsAppLink(
                        `Hi Cardsy by Aneeqa! I want to customize & order: "${product.name}".`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 rounded-lg shadow-xs transition-all"
                    >
                      <MessageCircle className="w-3 h-3 fill-white" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left / Right Controls */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-[#1C1618] shadow-lg border border-[#F9D5D9] flex items-center justify-center transition-transform hover:scale-105 z-20 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-[#1C1618] shadow-lg border border-[#F9D5D9] flex items-center justify-center transition-transform hover:scale-105 z-20 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="mt-6 flex items-center justify-center gap-1.5 flex-wrap">
          {PRODUCTS.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 bg-[#D47986]'
                  : 'w-2 bg-[#F9D5D9] hover:bg-[#D47986]/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
