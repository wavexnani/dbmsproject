"use client";
import Navbar from "@/components/Navbar";
import products from "@/data/products";
import { motion } from "framer-motion";


export default function BuyerDashboard() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar role="buyer" />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome, Buyer 👋</h1>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold">Active Orders</h2>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold">Cart Items</h2>
            <p className="text-3xl font-bold mt-2">2</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold">Offers</h2>
            <p className="text-3xl font-bold mt-2">5</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Recommended Products</h2>

        <div className="grid grid-cols-4 gap-6">
          {products.map((item) => (
            <motion.div
  key={item.id}
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.2 }}
  className="bg-gray-800 p-4 rounded-xl"
>
              <img src={item.image} className="rounded mb-3" />
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-300">₹{item.price}</p>
              <a
                href={`/product/${item.id}`}
                className="mt-3 block bg-blue-600 text-center p-2 rounded hover:bg-blue-700"
              >
                View Product
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
