import { useState } from 'react';
import Image from 'next/image';
import { Check, Award } from 'lucide-react';

interface ProductSectionProps {
  product: any;
  activeImage: number;
  setActiveImage: (index: number) => void;
  deliveryOption: string;
  setDeliveryOption: (option: string) => void;
  handleAddToCart: () => void;
}

const deliveryOptions = [
  { id: 'single', label: 'Buy Single', quantity: 1, discount: 0, price: 2400, originalPrice: 2400 },
  { id: 'pack2', label: 'Pack of Two', quantity: 2, discount: 8, price: 4400, originalPrice: 4800 },
  { id: 'pack3', label: 'Pack of Three', quantity: 3, discount: 8, price: 6600, originalPrice: 7200 },
];

export default function ProductSection({
  product,
  activeImage,
  setActiveImage,
  deliveryOption,
  setDeliveryOption,
  handleAddToCart
}: ProductSectionProps) {
  if (!product) return null;

  const images = product.images.edges.map((edge: any) => edge.node);

  return (
    <section className="" id="products">
      <div className="container mx-auto px-4 py-4 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-[500px_1fr] gap-8 lg:gap-12">
            
            {/* Product Info */}
            <div className="space-y-5 lg:order-2">
              {/* Category Badges */}
              {/* <div className='flex flex-row gap-2'>
                <span className="inline-block bg-[#463221] text-white text-xs font-semibold px-3 py-1">
                  20's Child Lock
                </span>
                <span className="inline-block bg-[#463221] text-white text-xs font-semibold px-3 py-1">
                  Adult
                </span>
              </div> */}

              {/* Title & Description */}
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-3 text-center">
                  Electingo
                </h1>
                <p className="text-lg text-gray-700 text-center">
                  Premium formula with amino acids, herbal extracts, and essential minerals to support male vitality, energy, stamina, and reproductive health.
                </p>
              </div>

              {/* Product Images - Mobile */}
              <div className="lg:hidden">
                <div className="relative h-[350px]  group">
                  {images[activeImage] && (
                    <Image
                      src={images[activeImage].url}
                      alt={product.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  )}
                  
                  {/* Navigation Buttons */}
                  {images.length > 1 && (
                    <>
                      {/* Left Button */}
                      <button
                        onClick={() => setActiveImage(activeImage === 0 ? images.length - 1 : activeImage - 1)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                        aria-label="Previous image"
                      >
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      {/* Right Button */}
                      <button
                        onClick={() => setActiveImage(activeImage === images.length - 1 ? 0 : activeImage + 1)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                        aria-label="Next image"
                      >
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {activeImage + 1} / {images.length}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Delivery Options */}
              <div className="space-y-2">
                {deliveryOptions.map((option, index) => (
                  <label
                    key={option.id}
                    className={`block relative cursor-pointer transition-all ${
                      deliveryOption === option.id
                        ? 'border-black bg-[#345035]'
                        : 'border-gray-300 bg-white hover:border-black'
                    }`}
                  >
                    <input
                      type="radio"
                      name="delivery"
                      value={option.id}
                      checked={deliveryOption === option.id}
                      onChange={(e) => setDeliveryOption(e.target.value)}
                      className="sr-only"
                    />
                    
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-5 h-5 border-2 flex items-center justify-center ${
                          deliveryOption === option.id ? 'border-white bg-white' : 'border-gray-400'
                        }`}>
                          {deliveryOption === option.id && (
                            <div className="w-3 h-3 bg-black"></div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className={`font-bold text-base ${deliveryOption === option.id ? 'text-white' : 'text-gray-900'}`}>
                              {option.label}
                            </p>
                            {index === 2 && (
                              <span className="bg-[#A49D61] text-white text-xs px-2 py-0.5 uppercase">
                                Best
                              </span>
                            )}
                            {index === 1 && (
                              <span className="bg-[#A49D61] text-white text-xs px-2 py-0.5 uppercase">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className={`text-sm mt-0.5 ${deliveryOption === option.id ? 'text-gray-300' : 'text-gray-500'}`}>
                            {option.quantity} bottle{option.quantity > 1 ? 's' : ''} • {option.quantity * 20} tablets
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className={`text-xl font-black ${deliveryOption === option.id ? 'text-white' : 'text-gray-900'}`}>
                          ₨{option.price.toLocaleString()}
                        </p>
                        {option.discount > 0 && (
                          <p className={`text-xs ${deliveryOption === option.id ? 'text-gray-400' : 'text-gray-400'}`}>
                            <span className="line-through">₨{option.originalPrice.toLocaleString()}</span>
                            <span className={`ml-2 font-bold ${deliveryOption === option.id ? 'text-yellow-400' : 'text-green-600'}`}>
                              -{option.discount}%
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#596359]  text-white py-6 px-8  text-xl hover:bg-[#A49D61] transition-colors flex items-center justify-between border-2 border-black"
              >
                <span className="uppercase tracking-wide text-center">Add to Cart</span>
                <span className="text-2xl font-black">
                  ₨{deliveryOptions.find(opt => opt.id === deliveryOption)?.price.toLocaleString()}
                </span>
              </button>

              {/* Free Shipping */}
              {/* <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-green-800 font-semibold text-center flex items-center justify-center gap-2">
                  <span className="text-xl">✓</span> Free Nationwide Shipping • No Hidden Fees
                </p>
              </div> */}

              {/* Pack Benefits */}
              {/* <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <p className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-xl">🎁</span> Your purchase includes:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-4 h-4 text-[#70542c]" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">Free delivery</strong> across Pakistan with tracking
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-4 h-4 text-[#70542c]" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">Secure packaging</strong> with discreet delivery
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-4 h-4 text-[#70542c]" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">Premium quality</strong> scientifically formulated
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Product Images - Desktop */}
            <div className="relative lg:order-1 hidden lg:block">
              {/* Award Badge */}
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full p-4 shadow-lg">
                <Award className="w-8 h-8" />
                <div className="text-center mt-1">
                  <p className="text-xs font-bold leading-tight">Clean<br/>Label<br/>Award</p>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative h-[450px] bg-white group">
                {images[activeImage] && (
                  <Image
                    src={images[activeImage].url}
                    alt={product.title}
                    fill
                    className="object-contain p-8"
                    priority
                  />
                )}
                
                {/* Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    {/* Left Button */}
                    <button
                      onClick={() => setActiveImage(activeImage === 0 ? images.length - 1 : activeImage - 1)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    {/* Right Button */}
                    <button
                      onClick={() => setActiveImage(activeImage === images.length - 1 ? 0 : activeImage + 1)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {activeImage + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
