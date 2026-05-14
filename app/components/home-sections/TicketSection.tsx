import Image from "next/image";

export default function TicketSection() {


  return (
<div className="relative pt-64 pb-48 px-4 text-center overflow-hidden" id="book">
<h1 className="text-[#9DAA8B] text-2xl md:text-3xl font-bold leading-snug">
  سيُفتح باب حجز التذاكر المحدودة
</h1>
<div className="mt-4 text-base md:text-lg z-20 text-gray-700">
  <p className="leading-8">
    كُونوا على مقربة من تجربــة
    <br />
    تجمع الجمــال ،  الإلهــام ،  والفرص الاستثنائيــة
  </p>
  <br />
      <p className="text-[#F4A6B6] text-xl">
     قـــريبـــــــاً
          </p>
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

