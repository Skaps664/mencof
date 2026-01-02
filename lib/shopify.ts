import Client from 'shopify-buy';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

if (!domain || !storefrontAccessToken) {
  throw new Error('Missing Shopify environment variables');
}

export const shopifyClient = Client.buildClient({
  domain,
  storefrontAccessToken,
  apiVersion: '2024-01',
});

export type ShopifyProduct = any; // Will be typed by shopify-buy
export type ShopifyCart = any;
