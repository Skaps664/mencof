'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { ShoppingCart, Menu, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-3 px-4">
        <p className="text-sm md:text-base font-semibold">
          Free Shipping on Orders Over $49.99
        </p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left aligned on all screens */}
            <Link 
              href="/" 
              className="text-xl md:text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              MensConfidence.pk
            </Link>
            
            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="/#benefits" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Benefits
              </Link>
              <Link href="/#reviews" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Reviews
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                About
              </Link>
            </div>

            {/* Right Icons - Cart & Menu */}
            <div className="flex items-center gap-3 md:gap-4">
              <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart size={22} className="text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Menu"
              >
                <Menu size={24} className="text-gray-700" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-4">
                <Link 
                  href="/#benefits" 
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Benefits
                </Link>
                <Link 
                  href="/#reviews" 
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reviews
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

