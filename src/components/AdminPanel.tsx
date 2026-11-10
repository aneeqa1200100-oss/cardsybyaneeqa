import React, { useState } from 'react';
import { X, Upload, Trash2, LogOut, PlusCircle, Lock, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { LOGO_URL } from '../data/storeData';

interface AdminPanelProps {
  isLoginOpen: boolean;
  onCloseLogin: () => void;
  products: Product[];
  onAddProduct: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isLoginOpen,
  onCloseLogin,
  products,
  onAddProduct,
  onDeleteProduct
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // New Product Form State
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Aneeqa123') {
      setError('');
      setPassword('');
      setIsAuthenticated(true);
      onCloseLogin();
    } else {
      setError('Ghalat Password Hai');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setError('');
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName.trim() || !photoPreview) return;

    const numericPrice = parseInt(productPrice.replace(/[^0-9]/g, ''), 10) || 2500;

    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      name: productName.trim(),
      category: 'bouquets',
      price: numericPrice,
      description: 'Handcrafted with love by Cardsy by Aneeqa in Muzaffarabad, Azad Kashmir.',
      image: photoPreview,
      isRealUploaded: true,
      watermarkTheme: 'dark',
      badge: 'New Arrival',
      turnaround: '24-48 Hours',
      details: [
        'Handcrafted with premium silk & velvet finish',
        'Complimentary handwritten greeting card included'
      ]
    };

    onAddProduct(newProduct);
    setProductName('');
    setProductPrice('');
    setPhotoPreview('');
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  // 1. Admin Panel Page (when authenticated)
  if (isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-[#FFF8F9] overflow-y-auto">
        {/* Top Bar with Logout Button */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-[#F9D5D9] px-4 sm:px-8 py-4 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="Cardsy by Aneeqa"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#F9D5D9]"
            />
            <div>
              <span className="font-script text-2xl text-[#1C1618] leading-none block">
                Cardsy
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#82444D] uppercase">
                Admin Panel
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#EE9CA7] to-[#D47986] hover:opacity-95 rounded-xl shadow-sm cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>

        {/* Main Admin Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
          {/* Add New Product Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F9D5D9] shadow-md">
            <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1618] mb-6 flex items-center gap-2">
              <PlusCircle className="w-6 h-6 text-[#D47986]" />
              <span>New Product Add Karein</span>
            </h1>

            {savedSuccess && (
              <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>New product website par top par add ho gaya hai!</span>
              </div>
            )}

            <form onSubmit={handleSaveProduct} className="space-y-5">
              {/* 1. Upload Photo Button + Preview */}
              <div>
                <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-2">
                  1. Upload Photo *
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <label className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FFF5F7] hover:bg-[#F9D5D9]/60 text-[#82444D] border border-[#F9D5D9] text-xs font-semibold cursor-pointer transition-colors">
                    <Upload className="w-4 h-4" />
                    <span>Upload Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                      required={!photoPreview}
                    />
                  </label>

                  {photoPreview && (
                    <div className="relative w-28 h-32 rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-sm">
                      <img
                        src={photoPreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* 2. Product Ka Naam */}
              <div>
                <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1.5">
                  2. Product Ka Naam *
                </label>
                <input
                  type="text"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Birthday Bouquet"
                  className="w-full px-4 py-2.5 text-sm bg-[#FFF8F9] border border-[#F9D5D9] rounded-xl text-[#1C1618] focus:outline-none focus:ring-2 focus:ring-[#D47986]"
                />
              </div>

              {/* 3. Price Box */}
              <div>
                <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1.5">
                  3. Price *
                </label>
                <input
                  type="text"
                  required
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  placeholder="2500"
                  className="w-full px-4 py-2.5 text-sm bg-[#FFF8F9] border border-[#F9D5D9] rounded-xl text-[#1C1618] focus:outline-none focus:ring-2 focus:ring-[#D47986]"
                />
              </div>

              {/* 4. Save Button (Pink) */}
              <button
                type="submit"
                className="px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#EE9CA7] to-[#D47986] hover:opacity-95 rounded-xl shadow-md cursor-pointer transition-all"
              >
                Save
              </button>
            </form>
          </div>

          {/* All Products List with Delete Button */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F9D5D9] shadow-md">
            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1C1618] mb-5">
              All Products ({products.length})
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#FFF8F9] border border-[#F9D5D9]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-16 rounded-xl object-cover shrink-0 border border-[#F9D5D9]"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-[#1C1618] truncate">
                        {item.name}
                      </h4>
                      <span className="text-[11px] text-[#82444D] block">
                        Price After Direct Contact
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onDeleteProduct(item.id)}
                    className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl border border-rose-200 transition-colors shrink-0 cursor-pointer"
                    title="Delete Product"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Simple Password-Only Login Modal
  if (!isLoginOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-[#F9D5D9] p-6 sm:p-8 text-[#1C1618]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => {
            setError('');
            setPassword('');
            onCloseLogin();
          }}
          className="absolute top-4 right-4 text-[#82444D] hover:text-[#1C1618] p-1.5 rounded-full hover:bg-[#F9D5D9]/40"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#FFF0F2] text-[#D47986] flex items-center justify-center mx-auto border border-[#F9D5D9]">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1618]">
            Admin Login
          </h3>
        </div>

        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#662F38] uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full px-4 py-2.5 text-sm bg-[#FFF8F9] border border-[#F9D5D9] rounded-xl text-[#1C1618] focus:outline-none focus:ring-2 focus:ring-[#D47986]"
            />
          </div>

          {error && (
            <p className="text-xs font-bold text-rose-600 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 text-xs font-semibold text-white bg-gradient-to-r from-[#EE9CA7] to-[#D47986] hover:opacity-95 rounded-xl shadow-md cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
