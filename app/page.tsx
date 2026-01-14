"use client";

import { useEffect, useMemo, useState } from "react";

import { fetchProducts } from "./lib/api";
import { Product } from "./types/product";
import ProductGrid from "./components/ProductGrid";
import SearchBar from "./components/SearchBar";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => console.log("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);



  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))

  }, [products, search,]);



  return (
    <main className="p-6 max-w-7xl mx-auto">
      <SearchBar value={search} onChange={setSearch} />
      <ProductGrid products={filteredProducts} />
    </main>
  );
}
