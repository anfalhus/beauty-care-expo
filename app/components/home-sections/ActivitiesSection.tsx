"use client";

import { useState } from "react";

type Tab = {
  title: string;
  desc: string;
  img: string;
  label: string;
};

const tabs: Tab[] = [
  {
    title: "ورش تدريبيــــة",
    label: "ورش تدريـبيـة",
    desc: "تعلمي أحدث تقنيات المكياج والعناية بالبشرة على يد مختصين في عالم التجميل. ورش عملية تساعدك على تطوير مهاراتك سواء كنتِ مبتدئة أو محترفة مع تطبيق مباشر وتجربة واقعية لأحدث الأدوات والمنتجات تحت إشراف اشهر المؤثرين والمبدعين في عالم التجميل.",
    img: "https://images.pexels.com/photos/35983952/pexels-photo-35983952.jpeg",
  },
  {
    title: "فعاليــات وتجــارب",
    label: "فعاليـات وتجــارب",
    desc: "استمتعي بتجارب تفاعلية داخل عالم الجمال من عروض مكياج حية وتجارب منتجات حصرية، وفعاليات تجمع بين المتعة واكتشاف أحدث صيحات التجميل.",
    img: "https://www.image2url.com/r2/default/images/1776941240204-f341ed64-fd68-48ad-9c11-d4942d3ccfa9.jpg",
  },
  {
    title: "منتجــات ومبيعــات",
    label: "منتجــات ومبيعــات",
    desc: "اكتشفي أفضل منتجات التجميل والعناية بالبشرة من أشهر العلامات التجارية مع عروض خاصة وتجربة تسوق مميزة تناسب كل احتياجاتك الجمالية.",
    img: "https://images.pexels.com/photos/8101513/pexels-photo-8101513.jpeg",
  },
  {
    title: "استشـارات بالمجـــال",
    label: "استشــارات بالمجــال",
    desc: "احصلي على استشارات احترافية في مجال التجميل مع خبراء يساعدونك في اختيار ما يناسبك ويناسب أسلوبك الخاص.",
    img: "https://images.pexels.com/photos/4586740/pexels-photo-4586740.jpeg",
  },
  {
    title: "قاعـة نقاشـــات",
    label: "قاعــة نقـاشــات",
    desc: "مساحة مفتوحة لتبادل الخبرات والنقاش حول أحدث اتجاهات عالم التجميل والإجابة على جميع استفساراتك مع مختصين ومحترفين.",
    img: "https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg",
  },
  {
    title: "نخبة من الخبـــراء",
    label: "نخبــة من الخبــراء",
    desc: "تعرفي على نخبة من خبراء التجميل وأخصائيي البشرة الذين يقدمون لك أفضل الحلول والتقنيات الحديثة للعناية والجمال بحضور افضل الأطباء في عالم التجميل في المملكة.",
    img: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
  },
];

export default function ActivitiesSection() {
  const [active, setActive] = useState<Tab>(tabs[0]);
  const [bg, setBg] = useState(tabs[0].img);

  const handleClick = (tab: Tab) => {
    setActive(tab);

    // تأثير تغيير الخلفية
    setBg(""); 
    setTimeout(() => {
      setBg(tab.img);
    }, 150);
  };

  return (
          <div id="activities">
    <div
      id="hero"
      className="relative bg-cover bg-center transition-all duration-300"
      style={{ backgroundImage: `url(${bg})` }} >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative pb-10 pt-20 text-right text-white px-6 sm:px-10 md:px-16 lg:px-24 xl:pr-30">
        

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
          الفعاليــــات والبرامــــــــج
        </h3>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-10 w-full lg:w-3/4 xl:w-1/2" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
          {tabs.map((tab) => (
            <button
              key={tab.title}
              onClick={() => handleClick(tab)}
              className={`text-xs sm:text-sm md:text-base px-2 py-3 sm:px-4 sm:py-4 rounded-2xl transition-all duration-300  border
              ${
                active.title === tab.title
                  ? "bg-[#F4A6B6]/20 border-[#F4A6B6]"
                  : "bg-black/10 hover:bg-black/20 border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="pb-10 pt-8 sm:pt-14 w-full lg:w-3/4 xl:w-1/2" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
          <h1 className="text-xl sm:text-2xl font-bold">
            {active.title}
          </h1>

          <p className="text-sm sm:text-lg font-light mt-2 leading-relaxed">
            {active.desc}
          </p>
        </div>
      </div>

    </div>
    </div>
  );
}
// export default function ActivitiesSection() {
//   return (
//     <div>
      

//     </div>
//   )
// }
