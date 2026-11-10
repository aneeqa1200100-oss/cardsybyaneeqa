import React from 'react';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { 
  LOGO_URL, 
  PHONE_NUMBER, 
  OWNER_EMAIL, 
  SOCIAL_LINK, 
  WHATSAPP_INTL, 
  buildWhatsAppLink 
} from '../data/storeData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDeliveryInfo: () => void;
  onOpenAdminLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenDeliveryInfo,
  onOpenAdminLogin
}) => {
  return (
    <footer className="bg-gradient-to-b from-[#FFF8F9] to-[#FDF0F2] border-t-2 border-[#F9D5D9] pt-16 pb-12 text-[#1C1618]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Layout (Habibi Concept 7) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-14 border-b border-[#F9D5D9]">
          
          {/* Column 1: INFORMATION */}
          <div className="space-y-4">
            <h4 className="font-serif-luxury text-base font-bold tracking-wider text-[#662F38] uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              INFORMATION
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-[#4A3B40]">
              <li>
                <a href="#about-us" className="hover:text-[#D47986] transition-colors">
                  About Us & Founder
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-[#D47986] transition-colors cursor-pointer text-left"
                >
                  Privacy Policy & Confidentiality
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="hover:text-[#D47986] transition-colors cursor-pointer text-left"
                >
                  Terms & Customization Conditions
                </button>
              </li>
              <li>
                <a href="#about-us" className="hover:text-[#D47986] transition-colors">
                  Our Story (August 2024)
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D47986] transition-colors">
                  Customer Experiences & Photos
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: FOLLOW US */}
          <div className="space-y-4">
            <h4 className="font-serif-luxury text-base font-bold tracking-wider text-[#662F38] uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              FOLLOW US
            </h4>
            <p className="text-xs text-[#665358]">
              Stay updated with daily behind-the-scenes craft stories, new bouquet drops, and customer unboxings.
            </p>
            <div className="space-y-2 text-xs font-semibold">
              {/* Facebook */}
              <a
                href={SOCIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white border border-[#F9D5D9] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors shadow-2xs group"
              >
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1877F2] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span>Facebook Official Page</span>
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white border border-[#F9D5D9] hover:border-[#E4405F] hover:text-[#E4405F] transition-colors shadow-2xs group"
              >
                <div className="w-6 h-6 rounded-full bg-pink-50 text-[#E4405F] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span>Instagram Profile</span>
              </a>
            </div>
          </div>

          {/* Column 3: CUSTOMER SUPPORT */}
          <div className="space-y-4">
            <h4 className="font-serif-luxury text-base font-bold tracking-wider text-[#662F38] uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              CUSTOMER SUPPORT
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-[#4A3B40]">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_INTL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 transition-colors flex items-center gap-1.5 font-semibold text-emerald-800"
                >
                  <Phone className="w-3.5 h-3.5" />
                  WhatsApp Support: {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${OWNER_EMAIL}`}
                  className="hover:text-[#D47986] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email Support: {OWNER_EMAIL}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenDeliveryInfo}
                  className="hover:text-[#D47986] transition-colors text-left"
                >
                  Delivery & Fragile Transit Info
                </button>
              </li>
              <li>
                <a href="#customization" className="hover:text-[#D47986] transition-colors">
                  Customization Help & Proofs
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppLink("Hi Cardsy! I want to check my order status.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D47986] transition-colors"
                >
                  Track Existing Parcel
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT & LOCATION */}
          <div className="space-y-4">
            <h4 className="font-serif-luxury text-base font-bold tracking-wider text-[#662F38] uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              CONTACT
            </h4>
            <div className="text-xs space-y-2 text-[#4A3B40]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Muzaffarabad, Azad Kashmir (AJK), Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Registered Boutique Since August 2024</span>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#F9D5D9] rounded-lg text-xs font-semibold text-[#82444D] hover:bg-[#F9D5D9]/40 transition-colors"
                >
                  <span>View Live Google Map</span>
                  <span className="text-[#D4AF37]">→</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Center: Big Circular Logo and Requested Credit Line */}
        <div className="pt-12 text-center space-y-4">
          <div className="flex flex-col items-center justify-center">
            {/* Big Circular Logo Center as specified */}
            <div className="relative group">
              <img
                src={LOGO_URL}
                alt="Cardsy by Aneeqa Official Logo"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-lg ring-4 ring-white border-2 border-[#D4AF37] group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-xs">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </div>

            <div className="mt-3">
              <span className="font-script text-3xl sm:text-4xl text-[#1C1618] block">
                Cardsy
              </span>
              <span className="text-xs font-bold tracking-[0.3em] text-[#82444D] uppercase block -mt-1">
                BY ANEEQA
              </span>
            </div>
          </div>

          {/* Exact required text: "Cardsy by Aneeqa | Founded August 2024 | Crafted with Love in Muzaffarabad AJK | Build by Ali" */}
          <div className="pt-3 border-t border-[#F9D5D9]/50 max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-[#4A3B40] leading-relaxed">
              Cardsy by Aneeqa <span className="text-[#D4AF37]">|</span> Founded August 2024 <span className="text-[#D4AF37]">|</span> Crafted with Love in Muzaffarabad AJK <span className="text-[#D4AF37]">|</span> Build by Ali
            </p>
            <p className="text-[11px] text-[#9E737B] mt-1 flex items-center justify-center gap-1">
              <span>All rights reserved © {new Date().getFullYear()}</span>
              <span>·</span>
              <span>Personalized with pure affection</span>
              <Heart className="w-3 h-3 text-[#D47986] fill-[#D47986] inline" />
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAdminLogin}
                className="text-[11px] text-[#9E737B] hover:text-[#82444D] underline underline-offset-2 cursor-pointer transition-colors"
              >
                Admin Login
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
