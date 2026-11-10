import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  MessageCircle, 
  User, 
  Sparkles, 
  Phone
} from 'lucide-react';
import { LOGO_URL, SOCIAL_LINK, WHATSAPP_INTL, buildWhatsAppLink } from '../data/storeData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAuth: () => void;
  deliveryMode: 'delivery' | 'pickup';
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenAuth,
  deliveryMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F9D5D9]/70 shadow-xs transition-all duration-300">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-[#F9D5D9]/40 via-[#FDE8EA] to-[#F9D5D9]/40 py-1.5 px-4 text-center text-xs text-[#82444D] border-b border-[#F9D5D9]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline-flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Customized with love in Muzaffarabad, Azad Kashmir
          </span>
          <div className="mx-auto sm:mx-0 flex items-center gap-3">
            <span>
              {deliveryMode === 'delivery' 
                ? '🚚 Nationwide Delivery Across Pakistan (2-4 Days)' 
                : '🎀 Free Store Pickup Available in Muzaffarabad'}
            </span>
            <span className="text-[#D4AF37] font-semibold">· Code FIRST10 for 10% OFF</span>
          </div>
          <a 
            href={`https://wa.me/${WHATSAPP_INTL}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 font-semibold text-[#662F38] hover:text-[#D4AF37] transition-colors"
          >
            <Phone className="w-3 h-3" />
            0317 9155617
          </a>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Identity with Circular Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="relative">
            <img 
              src={LOGO_URL} 
              alt="Cardsy by Aneeqa Logo" 
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-sm ring-2 ring-[#F9D5D9] group-hover:ring-[#D4AF37] transition-all duration-300 transform group-hover:scale-105"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" title="Open for orders" />
          </div>
          <div className="flex flex-col">
            <span className="font-script text-2xl sm:text-3xl text-[#1C1618] leading-none tracking-normal">
              Cardsy
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#82444D] uppercase -mt-0.5">
              by Aneeqa
            </span>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A3B40]">
          <a href="#explore-menu" className="hover:text-[#D47986] transition-colors">
            Explore Menu
          </a>
          <a href="#about-us" className="hover:text-[#D47986] transition-colors">
            About Us
          </a>
          <a href="#customization" className="hover:text-[#D47986] transition-colors flex items-center gap-1.5">
            <span>Customization</span>
            <span className="text-[10px] px-1.5 py-0.5 bg-[#F9D5D9]/60 text-[#82444D] font-semibold rounded-xs">
              Make Yours
            </span>
          </a>
          <a href="#reviews" className="hover:text-[#D47986] transition-colors">
            Reviews
          </a>
          <a href="#reels" className="hover:text-[#D47986] transition-colors">
            Behind The Scenes
          </a>
          <a href="#contact" className="hover:text-[#D47986] transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Actions: Socials, Login, Basket, WhatsApp */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Social Icons (Both link to specified Facebook page) */}
          <div className="hidden sm:flex items-center gap-1.5 pr-2 border-r border-[#F9D5D9]">
            {/* Facebook */}
            <a 
              href={SOCIAL_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#662F38] hover:bg-[#F9D5D9]/50 hover:text-[#1877F2] transition-colors"
              title="Visit Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href={SOCIAL_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram Page"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#662F38] hover:bg-[#F9D5D9]/50 hover:text-[#E4405F] transition-colors"
              title="Visit Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Login / Track Button */}
          <button
            onClick={onOpenAuth}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#4A3B40] hover:text-[#D47986] border border-[#F9D5D9] rounded-lg hover:bg-[#FDE8EA]/50 transition-colors"
          >
            <User className="w-3.5 h-3.5" />
            <span>Login / Track</span>
          </button>

          {/* Cart / Basket Icon Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-[#4A3B40] hover:text-[#D47986] hover:bg-[#F9D5D9]/40 rounded-lg transition-colors flex items-center gap-1.5"
            aria-label="View Shopping Basket"
          >
            <ShoppingBag className="w-5 h-5 text-[#82444D]" />
            <span className="hidden sm:inline text-xs font-semibold text-[#82444D]">Basket</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D47986] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp Direct Header Button */}
          <a
            href={buildWhatsAppLink("Hi Cardsy by Aneeqa! I want to inquire about custom gifts.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs hover:shadow transition-all"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#4A3B40] hover:text-[#D47986] rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-[#F9D5D9] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-2 text-sm font-medium text-[#4A3B40]">
            <a 
              href="#explore-menu" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-[#FDE8EA] hover:text-[#D47986]"
            >
              Explore Menu
            </a>
            <a 
              href="#about-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-[#FDE8EA] hover:text-[#D47986]"
            >
              Our Story (About Us)
            </a>
            <a 
              href="#customization" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-[#FDE8EA] hover:text-[#D47986] flex items-center justify-between"
            >
              <span>Custom Design Studio</span>
              <span className="text-[10px] px-2 py-0.5 bg-[#F9D5D9] text-[#82444D] font-bold rounded-full">
                Customise
              </span>
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-[#FDE8EA] hover:text-[#D47986]"
            >
              Customer Reviews (Real Photos)
            </a>
            <a 
              href="#reels" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-[#FDE8EA] hover:text-[#D47986]"
            >
              Behind The Scenes Reels
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-[#FDE8EA] hover:text-[#D47986]"
            >
              Muzaffarabad Store & Live Map
            </a>
          </div>

          <div className="pt-3 border-t border-[#F9D5D9] flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="text-xs font-semibold text-[#82444D] hover:underline flex items-center gap-1.5"
            >
              <User className="w-4 h-4" />
              Customer Login / Order Status
            </button>
            <div className="flex items-center gap-2">
              <a 
                href={SOCIAL_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-[#82444D] hover:underline"
              >
                Facebook / Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
