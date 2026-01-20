'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-[#596359] shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left aligned */}
          <Link href="/">
            <Image 
              src="/menconf-log-res-2.png" 
              alt="MensConfidence.pk Logo" 
              width={160} 
              height={50}
              style={{ height: 'auto' }}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          
          {/* Right side - Navigation & Cart */}
          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#benefits" className="text-gray-900 hover:text-[#70542c] transition-colors font-medium text-sm">
                Benefits
              </Link>
              <Link href="/#reviews" className="text-gray-900 hover:text-[#70542c] transition-colors font-medium text-sm">
                Reviews
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-[#70542c] transition-colors font-medium text-sm">
                Contact
              </Link>
            </div>

            {/* Cart Icon */}
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingBag size={24} className="text-white" />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#345035] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

