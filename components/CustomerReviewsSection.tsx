import { ArrowRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
}

interface CustomerReviewsSectionProps {
  testimonials: Testimonial[];
  activeTestimonial: number;
  nextTestimonial: () => void;
}

export default function CustomerReviewsSection({ testimonials, activeTestimonial, nextTestimonial }: CustomerReviewsSectionProps) {
  return (
    <section className="bg-[#463221] overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Header */}
        <div className="bg-[#463221] py-8 px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            OUR CUSTOMERS LOVE US
          </h2>
          <svg viewBox="0 0 200 20" className="w-48 h-4">
            <path d="M0 10 Q 5 5, 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10 T 70 10 T 80 10 T 90 10 T 100 10" 
              stroke="#f3f2f2" strokeWidth="3" fill="none"/>
          </svg>
        </div>

        {/* Product Image */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-12">
          <div className="container mx-auto px-4">
            <div className="relative max-w-sm mx-auto aspect-square flex items-center justify-center">
              <div className="bg-white/30 rounded-lg w-full h-full flex items-center justify-center">
                <p className="text-gray-500 text-sm">Product Image</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-[#463221] py-12 px-6 relative">
          <div className="container mx-auto max-w-2xl">
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>
            
            <p className="text-white text-lg font-medium mb-8">
              – {testimonials[activeTestimonial].author}
            </p>

            <button 
              onClick={nextTestimonial}
              className="absolute bottom-8 right-8 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center hover:bg-white/20 transition-all group"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2">
        {/* Left Side - Testimonial */}
        <div className="bg-[#8e8e8e] py-16 px-12 flex flex-col justify-center relative">
          <div className="max-w-xl">
            <h2 className="text-3xl xl:text-4xl font-bold text-black mb-4">
              OUR CUSTOMERS LOVE US
            </h2>
            <svg viewBox="0 0 200 20" className="w-56 h-5 mb-12">
              <path d="M0 10 Q 5 5, 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10 T 70 10 T 80 10 T 90 10 T 100 10" 
                stroke="#515151" strokeWidth="4" fill="none"/>
            </svg>

            <blockquote className="text-3xl xl:text-4xl font-bold text-black mb-8 leading-relaxed">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>
            
            <p className="text-black text-xl font-medium">
              – {testimonials[activeTestimonial].author}
            </p>
          </div>

          <button 
            onClick={nextTestimonial}
            className="absolute bottom-12 right-12 w-20 h-20 rounded-full border-4 border-white flex items-center justify-center hover:bg-white/20 transition-all group"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-10 h-10 text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side - Product Image */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-12">
          <div className="relative w-full max-w-lg aspect-square">
            <div className="bg-white/30 rounded-lg w-full h-full flex items-center justify-center">
              <p className="text-gray-500 text-lg">Product Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
