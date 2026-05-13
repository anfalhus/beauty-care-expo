"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TicketSection() {

  const targetDate = new Date("2026-05-15T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {

    const updateTicketCountdown = () => {

      const now = new Date().getTime();
      const difference = targetDate - now;

      // عند انتهاء العداد
      if (difference <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });

        return;
      }

      // حساب الوقت
      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
      );

      const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
      );

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    updateTicketCountdown();

    const interval = setInterval(
      updateTicketCountdown,
      1000
    );

    return () => clearInterval(interval);

  }, [targetDate]);

  return (
    <div
      className="relative pt-64 pb-48 px-4 text-center overflow-hidden"
      id="book"
    >


<h1 className="text-[#9DAA8B] text-2xl md:text-3xl font-bold leading-snug">
  سيُفتح باب حجز التذاكر المحدودة
</h1>

<div className="mt-4 text-base md:text-lg z-20 text-gray-700">
  <p className="leading-8">

    <b className="text-[#F4A6B6]">
      ابتداءً من 15 مايو 2026
    </b>

    <br />
    كُونوا على مقربة من تجربــة
    <br />
    تجمع الجمــال ،  الإلهــام ،  والفرص الاستثنائيــة

  </p>
</div>

      <div
        className="mt-6 text-sm md:text-base text-white bg-[#F4A6B6] rounded-full py-3 px-6 inline-block font-bold"
        data-aos="fade-right"
        data-aos-offset="150"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >

        <span>{timeLeft.days}</span> يوم :
        <span> {timeLeft.hours}</span> ساعة :
        <span> {timeLeft.minutes}</span> دقيقة :
        <span> {timeLeft.seconds}</span> ثانية

      </div>

      <Image
        src="/images/logos/mini-green-logo.png"
        alt=""
        width={288}
        height={288}
        className="
          absolute left-[-120px] top-1/2 -translate-y-1/2
          w-72 opacity-30 pointer-events-none select-none -z-50"/>

    </div>
  );
}
// export default function TicketSection() {
//   return (
//     <div>TicketSection</div>
//   )
// }
