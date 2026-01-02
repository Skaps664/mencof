# Quick Start Guide - MensConfidence.pk

## ✅ What's Already Done

✓ Next.js 15 project initialized
✓ Tailwind CSS configured
✓ All dependencies installed
✓ Complete project structure created
✓ Shopify integration code ready
✓ Shopping cart functionality implemented
✓ Product pages, cart page, and more created

## 🎯 What You Need to Do

### 1. Create Your Shopify Store

**Option A: Free Trial Store (For Production)**
1. Go to https://www.shopify.com
2. Click "Start free trial"
3. Complete the signup
4. You'll get: `your-store-name.myshopify.com`

**Option B: Development Store (For Testing)**
1. Create a Shopify Partner account at https://partners.shopify.com
2. Create a development store (free forever for testing)

### 2. Set Up Headless Commerce Access (Dev Dashboard - NEW METHOD)

**⚠️ IMPORTANT: As of January 2026, you MUST use Dev Dashboard (legacy custom apps no longer available)**

1. **In Shopify Admin, go to:**
   - Settings → Apps and sales channels

2. **Click "Dev Dashboard"** (or "Develop apps for this store")
   - This will open the new Dev Dashboard

3. **Create a New App:**
   - Click "Create app" button
   - App name: "MensConfidence Headless"
   - Click "Create"

4. **Configure API Access:**
   - In your app, go to "Configuration" section
   - Under "Storefront API access scopes", click "Configure"
   - Enable these scopes:
     - ✓ `unauthenticated_read_product_listings`
     - ✓ `unauthenticated_read_product_inventory`
     - ✓ `unauthenticated_read_checkouts`
     - ✓ `unauthenticated_write_checkouts`
   - Click "Save"

5. **Get Your API Credentials:**
   - Click "API credentials" tab
   - Under "Storefront API access token", click "Install app"
   - **COPY THE STOREFRONT ACCESS TOKEN** (shown only once!)
   - Also note your store domain: `your-store.myshopify.com`

### 3. Add Some Products

1. In Shopify Admin, go to **Products**
2. Click **"Add product"**
3. Fill in:
   - Title (e.g., "Premium Beard Oil")
   - Description
   - Price (e.g., 1500)
   - Upload at least 1 image
   - Set "Status" to **Active**
4. Click **Save**
5. Add 3-5 products to test

### 4. Configure Your Environment

Open `.env.local` in your project and update:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store-name.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_xxxxxxxxxxxxxxxxxxxxx
```

**Replace:**
- `your-store-name` → Your actual store name
- `shpat_xxxxxxxxxxxxxxxxxxxxx` → The token you copied in step 2

### 5. Run Your Store!

```bash
cd /home/skaps/mensconfidence
npm run dev
```

Open http://localhost:3000 in your browser! 🎉

## 🧪 Testing the Features

Once running, test:

1. **Home Page** - Should show featured products
2. **Products Page** - Click "Shop Now" or "Products" in menu
3. **Product Detail** - Click on any product
4. **Add to Cart** - Select variant and add to cart
5. **Cart Page** - Click cart icon in header
6. **Checkout** - Click "Proceed to Checkout" (redirects to Shopify)

## 🔧 Common Issues

### "No products showing"
- ✓ Check products are set to "Active" in Shopify
- ✓ Verify .env.local has correct credentials
- ✓ Restart the dev server: `npm run dev`

### "GraphQL error"
- ✓ Double-check Storefront API token
- ✓ Ensure API scopes are configured
- ✓ Verify custom app is installed

### "Environment variable not found"
- ✓ Make sure .env.local exists in project root
- ✓ No spaces around = sign
- ✓ Restart dev server after changing .env.local

## 📊 Project Status

```
✅ Frontend: 100% Complete
✅ Shopify Integration: 100% Complete
✅ Cart System: 100% Complete
✅ Responsive Design: 100% Complete

⏳ Your Tasks:
[ ] Create Shopify store
[ ] Configure API access
[ ] Add products
[ ] Update .env.local
[ ] Run npm run dev
```

## 🚀 Next Steps After Setup

1. **Customize Branding**
   - Update colors in components
   - Add your logo
   - Modify hero text

2. **Add More Features**
   - Product reviews (Judge.me app)
   - Email marketing (Klaviyo)
   - Analytics (Google Analytics)

3. **Deploy to Production**
   - Push to GitHub
   - Deploy on Vercel (free)
   - Configure custom domain

## 💡 Pro Tips

- Use Shopify's Product CSV import for bulk products
- Install Shopify apps for reviews, SEO, analytics
- Test checkout with Shopify's test payment gateway
- Use Shopify's built-in analytics dashboard

## 📞 Need Help?

- Check README.md for detailed documentation
- Review code comments in the files
- Shopify docs: https://shopify.dev/docs/api/storefront

---

**Ready to launch your store! 🚀**
