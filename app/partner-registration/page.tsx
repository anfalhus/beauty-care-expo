"use client";

import Image from "next/image";
import Navbar from "../components/basic/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar forceDark/>
   
    <section
      className="
        w-full
        min-h-screen
        flex
        flex-col-reverse
        lg:flex-row
        items-center
        justify-between
        px-14
        md:px-14
        lg:px-28
        pt-20
        lg:pt-10
        pb-10
        gap-10
        overflow-x-hidden
        bg-[#F7EEEF]
        text-gray-700
      "
    >

      <div
        className="w-full text-center lg:pb-0 pb-20"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >

        <div className="flex flex-col gap-3">

          <h3 className="text-[#F4A6B6] text-lg">
            يُسعــدنا أن تكُون شريــك نجاحنــا القــادم
          </h3>

          <h1 className="text-3xl lg:text-4xl font-bold text-[#9DAA8B] leading-snug">
            دليـــــــل المشاركـــة والرعـــايـــة
          </h1>

          <p className="text-gray-700 max-md:text-sm">
            أدنــاه ستجـــد كُل ما تحتــاجه لإستكمــال إجراءات المشاركــة
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6 text-center">

            <a
              href="/files/profile.pdf"
              className="
                bg-[#F4A6B6]
                text-white
                py-3
                rounded-xl
                font-bold
                hover:opacity-90
                transition
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              ملف التعريف بالمعرض
            </a>

            <a
              href="/files/registration_steps.pdf"
              className="
                bg-[#9DAA8B]
                text-white
                py-3
                rounded-xl
                font-bold
                hover:opacity-90
                transition
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              خطوات المشاركة والرعاية
            </a>

            <a
              href="/files/packages.pdf"
              className="
                bg-[#F4A6B6]
                text-white
                py-3
                rounded-xl
                font-bold
                hover:opacity-90
                transition
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              الباقات والأسعار
            </a>

          </div>

        </div>

      </div>

      <div
        className="w-full text-right mt-5 lg:mt-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >

        <Image
          src="/images/logo.png"
          alt="Beauty Care Expo"
          width={700}
          height={700}
          className="w-full h-auto"
          priority
        />

      </div>

    </section>
     </div>
  );
}
// import React from 'react'

// export default function page() {
//   return (
//     <div>page</div>
//   )
// }
