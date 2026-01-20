import { ChevronDown } from 'lucide-react';

interface ProductDetailsAccordionProps {
  openAccordion: string | null;
  setOpenAccordion: (value: string | null) => void;
}

export default function ProductDetailsAccordion({ openAccordion, setOpenAccordion }: ProductDetailsAccordionProps) {
  return (
    <section className="py-4 md:py-4 bg-[#A5A991]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Product Details</h2>
        
        <div className="space-y-4">
          {/* Overview */}
          <div className="w-full bg-gray-100 rounded-xl text-left hover:bg-gray-200 transition-colors group">
            <button
              onClick={() => setOpenAccordion(openAccordion === 'overview' ? null : 'overview')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">Overview</h3>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                openAccordion === 'overview' ? 'rotate-180' : ''
              }`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${
              openAccordion === 'overview' ? 'max-h-96' : 'max-h-0'
            }`}>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100">
                <p className="mb-4 mt-4">
                  Electingo Tablet is a scientifically formulated blend of amino acids, herbal extracts, antioxidants, and essential minerals designed to support male vitality, energy, stamina, and reproductive health.
                </p>
                <p>
                  The synergistic combination improves blood circulation, testosterone support, nerve function, and cellular energy, while reducing fatigue and stress. Clinically, these ingredients are known to enhance erectile function, sperm quality, and physical performance, making Electingo a comprehensive natural performance enhancer.
                </p>
              </div>
            </div>
          </div>

          {/* Supplement Facts */}
          <div className="w-full bg-gray-100 rounded-xl text-left hover:bg-gray-200 transition-colors group">
            <button
              onClick={() => setOpenAccordion(openAccordion === 'facts' ? null : 'facts')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">Supplement Facts</h3>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                openAccordion === 'facts' ? 'rotate-180' : ''
              }`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${
              openAccordion === 'facts' ? 'max-h-[600px]' : 'max-h-0'
            }`}>
              <div className="px-6 pb-6 border-t border-gray-100 mt-0">
                <div className="space-y-2 text-sm md:text-base mt-4">
                  <div className="grid grid-cols-2 gap-4 pb-3 mb-3 border-b-2 border-gray-300">
                    <p className="font-bold text-gray-900">Each tablet contains:</p>
                    <p className="text-right font-bold text-gray-900">Amount</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 hover:bg-gray-50">
                    <p className="text-gray-700">L-Carnitine</p>
                    <p className="text-right text-gray-900 font-medium">40 mg</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 hover:bg-gray-50">
                    <p className="text-gray-700">L-Arginine</p>
                    <p className="text-right text-gray-900 font-medium">100 mg</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 hover:bg-gray-50">
                    <p className="text-gray-700">Tribulus terrestris</p>
                    <p className="text-right text-gray-900 font-medium">50 mg</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 hover:bg-gray-50">
                    <p className="text-gray-700">Yohimbine</p>
                    <p className="text-right text-gray-900 font-medium">15 mg</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 hover:bg-gray-50">
                    <p className="text-gray-700">Panax ginseng</p>
                    <p className="text-right text-gray-900 font-medium">50 mg</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 hover:bg-gray-50">
                    <p className="text-gray-700">Zinc</p>
                    <p className="text-right text-gray-900 font-medium">5 mg</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 hover:bg-gray-50">
                    <p className="text-gray-700">Ginkgo biloba</p>
                    <p className="text-right text-gray-900 font-medium">50 mg</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 hover:bg-gray-50">
                    <p className="text-gray-700">Withania somnifera (Ashwagandha)</p>
                    <p className="text-right text-gray-900 font-medium">60 mg</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 hover:bg-gray-50">
                    <p className="text-gray-700">Choline bitartrate</p>
                    <p className="text-right text-gray-900 font-medium">40 mg</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 hover:bg-gray-50">
                    <p className="text-gray-700">Pine bark extract</p>
                    <p className="text-right text-gray-900 font-medium">40 mg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="w-full bg-gray-100 rounded-xl text-left hover:bg-gray-200 transition-colors group">
            <button
              onClick={() => setOpenAccordion(openAccordion === 'usage' ? null : 'usage')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">How to Use</h3>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                openAccordion === 'usage' ? 'rotate-180' : ''
              }`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${
              openAccordion === 'usage' ? 'max-h-96' : 'max-h-0'
            }`}>
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="space-y-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Dosage:</p>
                    <p className="text-gray-700">Take 1 tablet daily or as directed by your healthcare professional.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Best Time:</p>
                    <p className="text-gray-700">Take with a meal for optimal absorption.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Storage:</p>
                    <p className="text-gray-700">Store at cool and dry place. Keep out of the reach of children. Do not keep in direct sunlight.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
