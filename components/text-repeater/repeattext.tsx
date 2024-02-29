"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdCheck, MdCopyAll, MdShare } from "react-icons/md";
import Share from "../others/share";

export default function Repeattext() {
  const [generatedText, setGeneratedText] = useState("");
  const [copyState, setCopyState] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRepeatText = (data: any) => {
    const {
      userText,
      repeatTime,
      reverse,
      newline,
      space,
      dot,
      lowercase,
      uppercase,
      suffix,
      prefix,
    } = data;

    // Additional Options
    let modifiedValue = "";

    for (let i = 0; i < parseInt(repeatTime); i++) {
      if (prefix) {
        modifiedValue += `${prefix}`;
      }

      modifiedValue += userText;

      if (suffix) {
        modifiedValue += `${suffix}`;
      }

      if (dot) {
        modifiedValue += ".";
      }

      if (space) {
        modifiedValue += " ";
      }

      if (newline) {
        modifiedValue += "\n";
      }
    }

    if (reverse) {
      modifiedValue = modifiedValue.trim(); // Remove leading/trailing whitespace

      modifiedValue = modifiedValue.split("").reverse().join("");
    }

    if (uppercase) {
      modifiedValue = modifiedValue.toUpperCase();
    }

    if (lowercase) {
      modifiedValue = modifiedValue.toLowerCase();
    }

    setGeneratedText(modifiedValue);
  };

  const handleCopy = () => {
    if (!generatedText) {
      toast.error("No text available");
      return;
    }
    navigator.clipboard.writeText(generatedText);
    toast.success(`Text Copied`);

    setCopyState(false);

    setTimeout(() => {
      setCopyState(true);
    }, 1600);
  };

  return (
    <section className="lg:flex lg:gap-6 mx-4 ">
      <form
        onSubmit={handleSubmit(handleRepeatText)}
        className="w-full lg:mt-6"
      >
        <div className="mt-5 rounded-3xl bg-white flex flex-col gap-4 px-6 py-4 shadow lg:mt-0">
          <input
            className="focus:outline-none"
            placeholder="Happy Birthday James"
            {...register("userText", {
              required: "Please enter your text",
            })}
          />
          {errors.userText && (
            <p className="not-p text-red-500">
              {errors.userText.message?.toString()}
            </p>
          )}
          <hr />
          <input
            className="focus:outline-none"
            placeholder="50"
            type="number"
            {...register("repeatTime", {
              required: "Please enter repeat number",
            })}
          />
          {errors.repeatTime && (
            <p className="not-p text-red-500">
              {errors.repeatTime.message?.toString()}
            </p>
          )}
        </div>
        <div className="md:flex md:gap-3">
          <div className=" mt-5 rounded-3xl bg-white grid grid-cols-2 items-center gap-4 px-6 py-4 shadow md:flex-grow">
            <span className="text-center flex  flex-col gap-2 cursor-pointer">
              <input
                className="text-center max-w-full text-slate-800 focus:outline-none"
                placeholder="Ex: Hi, Hey"
                type="text"
                id="width"
                {...register("prefix")}
              />
              <label
                htmlFor="width"
                className="text-slate-500 text-sm select-none cursor-pointer"
              >
                Prefix
              </label>
            </span>
            <span className="text-center flex  flex-col gap-2 cursor-pointer">
              <input
                className="text-center max-w-full text-slate-800 focus:outline-none"
                type="text"
                id="suffix"
                placeholder="Ex: 1, !"
                {...register("suffix")}
              />
              <label
                htmlFor="suffix"
                className="text-slate-500 text-sm select-none cursor-pointer"
              >
                Suffix
              </label>
            </span>
            <span className="text-center flex  flex-col gap-2 cursor-pointer">
              <input
                className="text-center max-w-full text-slate-800 accent-violet-500 focus:outline-none cursor-pointer"
                type="checkbox"
                id="uppercase"
                {...register("uppercase")}
              />
              <label
                htmlFor="uppercase"
                className="text-slate-500 text-sm select-none cursor-pointer"
              >
                Uppercase
              </label>
            </span>
            <span className="text-center flex  flex-col gap-2 cursor-pointer">
              <input
                className="text-center max-w-full text-slate-800 accent-violet-500 focus:outline-none cursor-pointer"
                type="checkbox"
                id="lowercase"
                {...register("lowercase")}
              />
              <label
                htmlFor="lowercase"
                className="text-slate-500 text-sm select-none cursor-pointer"
              >
                Lowercase
              </label>
            </span>
            <span className="text-center flex  flex-col gap-2 cursor-pointer">
              <input
                className="text-center max-w-full text-slate-800 accent-violet-500 focus:outline-none cursor-pointer"
                type="checkbox"
                id="dot"
                {...register("dot")}
              />
              <label
                htmlFor="dot"
                className="text-slate-500 text-sm select-none cursor-pointer"
              >
                Period/Dot
              </label>
            </span>
            <span className="text-center flex  flex-col gap-2 cursor-pointer">
              <input
                className="text-center max-w-full text-slate-800 accent-violet-500 focus:outline-none cursor-pointer"
                type="checkbox"
                id="space"
                {...register("space")}
              />
              <label
                htmlFor="space"
                className="text-slate-500 text-sm select-none cursor-pointer"
              >
                Space
              </label>
            </span>
            <span className="text-center flex  flex-col gap-2 cursor-pointer">
              <input
                className="text-center max-w-full text-slate-800 accent-violet-500 focus:outline-none cursor-pointer"
                type="checkbox"
                id="newline"
                {...register("newline")}
              />
              <label
                htmlFor="newline"
                className="text-slate-500 text-sm select-none cursor-pointer"
              >
                New Line
              </label>
            </span>
            <span className="text-center flex flex-col gap-2">
              <input
                className="text-center max-w-full text-slate-800 accent-violet-500 focus:outline-none cursor-pointer"
                type="checkbox"
                id="reverse"
                {...register("reverse")}
              />
              <label
                htmlFor="reverse"
                className="text-slate-500 text-sm select-none cursor-pointer"
              >
                Reverse
              </label>
            </span>
          </div>
        </div>

        <div className="grid my-3 gap-3">
          <button
            className="bg-rose-500 py-2 rounded-2xl text-white transition hover:scale-105 active:scale-95"
            type="submit"
          >
            Repeat Text
          </button>
        </div>
      </form>

      <div className="bg-violet-50 py-3 rounded-2xl shadow mb-6 lg:py-0 lg:pb-3 lg:mt-6 self-start w-full relative">
        <div className="flex justify-between items-center bg-violet-500 text-white px-6 pt-3 pb-6 rounded-t-2xl">
          <label htmlFor="generatedcode">Repeated Text</label>
          <div className="flex items-center gap-2">
            <button
              className="flex items-center text-2xl "
              onClick={handleCopy}
            >
              {copyState ? <MdCopyAll /> : <MdCheck />}
            </button>
            <span className="text-sm text-gray-300">•</span>
            <Share title={generatedText} />
          </div>
        </div>
        <div className="-mt-4 w-full px-4 ">
          <textarea
            className="w-full p-3 border rounded-xl focus:outline-none"
            defaultValue={generatedText}
            rows={7}
            id="generatedcode"
          ></textarea>
        </div>
      </div>
    </section>
  );
}
