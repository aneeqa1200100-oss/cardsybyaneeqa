/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { DeliveryToggle } from './components/DeliveryToggle';
import { Hero } from './components/Hero';
import { DeliveringHappinessBanner } from './components/DeliveringHappinessBanner';
import { SpecialOffersBanner } from './components/SpecialOffersBanner';
import { ProductGrid } from './components/ProductGrid';
import { CustomizationSection } from './components/CustomizationSection';
import { ReelsSection } from './components/ReelsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AuthModal } from './components/AuthModal';
import { PolicyModal } from './components/PolicyModal';
import { AdminPanel } from './components/AdminPanel';
import { OrderFormSection } from './components/OrderFormSection';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data/storeData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Start with 1 item pre-loaded to demonstrate the basket functionality immediately
    {
      product: PRODUCTS[0],
      quantity: 1,
      customizationText: 'Happy Birthday Banner with Lilac Ribbon'
    }
  ]);
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('cardsy_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore storage errors
    }
    return PRODUCTS;
  });
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | 'delivery' | null>(null);
  const [deliveryMode, setDeliveryMode] = useState<'delivery' | 'pickup'>('delivery');

  const handleAddProduct = (newProduct: Product) => {
    setProducts((prev) => {
      const updated = [newProduct, ...prev];
      try {
        localStorage.setItem('cardsy_products', JSON.stringify(updated));
      } catch {
        // ignore storage errors
      }
      return updated;
    });
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts((prev) => {
      const updated = prev.filter((p) => p.id !== productId);
      try {
        localStorage.setItem('cardsy_products', JSON.stringify(updated));
      } catch {
        // ignore storage errors
      }
      return updated;
    });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: Product, customNote?: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1, customizationText: customNote || item.customizationText }
            : item
        );
      }
      return [...prev, { product, quantity: 1, customizationText: customNote }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToExplore = () => {
    const el = document.getElementById('explore-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F9] text-[#1C1618] flex flex-col font-body selection:bg-[#F9D5D9] selection:text-[#1C1618]">
      
      {/* 1. Header (Habibi Concept 1) */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        deliveryMode={deliveryMode}
      />

      {/* 2. Delivery / Pickup Toggle (Habibi Concept 2) */}
      <DeliveryToggle
        deliveryMode={deliveryMode}
        onToggle={setDeliveryMode}
      />

      <main className="flex-1">
        {/* 3. Hero with 3D auto-rotating slider (Habibi Concept 3) */}
        <Hero onExploreClick={scrollToExplore} />

        {/* 4. Delivering Happiness Banner (Habibi Concept 4) */}
        <DeliveringHappinessBanner />

        {/* 5. Special Offers & News (Habibi Concept 5) */}
        <SpecialOffersBanner />

        {/* 6. Product Grid */}
        <ProductGrid
          products={products}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={handleAddToCart}
        />

        {/* 7. Customization Atelier Section (Extra) */}
        <CustomizationSection />

        {/* 8. Explore Menu Sliding Gallery */}
        <ReelsSection products={products} />

        {/* 9. Our Story / About Section */}
        <AboutSection />

        {/* Apna Order Book Karein Section */}
        <OrderFormSection products={products} />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenPrivacy={() => setPolicyType('privacy')}
        onOpenTerms={() => setPolicyType('terms')}
        onOpenDeliveryInfo={() => setPolicyType('delivery')}
        onOpenAdminLogin={() => setIsAdminLoginOpen(true)}
      />

      {/* Shopping Basket Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        deliveryMode={deliveryMode}
        onToggleDelivery={setDeliveryMode}
      />

      {/* Product Quick View & Customization Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Auth / Parcel Tracking Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Policy and Delivery Terms Modal */}
      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />

      {/* Floating Bottom-Right Pink WhatsApp Button with Pulse Animation */}
      <FloatingWhatsApp />

      {/* Admin Login & Admin Panel */}
      <AdminPanel
        isLoginOpen={isAdminLoginOpen}
        onCloseLogin={() => setIsAdminLoginOpen(false)}
        products={products}
        onAddProduct={handleAddProduct}
        onDeleteProduct={handleDeleteProduct}
      />

    </div>
  );
}
