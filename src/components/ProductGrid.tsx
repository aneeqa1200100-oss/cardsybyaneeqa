import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  ShoppingBag, 
  Eye, 
  Clock, 
  Check
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, LOGO_URL, buildWhatsAppLink } from '../data/storeData';

interface ProductGridProps {
  products?: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products = PRODUCTS,
  onSelectProduct,
  onAddToCart
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'bouquets', label: 'Bouquets & Chocolates' },
    { id: 'boxes', label: 'Surprise Gift Boxes' },
    { id: 'frames', label: 'Keepsake Frames' },
    { id: 'cards', label: 'Handcrafted Art & Gifts' },
    { id: 'tabarruk', label: 'Hajj & Islamic Tabarruk' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="explore-menu" className="py-16 sm:py-20 bg-[#FFF8F9] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1618]">
            Our Custom Creations - Explore Menu
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-[#D47986] -mt-1">
            Handcrafted with love in Muzaffarabad
          </p>
          <p className="text-sm sm:text-base text-[#4A3B40] max-w-xl mx-auto">
            Choose from our signature creations below or customize every single color, name, chocolate and ribbon to your dream vision.
          </p>

          {/* Category Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#EE9CA7] to-[#D47986] text-white shadow-sm font-semibold'
                    : 'bg-white/80 hover:bg-white text-[#662F38] border border-[#F9D5D9]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Columns Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => {
            const isAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group silk-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-[#F9D5D9]/80 hover:border-[#D4AF37]/60"
              >
                {/* Top Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#FFF0F2]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Top-Left Watermark: Black script for light backgrounds or gold badge as specified */}
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs border border-[#F9D5D9]">
                    <img 
                      src={LOGO_URL} 
                      alt="Watermark" 
                      className="w-5 h-5 rounded-full object-cover ring-1 ring-[#D4AF37]" 
                    />
                    <div className="flex flex-col">
                      <span className="font-script text-sm leading-none text-[#1C1618]">
                        Cardsy
                      </span>
                      <span className="text-[7px] font-bold tracking-widest text-[#82444D] uppercase">
                        BY ANEEQA
                      </span>
                    </div>
                  </div>

                  {/* Badge (Top-Right) */}
                  {product.badge && (
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#662F38] bg-white/95 rounded-full shadow-xs border border-[#F9D5D9]">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Hover Quick Actions Overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="p-2.5 rounded-full bg-white text-[#1C1618] hover:bg-[#F9D5D9] shadow-md transition-colors"
                      title="Quick View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(product, e)}
                      className="p-2.5 rounded-full bg-[#D47986] text-white hover:bg-[#C96774] shadow-md transition-colors"
                      title="Add to Basket"
                    >
                      {isAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Turnaround Pill at bottom of image */}
                  <div className="absolute bottom-2 left-2 z-10">
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#4A3B40] bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md shadow-2xs">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      {product.turnaround}
                    </span>
                  </div>
                </div>

                {/* Card Content & Pricing */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif-luxury text-lg font-bold text-[#1C1618] group-hover:text-[#D47986] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#665358] line-clamp-2 mt-1 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price After Direct Contact */}
                  <div className="pt-2 border-t border-[#F9D5D9]/60 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-xs sm:text-sm text-[#82444D] block">
                        Price After Direct Contact
                      </span>
                      <span className="text-[10px] text-emerald-700 font-semibold block">
                        Free Ribbon & Greeting Card
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(product, e)}
                      className={`p-2 rounded-lg text-xs font-medium border transition-colors ${
                        isAdded
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : 'bg-[#FFF5F7] hover:bg-[#F9D5D9] text-[#82444D] border-[#F9D5D9]'
                      }`}
                      title="Add to Basket"
                    >
                      {isAdded ? (
                        <span className="flex items-center gap-1 text-[11px] font-bold">
                          <Check className="w-3.5 h-3.5" /> Added
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] font-semibold">
                          <ShoppingBag className="w-3.5 h-3.5" /> +Basket
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Primary WhatsApp Order Button as specified */}
                  <a
                    href={buildWhatsAppLink(`Hi Cardsy by Aneeqa! I want to customize & order: "${product.name}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full py-2.5 px-3 text-xs font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 text-center mt-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Customize & Order on WhatsApp</span>
                  </a>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
