'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Music, Plus, HelpCircle } from 'lucide-react';

export default function Footer() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <>
      {/* Footer */}
      <footer className="bg-[#777777]/40 text-black">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl mx-auto">
            {/* About Us Accordion */}
            <div className="border-b border-white/20 mb-4">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'footer-about' ? null : 'footer-about')}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <h3 className="text-2xl md:text-3xl font-bold">About Us</h3>
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center transition-transform ${
                  openAccordion === 'footer-about' ? 'rotate-45' : ''
                }`}>
                  <Plus className="w-6 h-6" />
                </div>
              </button>
              {openAccordion === 'footer-about' && (
                <div className="pb-6 text-white/90 leading-relaxed">
                  <p>MensConfidence.pk is dedicated to providing premium health and wellness products for men across Pakistan. Our scientifically formulated supplements support male vitality, energy, and overall well-being.</p>
                </div>
              )}
            </div>

            {/* Support Accordion */}
            <div className="border-b border-white/20 mb-8">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'footer-support' ? null : 'footer-support')}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <h3 className="text-2xl md:text-3xl font-bold">Support</h3>
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center transition-transform ${
                  openAccordion === 'footer-support' ? 'rotate-45' : ''
                }`}>
                  <Plus className="w-6 h-6" />
                </div>
              </button>
              {openAccordion === 'footer-support' && (
                <div className="pb-6 space-y-3">
                  <Link href="#" className="block text-white/90 hover:text-white transition-colors">Contact Us</Link>
                  <Link href="#" className="block text-white/90 hover:text-white transition-colors">FAQs</Link>
                  <Link href="#" className="block text-white/90 hover:text-white transition-colors">Shipping Information</Link>
                  <Link href="#" className="block text-white/90 hover:text-white transition-colors">Returns & Refunds</Link>
                </div>
              )}
            </div>

            {/* Follow Us */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Follow Us</h3>
              <div className="flex items-center justify-center gap-8 md:gap-12">
                <Link href="#" className="hover:scale-110 transition-transform" aria-label="Facebook">
                  <Facebook className="w-8 h-8 md:w-10 md:h-10" />
                </Link>
                <Link href="#" className="hover:scale-110 transition-transform" aria-label="Instagram">
                  <Instagram className="w-8 h-8 md:w-10 md:h-10" />
                </Link>
                <Link href="#" className="hover:scale-110 transition-transform" aria-label="TikTok">
                  <Music className="w-8 h-8 md:w-10 md:h-10" />
                </Link>
              </div>
            </div>

            {/* Legal Links */}
            <div className="text-center space-y-3 mb-8">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:text-base">
                <Link href="#" className="hover:underline">Privacy Policy</Link>
                <Link href="#" className="hover:underline">Terms of Use</Link>
              </div>
              <Link href="#" className="block hover:underline text-sm md:text-base">Consumer Health Data Privacy Policy</Link>
              <Link href="#" className="block hover:underline text-sm md:text-base">Limit Use of My Sensitive Personal Information</Link>
              <Link href="#" className="block hover:underline text-sm md:text-base flex items-center justify-center gap-2">
                <span className="text-blue-300">🔒</span> AdChoices - Do not sell or Share
              </Link>
              <Link href="#" className="block hover:underline text-sm md:text-base">Do Not Sell or Share My Personal Information</Link>
              <Link href="#" className="block hover:underline text-sm md:text-base">Terms and Conditions for TikTok Creators</Link>
            </div>

            {/* Health Disclaimer Box */}
            <div className="border-2 border-white rounded-lg p-4 md:p-6 mb-8 text-center">
              <p className="text-sm md:text-base font-semibold mb-2">
                L-Carnitine, L-Arginine, and Herbal Extracts Support Male Vitality*
              </p>
              <p className="text-xs md:text-sm">
                *These statements have not been evaluated by the Food and Drug Administration. 
                These products are not intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>

            {/* Copyright & Legal */}
            <div className="text-center space-y-4 text-sm md:text-base">
              <p>© {new Date().getFullYear()}, MensConfidence.pk. All Rights Reserved.</p>
              <p className="text-xs md:text-sm">
                This website is directed only to Pakistani consumers for products and services of MensConfidence.pk.
              </p>
              <p className="text-xs md:text-sm">
                This website is not directed to consumers outside of Pakistan.
              </p>
            </div>
          </div>
        </div>

        {/* Help Button - Fixed Position */}
        <button className="fixed bottom-6 right-6 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 z-50">
          <HelpCircle className="w-6 h-6" />
          Help
        </button>
      </footer>
    </>
  );
}
