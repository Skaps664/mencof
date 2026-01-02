# MensConfidence.pk - Next.js Shopify Headless Store

A modern, fully-functional e-commerce website built with Next.js 15 and Shopify headless commerce. This project demonstrates how to build a complete online store with product listings, shopping cart, and Shopify checkout integration.

## 🚀 Tech Stack

- **Frontend**: Next.js 15 (App Router)
- **Backend**: Shopify Storefront API (Headless)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **API Client**: GraphQL Request
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📋 Prerequisites

Before you begin, you need:
1. A Shopify store (you can create a free development store)
2. Node.js 18+ installed
3. Basic knowledge of Next.js and React

## 🛍️ Shopify Setup Guide

### Step 1: Create a Shopify Store

1. Go to [https://www.shopify.com/](https://www.shopify.com/)
2. Click "Start free trial"
3. Follow the signup process
4. Or use a Partner account to create a development store

### Step 2: Create a Custom App for Headless Commerce

1. **Go to Shopify Admin** → Settings → Apps and sales channels
2. Click **"Develop apps"** (you may need to enable custom app development first)
3. Click **"Create an app"**
4. Name your app (e.g., "MensConfidence Headless Store")
5. Click **"Create app"**

### Step 3: Configure API Scopes

1. Click on **"Configuration"** tab
2. Under **"Storefront API"**, click **"Configure"**
3. Select the following scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_product_pickup_locations`
   - `unauthenticated_read_checkouts`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_customers`
   - `unauthenticated_write_customers`

4. Click **"Save"**

### Step 4: Get Your API Credentials

1. Click on **"API credentials"** tab
2. Click **"Install app"** button
3. Copy the **Storefront API access token** (you'll need this!)
4. Your store domain is: `your-store-name.myshopify.com`

### Step 5: Add Products to Your Store

1. Go to **Products** in your Shopify Admin
2. Click **"Add product"**
3. Add:
   - Product title
   - Description
   - Images (at least one)
   - Price
   - Inventory/Stock
4. Set product status to **"Active"**
5. Save the product
6. Repeat for multiple products

### Step 6: Configure Sales Channels

1. Go to **Settings** → **Apps and sales channels**
2. Ensure your custom app has access to "Online Store" sales channel
3. Go to **Products** → Select a product
4. Scroll to **"Product availability"**
5. Make sure products are available in your sales channels

## 🔧 Project Setup

### 1. Install Dependencies (Already Done!)

```bash
cd /home/skaps/mensconfidence
npm install
```

### 2. Configure Environment Variables

Edit the `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store-name.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token_here
```

Replace:
- `your-store-name` with your actual Shopify store name
- `your_storefront_access_token_here` with the Storefront API token from Step 4

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
mensconfidence/
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Home page with featured products
│   ├── products/
│   │   ├── page.tsx            # All products listing
│   │   └── [handle]/page.tsx   # Individual product page
│   ├── cart/page.tsx           # Shopping cart
│   └── about/page.tsx          # About page
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Footer component
│   └── ProductCard.tsx         # Product card component
├── lib/
│   ├── shopify.ts              # Shopify client setup
│   └── shopify-graphql.ts      # GraphQL queries
├── store/
│   └── cartStore.ts            # Zustand cart state management
└── .env.local                  # Environment variables
```

## 🛒 Features

### ✅ Implemented Features

1. **Product Catalog**
   - Product listing page
   - Product detail pages
   - Multiple product images
   - Product variants support

2. **Shopping Cart**
   - Add to cart functionality
   - Update quantities
   - Remove items
   - Persistent cart (localStorage)
   - Cart count in header

3. **Shopify Integration**
   - GraphQL Storefront API
   - Product fetching
   - Cart creation
   - Checkout redirect

4. **UI/UX**
   - Responsive design
   - Modern Tailwind CSS styling
   - Loading states
   - Toast notifications
   - Hero section
   - Features section

### 🔄 How the System Works

#### Data Flow:

1. **Product Data**: 
   - Next.js fetches products from Shopify Storefront API using GraphQL
   - Products are rendered server-side for SEO
   - Images and prices are pulled from Shopify

2. **Shopping Cart**:
   - Local state management with Zustand
   - Cart persists in browser localStorage
   - When user adds items, a Shopify cart is created via API
   - Cart ID is stored for checkout

3. **Checkout Process**:
   - User clicks "Proceed to Checkout"
   - Redirected to Shopify's secure checkout
   - Shopify handles payment processing
   - Order is completed in Shopify admin

4. **Payments**:
   - All handled by Shopify
   - Supports credit cards, PayPal, etc.
   - PCI compliant
   - Automatic tax calculation

5. **Reviews & Ratings**:
   - Install Shopify apps like Judge.me or Yotpo
   - Fetch reviews via their APIs
   - Display on product pages

## 🎨 Customization

### Styling

All components use Tailwind CSS. Modify colors in `tailwind.config.ts`.

### Adding New Pages

Create new files in the `app/` directory following Next.js App Router conventions.

### Product Reviews

To add reviews, install a Shopify app like:
- **Judge.me** - Product Reviews
- **Loox** - Photo Reviews
- **Yotpo** - Reviews & Ratings

Then fetch reviews using their APIs and display them on product pages.

## 📦 Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` | Your Shopify store domain | Yes |
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Storefront API token | Yes |

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Your own server with Node.js

## ❓ Troubleshooting

### No products showing?

1. Check `.env.local` has correct credentials
2. Verify products are "Active" in Shopify
3. Check products are available in sales channels
4. Check browser console for API errors

### GraphQL errors?

1. Verify Storefront API token is correct
2. Check API scopes are properly configured
3. Ensure custom app is installed

### Checkout not working?

1. Ensure cart is created via Shopify API
2. Check checkout URL is generated
3. Verify payment methods are configured in Shopify

## 📚 Next Steps

1. **Add Product Filtering**: Add category filters, search functionality
2. **Customer Accounts**: Implement Shopify customer authentication
3. **Product Reviews**: Integrate Judge.me or similar
4. **SEO Optimization**: Add metadata, structured data
5. **Analytics**: Add Google Analytics, Facebook Pixel
6. **Email Marketing**: Integrate with Klaviyo or Mailchimp
7. **Multi-currency**: Add international currency support

## 🤝 What You Need to Do Now

1. **Create a Shopify Store** (if you don't have one)
2. **Follow the Shopify Setup Guide above** to:
   - Create a custom app
   - Get your API credentials
   - Add products to your store
3. **Update `.env.local`** with your Shopify credentials
4. **Run `npm run dev`** to start the dev server
5. **Visit http://localhost:3000** to see your store!

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using Next.js and Shopify**
