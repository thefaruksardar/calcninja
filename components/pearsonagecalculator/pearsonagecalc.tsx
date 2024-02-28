"use client";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import useLocalStorageSimp from "@/hooks/useLocalstoragesimp";
export default function Home(): JSX.Element {
  const [birthdate, setBirthdate] = useLocalStorageSimp("birthdate", "");
  const [currentDate, setCurrentDate] = useState<string>(getCurrentDate());
  const [showAge, setShowAge] = useState(false);
  const [age, setAge] = useState<Age>({
    years: null,
    months: null,
    weeks: null,
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  interface Age {
    years: number | null;
    months: number | null;
    weeks: number | null;
    days: number | null;
    hours: number | null;
    minutes: number | null;
    seconds: number | null;
  }

  const calculatedSectionRef = useRef<HTMLDivElement>(null);

  function getCurrentDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const calculateAge = (): void => {
    if (!birthdate) {
      toast.error("Please Enter Birthdate");
      return;
    }
    const today: Date = new Date(currentDate);
    const birthDate: Date = new Date(birthdate);
    const diff: number = today.getTime() - birthDate.getTime();

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);
    setAge({
      years,
      months,
      weeks,
      days,
      hours,
      minutes,
      seconds,
    });

    setShowAge(true);
    // Scroll to the calculated section
    if (calculatedSectionRef.current) {
      calculatedSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="md:max-w-5xl md:mx-auto lg:flex lg:justify-center lg:gap-5">
      <div className="bg-white my-6 px-3 py-6 border border-slate-100 shadow rounded-3xl text-center w-full">
        <span className="block text-2xl mb-5 font-medium">
          Pearson Age Calculator
        </span>
        <div className="mb-5 border-b pb-5">
          <span className="text-center flex  flex-col gap-4">
            <input
              type="date"
              id="birthdate"
              value={birthdate}
              className="w-2/3 mx-auto text-xl p-3 focus:outline-violet-500"
              onChange={(e) => setBirthdate(e.target.value)}
            />
            <label htmlFor="birthdate" className="text-slate-500 text-base">
              Enter Your Birthdate
            </label>
          </span>
        </div>
        <div className="mb-6 text">
          <span className="text-center flex flex-col justify-center gap-4">
            <input
              type="date"
              id="currentDate"
              className="w-2/3 mx-auto text-xl focus:outline-violet-500 p-3"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
            />
            <label htmlFor="currentDate" className="text-slate-500 text-base">
              Current Date
            </label>
          </span>
        </div>

        <button
          className="bg-violet-500 text-white py-2 text-xl px-5 rounded-3xl"
          onClick={calculateAge}
        >
          Calculate Age
        </button>
      </div>

      <div
        id="age"
        className="bg-white my-6 px-3 py-6 border border-slate-100 shadow rounded-3xl text-center w-full"
      >
        <div>
          <span className="block text-xl font-medium mb-5">Your Age:</span>
          {showAge && (
            <ul>
              {age.years ? (
                <p className="not-p text-xl mb-5">
                  <strong className="font-semibold">{age.years}</strong> Years
                </p>
              ) : null}
              {age.months ? (
                <p className="not-p text-xl mb-5">
                  <strong className="font-semibold">{age.months}</strong> Months
                </p>
              ) : null}
              {age.weeks ? (
                <p className="not-p text-xl mb-5">
                  <strong className="font-semibold">{age.weeks}</strong> Weeks
                </p>
              ) : null}
              {age.days ? (
                <p className="not-p text-xl mb-5">
                  <strong className="font-semibold">{age.days}</strong> Days
                </p>
              ) : null}
              {age.hours ? (
                <p className="not-p text-xl mb-5">
                  <strong className="font-semibold">{age.hours}</strong> Hours
                </p>
              ) : null}
              {age.minutes ? (
                <p className="not-p text-xl mb-5">
                  <strong className="font-semibold">{age.minutes}</strong>{" "}
                  Minutes
                </p>
              ) : null}
              {age.seconds ? (
                <p className="not-p text-xl mb-5">
                  <strong className="font-semibold">{age.seconds}</strong>{" "}
                  Seconds
                </p>
              ) : null}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
