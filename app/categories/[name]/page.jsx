"use client";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import products from "@/data/products";

export default function CategoryPage() {
  const { name } = useParams();
  const filtered = products.filter((p) =>
    p.category?.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar role="buyer" />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 capitalize">
          {name} Category
        </h1>

        <div className="grid grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="bg-gray-800 p-4 rounded-xl">
              <img src={item.image} className="rounded mb-3" />
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-400">₹{item.price}</p>

              <a
                href={`/product/${item.id}`}
                className="mt-3 bg-blue-600 block text-center p-2 rounded hover:bg-blue-700"
              >
                View Details
              </a>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-gray-400 mt-6">
            No items in this category.
          </p>
        )}
      </div>
    </div>
  );
}
