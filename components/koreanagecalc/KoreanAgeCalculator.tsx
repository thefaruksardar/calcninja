"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GrPowerReset } from "react-icons/gr";
import Share from "../others/share";

let tabs = [
  { id: "birthyear", label: "Year of Birth" },
  { id: "currentyear", label: "Current Age" },
];

function KoreanAgeCalculator() {
  const [koreanAge, setKoreanAge] = useState<number>();
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const calculateKoreanAgebyYOB = (data: any) => {
    const { currentyear, birthyear } = data;
    if (!birthyear) return;
    setKoreanAge(currentyear - birthyear + 1);
  };
  const calculateKoreanAgebyCY = (data: any) => {
    const { birthdaypassed, currentage } = data;
    if (!currentage) return;
    setKoreanAge(parseInt(birthdaypassed) + parseInt(currentage));
  };
  return (
    <section className="md:max-w-2xl md:mx-auto">
      <div className="bg-white my-6 p-3 border border-slate-100 shadow rounded-3xl">
        <p className="not-p mb-4 text-center text-base">
          Calculate your Korean Age Using:
        </p>
        <div className="flex items-center gap-2 mb-4">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "!text-white" : "hover:opacity-90"
              } relative text-center rounded-full px-3 py-2 text-base cursor-pointer font-medium text-gray-900 outline-sky-400 transition focus-visible:outline-2 z-20 w-1/2 shadow border border-slate-100`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-10 bg-violet-500 "
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </span>
          ))}
        </div>

        {activeTab === "birthyear" ? (
          <form
            onChange={handleSubmit(calculateKoreanAgebyYOB)}
            className="flex flex-col gap-3 px-3"
          >
            <span className="flex items-center justify-between gap-2">
              <label className="text-[1.1rem] w-1/2">Current Year:</label>

              <input
                className="w-1/2 text-xl px-3 py-1 focus:outline-none"
                defaultValue={new Date().getFullYear()}
                type="number"
                {...register("currentyear")}
              />
            </span>
            <span className="flex items-center justify-between gap-2">
              <label className="text-[1.1rem] w-1/2">Year of Birth:</label>
              <input
                className="w-1/2 text-xl px-3 py-1 focus:outline-none"
                placeholder="Ex: 1998"
                type="number"
                {...register("birthyear")}
              />
            </span>
          </form>
        ) : (
          <form
            onChange={handleSubmit(calculateKoreanAgebyCY)}
            className="flex flex-col gap-3 px-3"
          >
            <span className="flex items-center justify-between gap-2">
              <label className="text-[1.1rem] w-1/2 ">
                Birthday Passed This Year?
              </label>
              <select
                className="w-1/2 text-xl px-3 py-1 focus:outline-none"
                {...register("birthdaypassed")}
              >
                <option value="1" defaultChecked>
                  Yes
                </option>
                <option value="2">No</option>
              </select>
            </span>
            <span className="flex items-center justify-between gap-2">
              <label className="text-[1.1rem] w-1/2">Current Age:</label>
              <input
                className="w-1/2 text-xl px-3 py-1 focus:outline-none"
                placeholder="Ex: 23"
                type="number"
                {...register("currentage")}
              />
            </span>
          </form>
        )}
      </div>

      <div
        className="bg-violet-500 text-white text-center block py-4 text-base rounded-3xl shadow border border-slate-100 mb-4 cursor-pointer"
        title="Click to copy"
        onClick={() => {
          koreanAge && navigator.clipboard.writeText(`${koreanAge}`);
          koreanAge && toast.success(`"${koreanAge}" Age Copied`);
        }}
      >
        <p className="not-p text-[1.1rem] font-medium text-white">
          Korean Age is:
        </p>
        <span className="block font-semibold text-2xl mt-2">{koreanAge}</span>
      </div>

      <div className="mb-4 px-4 flex justify-between relative">
        <button
          onClick={() => reset()}
          className="flex items-center text-xl gap-2"
        >
          Reset <GrPowerReset />
        </button>

        <Share />
      </div>
    </section>
  );
}

export default KoreanAgeCalculator;
