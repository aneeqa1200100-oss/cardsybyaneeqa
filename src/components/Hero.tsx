import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  MessageCircle, 
  Heart, 
  ShieldCheck, 
  Award,
  Clock
} from 'lucide-react';
import { 
  HERO_SLIDES, 
  LOGO_URL, 
  WHATSAPP_INTL, 
  buildWhatsAppLink 
} from '../data/storeData';

interface HeroProps {
  onExploreClick: () => void;
  onOpenCustomModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-change every 3 seconds as specified
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section 
      className="relative overflow-hidden pt-8 pb-16 lg:py-20 silk-drape-bg border-b border-[#F9D5D9]/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative fairy lights bokeh simulation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="fairy-light absolute top-10 left-[15%] w-4 h-4 rounded-full bg-[#FFE382]/60 blur-[1px]" />
        <div className="fairy-light absolute top-32 right-[20%] w-5 h-5 rounded-full bg-[#FFD700]/50 blur-[2px] [animation-delay:1s]" />
        <div className="fairy-light absolute bottom-20 left-[25%] w-6 h-6 rounded-full bg-[#FFE382]/50 blur-[2px] [animation-delay:2s]" />
        <div className="fairy-light absolute top-1/2 right-[10%] w-4 h-4 rounded-full bg-[#FFDF80]/60 blur-[1px] [animation-delay:1.5s]" />
        <div className="fairy-light absolute top-12 left-1/2 w-3.5 h-3.5 rounded-full bg-[#FFF0AA]/70 blur-[1px] [animation-delay:0.5s]" />
      </div>

      {/* Decorative Silk Velvet Side Vignettes */}
      <div className="absolute top-0 left-0 w-24 sm:w-48 h-full bg-gradient-to-r from-[#F9D5D9]/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 sm:w-48 h-full bg-gradient-to-l from-[#F9D5D9]/30 to-transparent pointer-events-none" />

      {/* Decorative Corner Roses Watermark Graphic */}
      <div className="absolute -top-12 -left-12 w-48 h-48 opacity-25 pointer-events-none rounded-full bg-radial from-[#F9D5D9] to-transparent blur-xl" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 opacity-25 pointer-events-none rounded-full bg-radial from-[#F9D5D9] to-transparent blur-xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Top small badge: "Since August 2024" */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F9D5D9] shadow-xs text-xs font-semibold text-[#82444D]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tracking-wide uppercase">Since August 2024</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Muzaffarabad, Azad Kashmir</span>
            </div>

            {/* Big Heading: "Cardsy" in luxury script + "BY ANEEQA" */}
            <div className="space-y-1">
              <h1 className="font-script text-6xl sm:text-7xl lg:text-8xl text-[#1C1618] leading-[0.95] drop-shadow-xs">
                Cardsy
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                <span className="font-body text-sm sm:text-base tracking-[0.35em] text-[#82444D] font-bold uppercase">
                  BY ANEEQA
                </span>
                <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              </div>
            </div>

            {/* Tagline */}
            <p className="font-serif-luxury text-xl sm:text-2xl text-[#662F38] italic font-medium leading-snug">
              “Creativity, Personalization & Love in Every Detail”
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#4A3B40] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Transforming creative ideas into beautiful, personalized gifts that make every moment unforgettable. From chocolate bouquets & custom frames to surprise boxes and handcrafted wedding stationery.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              {/* [Explore Menu] solid pink */}
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#EE9CA7] via-[#D47986] to-[#C96774] hover:opacity-95 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Menu</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* [Order Now on WhatsApp] */}
              <a
                href={buildWhatsAppLink("Hi Cardsy by Aneeqa! I want to order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-[#1C1618] bg-white hover:bg-[#FFF5F7] border border-[#F9D5D9] hover:border-[#D4AF37] rounded-xl shadow-xs hover:shadow transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
                <span>Order Now on WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 grid grid-cols-3 gap-2 border-t border-[#F9D5D9]/80 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-[11px] font-semibold text-[#662F38]">
                  100% Handcrafted
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-[11px] font-semibold text-[#662F38]">
                  Premium Cadbury & Silk
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-[11px] font-semibold text-[#662F38]">
                  Muzaffarabad Same-Day
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Auto-Rotating Hero Slider */}
          <div className="lg:col-span-6 relative">
            {/* Background silk glow cushion */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#F9D5D9]/50 via-white/80 to-[#FDE8EA]/60 rounded-3xl blur-xl -z-10" />

            {/* Floating Container */}
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Main 3D Card with Soft Floating Effect */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/90 bg-white group transition-all duration-500 animate-soft-float">
                
                {/* Image Container with 4:5 luxury portrait ratio */}
                <div className="relative aspect-[4/5] sm:aspect-[4/5] overflow-hidden bg-[#FDF0F2]">
                  <img
                    key={activeSlide.id}
                    src={activeSlide.image}
                    alt={activeSlide.alt}
                    className="w-full h-full object-cover object-center transition-all duration-700 ease-out transform group-hover:scale-105"
                  />

                  {/* Top-Left Watermark: Matches authentic style with script Cardsy by Aneeqa & watercolor circular badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-[#F9D5D9]">
                    <img 
                      src={LOGO_URL} 
                      alt="Cardsy Watermark" 
                      className="w-7 h-7 rounded-full object-cover ring-1 ring-[#D4AF37]"
                    />
                    <div className="flex flex-col">
                      <span className="font-script text-lg text-[#1C1618] leading-none">
                        Cardsy
                      </span>
                      <span className="text-[8px] font-bold tracking-[0.2em] text-[#82444D] uppercase">
                        BY ANEEQA
                      </span>
                    </div>
                  </div>

                  {/* Top-Right Category Tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 text-xs font-semibold text-[#82444D] bg-white/90 backdrop-blur-xs rounded-full shadow-xs border border-[#F9D5D9]">
                      {activeSlide.tag}
                    </span>
                  </div>

                  {/* Gradient Overlay at Bottom of Card */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white z-20">
                    <div className="space-y-1">
                      <h3 className="font-serif-luxury text-2xl font-bold tracking-wide">
                        {activeSlide.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-pink-100/90 font-light line-clamp-2">
                        {activeSlide.subtitle}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/20">
                      <span className="text-xs font-medium text-pink-200">
                        Slide {currentSlide + 1} of {HERO_SLIDES.length} · Auto-changing every 3s
                      </span>
                      <a
                        href={buildWhatsAppLink(`Hi Cardsy! I am interested in: ${activeSlide.title}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[#1C1618] bg-white hover:bg-pink-50 rounded-full transition-colors"
                      >
                        <Heart className="w-3.5 h-3.5 text-[#D47986] fill-[#D47986]" />
                        <span>Inquire</span>
                      </a>
                    </div>
                  </div>

                  {/* Subtle silk draped vignette at corner */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
                </div>

                {/* Left/Right arrow overlay buttons */}
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#1C1618] shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#1C1618] shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slider 3-Thumbnail Navigation Strip */}
              <div className="mt-4 flex items-center justify-center gap-3">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                      currentSlide === idx 
                        ? 'ring-2 ring-[#D4AF37] ring-offset-2 scale-105 shadow-md' 
                        : 'opacity-60 hover:opacity-100 scale-95'
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover" 
                    />
                    {currentSlide === idx && (
                      <span className="absolute inset-0 bg-[#D47986]/20 border border-white" />
                    )}
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
