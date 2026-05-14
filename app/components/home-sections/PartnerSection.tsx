"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export default function PartnerSection() {

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setIsLoading(true);

    try {

      await emailjs.sendForm(
        "service_6bbmz0h",
        "template_bh1wcug",
        e.currentTarget,
        "vaKKjBxBFrghfj6pH"
      );

      setIsSuccess(true);

    } catch (error) {

      console.log(error);

      alert(
        "حدث خطأ، يرجى المحاولة مرة أخرى لاحقًا أو التواصل عبر الإيميل أو الرقم بشكل مباشر"
      );

    } finally {

      setIsLoading(false);

    }

  };

  return (
    <>
      {!isSuccess && (
        <>
          <div id="ourpartner"></div>

          <form
            id="partner-form"
            onSubmit={handleSubmit}
            className="
              pt-20
              px-15
              flex
              flex-col
              items-center
              gap-4
              max-w-2xl
              mx-auto
            "
          >

            <p className="text-sm text-[#F4A6B6] font-bold" data-aos="fade-down" data-aos-offset="100" data-aos-duration="1000">
              هل توّد أن تكـــون
            </p>

            <h2 className="text-[#9DAA8B] text-2xl md:text-3xl font-bold text-center" data-aos="fade-down" data-aos-offset="250" data-aos-duration="1000">
              شريك نجاحنا القادم؟
            </h2>

            <input
              name="company"
              className="w-full border border-gray-200 rounded-lg py-3 px-4 bg-[#fff9f9]"
              type="text"
              placeholder="اسم الجهة"
              required
            />

            <div className="flex flex-col md:flex-row gap-4 w-full">

              <input
                name="email"
                className="w-full border border-gray-200  rounded-lg py-3 px-4 bg-[#fff9f9]"
                type="email"
                placeholder="البريد الإلكتروني"
                required
              />

              <input
                name="phone"
                className="w-full border border-gray-200 rounded-lg py-3 px-4 bg-[#fff9f9]"
                type="tel"
                placeholder="رقم الجوال"
                required
              />

            </div>

            {/* مجال العمل */}
            <select
              name="field"
              required
              defaultValue=""
              className="
                w-full
                border
                border-gray-200
                rounded-lg
                py-3
                px-4
                 bg-[#fff9f9]
                text-gray-500
                transition
                duration-300
              "
            >

              <option value="" disabled>
                اختر مجال العمل
              </option>

              <option value="علامة تجارية">
                علامة تجارية
              </option>

              <option value="عيادة">
                عيادة
              </option>

              <option value="مصنع">
                مصنع
              </option>

              <option value="آخر">
                آخر
              </option>

            </select>

            {/* الرسالة */}
            <textarea
              name="message"
              rows={5}
              placeholder="نبذة عن المشاركة التي ستقدمها . . ."
              className="
                w-full
                border
                border-gray-200
                bg-[#fff9f9]
                rounded-lg
                py-3
                px-4
                resize-none
                transition
                duration-300
              "
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              id="submit-btn"
              className="
                bg-[#F4A6B6]
                text-white
                font-bold
                py-2
                px-5
                rounded-xl
                transition
                w-full
                md:w-[60%]
                mt-4
                disabled:opacity-70
              "
            >
              {isLoading
                ? "جارٍ الإرسال..."
                : "إرسال طلب المشاركة"}
            </button>

          </form>
        </>
      )}

      {/* رسالة النجاح */}
      {isSuccess && (
        <div
          id="success-message"
          className="text-center py-24 px-6"
        >

          <h2 className="text-[#9DAA8B] text-3xl md:text-4xl font-bold mb-4">
            <br />
            <br />
            <br />
            شكراً لك ✨
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            تم إرسال طلب المشاركة بنجاح،
            سيتواصل معك فريقنا قريبًا.
          </p>

        </div>
      )}
    </>
  );
}

// export default function PartnerSection() {
//   return (
//     <div>PartnerSection</div>
//   )
// }
