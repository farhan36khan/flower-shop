# 🌸 Bloom & Co. — Flower E-commerce Website

A modern flower e-commerce website with WhatsApp ordering and an admin dashboard, built with **React + Tailwind CSS**.

## Pages
- **Home** — Hero, featured products, feature highlights
- **Shop** — Full catalog with category filtering
- **Product Detail** — Full product view with WhatsApp order button
- **Contact** — Contact info + message form
- **Dashboard** — Admin panel with metrics, sales chart, orders

## Tech Stack
- React 18
- Tailwind CSS 3
- Vite

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## WhatsApp Integration

Update the phone number in `src/data/products.js`:

```js
export const WHATSAPP_NUMBER = '923001234567'; // your WhatsApp number (no + or spaces)
```

Every "Order on WhatsApp" button sends a pre-filled message directly to this number.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── CategoryFilter.jsx
│   └── WhatsAppBtn.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Contact.jsx
│   └── Dashboard.jsx
├── data/
│   └── products.js      ← edit products & WhatsApp number here
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

- **Add products**: Edit the `products` array in `src/data/products.js`
- **Change colors**: Tailwind classes use `rose-*`, `green-*`, `amber-*` — swap as needed
- **Dashboard data**: Replace static arrays in `Dashboard.jsx` with your API calls
