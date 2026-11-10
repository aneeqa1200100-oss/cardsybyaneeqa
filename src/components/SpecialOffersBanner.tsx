import React, { useState } from 'react';
import { Mail, Gift, Check, Copy, Sparkles, Tag } from 'lucide-react';
import { OWNER_EMAIL } from '../data/storeData';

export const SpecialOffersBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('FIRST10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 bg-[#FFF8F9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F9D5D9] via-[#FDE8EA] to-[#F9D5D9] border-2 border-[#D4AF37]/50 shadow-xl p-8 sm:p-12 text-center">
          
          {/* Decorative Corner Gold Filigree */}
          <div className="absolute top-3 left-3 text-[#D4AF37]/40 pointer-events-none">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute top-3 right-3 text-[#D4AF37]/40 pointer-events-none">
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1618] leading-tight">
              Special Offers & News
            </h2>
            
            <p className="text-base sm:text-lg font-medium text-[#662F38]">
              Get <span className="text-[#D4AF37] font-bold">10% Off</span> On Your First Order
            </p>

            <p className="text-xs sm:text-sm text-[#4A3B40] max-w-lg mx-auto leading-relaxed">
              Join our Cardsy family to receive private preview access to new bridal bouquets, holiday chocolate arrangements, and seasonal discounts directly from Aneeqa.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="pt-2 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-[#82444D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-[#D4AF37]/50 rounded-xl text-[#1C1618] placeholder-[#9E737B] focus:outline-none focus:ring-2 focus:ring-[#D47986]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#D47986] to-[#C96774] hover:opacity-95 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="pt-2 max-w-md mx-auto bg-white/90 p-5 rounded-2xl border border-[#D4AF37] shadow-md animate-fadeIn">
                <div className="flex items-center justify-center gap-2 text-emerald-700 font-bold text-sm mb-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Welcome to Cardsy VIP! Notification sent to {OWNER_EMAIL}</span>
                </div>
                <p className="text-xs text-[#4A3B40] mb-3">
                  Here is your 10% discount promo code for your first customized order:
                </p>
                <div className="inline-flex items-center gap-3 bg-[#FFF8F9] px-4 py-2 rounded-xl border border-dashed border-[#D4AF37]">
                  <Tag className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-mono text-base font-bold text-[#1C1618] tracking-widest">
                    FIRST10
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="p-1.5 text-xs font-semibold text-[#82444D] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            )}

            <div className="text-[11px] text-[#82444D]">
              Direct boutique inquiries sent to <span className="font-semibold">{OWNER_EMAIL}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
