import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { LOGO_URL, WHATSAPP_INTL, buildWhatsAppLink } from '../data/storeData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');

  const quickPrompts = [
    'Hi Aneeqa! I want to order a Dairy Milk bouquet.',
    'Can I get same-day delivery in Muzaffarabad today?',
    'I want to send my own Pinterest design reference.',
    'Do you deliver to Lahore / Islamabad / Karachi?'
  ];

  const handleSend = (text: string) => {
    const url = buildWhatsAppLink(text);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Popover Chat Launcher */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border-2 border-[#F9D5D9] overflow-hidden animate-fadeIn text-[#1C1618]">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#F9D5D9] via-[#FDE8EA] to-[#F9D5D9] border-b border-[#F9D5D9] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  src={LOGO_URL}
                  alt="Aneeqa"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div>
                <h4 className="font-serif-luxury text-base font-bold text-[#1C1618] leading-tight">
                  Cardsy by Aneeqa
                </h4>
                <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online in Muzaffarabad
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#82444D] hover:bg-white/80 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#FFF8F9]">
            <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs text-[#3A2D31] leading-relaxed border border-[#F9D5D9]/60">
              <p className="font-medium">
                Assalam-o-Alaikum! 🌸 Welcome to Cardsy. How can I personalize your special gift today?
              </p>
              <span className="text-[9px] text-[#9E737B] block mt-1 text-right">Aneeqa · Just now</span>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-[#82444D] uppercase tracking-wider block">
                Quick Questions:
              </span>
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="w-full text-left text-xs p-2 rounded-xl bg-white hover:bg-[#F9D5D9]/40 border border-[#F9D5D9] text-[#4A3B40] hover:text-[#1C1618] transition-colors flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{q}</span>
                  <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (inputMessage.trim()) handleSend(inputMessage);
              }}
              className="pt-2 flex gap-1.5"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-xs bg-white border border-[#F9D5D9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D47986]"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:opacity-90 shadow-xs"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Footer note */}
          <div className="py-1.5 px-3 bg-white text-center text-[10px] text-[#82444D] border-t border-[#F9D5D9]">
            Official WhatsApp: 0317 9155617
          </div>
        </div>
      )}

      {/* Floating Button with Pink Silk Velvet gradient and pulse ring */}
      <div className="relative group">
        {/* Pulse wave ring */}
        <span className="absolute -inset-1 rounded-full bg-[#EE9CA7]/60 animate-ping opacity-75" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#EE9CA7] via-[#D47986] to-[#C96774] text-white shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white cursor-pointer"
          aria-label="Chat on WhatsApp with Aneeqa"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-7 h-7 fill-white" />
          )}

          {/* Small notification dot */}
          {!isOpen && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            </span>
          )}
        </button>

        {/* Hover label tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:block whitespace-nowrap bg-white/95 px-3 py-1.5 rounded-full text-xs font-bold text-[#662F38] shadow-md border border-[#F9D5D9] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with Aneeqa 🌸
          </div>
        )}
      </div>

    </div>
  );
};
