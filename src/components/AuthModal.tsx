import React, { useState } from 'react';
import { X, User, Phone, CheckCircle2, PackageCheck } from 'lucide-react';
import { LOGO_URL, buildWhatsAppLink } from '../data/storeData';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'login' | 'track'>('login');
  const [phone, setPhone] = useState('');
  const [orderId, setOrderId] = useState('');
  const [trackingResult, setTrackingResult] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setIsLoggedIn(true);
    setTimeout(() => {
      onClose();
      setIsLoggedIn(false);
    }, 1500);
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) return;
    setTrackingResult(`Order #${orderId} has been handcrafted at Cardsy Muzaffarabad studio and is dispatched via TCS Express Courier. Tracking ID: TCS-AJK-${orderId}.`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#F9D5D9] p-6 sm:p-8 overflow-hidden text-[#1C1618]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#82444D] hover:text-[#1C1618] p-1.5 rounded-full hover:bg-[#F9D5D9]/40"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-6">
          <img
            src={LOGO_URL}
            alt="Cardsy"
            className="w-14 h-14 rounded-full mx-auto object-cover ring-2 ring-[#F9D5D9]"
          />
          <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1618]">
            Cardsy Customer Portal
          </h3>
          <p className="text-xs text-[#82444D]">
            Track your custom gift delivery or sign in with your phone
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex bg-[#FFF5F7] p-1 rounded-xl mb-6 border border-[#F9D5D9]">
          <button
            onClick={() => {
              setTab('login');
              setTrackingResult(null);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
              tab === 'login' ? 'bg-[#D47986] text-white shadow-xs' : 'text-[#662F38]'
            }`}
          >
            Sign In / Register
          </button>
          <button
            onClick={() => {
              setTab('track');
              setTrackingResult(null);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
              tab === 'track' ? 'bg-[#D47986] text-white shadow-xs' : 'text-[#662F38]'
            }`}
          >
            Track Parcel
          </button>
        </div>

        {tab === 'login' ? (
          isLoggedIn ? (
            <div className="py-8 text-center space-y-2">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
              <h4 className="font-bold text-sm text-[#1C1618]">Welcome Back!</h4>
              <p className="text-xs text-[#82444D]">Your personalized preferences are saved.</p>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1">
                  WhatsApp Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#82444D] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0317 9155617"
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-[#F9D5D9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D47986]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs font-semibold text-white bg-gradient-to-r from-[#D47986] to-[#C96774] rounded-xl shadow-md hover:opacity-95 transition-opacity"
              >
                Sign In with WhatsApp OTP
              </button>

              <div className="text-center">
                <a
                  href={buildWhatsAppLink("Hi Aneeqa! I want to check my account or past orders.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#82444D] hover:underline"
                >
                  Need help logging in? Message Aneeqa on WhatsApp →
                </a>
              </div>
            </form>
          )
        ) : (
          <form onSubmit={handleTrack} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1">
                Cardsy Order Reference / Phone Number
              </label>
              <div className="relative">
                <PackageCheck className="w-4 h-4 text-[#82444D] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="e.g. 1042 or 03171234567"
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-[#F9D5D9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D47986]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-xs font-semibold text-white bg-gradient-to-r from-[#D47986] to-[#C96774] rounded-xl shadow-md hover:opacity-95 transition-opacity"
            >
              Check Live Status
            </button>

            {trackingResult && (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 leading-relaxed animate-fadeIn">
                <p className="font-semibold mb-1">Status: In Transit / Prepared</p>
                {trackingResult}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
