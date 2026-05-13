/* eslint-disable react-hooks/static-components */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CounterSection() {
  const targetDate = new Date("2026-07-22T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const Box = ({
    value,
    label,
  }: {
    value: string;
    label: string;
  }) => (
    <div className="flex flex-col items-center justify-center w-20 h-28 sm:w-20 sm:h-30 rounded-full bg-[#F4A6B6] text-white shadow-lg">
      <span className="text-2xl sm:text-3xl font-bold leading-none">
        {value}
      </span>
      <span className="text-[14px] sm:text-lg opacity-90">
        {label}
      </span>
    </div>
  );

  return (
    <section className="relative flex flex-col items-center text-center px-4 my-52 overflow-hidden">

      {/* Title */}
      <h3  className="text-[#F4A6B6] text-sm md:text-base font-bold" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        كُن جزءًا من هذه التجربة الاستثنائيــــة
      </h3>

      <h1 className="text-2xl sm:text-4xl font-bold text-[#9DAA8B] leading-snug mt-2" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
متبقي لإنطلاق المعرض
      </h1>

      {/* Countdown */}
      <div className="flex gap-3 sm:gap-5 mt-6" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
        <Box value={timeLeft.days} label="يوم"/>
        <Box value={timeLeft.hours} label="ساعة" />
        <Box value={timeLeft.minutes} label="دقيقة" />
        <Box value={timeLeft.seconds} label="ثانية" />
      </div>

            <p className="text-gray-700 text-sm sm:text-base max-w-md mt-7" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000">
         - إبتــــداءًا من 22 يوليــو حتى 26 يوليــو 2026 -
      </p>
      <Image
  src="/images/logos/mini-green-logo.png"
  alt="Beauty Care Expo"
  width={288}
  height={288}
  className="
    absolute
    right-[-120px]
    top-1/2
    -translate-y-1/2
    w-72
    opacity-30
    pointer-events-none
    select-none
    -z-50"/>
    </section>
  );
}