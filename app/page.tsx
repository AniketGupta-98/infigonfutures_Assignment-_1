"use client";

import { useEffect, useMemo, useState } from "react";

import { fetchProducts } from "./lib/api";
import { Product } from "./types/product";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import SearchBar from "./components/SearchBar";
import Skeleton from "./components/Skeleton";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => console.log("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
      .filter((p) => (category ? p.category == category : true))

  }, [products, search, category]);

  return (
    <main className="p-6 max-w-7xl mx-auto">
      {!loading ? < >
        <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter
            products={products}
            value={category}
            onChange={setCategory}
          />
        </div>
        <ProductGrid products={filteredProducts} />
      </> : <Skeleton />}
    </main>
  );
}
