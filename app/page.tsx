import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="text-center my-6">
      <p className="not-p">Available Tools:</p>
      <section>
        <ul>
          <li>
            <Link href="/lenny-face">Lenny Face</Link>
          </li>
          <li>
            <Link href="/iframe-generator">iFrame Generator</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
