import { faceData } from "@/libs/faces";
import Link from "next/link";

export default function Facecategories({
  currentName,
}: {
  currentName: string;
}) {
  let mergedName: string[] = [];

  mergedName.push(`All Lenny Faces`);

  faceData.forEach((entry) => {
    mergedName = mergedName.concat(entry.name);
  });
  return (
    <section className="sticky top-0 z-20 backdrop-blur-[2px] bg-white/40 lg:!bg-transparent">
      <div className="flex gap-2 overflow-x-scroll capitalize py-3 no-scrollbar lg:flex-col lg:px-5">
        <h2 className="ml-2 capitalize hidden lg:block lg:!text-2xl">
          {currentName}
        </h2>
        {mergedName.map((name) => (
          <Link
            key={name}
            href={
              name === "All Lenny Faces" ? "/lenny-face" : `/lenny-face/${name}`
            }
            className={` !block !text-nowrap !text-slate-800 bg-white px-4 py-2 rounded-full border ${
              currentName === name ? "!bg-indigo-400 !text-white " : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
      <h2 className="ml-2 capitalize lg:hidden lg:!text-2xl">{currentName}</h2>
    </section>
  );
}
