"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/product";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-xl/30 transition bg-white flex flex-col">
            <Link href={`/products/${product.id}`} className="relative w-full h-48 mb-4">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 25vw"
                />
            </Link>
            <span className="text-xs text-gray-500 uppercase mb-1">
                {product.category}
            </span>
            <Link href={`/products/${product.id}`}>
                <h3 className="font-medium text-sm line-clamp-2 hover:underline">
                    {product.title}
                </h3>
            </Link>
            <div className="mt-auto flex items-center justify-between pt-4">
                <span className="font-semibold text-lg">
                    $ {product.price}
                </span>
            </div>
        </div>
    );
}
