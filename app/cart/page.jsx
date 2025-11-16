"use client";
import Navbar from "@/components/Navbar";
import products from "@/data/products";

export default function CartPage() {
  const dummyCart = [products[0], products[1]];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar role="buyer" />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className="grid grid-cols-2 gap-6">
          {dummyCart.map((item) => (
            <div key={item.id} className="bg-gray-800 p-4 rounded-xl flex gap-6">
              <img src={item.image} className="w-32 rounded" />
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-400 mb-3">₹{item.price}</p>
                <button className="bg-red-600 px-3 py-1 rounded">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-blue-600 p-3 rounded font-semibold hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
