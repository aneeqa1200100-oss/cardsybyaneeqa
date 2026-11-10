import React, { useState } from 'react';
import { 
  Sparkles, 
  Upload, 
  MessageCircle, 
  Image as ImageIcon, 
  X, 
  CheckCircle,
  Palette,
  Heart
} from 'lucide-react';
import { WHATSAPP_INTL, buildWhatsAppLink } from '../data/storeData';

export const CustomizationSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [idea, setIdea] = useState('');
  const [occasion, setOccasion] = useState('Birthday');
  const [budget, setBudget] = useState('Rs. 2,500 - 4,500');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    setImageName('');
  };

  const handleSendDesign = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `🌟 *New Custom Design Request for Cardsy by Aneeqa* 🌟`,
      `👤 *Customer Name:* ${name || 'Valued Client'}`,
      `📱 *WhatsApp:* ${phone || 'Not specified'}`,
      `🎉 *Occasion:* ${occasion}`,
      `💰 *Estimated Budget:* ${budget}`,
      `📝 *Custom Idea Details:* ${idea || 'I have a custom reference design I want to make.'}`,
      previewImage ? `🖼️ *Reference Image:* Attached in this chat (${imageName})` : `🖼️ *Reference Image:* Discussing via chat`
    ].join('\n');

    const whatsappUrl = buildWhatsAppLink(message);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="customization" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFF8F9] via-[#FDF0F2] to-[#FFF8F9] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#F9D5D9] text-xs font-semibold text-[#82444D] uppercase tracking-wider">
            <Palette className="w-3.5 h-3.5 text-[#D4AF37]" />
            Bespoke Atelier Service
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1618]">
            Got Your Own Design? We Will Make It!
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-[#D47986] -mt-1">
            Your imagination, our handcrafting
          </p>
          <p className="text-sm text-[#4A3B40] max-w-lg mx-auto">
            Seen an aesthetic gift idea on Pinterest or Instagram? Share your reference picture with Aneeqa and we will recreate it with luxury silk, custom chocolates, and calligraphy.
          </p>
        </div>

        {/* Main Customization Card */}
        <div className="silk-velvet-card rounded-3xl p-6 sm:p-10 shadow-xl border-2 border-[#D4AF37]/40 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Upload & Preview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white/90 p-5 rounded-2xl border border-[#F9D5D9] shadow-xs">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#662F38] mb-2">
                  Upload Your Reference Image (Pinterest / Photo)
                </label>
                
                {!previewImage ? (
                  <label className="border-2 border-dashed border-[#F9D5D9] hover:border-[#D4AF37] rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-[#FFF8F9] hover:bg-[#FFF0F2] group">
                    <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-[#D47986] group-hover:scale-110 transition-transform mb-3">
                      <Upload className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-[#1C1618]">
                      Click or drag photo here
                    </span>
                    <span className="text-[11px] text-[#82444D] mt-1">
                      PNG, JPG, HEIC up to 10MB
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="relative rounded-xl overflow-hidden border border-[#D4AF37] shadow-sm bg-black/5">
                    <img
                      src={previewImage}
                      alt="Uploaded reference"
                      className="w-full h-56 object-cover"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-[#82444D] hover:bg-white shadow-md transition-all"
                      title="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="p-2.5 bg-white text-[11px] font-medium text-[#1C1618] flex items-center justify-between">
                      <span className="truncate max-w-[200px] flex items-center gap-1.5">
                        <ImageIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {imageName}
                      </span>
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Ready
                      </span>
                    </div>
                  </div>
                )}

                <div className="mt-3 text-[11px] text-[#82444D] space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    <span>We replicate shapes, colors, chocolates & calligraphy</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-3 h-3 text-[#D47986]" />
                    <span>Free digital draft proof sent before final crafting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form Details */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSendDesign} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ayesha, Fatima or Zain"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#F9D5D9] rounded-xl text-[#1C1618] placeholder-[#B59197] focus:outline-none focus:ring-2 focus:ring-[#D47986]"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0317 1234567"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#F9D5D9] rounded-xl text-[#1C1618] placeholder-[#B59197] focus:outline-none focus:ring-2 focus:ring-[#D47986]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Occasion */}
                  <div>
                    <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1">
                      Special Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#F9D5D9] rounded-xl text-[#1C1618] focus:outline-none focus:ring-2 focus:ring-[#D47986]"
                    >
                      <option value="Birthday">Birthday Surprise</option>
                      <option value="Nikkah & Wedding">Nikkah / Wedding / Barat</option>
                      <option value="Engagement">Engagement / Baat Pakki</option>
                      <option value="Anniversary">Anniversary Celebration</option>
                      <option value="Baby Shower / Welcome">Baby Shower / Newborn</option>
                      <option value="Hajj / Umrah">Hajj / Umrah Tabarruk</option>
                      <option value="Teachers Day">Teacher's Day Appreciation</option>
                      <option value="Just Because / Apology">Love / Just Because</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1">
                      Budget Range (PKR)
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#F9D5D9] rounded-xl text-[#1C1618] focus:outline-none focus:ring-2 focus:ring-[#D47986]"
                    >
                      <option value="Rs. 1,500 - 2,500">Rs. 1,500 - 2,500 (Cards & Charms)</option>
                      <option value="Rs. 2,500 - 4,500">Rs. 2,500 - 4,500 (Bouquets & Frames)</option>
                      <option value="Rs. 4,500 - 8,000">Rs. 4,500 - 8,000 (Luxury Surprise Boxes)</option>
                      <option value="Rs. 8,000+">Rs. 8,000+ (Grand Wedding Hampers)</option>
                    </select>
                  </div>
                </div>

                {/* Idea Description */}
                <div>
                  <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1">
                    Describe Your Idea & Personalization Details *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder="Tell Aneeqa names to write, preferred chocolates (Dairy Milk / KitKat / Ferrero), ribbon color, date of event, or any specific requests..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#F9D5D9] rounded-xl text-[#1C1618] placeholder-[#B59197] focus:outline-none focus:ring-2 focus:ring-[#D47986]"
                  />
                </div>

                {/* Primary Button as specified */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Design on WhatsApp (0317 9155617)</span>
                </button>

                <p className="text-[11px] text-center text-[#82444D]">
                  Aneeqa will reply directly on WhatsApp with mockup photos, customization options, and exact price quote.
                </p>

              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
