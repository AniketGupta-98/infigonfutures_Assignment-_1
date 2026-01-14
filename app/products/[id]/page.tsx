
import { fetchProductById } from "../../lib/api";

interface Props {
    params: { id: number };
}

export default async function ProductDetailsPage({ params }: Props) {
    const { id } = params;
    const product = await fetchProductById(id);


    return (
        <div className="max-w-4xl mx-auto p-4">
            <img src={product.image} className="w-full max-h-96 object-contain" />
            <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
            <p className="text-gray-600">{product.category}</p>
            <p className="mt-2">{product.description}</p>
            <p className="text-xl font-semibold mt-4">${product.price}</p>
        </div>
    );
}
