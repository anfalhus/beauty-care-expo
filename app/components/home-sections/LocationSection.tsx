"use client";

export default function LocationSection() {
  return (
    <div className="pt-16 text-center" id="location">

      <div
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-duration="1000"
      >
        <h1 className="text-[#9DAA8B] text-2xl md:text-3xl font-bold">
          سيُقـــام المعرض 
        </h1>

        <p className="text-base md:text-lg my-3">
          في قاعة فنـــدق انتركونتيننتـــال الاحســـاء
        </p>
      </div>

      <div
        className="w-full h-64 md:h-[800px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.image2url.com/r2/default/images/1776938664198-66139b9b-28cc-4f08-9e82-aea7c19ca004.png')",
        }}
      />

      <div
        className="
          bg-[#9DAA8B]
          text-white
          p-4
          flex
          flex-col
          md:flex-row
          gap-3
          md:gap-0
          justify-between
          items-center
          text-center
          md:text-right
        ">
        <p className="text-sm md:text-base"
         data-aos="fade-right"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          فندق الانتركونتيننتال الاحساء - المنطقة الشرقية - المملكة العربية السعودية
        </p>

        <a
          href="https://maps.app.goo.gl/erhdZ2Za9ibwiJda9?g_st=ic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-white rounded-full px-6 py-1 text-sm"  data-aos="fade-left"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            افتح الموقع في خرائط جوجل
          </button>
        </a>
      </div>

    </div>
  );
}