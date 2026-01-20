import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[700px] md:h-[500px] lg:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1641810145320-f7073f837b73"
          alt="Mens Confidence - Natural Supplements"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay - Bottom Center */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-16 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            {/* Subtitle */}
            {/* <p className="text-base md:text-lg font-medium tracking-wide uppercase">
              Premium Natural Supplements for Men
            </p> */}

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Restore Your Confidence Naturally
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Experience the power of nature with our premium blend designed for men's vitality and wellness
            </p>

            {/* CTA Button */}
            {/* <div className="pt-4">
              <Link
                href="/products/mens-confidence-supplement"
                className="inline-flex items-center gap-2 bg-[#70542c] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5c4423] transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Explore
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div> */}
          </div>
        </div>
      </div>

    </section>
  );
}
