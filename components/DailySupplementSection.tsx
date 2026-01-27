export default function DailySupplementSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">
            {/* Left Side - Title */}
            <div className="lg:pr-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#345035] leading-tight mb-4">
                Key Ingredients
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-[#345035] uppercase">
                INCLUDING
              </p>
            </div>

            {/* Right Side - Features */}
            <div className="space-y-6 md:space-y-8">
              {/* DE111 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-slate-700 rounded-full flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 50 50" className="w-10 h-10 md:w-12 md:h-12 text-white fill-current">
                    <path d="M25 5 C15 5 10 15 10 25 C10 30 15 45 25 45 C35 45 40 30 40 25 C40 15 35 5 25 5 M25 10 C30 10 35 15 35 25 C35 28 32 38 25 40 C18 38 15 28 15 25 C15 15 20 10 25 10" />
                    <circle cx="20" cy="20" r="2"/>
                    <circle cx="30" cy="22" r="1.5"/>
                    <ellipse cx="25" cy="30" rx="8" ry="5" opacity="0.6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    L-Carnitine 40mg
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg">
                    Energy production aur fat metabolism ko support karta hai*
                  </p>
                </div>
              </div>

              {/* LactoSpore */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-[#70542c] rounded-full flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 50 50" className="w-10 h-10 md:w-12 md:h-12 text-white fill-current">
                    <path d="M25 5 C15 5 10 15 10 25 C10 30 15 45 25 45 C35 45 40 30 40 25 C40 15 35 5 25 5 M25 10 C30 10 35 15 35 25 C35 28 32 38 25 40 C18 38 15 28 15 25 C15 15 20 10 25 10" />
                    <circle cx="22" cy="18" r="2"/>
                    <circle cx="28" cy="20" r="1.5"/>
                    <circle cx="20" cy="28" r="1.5"/>
                    <ellipse cx="27" cy="32" rx="6" ry="4" opacity="0.6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    L-Arginine 100mg
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg">
                    Blood flow aur nitric oxide production ko behtar karta hai*
                  </p>
                </div>
              </div>

              {/* M-Gard */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 50 50" className="w-10 h-10 md:w-12 md:h-12 text-white fill-current">
                    <path d="M25 5 L15 10 L15 22 C15 32 20 40 25 45 C30 40 35 32 35 22 L35 10 Z M25 10 L30 12 L30 22 C30 28 27 35 25 38 C23 35 20 28 20 22 L20 12 Z" />
                    <path d="M25 18 L22 22 L25 26 L28 22 Z" opacity="0.8"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Tribulus Terrestris 250mg
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg">
                    Natural testosterone support aur vitality ko barhata hai*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
