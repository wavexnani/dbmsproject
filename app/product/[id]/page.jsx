"use client";
import { useParams } from "next/navigation";
import products from "@/data/products";
import Navbar from "@/components/Navbar";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  if (!product) return <h1 className="text-white">Product Not Found</h1>;

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar role="buyer" />

      <div className="p-10 flex gap-10">
        <img src={product.image} className="w-80 h-80 rounded-xl" />

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="mt-4 text-gray-300">{product.description}</p>
          <p className="text-3xl font-bold mt-6">₹{product.price}</p>

          <a
            href="/cart"
            className="mt-6 inline-block bg-green-600 p-3 rounded font-semibold hover:bg-green-700"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
