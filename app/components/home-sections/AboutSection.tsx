import Image from "next/image";

export default function AboutSection() {
  return (
    <div
      className="relative pt-40 pb-48 px-4 text-center overflow-hidden"
      id="about"
    >

      <p
        className="text-[#F4A6B6] text-sm md:text-base font-bold"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        معرض الجمال الأكبر في المنطقة الشرقية
      </p>

      <h1
        className="text-[#9DAA8B] text-3xl md:text-5xl font-bold mt-3 leading-snug"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        بيوتي كيــــر اكسبــــو
      </h1>

      <div
        className="mt-6 text-base md:text-lg text-gray-700 z-20"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1200"
      >
        <p className="leading-8 max-w-3xl mx-auto">
          هو أكبر معرض للجمال والعناية في المنطقـة الشرقيـــة،
          حيث يجمع بين العلامات التجارية، العيادات، والمصنعين
          في تجربة متكاملة لتقديم منصة رائدة تربط بين الشركات والعملاء
          في سوق سريع النمو.
        </p>
      </div>

      <div
        className="mt-8 inline-block"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        <a
          href="#activities"
          className="
            bg-[#F4A6B6]
            text-white
            rounded-full
            px-8
            py-3
            text-sm
            md:text-base
            font-bold
            hover:opacity-90
            transition
          "
        >
          اكتشف البرامج والفعاليات
        </a>
      </div>

      <Image
        src="/images/logos/mini-green-logo.png"
        alt="Beauty Care Expo"
        width={288}
        height={288}
        className="
          absolute
          left-[-120px]
          top-1/2
          -translate-y-1/2
          w-72
          opacity-30
          pointer-events-none
          select-none
          -z-50
        "/>

    </div>
  );
}
// import React from 'react'

// export default function AboutSection() {
//   return (
//     <div>
// <div className='bg-[#DBA2B3]'>

// </div>

//     </div>
//   )
// }
