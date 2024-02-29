import Link from "next/link";
import React from "react";

const tools = [
  { url: "/lenny-face", title: "Lenny Face" },
  { url: "/iframe-generator", title: "iFrame Generator" },
  { url: "/nickfinder", title: "Nickfinder" },
  { url: "/pearson-age-calculator", title: "Pearson Age Calculator" },
  { url: "/korean-age-calculator", title: "Korean Age Calculator" },
  { url: "/upside-down-text", title: "Upside Down Text" },
  { url: "/text-repeater", title: "Text Repeater" },
];

export default function page() {
  return (
    <main className="text-center my-6">
      <p className="not-p mb-6">
        <strong className="font-semibold">Available Tools:</strong>
      </p>
      <section className="mx-4 lg:max-w-4xl lg:mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tools.map((item) => (
            <li key={item.title}>
              <Link
                href={item.url}
                className="not-a bg-white py-3 rounded-xl shadow-sm block border border-transparent hover:shadow hover:border-gray-100 hover:bg-slate-50/50"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
