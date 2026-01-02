# TEMPORARY TESTING SOLUTION

Since Shopify's new Dev Dashboard is making it hard to get Storefront API tokens,
here are alternative approaches:

## Option 1: Use Public Storefront API (No Auth Required for Testing)

For TESTING only, you can use Shopify's public storefront without authentication:

Update .env.local:
```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=
```

## Option 2: Use Shopify CLI

1. Install Shopify CLI:
   npm install -g @shopify/cli @shopify/app

2. Link your app:
   shopify app config link

3. Deploy with scopes:
   shopify app deploy

4. Get token from Dev Dashboard → Credentials

## Option 3: Contact Shopify Support

The new Dev Dashboard (2026) interface is different.
You may need to:
- Use Shopify CLI exclusively
- Contact Shopify support for guidance
- Wait for UI updates

## Option 4: Use Shopify Hydrogen (Recommended)

Shopify's official headless framework includes built-in auth:

npm create @shopify/hydrogen@latest

This automatically handles Storefront API access!

---

For now, let's try the Shopify CLI approach above.
