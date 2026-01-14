"use client";

import { useMemo } from "react";
import { Product } from "../types/product";

interface CategoryFilterProps {
    products: Product[];
    value: string;
    onChange: (value: string) => void;
}

export default function CategoryFilter({
    products,
    value,
    onChange,
}: CategoryFilterProps) {
    const categories = useMemo(() => {
        return Array.from(new Set(products.map((product) => product.category)));
    }, [products]);

    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            aria-label="Filter by category"
            className="rounded-md px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-2 focus:ring-blue-500 shadow-xs placeholder:text-body">
            <option value="">All Categories</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
}

