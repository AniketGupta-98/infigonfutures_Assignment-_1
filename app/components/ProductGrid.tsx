import ProductCard from "./ProductCard";
import { Product } from "../types/product";

interface ProductGridProps {
    products: Product[];
    favorites: number[];
    toggleFavorite: (id: number) => void;
}

export default function ProductGrid({
    products,
    favorites,
    toggleFavorite,
}: ProductGridProps) {
    if (products.length === 0) {
        return (
            <div className="text-center text-gray-500 mt-20">
                No products found.
            </div>
        );
    }

    return (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                />
            ))}
        </section>
    );
}
