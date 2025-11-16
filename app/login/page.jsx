"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "buyer") router.push("/buyer");
    if (role === "merchant") router.push("/merchant");
    if (role === "delivery") router.push("/delivery");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl w-[350px] shadow-lg">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            className="p-3 rounded bg-gray-700 text-white"
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="p-3 rounded bg-gray-700 text-white"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
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

          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-semibold">
            Login
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <a className="text-blue-400" href="/register">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
