import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="text-center my-6">
      <p className="not-p">Available Tools:</p>
      <Link href="/lenny-face">Lenny Face</Link>
    </main>
  );
}
