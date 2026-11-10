import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  ShoppingBag, 
  Sparkles, 
  Clock, 
  Check, 
  Heart,
  Share2
} from 'lucide-react';
import { Product } from '../types';
import { LOGO_URL, buildWhatsAppLink } from '../data/storeData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, customNote?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [customNote, setCustomNote] = useState('');
  const [selectedColor, setSelectedColor] = useState('Pink Velvet');
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, customNote ? `${selectedColor} - ${customNote}` : selectedColor);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  const colors = ['Pink Velvet', 'Pure White Silk', 'Lilac & Lavender', 'Royal Champagne Gold'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#F9D5D9] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#82444D] hover:bg-white shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Product Image with Authentic Watermark */}
          <div className="md:col-span-5 relative bg-[#FFF0F2] min-h-[320px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />

            {/* Top-Left Watermark */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-[#F9D5D9]">
              <img 
                src={LOGO_URL} 
                alt="Watermark" 
                className="w-6 h-6 rounded-full object-cover ring-1 ring-[#D4AF37]" 
              />
              <div className="flex flex-col">
                <span className="font-script text-base text-[#1C1618] leading-none">Cardsy</span>
                <span className="text-[7px] font-bold tracking-widest text-[#82444D] uppercase">BY ANEEQA</span>
              </div>
            </div>

            {product.badge && (
              <span className="absolute bottom-3 left-3 z-10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#662F38] bg-white/95 rounded-full shadow-xs border border-[#F9D5D9]">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right: Details & Customization Options */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#82444D] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Customized Gift · Muzaffarabad
                </span>
                <span className="text-xs text-[#82444D] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {product.turnaround}
                </span>
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1618] leading-snug">
                {product.name}
              </h3>

              <div className="flex items-baseline gap-3">
                <span className="text-base font-semibold text-[#82444D]">
                  Price After Direct Contact
                </span>
                <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                  Complimentary Greeting Note Included
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#4A3B40] leading-relaxed">
                {product.description}
              </p>

              {/* Handcrafted Details List */}
              <div className="space-y-1.5 pt-2 border-t border-[#F9D5D9]/70">
                <span className="text-xs font-bold text-[#662F38] uppercase tracking-wider block">
                  Artisan Specifications:
                </span>
                <ul className="space-y-1 text-xs text-[#4A3B40]">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#D4AF37] font-bold mt-0.5">✦</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color Scheme Picker */}
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-bold text-[#662F38] uppercase tracking-wider block">
                  Select Theme Palette / Ribbon:
                </span>
                <div className="flex flex-wrap gap-2">
                  {colors.map((c) => (
                    <button
                      type="button"
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        selectedColor === c
                          ? 'bg-[#F9D5D9] text-[#662F38] border-[#D47986] font-semibold'
                          : 'bg-white text-[#4A3B40] border-[#F9D5D9] hover:bg-[#FFF5F7]'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Note input */}
              <div className="space-y-1 pt-1">
                <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider">
                  Personalization (Names, banner words, or dates):
                </label>
                <input
                  type="text"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="e.g. 'Happy Birthday Ayesha', 'Nikkah Mubarak Ali & Sana'"
                  className="w-full px-3 py-2 text-xs border border-[#F9D5D9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D47986]"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#F9D5D9] flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={handleAdd}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
                  added
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-[#FFF5F7] hover:bg-[#F9D5D9] text-[#82444D] border-[#F9D5D9]'
                }`}
              >
                {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                <span>{added ? 'Added to Basket!' : 'Add to Basket'}</span>
              </button>

              <a
                href={buildWhatsAppLink(
                  `Hi Cardsy by Aneeqa! I want to order the "${product.name}" (Rs. ${product.price}).\nTheme: ${selectedColor}\nPersonalization: ${customNote || 'Standard'}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp Now</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
