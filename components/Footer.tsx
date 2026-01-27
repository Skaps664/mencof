'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Music, Plus } from 'lucide-react';

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

        {/* WhatsApp Button - Fixed Position */}
        <a
          href="https://wa.me/923429029421"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center z-50"
          aria-label="Contact us on WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </footer>
    </>
  );
}
