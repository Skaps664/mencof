'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Star, Shield, Truck, ArrowRight, ChevronDown, Award, Facebook, Instagram, Music, Plus, HelpCircle } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { graphQLClient, GET_PRODUCTS_QUERY, CREATE_CART_QUERY, ADD_TO_CART_QUERY } from '@/lib/shopify-graphql';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const [product, setProduct] = useState<any>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [deliveryOption, setDeliveryOption] = useState('monthly');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { addItem, cartId, setCartId, setCheckoutUrl } = useCartStore();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data: any = await graphQLClient.request(GET_PRODUCTS_QUERY, { first: 1 });
        const firstProduct = data.products.edges[0]?.node;
        setProduct(firstProduct);
        if (firstProduct?.variants?.edges?.length > 0) {
          setSelectedVariant(firstProduct.variants.edges[0].node);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    fetchProduct();
  }, []);

  const handleAddToCart = async () => {
    if (!selectedVariant || !product) {
      toast.error('Please select a variant');
      return;
    }

    try {
      const cartItem = {
        id: Date.now().toString(),
        variantId: selectedVariant.id,
        productId: product.id,
        title: `${product.title} - ${selectedVariant.title}`,
        price: parseFloat(selectedVariant.priceV2.amount),
        quantity,
        image: product.images.edges[0]?.node.url,
      };

      addItem(cartItem);

      if (!cartId) {
        const createData: any = await graphQLClient.request(CREATE_CART_QUERY, {
          input: { lines: [{ merchandiseId: selectedVariant.id, quantity }] },
        });
        setCartId(createData.cartCreate.cart.id);
        setCheckoutUrl(createData.cartCreate.cart.checkoutUrl);
      } else {
        await graphQLClient.request(ADD_TO_CART_QUERY, {
          cartId,
          lines: [{ merchandiseId: selectedVariant.id, quantity }],
        });
      }

      toast.success('Added to cart!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to add to cart');
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const images = product.images.edges.map((edge: any) => edge.node);
  const price = parseFloat(selectedVariant?.priceV2.amount || 0);

  const deliveryOptions = [
    { id: 'monthly', label: 'Monthly Delivery', months: 1, discount: 10, price: price * 0.9 },
    { id: '2month', label: '2-Month Delivery', months: 2, discount: 15, price: price * 0.85 },
    { id: '3month', label: '3-Month Delivery', months: 3, discount: 20, price: price * 0.8 },
  ];

  const testimonials = [
    {
      quote: "I've been using probiotic supplements to help with digestive issues for a long time. These are by far the best tasting I've had yet!",
      author: "EndUser"
    },
    {
      quote: "These taste great! We love smarty pants vitamins in our house and these live up to our hype.",
      author: "Shannon K."
    },
    {
      quote: "Amazing product! Has really helped with my energy levels and overall health.",
      author: "Ahmed M."
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="bg-white">
      <Toaster position="top-right" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-[500px_1fr] gap-8 lg:gap-12">
              {/* Product Info - Shows first on mobile */}
              <div className="space-y-5 lg:order-2">
                {/* Category Badge */}
                <div>
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Men's Health
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Electingo Tablets
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Premium formula with amino acids, herbal extracts, and essential minerals to support male vitality, energy, stamina, and reproductive health.
                  </p>
                </div>

                {/* Delivery Options */}
                <div className="space-y-3">
                  {deliveryOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`block relative cursor-pointer border-2 rounded-xl p-4 transition-all ${
                        deliveryOption === option.id
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300 bg-white'
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            deliveryOption === option.id ? 'border-purple-600' : 'border-gray-300'
                          }`}>
                            {deliveryOption === option.id && (
                              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{option.label}</p>
                            <p className="text-sm text-gray-600">
                              {option.months}-month supply delivered every {option.months} month{option.months > 1 ? 's' : ''}.<br/>
                              Free shipping. Pause or cancel anytime.
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          {option.discount > 0 && (
                            <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded mb-1">
                              Save {option.discount}%
                            </span>
                          )}
                          <p className="text-2xl font-bold text-gray-900">
                            PKR {option.price.toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500 line-through">
                            PKR {price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Add to Cart
                </button>

                {/* One-time Purchase */}
                <div className="text-center">
                  <button className="text-purple-600 font-medium hover:underline">
                    Buy Once for PKR {price.toFixed(2)} + PKR 99 shipping
                  </button>
                </div>

                {/* Subscription Benefits */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-5 space-y-3">
                  <p className="font-semibold text-gray-900 mb-3">Your subscription includes:</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-sm text-gray-700">
                        <strong>Time savings and convenience</strong> of automatic deliveries
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-sm text-gray-700">
                        <strong>Exclusive discounts</strong> with Subscribe & Save pricing
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-sm text-gray-700">
                        <strong>Benefits of wellness support</strong> and consistent vitamin routine
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Images - Shows second on mobile */}
              <div className="relative lg:order-1">
              {/* Award Badge */}
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full p-4 shadow-lg">
                <Award className="w-8 h-8" />
                <div className="text-center mt-1">
                  <p className="text-xs font-bold leading-tight">Clean<br/>Label<br/>Award</p>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative h-[350px] md:h-[450px] bg-gradient-to-br from-purple-100 to-white rounded-2xl overflow-hidden shadow-lg">
                {images[activeImage] && (
                  <Image
                    src={images[activeImage].url}
                    alt={product.title}
                    fill
                    className="object-contain p-8"
                    priority
                  />
                )}
              </div>

              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {images.slice(0, 4).map((img: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative h-20 w-20 bg-white rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                        idx === activeImage ? 'border-purple-600 shadow-md' : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <Image src={img.url} alt={`Thumbnail ${idx + 1}`} fill className="object-contain p-2" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Accordion */}
      <section className="bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-3">
            {/* Overview */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'overview' ? null : 'overview')}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-700">Overview</h3>
                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center transition-transform ${
                  openAccordion === 'overview' ? 'rotate-45' : ''
                }`}>
                  <span className="text-white text-2xl md:text-3xl font-light">+</span>
                </div>
              </button>
              {openAccordion === 'overview' && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Electingo Tablet is a scientifically formulated blend of amino acids, herbal extracts, antioxidants, and essential minerals designed to support male vitality, energy, stamina, and reproductive health.
                  </p>
                  <p>
                    The synergistic combination improves blood circulation, testosterone support, nerve function, and cellular energy, while reducing fatigue and stress. Clinically, these ingredients are known to enhance erectile function, sperm quality, and physical performance, making Electingo a comprehensive natural performance enhancer.
                  </p>
                </div>
              )}
            </div>

            {/* Supplement Facts */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'facts' ? null : 'facts')}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-700">Supplement Facts</h3>
                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center transition-transform ${
                  openAccordion === 'facts' ? 'rotate-45' : ''
                }`}>
                  <span className="text-white text-2xl md:text-3xl font-light">+</span>
                </div>
              </button>
              {openAccordion === 'facts' && (
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <div className="space-y-3 text-sm md:text-base">
                    <div className="grid grid-cols-2 gap-4 pb-2 border-b border-gray-200">
                      <p className="font-semibold text-gray-900">Each tablet contains:</p>
                      <p className="text-right font-semibold text-gray-900">Amount</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <p className="text-gray-700">L-Carnitine</p>
                      <p className="text-right text-gray-700">40 mg</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <p className="text-gray-700">L-Arginine</p>
                      <p className="text-right text-gray-700">100 mg</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <p className="text-gray-700">Tribulus terrestris</p>
                      <p className="text-right text-gray-700">50 mg</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <p className="text-gray-700">Yohimbine</p>
                      <p className="text-right text-gray-700">15 mg</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <p className="text-gray-700">Panax ginseng</p>
                      <p className="text-right text-gray-700">50 mg</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <p className="text-gray-700">Zinc</p>
                      <p className="text-right text-gray-700">5 mg</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <p className="text-gray-700">Ginkgo biloba</p>
                      <p className="text-right text-gray-700">50 mg</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <p className="text-gray-700">Withania somnifera (Ashwagandha)</p>
                      <p className="text-right text-gray-700">60 mg</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <p className="text-gray-700">Choline bitartrate</p>
                      <p className="text-right text-gray-700">40 mg</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <p className="text-gray-700">Pine bark extract</p>
                      <p className="text-right text-gray-700">40 mg</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* How to Use */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'usage' ? null : 'usage')}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-700">How to Use</h3>
                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center transition-transform ${
                  openAccordion === 'usage' ? 'rotate-45' : ''
                }`}>
                  <span className="text-white text-2xl md:text-3xl font-light">+</span>
                </div>
              </button>
              {openAccordion === 'usage' && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-700 leading-relaxed">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Dosage:</p>
                      <p>Take 1 tablet daily or as directed by your healthcare professional.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Best Time:</p>
                      <p>Take with a meal for optimal absorption.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Storage:</p>
                      <p>Store at cool and dry place. Keep out of the reach of children. Do not keep in direct sunlight.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Badges */}
      <section className="bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* Clean Label Award */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 relative">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  <path d="M60 10 L65 35 L90 35 L70 50 L78 75 L60 62 L42 75 L50 50 L30 35 L55 35 Z" fill="#D4AF37" opacity="0.3"/>
                  <circle cx="60" cy="60" r="45" fill="none" stroke="#C4A000" strokeWidth="2"/>
                  <text x="60" y="50" textAnchor="middle" className="text-xs md:text-sm font-bold fill-amber-700">clean</text>
                  <text x="60" y="65" textAnchor="middle" className="text-xs md:text-sm font-bold fill-amber-700">label</text>
                  <text x="60" y="85" textAnchor="middle" className="text-[10px] md:text-xs fill-amber-600">PURITY AWARD</text>
                </svg>
              </div>
            </div>

            {/* Certified Vegan */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <div className="text-4xl md:text-5xl font-bold">V</div>
                  <div className="text-[10px] md:text-xs font-semibold mt-1">CERTIFIED</div>
                  <div className="text-[10px] md:text-xs font-semibold">VEGAN</div>
                </div>
              </div>
            </div>

            {/* NON GMO */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg flex items-center justify-center shadow-lg p-3">
                <div className="text-center">
                  <div className="text-2xl mb-1">🦋</div>
                  <div className="text-blue-600 font-bold text-xs md:text-sm">NON GMO</div>
                  <div className="text-blue-600 font-bold text-[10px] md:text-xs">Project</div>
                  <div className="text-blue-600 font-bold text-xs md:text-sm">VERIFIED</div>
                </div>
              </div>
            </div>

            {/* NSF */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-white text-center">
                  <div className="text-5xl md:text-6xl font-bold">NSF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Supplement Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">
              {/* Left Side - Title */}
              <div className="lg:pr-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-700 leading-tight mb-4">
                  Daily Supplement
                </h2>
                <p className="text-2xl md:text-3xl font-bold text-yellow-500 uppercase">
                  INCLUDING
                </p>
              </div>

              {/* Right Side - Features */}
              <div className="space-y-6 md:space-y-8">
                {/* DE111 */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 50 50" className="w-10 h-10 md:w-12 md:h-12 text-white fill-current">
                      <path d="M25 5 C15 5 10 15 10 25 C10 30 15 45 25 45 C35 45 40 30 40 25 C40 15 35 5 25 5 M25 10 C30 10 35 15 35 25 C35 28 32 38 25 40 C18 38 15 28 15 25 C15 15 20 10 25 10" />
                      <circle cx="20" cy="20" r="2"/>
                      <circle cx="30" cy="22" r="1.5"/>
                      <ellipse cx="25" cy="30" rx="8" ry="5" opacity="0.6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-pink-700 mb-2">
                      Clinically-Studied DE111<sup>®</sup>
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg">
                      Supports a Balanced Gut Microbiome & Immune System<sup>*</sup>
                    </p>
                  </div>
                </div>

                {/* LactoSpore */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 50 50" className="w-10 h-10 md:w-12 md:h-12 text-white fill-current">
                      <path d="M25 5 C15 5 10 15 10 25 C10 30 15 45 25 45 C35 45 40 30 40 25 C40 15 35 5 25 5 M25 10 C30 10 35 15 35 25 C35 28 32 38 25 40 C18 38 15 28 15 25 C15 15 20 10 25 10" />
                      <circle cx="22" cy="18" r="2"/>
                      <circle cx="28" cy="20" r="1.5"/>
                      <circle cx="20" cy="28" r="1.5"/>
                      <ellipse cx="27" cy="32" rx="6" ry="4" opacity="0.6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-pink-700 mb-2">
                      Clinically-Studied LactoSpore<sup>®</sup>
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg">
                      for Digestive Health<sup>*</sup>
                    </p>
                  </div>
                </div>

                {/* M-Gard */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 50 50" className="w-10 h-10 md:w-12 md:h-12 text-white fill-current">
                      <path d="M25 5 L15 10 L15 22 C15 32 20 40 25 45 C30 40 35 32 35 22 L35 10 Z M25 10 L30 12 L30 22 C30 28 27 35 25 38 C23 35 20 28 20 22 L20 12 Z" />
                      <path d="M25 18 L22 22 L25 26 L28 22 Z" opacity="0.8"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-pink-700 mb-2">
                      Clinically-Studied M-Gard<sup>®</sup>
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg">
                      Prebiotics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Flavors Section */}
      <section className="bg-gradient-to-br from-pink-600 to-pink-700 relative overflow-hidden py-12 md:py-20">
        {/* Decorative Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
              Natural Flavors,<br />Delicious Taste
            </h2>

            {/* Image Placeholder - Mobile */}
            <div className="relative mx-auto max-w-md mb-8">
              <div className="bg-pink-700/30 rounded-2xl aspect-[4/5] flex items-center justify-center">
                <p className="text-white/60 text-sm">Image Placeholder</p>
              </div>
              
              {/* Flavor Badge - Overlapping */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex flex-col items-center justify-center shadow-2xl">
                <svg viewBox="0 0 80 80" className="w-16 h-16 mb-2">
                  <g fill="#8B5CF6">
                    <circle cx="20" cy="30" r="8"/>
                    <circle cx="32" cy="25" r="8"/>
                    <circle cx="44" cy="30" r="8"/>
                    <circle cx="26" cy="42" r="8"/>
                    <circle cx="38" cy="42" r="8"/>
                    <circle cx="32" cy="54" r="8"/>
                  </g>
                  <path d="M32 10 Q28 5 32 2 Q36 5 32 10" fill="#10B981" stroke="#059669" strokeWidth="1"/>
                  <path d="M30 2 L34 2 L32 10 Z" fill="#10B981"/>
                </svg>
                <p className="text-white font-bold text-xl">Grape</p>
              </div>
            </div>

            <p className="text-white/90 text-center text-lg">
              Flavor with Other Natural Flavors
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image Placeholder */}
            <div className="relative">
              <div className="bg-pink-700/30 rounded-2xl aspect-[3/4] flex items-center justify-center">
                <p className="text-white/60 text-lg">Image Placeholder</p>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <h2 className="text-5xl xl:text-6xl font-bold text-white leading-tight">
                Natural Flavors,<br />Delicious Taste
              </h2>

              {/* Flavor Badge */}
              <div className="w-48 h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex flex-col items-center justify-center shadow-2xl">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mb-3">
                  <g fill="#8B5CF6">
                    <circle cx="25" cy="35" r="10"/>
                    <circle cx="40" cy="28" r="10"/>
                    <circle cx="55" cy="35" r="10"/>
                    <circle cx="32" cy="50" r="10"/>
                    <circle cx="48" cy="50" r="10"/>
                    <circle cx="40" cy="65" r="10"/>
                  </g>
                  <path d="M40 10 Q35 5 40 0 Q45 5 40 10" fill="#10B981" stroke="#059669" strokeWidth="1.5"/>
                  <path d="M37 0 L43 0 L40 12 Z" fill="#10B981"/>
                </svg>
                <p className="text-white font-bold text-2xl">Grape</p>
              </div>

              <p className="text-white/90 text-xl">
                Flavor with Other Natural Flavors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-gradient-to-br from-pink-200 to-pink-300 overflow-hidden">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-pink-300 to-pink-400 py-8 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-700 mb-2">
              OUR CUSTOMERS LOVE US
            </h2>
            {/* Wavy Underline */}
            <svg viewBox="0 0 200 20" className="w-48 h-4">
              <path d="M0 10 Q 5 5, 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10 T 70 10 T 80 10 T 90 10 T 100 10" 
                stroke="#BE185D" strokeWidth="3" fill="none"/>
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
          <div className="bg-gradient-to-br from-pink-300 to-pink-400 py-12 px-6 relative">
            <div className="container mx-auto max-w-2xl">
              <blockquote className="text-2xl md:text-3xl font-bold text-pink-700 mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              
              <p className="text-pink-800 text-lg font-medium mb-8">
                – {testimonials[activeTestimonial].author}
              </p>

              {/* Navigation Arrow */}
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
          <div className="bg-gradient-to-br from-pink-300 to-pink-400 py-16 px-12 flex flex-col justify-center relative">
            <div className="max-w-xl">
              <h2 className="text-3xl xl:text-4xl font-bold text-pink-700 mb-4">
                OUR CUSTOMERS LOVE US
              </h2>
              {/* Wavy Underline */}
              <svg viewBox="0 0 200 20" className="w-56 h-5 mb-12">
                <path d="M0 10 Q 5 5, 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10 T 70 10 T 80 10 T 90 10 T 100 10" 
                  stroke="#BE185D" strokeWidth="4" fill="none"/>
              </svg>

              <blockquote className="text-3xl xl:text-4xl font-bold text-pink-700 mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              
              <p className="text-pink-800 text-xl font-medium">
                – {testimonials[activeTestimonial].author}
              </p>
            </div>

            {/* Navigation Arrow */}
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

      {/*           <circle cx="55" cy="35" r="10"/>
                    <circle cx="32" cy="50" r="10"/>
                    <circle cx="48" cy="50" r="10"/>
                    <circle cx="40" cy="65" r="10"/>
                  </g>
                  <path d="M40 10 Q35 5 40 0 Q45 5 40 10" fill="#10B981" stroke="#059669" strokeWidth="1.5"/>
                  <path d="M37 0 L43 0 L40 12 Z" fill="#10B981"/>
                </svg>
                <p className="text-white font-bold text-2xl">Grape</p>
              </div>

              <p className="text-white/90 text-xl">
                Flavor with Other Natural Flavors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Mobile Layout */}
          <div className="lg:hidden max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 text-center mb-12">
              Frequently<br />Asked<br />Questions
            </h2>
            <div className="space-y-4">
              {[
                { q: 'Do I need to refrigerate your Probiotic products? Does that help survivability?', a: 'Our probiotics are shelf-stable and do not require refrigeration. They are formulated to maintain potency at room temperature.' },
                { q: 'What is the recommended age minimum of this product?', a: 'This product is recommended for adults 18 years and older.' },
                { q: 'Can this product be paired with other SmartyPants products?', a: 'Yes, this product can be safely combined with other SmartyPants supplements.' },
                { q: 'Do SmartyPants gummies contain gelatin? Which formulas are vegetarian?', a: 'Our gummies are made with pectin, not gelatin, making them suitable for vegetarians.' },
              ].map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => setOpenAccordion(openAccordion === `faq-${idx}` ? null : `faq-${idx}`)}
                  className="w-full bg-gray-100 rounded-2xl p-5 md:p-6 flex items-center justify-between text-left hover:bg-gray-200 transition-colors group"
                >
                  <h3 className="text-base md:text-lg font-bold text-gray-700 pr-4">{faq.q}</h3>
                  <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center transition-transform ${
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
              <h2 className="text-5xl xl:text-6xl font-bold text-red-500 leading-tight sticky top-24">
                Frequently<br />Asked<br />Questions
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { q: 'Do I need to refrigerate your Probiotic products? Does that help survivability?', a: 'Our probiotics are shelf-stable and do not require refrigeration. They are formulated to maintain potency at room temperature.' },
                { q: 'What is the recommended age minimum of this product?', a: 'This product is recommended for adults 18 years and older.' },
                { q: 'Can this product be paired with other SmartyPants products?', a: 'Yes, this product can be safely combined with other SmartyPants supplements.' },
                { q: 'Do SmartyPants gummies contain gelatin? Which formulas are vegetarian?', a: 'Our gummies are made with pectin, not gelatin, making them suitable for vegetarians.' },
              ].map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => setOpenAccordion(openAccordion === `faq-${idx}` ? null : `faq-${idx}`)}
                  className="w-full bg-gray-100 rounded-2xl p-6 flex items-center justify-between text-left hover:bg-gray-200 transition-colors group"
                >
                  <h3 className="text-lg xl:text-xl font-bold text-gray-700 pr-6">{faq.q}</h3>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center transition-transform ${
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

      {/* Benefits Section */}
      

      {/* Testimonials */}
      

      {/* FAQ */}
      

      {/* Final CTA */}
      

      
    </div>
  );
}
