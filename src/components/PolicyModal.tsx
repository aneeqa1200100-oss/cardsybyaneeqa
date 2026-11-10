import React from 'react';
import { X, ShieldCheck, Truck, FileText } from 'lucide-react';
import { PHONE_NUMBER, OWNER_EMAIL } from '../data/storeData';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'delivery' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#F9D5D9] p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-[#1C1618]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#82444D] hover:text-[#1C1618] p-1.5 rounded-full hover:bg-[#F9D5D9]/40"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#D47986]">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1618]">
                Privacy & Client Confidentiality Policy
              </h3>
            </div>
            <p className="text-xs text-[#4A3B40] leading-relaxed">
              At <strong>Cardsy by Aneeqa</strong>, we treat your personal moments with the highest degree of respect and privacy.
            </p>
            <div className="space-y-3 text-xs text-[#4A3B40]">
              <h4 className="font-bold text-[#662F38]">1. Private Photos & Couple Frames:</h4>
              <p>
                Any personal portrait, Nikkah photo, baby picture, or ultrasound scan sent to Aneeqa for framing is used strictly for printing your physical keepsake. Photos are never shared on social media or published without explicit written permission from the client.
              </p>
              <h4 className="font-bold text-[#662F38]">2. Recipient Information:</h4>
              <p>
                Recipient phone numbers and home addresses for surprises are solely provided to trusted courier partners (TCS, Trax, Leopards) for delivery execution.
              </p>
              <h4 className="font-bold text-[#662F38]">3. Inquiries:</h4>
              <p>
                For any data questions, please reach out directly at {OWNER_EMAIL} or WhatsApp {PHONE_NUMBER}.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <FileText className="w-6 h-6" />
              <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1618]">
                Customization Terms & Conditions
              </h3>
            </div>
            <div className="space-y-3 text-xs text-[#4A3B40] leading-relaxed">
              <h4 className="font-bold text-[#662F38]">1. Handmade Nature:</h4>
              <p>
                Each bouquet, card, and surprise box is individually hand-shaped and assembled. Minor variations in petal folds, ribbon bows, or chocolate placements enhance the unique bespoke charm of your 1-of-1 gift.
              </p>
              <h4 className="font-bold text-[#662F38]">2. Advance Customization Approval:</h4>
              <p>
                Before finalizing frames or balloon texts, Aneeqa sends a digital WhatsApp preview to ensure all spellings, dates, and color combinations match your wishes.
              </p>
              <h4 className="font-bold text-[#662F38]">3. Payment & Advance:</h4>
              <p>
                Bespoke orders require a 50% advance deposit via JazzCash / EasyPaisa / Bank Transfer. Balance can be paid upon dispatch or cash on delivery where available.
              </p>
            </div>
          </div>
        )}

        {type === 'delivery' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-600">
              <Truck className="w-6 h-6" />
              <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1618]">
                Delivery & Fragile Transit Information
              </h3>
            </div>
            <div className="space-y-3 text-xs text-[#4A3B40] leading-relaxed">
              <h4 className="font-bold text-[#662F38]">1. Muzaffarabad City (Same Day / Free Pickup):</h4>
              <p>
                Orders within Muzaffarabad can be picked up for free from Upper Chatter / CMH Road or delivered via local rider within 2 to 4 hours.
              </p>
              <h4 className="font-bold text-[#662F38]">2. Nationwide Courier (All Pakistan):</h4>
              <p>
                We ship to Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Quetta, Faisalabad, Mirpur, and across Pakistan via TCS & Trax Air/Overnight services (transit time: 2 to 4 business days).
              </p>
              <h4 className="font-bold text-[#662F38]">3. Triple-Layer Shockproof Packaging:</h4>
              <p>
                Every chocolate bouquet and acrylic box is encased in heavy bubble wrap, rigid exterior cardboard cartons, and marked as FRAGILE GLASS to prevent any damage during shipment.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#F9D5D9] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#D47986] rounded-xl hover:bg-[#C96774] transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
