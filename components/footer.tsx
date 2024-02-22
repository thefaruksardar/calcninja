import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 py-4 bg-white text-center">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <Link href="/">www.CalcNinja.com</Link>. All rights reserved.
      </p>
      <p>
        <span className="font-semibold">About this website:</span>Wide
        collection of Most Helpful and Fun Tools.
      </p>
    </footer>
  );
}
