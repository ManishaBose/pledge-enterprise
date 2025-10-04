"use client";

import Link from "next/link";

export const AppBar = function () {
  return (
    <div className="flex justify-around p-5">
      <Link
        href="/"
        className="border-2 border-slate-300 rounded-xl p-2 cursor-pointer"
      >
        Home
      </Link>
      <Link
        href="/contact-us"
        className="border-2 border-slate-300 rounded-xl p-2 cursor-pointer"
      >
        Contact Us
      </Link>
      <Link
        href="/explore-products"
        className="border-2 border-slate-300 rounded-xl p-2 cursor-pointer"
      >
        Explore Products
      </Link>
    </div>
  );
};
