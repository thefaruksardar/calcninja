"use client";

import Switch from "@/components/others/switch";
import { useState } from "react";
import Link from "next/link";
import { FiCheck, FiCopy } from "react-icons/fi";

const Upsidedown = () => {
  const [inputText, setInputText] = useState("");
  const [reverse, setReverse] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);
  const [copy, setCopy] = useState(true);
  const flipMap = {
    // ... (your flipMap here)
    a: "ɐ",
    b: "q",
    c: "ɔ",
    d: "p",
    e: "ǝ",
    f: "ɟ",
    g: "ƃ",
    h: "ɥ",
    i: "ᴉ",
    j: "ɾ",
    k: "ʞ",
    l: "l",
    m: "ɯ",
    n: "u",
    o: "o",
    p: "d",
    q: "b",
    r: "ɹ",
    s: "s",
    t: "ʇ",
    u: "n",
    v: "ʌ",
    w: "ʍ",
    x: "x",
    y: "ʎ",
    z: "z",
    A: "∀",
    B: "ꓭ",
    C: "Ɔ",
    D: "ᗡ",
    E: "Ǝ",
    F: "Ⅎ",
    G: "⅁",
    H: "Ⅎ",
    I: "I",
    J: "ᒋ",
    K: "ꓘ",
    L: "⅂",
    M: "W",
    N: "ᴎ",
    O: "O",
    P: "Ԁ",
    Q: "Ꝺ",
    R: "ꓤ",
    S: "S͛",
    T: "┴",
    U: "∩",
    V: "ʌ",
    W: "Ϻ",
    X: "X",
    Y: "⅄",
    Z: "Z",
    0: "0",
    1: "Ɩ",
    2: "ᄅ",
    3: "Ɛ",
    4: "ㄣ",
    5: "ϛ",
    6: "9",
    7: "ㄥ",
    8: "8",
    9: "6",
  };

  const flipText = (text, reverse) => {
    let modifiedText = text
      .split("")
      .map((char) => (flipMap[char] !== undefined ? flipMap[char] : char))
      .join("");

    if (reverse) {
      modifiedText = modifiedText.split("").reverse().join("");
    }

    return modifiedText;
  };

  const convertText = () => {
    let resultText = `${flipText(inputText, reverse)}`;

    if (showOriginal) {
      resultText = `${inputText}`;
    }

    return resultText;
  };

  function handlecopy() {
    navigator.clipboard.writeText(convertText());
    if (copy) {
      setCopy(false);
      setTimeout(() => {
        setCopy(true);
      }, 2300);
    }
  }

  return (
    <div className="">
      <div className="my-5 shadow rounded-3xl">
        <div className="bg-violet-500 text-white py-3 px-3 rounded-t-2xl flex justify-between">
          <div className="relative">Upside Down Text</div>
        </div>
        <div className="bg-white rounded-b-2xl border">
          <textarea
            // onClick={handleTextareaClick}
            cols="30"
            rows="10"
            id="inputText"
            // value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full p-4 bg-white rounded-3xl focus:outline-none resize-y selection:rounded-b-2xl"
            placeholder="Enter Text"
          />
        </div>
      </div>
      <div className="flex items-center justify-evenly bg-white py-3 rounded-xl shadow gap-3">
        <Switch isSelected={reverse} onChange={setReverse}>
          Reverse Text
        </Switch>
        <Switch isSelected={showOriginal} onChange={setShowOriginal}>
          Original Text
        </Switch>
      </div>

      <div className="my-5 shadow rounded-3xl">
        <div className="bg-violet-500 py-3 px-3 rounded-t-2xl flex items-center justify-between">
          <div className="text-white">Regenerated Text</div>
          {copy ? (
            <span
              className="flex items-center cursor-pointer text-white px-3 rounded-lg hover:bg-violet-300"
              onClick={handlecopy}
            >
              Copy
              <FiCopy className="text-[2rem] p-2 text-white rounded-lg transition-all duration-200" />
            </span>
          ) : (
            <span className="flex items-center text-white">
              Copied
              <FiCheck className="text-[2rem] p-2 text-white rounded-lg transition-all duration-200" />
            </span>
          )}
        </div>
        <div className="bg-white rounded-b-2xl border">
          <textarea
            // onClick={handleTextareaClick}
            cols="30"
            rows="10"
            id="outputText"
            value={convertText()}
            className="w-full p-4 bg-white rounded-3xl focus:outline-none resize-y selection:rounded-b-2xl"
            placeholder="Output Text"
          />
        </div>
      </div>
    </div>
  );
};

export default Upsidedown;

// Z⅄XMΛ∩┴SɹQԀONW˥ʞſIHפℲƎpƆq∀
// zʎxʍʌnʇsɹbdouɯlʞɾᴉɥƃɟǝpɔqɐ
// 068ㄥ9ϛㄣƐᄅƖ
