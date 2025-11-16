"use client";
import Navbar from "@/components/Navbar";

export default function DeliveryHistory() {
  const history = [
    {
      id: 501,
      product: "Wireless Headphones",
      date: "2025-02-12",
      status: "Delivered",
    },
    {
      id: 502,
      product: "Digital Watch",
      date: "2025-02-10",
      status: "Delivered",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar role="delivery" />

      <div className="p-6">
        <h1 className="text-3xl font-bold">Delivery History</h1>

        <div className="grid grid-cols-2 gap-6 mt-6">
          {history.map((item) => (
            <div key={item.id} className="bg-gray-800 p-4 rounded-xl">
              <h3 className="font-bold">Order #{item.id}</h3>
              <p>Product: {item.product}</p>
              <p>Date: {item.date}</p>
              <p className="mt-2 font-semibold text-green-400">{item.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
