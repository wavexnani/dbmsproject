"use client";
import Link from "next/link";

export default function Navbar({ role }) {
  return (
    <nav className="w-full bg-gray-800 p-4 flex gap-6 text-white font-semibold">
      <Link href="/">Home</Link>
      
      {role === "buyer" && (
        <>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/buyer">Dashboard</Link>
        </>
      )}

      {role === "merchant" && (
        <>
          <Link href="/merchant">Dashboard</Link>
          <Link href="/merchant/products">My Products</Link>
          <Link href="/merchant/discounts">Discounts</Link>
        </>
      )}

      {role === "delivery" && (
        <>
          <Link href="/delivery">Dashboard</Link>
          <Link href="/delivery/history">History</Link>
        </>
      )}

      <Link href="/login" className="ml-auto text-red-400">
        Logout
      </Link>
    </nav>
  );
}
