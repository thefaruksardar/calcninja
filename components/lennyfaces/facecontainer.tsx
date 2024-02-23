"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
// import { HiChevronDown } from "react-icons/hi";
import useMeasure from "react-use-measure";

export default function Facecontainer({ faces }: { faces: string[] }) {
  // const [ref, bounds] = useMeasure();

  // const [iscopy, setIsCopy] = useState(true);
  const [visibleItems, setVisibleItems] = useState(300);

  // const [savedFaces, setSavedFaces] = useState();

  // useEffect(() => {
  //   setSavedFaces(JSON.parse(localStorage.getItem("faces") || ""));
  // });

  const handleClicked = (face: string) => {
    navigator.clipboard.writeText(face);
    toast.success(`"${face}" Copied`);

    // Set to localstorage
    let existingData: string[] = JSON.parse(
      localStorage.getItem("faces") || "[]"
    );

    // Append new data to existing data
    if (existingData.includes(face)) return;
    existingData.push(face);

    // Save the updated data back to localStorage
    localStorage.setItem("faces", JSON.stringify(existingData));
  };

  const handleLoadMore = () => {
    setVisibleItems((prevCount) => prevCount + 300);
  };

  // const handleEditorCopy = () => {
  //   setIsCopy(false);
  //   if (localStorage.getItem("faces")) {
  //     navigator.clipboard.writeText(
  //       JSON.parse(localStorage.getItem("faces") || "")
  //     );
  //   }
  //   setTimeout(() => {
  //     setIsCopy(true);
  //   }, 1700);
  // };

  return (
    <section className="relative px-4 mt-2 mb-6 bg-white py-5 rounded-3xl shadow self-start lg:sticky lg:top-3 lg:mt-6">
      <div className="flex flex-wrap gap-3 justify-center">
        {faces.slice(0, visibleItems).map((face) => (
          <span
            key={face}
            className="inline-block border cursor-pointer border-gray-400 px-3 py-2 rounded-xl shadow-sm overflow-scroll active:bg-indigo-200 active:text-slate-800 active:border-indigo-500 focus:border focus:border-indigo-500 hover:bg-indigo-200 hover:text-slate-800 hover:border-indigo-500 transition"
            onClick={() => handleClicked(face)}
          >
            {face}
          </span>
        ))}
      </div>
      {visibleItems < faces.length && (
        <button
          onClick={handleLoadMore}
          className="block bg-indigo-500 text-white text-xl px-8 py-2 mt-6 mx-auto rounded-3xl"
        >
          Load More
        </button>
      )}

      {/* Editor */}
      {/* <motion.div
        ref={ref}
        className="fixed bottom-0 !w-[94%] left-[50%] -translate-x-[50%] rounded-xl bg-indigo-50"
      >
        <div className="flex items-center gap-2 bg-indigo-400 text-white text-xl px-6 pt-3 pb-10 rounded-t-xl">
          <HiChevronDown /> Editor
        </div>
        <textarea
          className="w-[94%] -mt-7 mx-auto block bg-white p-3 text-xl rounded-xl"
          rows={6}
          value={savedFaces}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="bg-violet-400 text-white px-6 py-1 text-md my-2 rounded-2xl mr-2"
            onClick={handleEditorCopy}
          >
            {iscopy ? "Copy" : "Copied"}
          </button>
        </div>
      </motion.div> */}
    </section>
  );
}
