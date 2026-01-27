import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  openAccordion: string | null;
  setOpenAccordion: (value: string | null) => void;
}

const faqs = [
  { 
    q: 'Electingo kya hai?', 
    a: 'Electingo natural supplement hai jo mardon ki energy, stamina, vitality aur performance ko support karta hai. Roz 1 tablet.' 
  },
  { 
    q: 'Is mein kya ingredients hain?', 
    a: 'L-Carnitine 40mg, L-Arginine 100mg, Tribulus Terrestris 250mg, Yohimbine 15mg, Panax Ginseng 50mg, Zinc 5mg, Ginkgo Biloba 50mg, Ashwagandha 60mg, Choline Bitartrate 40mg, Pine Bark Extract 40mg.' 
  },
  { 
    q: 'Yeh kya karta hai?', 
    a: 'Din bhar energy deta hai, stamina barhata hai, blood flow behtar karta hai, thakawat aur stress kam karta hai, natural taur pe testosterone support karta hai.' 
  },
  { 
    q: 'Roz kitni tablet?', 
    a: 'Roz 1 tablet pani ke saath, breakfast ke baad. Zyada mat lein.' 
  },
  { 
    q: 'Kitne din mein farq mehsoos hoga?', 
    a: '7-14 din mein zyada energy aur stamina. 4-6 weeks regular use se best results.' 
  },
  { 
    q: 'Safe hai? Side effects?', 
    a: 'Bilkul natural. Bohat kam logon ko halka pet kharab ho sakta hai khali pet lene se. Normal use mein safe.' 
  },
  { 
    q: 'Form 7 approved hai?', 
    a: 'Haan, fully Form 7 approved aur 21st Century Pharma Co. banati hai.' 
  },
  { 
    q: 'Doctor se baat karni paregi?', 
    a: 'Bilkul nahi. Ghar baithe order karo — koi prescription nahi, koi clinic nahi.' 
  },
  { 
    q: 'Koi jaanega kya order kiya?', 
    a: '100% private. Plain brown box, bahar kuch nahi likha, COD available.' 
  },
  { 
    q: 'Price kya hai?', 
    a: '1 bottle (20 tablets) = Rs. 2,500\n2 bottles = Rs. 4,500 (Rs. 500 save)\nPoora Pakistan free delivery.' 
  },
  { 
    q: 'Kon use kar sakta hai?', 
    a: '25-55 saal ke mard jo thakawat mehsoos karte hain, stamina kam hai ya vitality support chahte hain.' 
  },
  { 
    q: 'Dusri dawaiyon ke saath chal sakti hai?', 
    a: 'Haan, lekin BP, heart ya sugar ki dawai chal rahi ho to ek baar doctor se pooch lein.' 
  },
  { 
    q: 'Halal hai?', 
    a: 'Sab ingredients halal certified hain.' 
  },
  { 
    q: 'Agar kaam na kare to?', 
    a: '7 din money-back guarantee. WhatsApp karo, full refund.' 
  },
  { 
    q: 'Order kaise karun?', 
    a: 'mensconfidence.pk pe jaen → cart mein add → COD ya card → 2-4 din mein ghar pahunch jayega.' 
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
              <div key={idx} className="w-full bg-gray-100 rounded-xl text-left hover:bg-gray-200 transition-colors group">
                <button
                  onClick={() => setOpenAccordion(openAccordion === `faq-${idx}` ? null : `faq-${idx}`)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors group"
                >
                  <h3 className="text-base md:text-lg font-bold text-gray-700 pr-4">{faq.q}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                    openAccordion === `faq-${idx}` ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === `faq-${idx}` ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 mt-0">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
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
              <div key={idx} className="w-full bg-gray-100 rounded-xl text-left hover:bg-gray-200 transition-colors group">
                <button
                  onClick={() => setOpenAccordion(openAccordion === `faq-${idx}` ? null : `faq-${idx}`)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group"
                >
                  <h3 className="text-lg xl:text-xl font-bold text-gray-700 pr-6">{faq.q}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                    openAccordion === `faq-${idx}` ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === `faq-${idx}` ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 mt-0">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
