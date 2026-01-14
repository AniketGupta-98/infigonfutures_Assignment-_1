// src/lib/api.ts
import { Product } from "../types/product";

export async function fetchProducts(): Promise<Product[]> {
    const res = await fetch("https://fakestoreapi.com/products", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return res.json();
}

export async function fetchProductById(id: number): Promise<Product> {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }

    return res.json();
}
