import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  Sparkles,
  Share2
} from 'lucide-react';
import { 
  PHONE_NUMBER, 
  OWNER_EMAIL, 
  SOCIAL_LINK, 
  WHATSAPP_INTL, 
  buildWhatsAppLink 
} from '../data/storeData';

export const LiveMapAndContact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFF8F9] border-t border-[#F9D5D9]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1618]">
            Muzaffarabad Studio & Contact
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-[#D47986] -mt-1">
            We'd love to craft something magical for you
          </p>
        </div>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Live Interactive Google Map for Muzaffarabad, Azad Kashmir */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="silk-card rounded-3xl overflow-hidden border border-[#F9D5D9] shadow-lg flex-1 flex flex-col">
              
              {/* Map Header Card */}
              <div className="p-4 sm:p-5 bg-white border-b border-[#F9D5D9] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#EE9CA7] to-[#F9D5D9] flex items-center justify-center text-[#662F38] shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1C1618]">
                      Cardsy by Aneeqa - Custom Gifts Studio
                    </h4>
                    <span className="text-xs text-[#82444D]">
                      Muzaffarabad, Azad Kashmir (AJK), Pakistan
                    </span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Muzaffarabad+Azad+Kashmir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#82444D] bg-[#FFF5F7] hover:bg-[#F9D5D9] rounded-lg transition-colors"
                >
                  <span>Open Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="relative flex-1 min-h-[360px] w-full bg-slate-100">
                <iframe
                  title="Cardsy by Aneeqa Location - Muzaffarabad Azad Kashmir"
                  src="https://maps.google.com/maps?q=Muzaffarabad%2C%20Azad%20Kashmir%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[360px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allowFullScreen
                />

                {/* Custom Overlay Pin Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#D4AF37]/50 shadow-xl pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-[#1C1618]">Cardsy Atelier Pick-up Spot</span>
                  </div>
                  <p className="text-[11px] text-[#662F38] mt-1">
                    Free hand-off available for orders placed in Muzaffarabad city!
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* WhatsApp Box */}
            <a
              href={`https://wa.me/${WHATSAPP_INTL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="silk-card p-5 rounded-2xl border border-[#F9D5D9] hover:border-emerald-500 hover:shadow-md transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6 fill-emerald-600" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#82444D] block">
                  Direct WhatsApp (Instant Reply)
                </span>
                <span className="text-base font-bold text-[#1C1618] group-hover:text-emerald-700 transition-colors">
                  {PHONE_NUMBER}
                </span>
                <p className="text-xs text-[#665358] mt-0.5">
                  Click to chat directly with Aneeqa for designs, custom budgets, and rapid delivery.
                </p>
              </div>
            </a>

            {/* Email Box */}
            <a
              href={`mailto:${OWNER_EMAIL}`}
              className="silk-card p-5 rounded-2xl border border-[#F9D5D9] hover:border-[#D4AF37] hover:shadow-md transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFF0F2] text-[#D47986] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#82444D] block">
                  Official Email
                </span>
                <span className="text-base font-bold text-[#1C1618] group-hover:text-[#D47986] transition-colors break-all">
                  {OWNER_EMAIL}
                </span>
                <p className="text-xs text-[#665358] mt-0.5">
                  For formal corporate inquiries, brand collaborations & invoices.
                </p>
              </div>
            </a>

            {/* Location & Timings */}
            <div className="silk-card p-5 rounded-2xl border border-[#F9D5D9] shadow-xs space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F9] text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#82444D] block">
                    Operating Hours
                  </span>
                  <span className="text-sm font-bold text-[#1C1618]">
                    10:00 AM - 10:00 PM (Monday - Sunday)
                  </span>
                  <p className="text-xs text-[#665358] mt-0.5">
                    Orders accepted 24/7 on WhatsApp; responses within 15 minutes.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#F9D5D9]/60 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#662F38]">
                  <Share2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Facebook & Instagram Community</span>
                </div>
                <a
                  href={SOCIAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#1877F2] hover:underline flex items-center gap-1"
                >
                  Follow @CardsyByAneeqa →
                </a>
              </div>
            </div>

            {/* Direct Order Button */}
            <a
              href={buildWhatsAppLink("Hi Aneeqa! I want to consult on an upcoming event gift.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-2xl font-semibold text-sm text-white bg-gradient-to-r from-[#D47986] via-[#C96774] to-[#B85865] hover:opacity-95 shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#FFE382]" />
              <span>Consult with Aneeqa for Free on WhatsApp</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
