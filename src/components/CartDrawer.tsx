import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  Sparkles, 
  Tag, 
  Check, 
  Truck, 
  MapPin 
} from 'lucide-react';
import { CartItem } from '../types';
import { LOGO_URL, WHATSAPP_INTL, PHONE_NUMBER, buildWhatsAppLink } from '../data/storeData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  deliveryMode: 'delivery' | 'pickup';
  onToggleDelivery: (mode: 'delivery' | 'pickup') => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  deliveryMode,
  onToggleDelivery
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const deliveryFee = deliveryMode === 'pickup' || items.length === 0 ? 0 : 250;
  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (couponCode.trim().toUpperCase() === 'FIRST10') {
      setAppliedDiscount(10);
    } else {
      setCouponError('Invalid code. Use FIRST10 for 10% off.');
    }
  };

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    const itemsSummary = items
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.product.name}* (x${item.quantity})${
            item.customizationText ? `\n   ↳ Customization: "${item.customizationText}"` : ''
          }`
      )
      .join('\n');

    const messageLines = [
      `🛍️ *NEW ORDER - Cardsy by Aneeqa* 🛍️`,
      `---------------------------------`,
      itemsSummary,
      `---------------------------------`,
      `📦 *Fulfillment:* ${
        deliveryMode === 'pickup'
          ? 'Store Pickup (Muzaffarabad AJK)'
          : `Courier Delivery (All Pakistan)`
      }`,
      appliedDiscount > 0 ? `🏷️ *Promo Code:* FIRST10 (10% Off)` : '',
      `---------------------------------`,
      `👤 *Customer Name:* ${customerName || 'Valued Client'}`,
      `📱 *Contact Phone:* ${customerPhone || 'Via WhatsApp chat'}`,
      deliveryMode === 'delivery' && deliveryAddress ? `📍 *Shipping Address:* ${deliveryAddress}` : '',
      orderNotes ? `📝 *Special Gift Notes:* ${orderNotes}` : '',
      `---------------------------------`,
      `Please confirm availability, event date & payment details. Thank you Aneeqa!`
    ]
      .filter(Boolean)
      .join('\n');

    const url = buildWhatsAppLink(messageLines);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full border-l border-[#F9D5D9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#F9D5D9] bg-gradient-to-r from-[#FFF8F9] to-[#FDF0F2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="Cardsy" 
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#F9D5D9]" 
            />
            <div>
              <h3 className="font-serif-luxury text-lg font-bold text-[#1C1618]">
                Your Gift Basket
              </h3>
              <span className="text-xs text-[#82444D]">
                {items.length} {items.length === 1 ? 'item' : 'items'} customized
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#82444D] hover:text-[#1C1618] hover:bg-white rounded-full transition-colors"
            aria-label="Close basket"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Delivery / Pickup Choice in Cart */}
        <div className="p-3 bg-[#FFF5F7] border-b border-[#F9D5D9]/70 flex items-center justify-between gap-2 text-xs">
          <span className="font-semibold text-[#662F38]">Delivery Method:</span>
          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#F9D5D9]">
            <button
              onClick={() => onToggleDelivery('delivery')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                deliveryMode === 'delivery'
                  ? 'bg-[#D47986] text-white shadow-xs'
                  : 'text-[#662F38] hover:bg-pink-50'
              }`}
            >
              <Truck className="w-3 h-3 inline mr-1" />
              Pakistan Delivery
            </button>
            <button
              onClick={() => onToggleDelivery('pickup')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                deliveryMode === 'pickup'
                  ? 'bg-[#D47986] text-white shadow-xs'
                  : 'text-[#662F38] hover:bg-pink-50'
              }`}
            >
              <MapPin className="w-3 h-3 inline mr-1" />
              Muzaffarabad Pickup
            </button>
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#FFF0F2] text-[#D47986] flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-serif-luxury text-xl font-bold text-[#1C1618]">
                Your basket is empty
              </h4>
              <p className="text-xs text-[#82444D] max-w-xs mx-auto">
                Explore our signature chocolate bouquets, surprise boxes, and personalized frames.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-5 py-2 text-xs font-semibold text-white bg-[#D47986] hover:bg-[#C96774] rounded-xl shadow-xs"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="silk-card p-3 rounded-2xl border border-[#F9D5D9] flex gap-3 relative group"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-18 h-20 rounded-xl object-cover shrink-0 border border-[#F9D5D9]"
                />

                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <h4 className="text-xs font-bold text-[#1C1618] line-clamp-1">
                      {item.product.name}
                    </h4>
                    <span className="text-[11px] font-semibold text-[#82444D] block">
                      Price After Direct Contact
                    </span>
                    {item.customizationText && (
                      <span className="text-[10px] text-[#665358] line-clamp-1 italic mt-0.5">
                        “{item.customizationText}”
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {/* Stepper */}
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-[#F9D5D9] p-0.5">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-[#F9D5D9] rounded text-[#82444D]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold px-1 tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-[#F9D5D9] rounded text-[#82444D]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-[11px] font-semibold text-[#82444D]">
                      Price After Direct Contact
                    </span>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1 text-[#9E737B] hover:text-rose-600 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {items.length > 0 && (
            <>
              {/* Promo Code Input */}
              <div className="pt-2">
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-[#82444D] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Promo code (e.g. FIRST10)"
                      className="w-full pl-8 pr-3 py-2 text-xs border border-[#F9D5D9] rounded-xl uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-[#D47986]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 text-xs font-semibold text-[#82444D] bg-[#FDE8EA] hover:bg-[#F9D5D9] rounded-xl transition-colors"
                  >
                    Apply
                  </button>
                </form>
                {couponError && <p className="text-[10px] text-rose-600 mt-1">{couponError}</p>}
                {appliedDiscount > 0 && (
                  <p className="text-[10px] text-emerald-600 font-bold mt-1 flex items-center gap-1">
                    <Check className="w-3 h-3" /> 10% First Order Discount Applied!
                  </p>
                )}
              </div>

              {/* Order Manifest Inputs */}
              <div className="pt-2 space-y-2.5 border-t border-[#F9D5D9]">
                <span className="text-xs font-bold text-[#662F38] uppercase tracking-wider block">
                  Delivery Details for WhatsApp
                </span>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Your Full Name *"
                  className="w-full px-3 py-2 text-xs border border-[#F9D5D9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D47986]"
                />
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Your WhatsApp Number *"
                  className="w-full px-3 py-2 text-xs border border-[#F9D5D9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D47986]"
                />
                {deliveryMode === 'delivery' && (
                  <input
                    type="text"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Delivery Address & City (e.g., F-7/2 Islamabad) *"
                    className="w-full px-3 py-2 text-xs border border-[#F9D5D9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D47986]"
                  />
                )}
                <textarea
                  rows={2}
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Special instructions (e.g. Write 'Happy Birthday Sarah' on card, preferred delivery date)..."
                  className="w-full px-3 py-2 text-xs border border-[#F9D5D9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D47986]"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#F9D5D9] bg-gradient-to-b from-[#FFF8F9] to-white space-y-3">
            <div className="space-y-1.5 text-xs">
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>VIP Promo Code:</span>
                  <span>FIRST10 (10% Off)</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-[#1C1618] pt-1">
                <span>Pricing:</span>
                <span className="text-[#82444D]">
                  Price After Direct Contact
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Checkout & Order on WhatsApp ({PHONE_NUMBER})</span>
            </button>

            <p className="text-[10px] text-center text-[#82444D] flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              Aneeqa confirms availability & sends photo proofs before dispatch.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
