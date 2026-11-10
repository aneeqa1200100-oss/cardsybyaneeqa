import React from 'react';
import { Truck, MapPin, CheckCircle2, Clock } from 'lucide-react';

interface DeliveryToggleProps {
  deliveryMode: 'delivery' | 'pickup';
  onToggle: (mode: 'delivery' | 'pickup') => void;
}

export const DeliveryToggle: React.FC<DeliveryToggleProps> = ({
  deliveryMode,
  onToggle
}) => {
  return (
    <section className="bg-gradient-to-b from-[#FFF8F9] to-[#FFF0F2] py-3.5 border-b border-[#F9D5D9]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/80 p-2 sm:p-2.5 rounded-2xl border border-[#F9D5D9] shadow-xs backdrop-blur-xs">
          {/* Segmented Switch */}
          <div className="w-full sm:w-auto inline-flex p-1 bg-[#F9D5D9]/40 rounded-xl">
            <button
              type="button"
              onClick={() => onToggle('delivery')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                deliveryMode === 'delivery'
                  ? 'bg-gradient-to-r from-[#EE9CA7] to-[#D47986] text-white shadow-sm'
                  : 'text-[#662F38] hover:text-[#1C1618]'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Gift Delivery - All Pakistan</span>
            </button>

            <button
              type="button"
              onClick={() => onToggle('pickup')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                deliveryMode === 'pickup'
                  ? 'bg-gradient-to-r from-[#EE9CA7] to-[#D47986] text-white shadow-sm'
                  : 'text-[#662F38] hover:text-[#1C1618]'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Store Pickup - Muzaffarabad</span>
            </button>
          </div>

          {/* Contextual Status / Promise */}
          <div className="flex items-center gap-2 text-xs text-[#82444D] font-medium px-2 text-center sm:text-right">
            {deliveryMode === 'delivery' ? (
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                Safe fragile courier across Lahore, Karachi, Islamabad & all Pakistan (2-4 days)
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                Pickup ready in 2-4 hours from CMH Road / Upper Chatter, Muzaffarabad AJK
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
