import { ArrowRight } from 'lucide-react';

interface FinalCTASectionProps {
  handleAddToCart: () => void;
}

export default function FinalCTASection({ handleAddToCart }: FinalCTASectionProps) {
  return (
    <section className="bg-[#463221] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Tayyar hain farq mehsoos karne ke liye?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Hazaaron khush customers ke saath join karein poore Pakistan mein
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-white text-[#70542c] px-12 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center gap-2"
        >
          Abhi cart mein add karein <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
