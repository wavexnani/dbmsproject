"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState("buyer");

  const handleRegister = (e) => {
    e.preventDefault();

    // No backend → Just redirect to login
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl w-[350px] shadow-lg">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">Register</h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            className="p-3 rounded bg-gray-700 text-white"
            type="text"
            placeholder="Full Name"
          />

          <input
            className="p-3 rounded bg-gray-700 text-white"
            type="email"
            placeholder="Email"
          />

          <input
            className="p-3 rounded bg-gray-700 text-white"
            type="password"
            placeholder="Password"
          />

          {/* Role Selection */}
          <select
            className="p-3 rounded bg-gray-700 text-white"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="buyer">Buyer</option>
            <option value="merchant">Merchant</option>
            <option value="delivery">Delivery Agent</option>
          </select>

          <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded font-semibold">
            Register
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account?{" "}
          <a className="text-blue-400" href="/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
