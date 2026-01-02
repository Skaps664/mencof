# Checkout Return Configuration

## ✅ What Was Changed:

1. **Cart Page** - Removed `target="_blank"` so checkout opens in same tab
2. **Checkout Flow** - Will now stay on same page

## 🔧 Configure Shopify Checkout to Return to Your Store:

### **In Shopify Admin:**

1. Go to **Settings** → **Checkout**
2. Scroll to **"Order status page"** section
3. Find **"Additional scripts"** or **"After order is placed"** section
4. You can customize what happens after checkout

### **Set Return URL in Shopify:**

The checkout URL from Shopify already includes return parameters. When a customer completes checkout, Shopify will:

1. Show order confirmation page
2. Customer can click "Continue shopping" 
3. This returns to your store homepage

### **To Customize Return URL:**

In your Shopify Admin → Settings → Checkout, you can set:
- **Return to cart URL**: `http://localhost:3000/cart` (for dev)
- **Continue shopping URL**: `http://localhost:3000` (for dev)

For production, use your actual domain.

## 🎯 How It Works Now:

```
User clicks "Proceed to Checkout"
         ↓
Opens Shopify checkout (same tab)
         ↓
User completes payment
         ↓
Order confirmation page
         ↓
"Continue shopping" button
         ↓
Returns to your store homepage
```

## 📝 For Production:

When you deploy your Next.js site, update the checkout return URLs in Shopify to point to your live domain instead of localhost.

Example:
- Return URL: `https://yourdomain.com`
- Cart URL: `https://yourdomain.com/cart`
