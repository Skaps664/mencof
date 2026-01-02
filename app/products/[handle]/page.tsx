'use client';

import { use, useState, useEffect } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { graphQLClient, GET_PRODUCT_BY_HANDLE_QUERY, CREATE_CART_QUERY, ADD_TO_CART_QUERY } from '@/lib/shopify-graphql';
import toast, { Toaster } from 'react-hot-toast';

export default function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = use(params);
  const [product, setProduct] = useState<any>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  
  const { addItem, cartId, setCartId, setCheckoutUrl } = useCartStore();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data: any = await graphQLClient.request(GET_PRODUCT_BY_HANDLE_QUERY, {
          handle,
        });
        setProduct(data.productByHandle);
        if (data.productByHandle?.variants?.edges?.length > 0) {
          setSelectedVariant(data.productByHandle.variants.edges[0].node);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error('Failed to load product');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [handle]);

  const handleAddToCart = async () => {
    if (!selectedVariant) {
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

      // Add to local state
      addItem(cartItem);

      // Create or update Shopify cart
      if (!cartId) {
        const createData: any = await graphQLClient.request(CREATE_CART_QUERY, {
          input: {
            lines: [{
              merchandiseId: selectedVariant.id,
              quantity,
            }],
          },
        });
        setCartId(createData.cartCreate.cart.id);
        setCheckoutUrl(createData.cartCreate.cart.checkoutUrl);
      } else {
        await graphQLClient.request(ADD_TO_CART_QUERY, {
          cartId,
          lines: [{
            merchandiseId: selectedVariant.id,
            quantity,
          }],
        });
      }

      toast.success('Added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add to cart');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  const images = product.images.edges.map((edge: any) => edge.node);

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster position="top-right" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="relative h-96 md:h-[500px] bg-gray-100 rounded-lg overflow-hidden mb-4">
            {images[selectedImage] ? (
              <Image
                src={images[selectedImage].url}
                alt={images[selectedImage].altText || product.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
          </div>
          
          {images.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {images.map((image: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative h-20 bg-gray-100 rounded overflow-hidden ${
                    idx === selectedImage ? 'ring-2 ring-blue-600' : ''
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.altText || `${product.title} ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
          
          {selectedVariant && (
            <p className="text-2xl font-bold text-gray-900 mb-6">
              {selectedVariant.priceV2.currencyCode} {parseFloat(selectedVariant.priceV2.amount).toFixed(2)}
            </p>
          )}

          <div className="prose prose-sm mb-6">
            <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          </div>

          {/* Variants */}
          {product.variants.edges.length > 1 && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Variant
              </label>
              <select
                value={selectedVariant?.id || ''}
                onChange={(e) => {
                  const variant = product.variants.edges.find(
                    (v: any) => v.node.id === e.target.value
                  )?.node;
                  setSelectedVariant(variant);
                }}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              >
                {product.variants.edges.map((edge: any) => (
                  <option key={edge.node.id} value={edge.node.id}>
                    {edge.node.title} - {edge.node.priceV2.currencyCode} {parseFloat(edge.node.priceV2.amount).toFixed(2)}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-24 border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedVariant?.availableForSale}
            className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {selectedVariant?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
          </button>

          {/* Product Features */}
          <div className="mt-8 border-t pt-8">
            <h3 className="font-semibold mb-4">Product Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Authentic products</li>
              <li>✓ Fast shipping across Pakistan</li>
              <li>✓ Secure checkout</li>
              <li>✓ Easy returns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
