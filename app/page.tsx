"use client";

import { useEffect, useMemo, useState } from "react";

import { fetchProducts } from "./lib/api";
import { Product } from "./types/product";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import SearchBar from "./components/SearchBar";
import Skeleton from "./components/Skeleton";
import ErrorState from "./components/ErrorState";
import { useFavorites } from "./hooks/useFavorites";

export default function HomePage() {
  const { favorites, toggleFavorite } = useFavorites();


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
      .filter((p) => (category ? p.category == category : true))
      .filter((p) => showFavorites ? favorites.includes(p.id) : true
      );
  }, [products, search, category, favorites, showFavorites]);

  if (error) {
    return <ErrorState message={error} />;
  }


  return (
    <main className="p-6 max-w-7xl mx-auto">
      {!loading ? < >
        <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
          <SearchBar value={search} onChange={setSearch} />
          <div className="flex gap-3">
            <CategoryFilter
              products={products}
              value={category}
              onChange={setCategory} />
            <button
              onClick={() => setShowFavorites((prev) => !prev)}
              className="px-4 py-2 rounded border text-sm hover:bg-gray-100">
              {showFavorites ? "All Products" : "Favorites"}
            </button>
          </div>
        </div>
        <ProductGrid products={filteredProducts}
          favorites={favorites}
          toggleFavorite={toggleFavorite} />
      </> : <Skeleton />}
    </main>
  );
}
