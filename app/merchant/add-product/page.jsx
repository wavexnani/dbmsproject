"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Product added (dummy). No backend connected.");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar role="merchant" />

      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add New Product</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-800 p-6 rounded-xl">
          <input
            className="p-3 rounded bg-gray-700"
            placeholder="Product Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="p-3 rounded bg-gray-700"
            placeholder="Price"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            className="p-3 rounded bg-gray-700"
            placeholder="Stock Quantity"
            type="number"
            onChange={(e) => setStock(e.target.value)}
          />

          <input
            className="p-3 rounded bg-gray-700"
            placeholder="Image URL"
            onChange={(e) => setImage(e.target.value)}
          />

          <textarea
            className="p-3 rounded bg-gray-700"
            rows="4"
            placeholder="Product Description"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>

          <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
