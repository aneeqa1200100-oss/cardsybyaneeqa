import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, buildWhatsAppLink } from '../data/storeData';

interface OrderFormSectionProps {
  products?: Product[];
}

export const OrderFormSection: React.FC<OrderFormSectionProps> = ({
  products = PRODUCTS
}) => {
  const [name, setName] = useState('');
  const [selectedGift, setSelectedGift] = useState(products[0]?.name || '');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const giftName = selectedGift || products[0]?.name || '';
    const message = `Assalam-o-Alaikum! Mera Naam: ${name} Mujhe Ye Gift Chahiye: ${giftName} Date: ${deliveryDate} Note: ${note}`;
    const url = buildWhatsAppLink(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FFF8F9] border-t border-[#F9D5D9]/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1618]">
            Apna Order Book Karein
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="silk-card rounded-3xl p-6 sm:p-10 border border-[#F9D5D9] shadow-xl space-y-5"
        >
          {/* 1. Apka Naam */}
          <div>
            <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1.5">
              1. Apka Naam:
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Apna naam likhein"
              className="w-full px-4 py-3 text-sm bg-white border border-[#F9D5D9] rounded-xl text-[#1C1618] placeholder-[#B59197] focus:outline-none focus:ring-2 focus:ring-[#D47986]"
            />
          </div>

          {/* 2. Konsa Gift Chahiye */}
          <div>
            <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1.5">
              2. Konsa Gift Chahiye:
            </label>
            <select
              value={selectedGift}
              onChange={(e) => setSelectedGift(e.target.value)}
              className="w-full px-4 py-3 text-sm bg-white border border-[#F9D5D9] rounded-xl text-[#1C1618] focus:outline-none focus:ring-2 focus:ring-[#D47986]"
            >
              {products.map((product) => (
                <option key={product.id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          {/* 3. Kab Chahiye */}
          <div>
            <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1.5">
              3. Kab Chahiye:
            </label>
            <input
              type="date"
              required
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className="w-full px-4 py-3 text-sm bg-white border border-[#F9D5D9] rounded-xl text-[#1C1618] focus:outline-none focus:ring-2 focus:ring-[#D47986]"
            />
          </div>

          {/* 4. Apna Message / Note */}
          <div>
            <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1.5">
              4. Apna Message / Note:
            </label>
            <textarea
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Apna message ya note likhein..."
              className="w-full px-4 py-3 text-sm bg-white border border-[#F9D5D9] rounded-xl text-[#1C1618] placeholder-[#B59197] focus:outline-none focus:ring-2 focus:ring-[#D47986]"
            />
          </div>

          {/* Big Green Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp Par Order Bhejein</span>
          </button>
        </form>
      </div>
    </section>
  );
};
