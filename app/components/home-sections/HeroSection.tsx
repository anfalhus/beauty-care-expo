import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div>
      <section
        className="
          relative
          h-screen
          overflow-hidden
          bg-cover
          bg-top
          bg-no-repeat
        "
        style={{ backgroundImage: "url('/images/beauty-care-expo-hero.png')" }}
      >

        {/* Overlay خفيف */}
        <div className="absolute inset-0 bg-black/10" />

        {/* التلاشي الأبيض */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-32 md:h-40
            bg-gradient-to-b
            from-transparent
            to-white/45
          "
        />

        {/* المحتوى */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">

          <div className="text-center mt-20 md:mt-22">

            <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-qahwa text-[#FFD7DF]" data-aos="fade-down" data-aos-delay="0">
              لحَظات
              <br />
              يصُوغها
              <br />
              جمالكِ
            </h1>

            <p className="tracking-[0.3em] md:tracking-[0.4em] uppercase mb-5 text-xs md:text-sm mt-5 text-[#D9EEC5]" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000">
              Beauty Care Expo 2026
            </p>
            <a href="#book">
              <button className='bg-[#C66478] text-white rounded-full px-12 py-1 text-lg hover:bg-[#A84F5F]'
                data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                <span className='font-qahwa'>احجز تذكرتك الآن</span>
              </button>
            </a>

          </div>
        </div>

        {/* يمين أعلى */}
        <div className="absolute right-15 md:right-20 lg:right-60 top-30 md:top-32
         lg:top-45 z-20 text-white text-[12px] md:text-[13px] lg:text-[14px] leading-5" 
          data-aos="fade-left" data-aos-offset="100" data-aos-duration="900" data-aos-delay="100">
          <div className='flex flex-col items-start gap-2'>

            <Image src="/images/spark.png" alt="Beauty Care Expo" width={15} height={15} priority />

            <p data-aos="fade-left" data-aos-offset="100" data-aos-duration="900" data-aos-delay="200">
              تعرفـي على الجمال
              <br />
              من زاويــة أقـــــرب
            </p>

            <p className='font-light text-xs md:text-sm'data-aos="fade-left" data-aos-offset="100" data-aos-duration="900" data-aos-delay="200">
              get to know art from
              <br />
              a closer perspective 
            </p>

            <Image src="/images/spark.png" alt="Beauty Care Expo" width={15} height={15} priority data-aos="fade-left" data-aos-offset="100" data-aos-duration="900" data-aos-delay="300" />
             <Image src="/images/spark.png" alt="Beauty Care Expo" width={15} height={15} priority data-aos="fade-left" data-aos-offset="100" data-aos-duration="900" data-aos-delay="400" />
          </div>
        </div>

        {/* يمين أسفل */}
        <div className="absolute right-15 md:right-20 lg:right-60 bottom-20 md:bottom-32 lg:bottom-45 z-20 text-white text-[12px] md:text-[13px] lg:text-[14px] leading-5"
         data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" data-aos-delay="200">
          <div className='flex flex-col items-start gap-2'>

            <Image src="/images/spark.png" alt="Beauty Care Expo" width={15} height={15} priority />

            <p>
              أكبر معرض
              <br />
              في المنطقة الشرقيـة
            </p>

            <p className='font-light text-xs md:text-sm'>
              The Biggest exhibition
              <br/>
              in the Eastern Province
            </p>

          </div>
        </div>

        {/* يسار أسفل */}
        <div className="absolute left-15 md:left-20 lg:left-60 bottom-20 md:bottom-32 
        lg:bottom-45 z-20 text-white text-[12px] md:text-[13px] lg:text-[14px] leading-5 text-left"
         data-aos="fade-right" data-aos-offset="100" data-aos-duration="900" data-aos-delay="500">
          <div className='flex flex-col items-end gap-2'>

            <Image src="/images/spark.png" alt="Beauty Care Expo" width={15} height={15} priority />

            <p>
              موقع استراتيجــي
              <br/>
              فندق انتركونتيننتـــال الأحساء
            </p>

            <p className='font-light text-xs md:text-sm'>
              in middle of Al Ahsa
              <br/>
              InterContinental Al Ahsa Hotel
            </p>

          </div>
        </div>

        {/* يسار أعلى */}
        <div className="absolute left-15 md:left-20 lg:left-60 top-30 md:top-32 lg:top-45 z-20 text-white text-[12px] md:text-[13px] lg:text-[14px] leading-5 text-left"
         data-aos="fade-right" data-aos-offset="100" data-aos-duration="2000" data-aos-delay="400">
          <div className='flex flex-col items-end gap-2'>

            <Image src="/images/spark.png" alt="Beauty Care Expo" width={15} height={15} priority />

            <p>
              يبدأ المعرض في
              <br />
              <span dir='ltr'>
                1 oct 2026
              </span>
            </p>
            <p className='font-light text-xs md:text-sm'>
              The exhibition begins on
            </p>

          </div>
        </div>

      </section>
    </div>
  )
}