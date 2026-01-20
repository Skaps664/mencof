interface FAQSectionProps {
  openAccordion: string | null;
  setOpenAccordion: (value: string | null) => void;
}

const faqs = [
  { 
    q: 'Do I need to refrigerate your Probiotic products? Does that help survivability?', 
    a: 'Our probiotics are shelf-stable and do not require refrigeration. They are formulated to maintain potency at room temperature.' 
  },
  { 
    q: 'What is the recommended age minimum of this product?', 
    a: 'This product is recommended for adults 18 years and older.' 
  },
  { 
    q: 'Can this product be paired with other SmartyPants products?', 
    a: 'Yes, this product can be safely combined with other SmartyPants supplements.' 
  },
  { 
    q: 'Do SmartyPants gummies contain gelatin? Which formulas are vegetarian?', 
    a: 'Our gummies are made with pectin, not gelatin, making them suitable for vegetarians.' 
  },
];

export default function FAQSection({ openAccordion, setOpenAccordion }: FAQSectionProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#463221] text-center mb-12">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <button
                key={idx}
                onClick={() => setOpenAccordion(openAccordion === `faq-${idx}` ? null : `faq-${idx}`)}
                className="w-full bg-gray-100 rounded-xl p-5 md:p-6 flex items-center justify-between text-left hover:bg-gray-200 transition-colors group"
              >
                <h3 className="text-base md:text-lg font-bold text-gray-700 pr-4">{faq.q}</h3>
                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#345035] flex items-center justify-center transition-transform ${
                  openAccordion === `faq-${idx}` ? 'rotate-45' : ''
                }`}>
                  <span className="text-white text-2xl md:text-3xl font-light">+</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-[300px_1fr] gap-12 max-w-7xl mx-auto">
          <div>
            <h2 className="text-5xl xl:text-6xl font-bold text-[#463221] leading-tight sticky top-24">
              Frequently<br />Asked<br />Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <button
                key={idx}
                onClick={() => setOpenAccordion(openAccordion === `faq-${idx}` ? null : `faq-${idx}`)}
                className="w-full bg-gray-100 rounded-xl p-6 flex items-center justify-between text-left hover:bg-gray-200 transition-colors group"
              >
                <h3 className="text-lg xl:text-xl font-bold text-gray-700 pr-6">{faq.q}</h3>
                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-[#345035] to-orange-500 flex items-center justify-center transition-transform ${
                  openAccordion === `faq-${idx}` ? 'rotate-45' : ''
                }`}>
                  <span className="text-white text-3xl font-light">+</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
