# Product Catalog — JavaScript Classes Exercise

A Vite-powered product catalog that renders cards from a local JSON file. The project practices class inheritance, DOM creation, image loading, and modal interactions with vanilla JavaScript.

## Run locally

Use Node.js 22.12+:

```sh
npm install
npm run dev
```

Open Vite's printed local URL. Use `npm run build` to generate `dist/` and `npm run preview` to preview it.

## How it works

`src/main.js` fetches `public/products.json`, selects a product class by its `type`, and appends a card to the page. Clicking a card opens product details; clicking the backdrop or pressing Escape closes the modal.

`src/product.js` defines the base `Product` class and the `Audio`, `Wearable`, `Display`, `Storage`, `Peripheral`, and `Power` subclasses. To add an item, supply `id`, `name`, `image`, `price`, and one of those type names in the JSON data.

## Files and scope

- `index.html` — page structure.
- `src/main.js` — data loading and catalog rendering.
- `src/product.js` — cards and product-detail modal.
- `src/style.css` / `src/style.scss` — styles.
- `public/` — product data and images.

The wishlist button is currently presentational. There is no checkout, account system, backend, or automated test suite.
