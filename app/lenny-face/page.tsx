import Facecategories from "@/components/lennyfaces/facecategories";
import Facecontainer from "@/components/lennyfaces/facecontainer";
import { faceData } from "@/libs/faces";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lenny Face ( ͡° ͜ʖ ͡°) - All Text Faces Copy and Paste [Updated]",
  description:
    "Most popular lenny faces Copy and Paste - ( ͡° ͜ʖ ͡°), ʘ‿ʘ, ( ͡~ ͜ʖ ͡°), ( ͠° ͟ʖ ͡°), (◕‿◕)╭∩╮, (͡• ͜໒ ͡• )",
};

export default function page() {
  let mergedData: string[] = [];

  faceData.forEach((entry) => {
    mergedData = mergedData.concat(entry.data);
  });

  return (
    <main className="mx-4 lg:max-w-7xl lg:mx-auto">
      <div className="lg:flex lg:gap-2">
        <Facecategories currentName="All Lenny Faces" />
        <Facecontainer faces={mergedData} />
      </div>

      <article className="relative px-4 mt-2 mb-6 bg-white py-5 rounded-3xl shadow text-slate-800"></article>
    </main>
  );
}
