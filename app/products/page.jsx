"use client";
import { motion } from "framer-motion";  
import Navbar from "@/components/Navbar";
import { useState } from "react";
import products from "@/data/products";

export default function ProductsPage() {
  const [query, setQuery] = useState("");

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar role="buyer" />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">All Products</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products…"
          onChange={(e) => setQuery(e.target.value)}
          className="p-3 w-full rounded bg-gray-800 mb-6"
        />

        {/* Display Filtered Products */}
        <div className="grid grid-cols-4 gap-6">
          {filtered.map((item) => (
            <motion.div
  key={item.id}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  className="bg-gray-800 p-4 rounded-xl"
>
              <img src={item.image} className="rounded mb-3" />
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-400">₹{item.price}</p>
              <a
                href={`/product/${item.id}`}
                className="mt-3 bg-blue-600 block text-center p-2 rounded hover:bg-blue-700"
              >
                View Details
              </a>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-gray-400 mt-6">No items match your search.</p>
        )}
      </div>
    </div>
  );
}
