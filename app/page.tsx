'use client';

import { useState, useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';
import { graphQLClient, GET_PRODUCTS_QUERY, CREATE_CART_QUERY, ADD_TO_CART_QUERY } from '@/lib/shopify-graphql';
import toast, { Toaster } from 'react-hot-toast';

// Components
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import ImageBanner from '@/components/ImageBanner';
import ProductSection from '@/components/ProductSection';
import ProductDetailsAccordion from '@/components/ProductDetailsAccordion';
import CertificationBadges from '@/components/CertificationBadges';
import DailySupplementSection from '@/components/DailySupplementSection';
import AutoDeliverySection from '@/components/AutoDeliverySection';
import CustomerReviewsSection from '@/components/CustomerReviewsSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';

export default function Home() {
  const [product, setProduct] = useState<any>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [deliveryOption, setDeliveryOption] = useState('single');
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
    { id: 'single', label: 'Buy Single', quantity: 1, discount: 0, price: 2500, originalPrice: 2500 },
    { id: 'pack2', label: 'Pack of Two', quantity: 2, discount: 10, price: 4500, originalPrice: 5000 },
  ];

  const testimonials = [
    {
      quote: "Electingo ne meri energy aur stamina ko bohot barha diya hai. Roz 1 tablet se farq mehsoos hota hai!",
      author: "Ali Khan"
    },
    {
      quote: "Bahut acha product hai. Natural ingredients se bana hai aur koi side effects nahi. Recommended!",
      author: "Ahmed R."
    },
    {
      quote: "Mere liye perfect supplement tha. Vitality wapas aa gayi aur confidence badh gaya.",
      author: "Usman S."
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="">
      <Toaster position="top-right" />
      
      <HeroBanner />
      
      <ImageBanner />
      
      <ProductSection
        product={product}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        deliveryOption={deliveryOption}
        setDeliveryOption={setDeliveryOption}
        handleAddToCart={handleAddToCart}
      />
      
      <ProductDetailsAccordion 
        openAccordion={openAccordion}
        setOpenAccordion={setOpenAccordion}
      />
      
      <CertificationBadges />
      
      <DailySupplementSection />
      
      <AutoDeliverySection />
      
      <CustomerReviewsSection 
        testimonials={testimonials}
        activeTestimonial={activeTestimonial}
        nextTestimonial={nextTestimonial}
      />
      
      <FAQSection 
        openAccordion={openAccordion}
        setOpenAccordion={setOpenAccordion}
      />
      
      <FinalCTASection handleAddToCart={handleAddToCart} />
      
    </div>
  );
}

