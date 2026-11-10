import React from 'react';
import { Truck, Gift, Sparkles, HeartHandshake, MapPin } from 'lucide-react';
import { WHATSAPP_INTL } from '../data/storeData';

export const DeliveringHappinessBanner: React.FC = () => {
  return (
    <section className="py-10 bg-[#FFF8F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FDF0F2] via-[#F9D5D9]/70 to-[#FDE8EA] border border-[#D4AF37]/40 shadow-xl p-6 sm:p-10">
          
          {/* Subtle silk draped patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-white/60 to-transparent blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-radial from-[#F9D5D9]/80 to-transparent blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Gift Delivery Animation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm aspect-video sm:aspect-square rounded-2xl bg-white/90 border border-[#F9D5D9] p-6 shadow-md flex flex-col items-center justify-center text-center overflow-hidden">
                
                {/* Floating Ribbon & Gift Animation */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#EE9CA7] to-[#F9D5D9] flex items-center justify-center shadow-lg relative animate-bounce">
                    <Gift className="w-10 h-10 sm:w-12 sm:h-12 text-[#662F38]" />
                    <Sparkles className="w-5 h-5 text-[#D4AF37] absolute -top-2 -right-2 animate-spin" />
                  </div>
                  
                  {/* Pulsing delivery wave */}
                  <div className="absolute -inset-3 rounded-full bg-[#F9D5D9]/40 animate-ping -z-10" />
                </div>

                {/* Animated status badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Parcel Inspected & Scented</span>
                </div>

                <p className="mt-3 text-xs text-[#82444D] font-medium">
                  Protected with triple-layer velvet bubble wrap & fresh rose petals
                </p>

                {/* Tracking illustration road */}
                <div className="w-full mt-4 pt-3 border-t border-[#F9D5D9] flex items-center justify-between text-[11px] text-[#662F38] font-bold">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Muzaffarabad AJK
                  </span>
                  <div className="flex-1 mx-2 border-b-2 border-dashed border-[#D47986]" />
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#D47986]" /> All Pakistan
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Text & Highlights */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1618] leading-tight">
                DELIVERING HAPPINESS
              </h2>
              
              <div className="text-lg sm:text-xl font-medium text-[#82444D] flex items-center justify-center lg:justify-start gap-2">
                <span>Your Gift Is On The Way</span>
                <span className="text-[#D4AF37]">✦</span>
                <span className="font-semibold text-[#1C1618]">From Muzaffarabad to All Pakistan</span>
              </div>

              <p className="text-sm text-[#4A3B40] max-w-xl leading-relaxed">
                Whether you are celebrating a midnight birthday in Islamabad, an emotional Nikkah in Lahore, or surprising parents in Karachi, every parcel is wrapped with delicate pink velvet ribbon, padded shockproof cartons, and fragrant dried rose petals.
              </p>

              {/* Service Pillars */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white/80 p-3 rounded-xl border border-[#F9D5D9] shadow-xs">
                  <div className="font-bold text-xs text-[#1C1618] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Temperature Safe
                  </div>
                  <div className="text-[11px] text-[#82444D] mt-0.5">Chocolates arrive fresh & solid</div>
                </div>

                <div className="bg-white/80 p-3 rounded-xl border border-[#F9D5D9] shadow-xs">
                  <div className="font-bold text-xs text-[#1C1618] flex items-center gap-1.5">
                    <HeartHandshake className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Complimentary Card
                  </div>
                  <div className="text-[11px] text-[#82444D] mt-0.5">Handwritten personalized note</div>
                </div>

                <div className="bg-white/80 p-3 rounded-xl border border-[#F9D5D9] shadow-xs">
                  <div className="font-bold text-xs text-[#1C1618] flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Live WhatsApp Tracking
                  </div>
                  <div className="text-[11px] text-[#82444D] mt-0.5">Photos sent before dispatch</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent("Hi Aneeqa! I want to check delivery options to my city.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#662F38] hover:text-[#D4AF37] transition-colors underline underline-offset-4"
                >
                  Need urgent same-day delivery in Muzaffarabad? Chat with Aneeqa on WhatsApp →
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
