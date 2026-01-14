"use client";

import { useEffect, useMemo, useState } from "react";

import { fetchProducts } from "./lib/api";
import { Product } from "./types/product";
import ProductGrid from "./components/ProductGrid";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => console.log("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);


  return (
    <main className="p-6 max-w-7xl mx-auto">


      <ProductGrid products={products} />
    </main>
  );
}
