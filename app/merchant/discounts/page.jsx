"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function DiscountsPage() {
  const [productId, setProductId] = useState("");
  const [percent, setPercent] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleDiscount = (e) => {
    e.preventDefault();
    alert("Discount created (dummy).");
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar role="merchant" />

      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create Limited-Time Discount</h1>

        <form onSubmit={handleDiscount} className="bg-gray-800 p-6 rounded-xl flex flex-col gap-4">
          <input
            className="p-3 rounded bg-gray-700"
            placeholder="Product ID"
            onChange={(e) => setProductId(e.target.value)}
          />

          <input
            className="p-3 rounded bg-gray-700"
            placeholder="Discount Percentage %"
            type="number"
            onChange={(e) => setPercent(e.target.value)}
          />

          <input
            className="p-3 rounded bg-gray-700"
            type="date"
            onChange={(e) => setStart(e.target.value)}
          />

          <input
            className="p-3 rounded bg-gray-700"
            type="date"
            onChange={(e) => setEnd(e.target.value)}
          />

          <button className="bg-yellow-600 hover:bg-yellow-700 p-3 rounded font-semibold">
            Add Discount
          </button>
        </form>
      </div>
    </div>
  );
}
