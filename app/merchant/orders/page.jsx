"use client";
import Navbar from "@/components/Navbar";

export default function MerchantOrders() {
  const orders = [
    {
      id: 301,
      product: "Wireless Headphones",
      buyer: "Mouli",
      address: "Amrita University",
      status: "Pending",
    },
    {
      id: 302,
      product: "Digital Watch",
      buyer: "Naveen",
      address: "Hostel C Block",
      status: "Shipped",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar role="merchant" />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>

        <div className="grid grid-cols-2 gap-6">
          {orders.map((order) => (
            <div className="bg-gray-800 p-4 rounded-xl" key={order.id}>
              <h3 className="font-bold text-xl">Order #{order.id}</h3>
              <p>Product: {order.product}</p>
              <p>Buyer: {order.buyer}</p>
              <p>Address: {order.address}</p>
              <p className="mt-2 font-semibold text-blue-400">Status: {order.status}</p>

              <button className="mt-4 bg-green-600 px-4 py-2 rounded">
                Update Status
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
