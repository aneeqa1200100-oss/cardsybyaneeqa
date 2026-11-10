import React from 'react';
import { Sparkles, Heart, Award, MapPin } from 'lucide-react';
import { LOGO_URL, HERO_ROSE_BOUQUET } from '../data/storeData';
import { ReviewsSection } from './ReviewsSection';
import { LiveMapAndContact } from './LiveMapAndContact';

export const AboutSection: React.FC = () => {
  return (
    <>
    <section id="about-us" className="py-16 sm:py-24 bg-[#FFF8F9] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="silk-card rounded-3xl p-8 sm:p-14 border border-[#F9D5D9] shadow-xl relative overflow-hidden">
          
          {/* Subtle Pink Silk Drape Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#F9D5D9]/50 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-radial from-[#FDE8EA]/60 to-transparent blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left: Aneeqa's Portrait / Studio Showcase Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                
                {/* Decorative Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-[#D4AF37]/50 bg-white group">
                  <div className="aspect-[4/5] overflow-hidden bg-[#FDF0F2]">
                    <img
                      src={HERO_ROSE_BOUQUET}
                      alt="Cardsy by Aneeqa Studio Craftsmanship"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Watermark Emblem Overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-[#F9D5D9]">
                    <img 
                      src={LOGO_URL} 
                      alt="Cardsy Logo" 
                      className="w-7 h-7 rounded-full object-cover ring-1 ring-[#D4AF37]" 
                    />
                    <div className="flex flex-col">
                      <span className="font-script text-lg text-[#1C1618] leading-none">Cardsy</span>
                      <span className="text-[8px] font-bold tracking-widest text-[#82444D] uppercase">BY ANEEQA</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white/95 border-t border-[#F9D5D9] text-center space-y-1">
                    <span className="font-script text-2xl text-[#82444D]">Aneeqa</span>
                    <p className="text-xs text-[#4A3B40] font-medium">
                      Founder & Lead Artisan · Muzaffarabad AJK
                    </p>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#D4AF37] to-[#B38F26] text-white p-3.5 rounded-2xl shadow-lg border-2 border-white flex items-center gap-2.5">
                  <Award className="w-5 h-5" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold tracking-wider block opacity-90">Established</span>
                    <span className="text-sm font-extrabold leading-tight">August 2024</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Full Authentic Story Provided by User */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#F9D5D9] text-xs font-semibold text-[#82444D] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Our Story
                </div>
                
                <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1618]">
                  Creativity, Personalization & Love in Every Detail
                </h2>
                
                <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-[#82444D]">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Born in the beautiful valley of Muzaffarabad, Azad Kashmir</span>
                </div>
              </div>

              {/* Exact user text in elegant typography */}
              <div className="prose prose-pink max-w-none text-sm sm:text-base text-[#3A2D31] leading-relaxed space-y-4">
                <p>
                  Founded in <strong className="text-[#82444D]">August 2024</strong>, our journey began with a simple passion: transforming creative ideas into beautiful, personalized gifts that make every moment unforgettable.
                </p>
                <p>
                  We believe that every person, every occasion, and every emotion deserves something unique. That's why we specialize in creating customized gifts designed entirely around your imagination and personal style.
                </p>
                <p>
                  From elegant handmade greeting cards and personalized birthday cards to beautiful bouquets, customized gift frames, and artistic Mehndi designs, every creation is thoughtfully designed with care and creativity. Our collection also features beautifully arranged gift boxes, customized chocolate boxes with favourites like Dairy Milk and KitKat, and specially curated gift hampers.
                </p>
              </div>

              {/* Highlight Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white/80 rounded-xl border border-[#F9D5D9] shadow-2xs">
                  <Heart className="w-4 h-4 text-[#D47986] mb-1" />
                  <div className="text-xs font-bold text-[#1C1618]">Made With Love</div>
                  <div className="text-[11px] text-[#82444D]">Hand-stitched ribbons & silk</div>
                </div>

                <div className="p-3 bg-white/80 rounded-xl border border-[#F9D5D9] shadow-2xs">
                  <Sparkles className="w-4 h-4 text-[#D4AF37] mb-1" />
                  <div className="text-xs font-bold text-[#1C1618]">Zero Mass Production</div>
                  <div className="text-[11px] text-[#82444D]">Each gift is 1-of-1 bespoke</div>
                </div>

                <div className="p-3 bg-white/80 rounded-xl border border-[#F9D5D9] shadow-2xs col-span-2 sm:col-span-1">
                  <MapPin className="w-4 h-4 text-emerald-600 mb-1" />
                  <div className="text-xs font-bold text-[#1C1618]">Muzaffarabad to PK</div>
                  <div className="text-[11px] text-[#82444D]">Secure courier packaging</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

    <ReviewsSection />
    <LiveMapAndContact />
    </>
  );
};
