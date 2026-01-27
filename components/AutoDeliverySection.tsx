import Image from 'next/image';
import Link from 'next/link';

export default function AutoDeliverySection() {
  return (
    <section className="relative bg-[#596359] overflow-hidden">
      <div className="relative min-h-[700px] lg:min-h-[800px]">
        {/* Background Image - Full Coverage */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&h=1080&fit=crop&q=80"
            alt="family with baby on dad's shoulders"
            fill
            className="object-cover"
            unoptimized
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#596359]/90 via-[#596359]/80 to-[#596359]/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-12 lg:py-16 lg:px-12 max-w-2xl">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
            ELECTINGO KO KYUN<br />
            <span className="text-4xl lg:text-5xl xl:text-6xl">Choose</span><br />
            <span className="text-4xl lg:text-5xl xl:text-6xl">Karein</span>
          </h2>
          
          <p className="text-white text-lg lg:text-xl mb-8">
            Apni vitality wapas paen natural tareeqay se.
          </p>

          {/* Benefits with Icons */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#463221] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white text-lg lg:text-xl font-semibold">
                Natural ingredients se bana
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#463221] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white text-lg lg:text-xl font-semibold">
                DRAP approved aur safe
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#463221] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white text-lg lg:text-xl font-semibold">
                Free delivery poore Pakistan mein
              </p>
            </div>
          </div>
        </div>

        {/* Shop Now Button - Left Side on Mobile, Right Side on Desktop */}
        <div className="absolute bottom-8 left-6 lg:left-auto lg:right-12 z-20">
          <Link 
            href="#products" 
            className="inline-block bg-white text-[#463221] py-4 px-12 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl"
          >
            Order Now!
          </Link>
        </div>
      </div>
    </section>
  );
}
