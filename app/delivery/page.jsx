"use client";
import Navbar from "@/components/Navbar";

export default function MerchantDashboard() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar role="merchant" />

      <div className="p-6">
        <h1 className="text-3xl font-bold">Merchant Dashboard</h1>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold">My Products</h2>
            <p className="text-3xl font-bold mt-2">18</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold">Pending Orders</h2>
            <p className="text-3xl font-bold mt-2">6</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold">Revenue Today</h2>
            <p className="text-3xl font-bold mt-2">₹12,400</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Quick Tools</h2>

        <div className="grid grid-cols-3 gap-6">
          <a href="#" className="bg-blue-600 p-4 rounded text-center font-semibold">Add Product</a>
          <a href="#" className="bg-green-600 p-4 rounded text-center font-semibold">Manage Orders</a>
          <a href="#" className="bg-yellow-600 p-4 rounded text-center font-semibold">Add Discounts</a>
        </div>
      </div>
    </div>
  );
}
