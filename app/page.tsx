"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";


export default function HomePage() {
  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-900 min-h-screen text-white"
  >
      <Navbar role="buyer" />

      {/* Hero Section */}
      <section className="text-center p-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Amrita Store 🛒</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Your one-stop shop for electronics, shoes, watches and more!
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200"
        >
          Shop Now
        </Link>
      </section>

      {/* Categories */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>

        <div className="grid grid-cols-3 gap-6">
          <Link
            href="/categories/electronics"
            className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold mb-2">Electronics</h3>
            <p className="text-gray-400">Headphones, watches & gadgets</p>
          </Link>

          <Link
            href="/categories/shoes"
            className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold mb-2">Shoes</h3>
            <p className="text-gray-400">Running, casual & more</p>
          </Link>

          <Link
            href="/categories/watches"
            className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold mb-2">Watches</h3>
            <p className="text-gray-400">Digital & analog watch collection</p>
          </Link>
        </div>
      </section>

      {/* Featured Strip */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>

        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
  key={i}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
  className="bg-gray-800 p-4 rounded-xl"
>
              <div className="h-40 bg-gray-700 rounded mb-3"></div>
              <h3 className="font-semibold">Sample Product</h3>
              <p className="text-gray-400">₹999</p>
              <button className="mt-3 bg-blue-600 w-full py-2 rounded hover:bg-blue-700">
                View
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
