type MobileMenuProps = {
  isOpen: boolean;
  scrolled: boolean;
  forceDark?: boolean;
};

export default function MobileMenu({
  isOpen,
  scrolled,
  forceDark = false,
}: MobileMenuProps) {

  const textColor =
    forceDark || scrolled
      ? "text-gray-700"
      : "text-gray-700";

  return (
    <div
      className={`
        fixed top-30 right-0 w-full h-[50vh]
        max-h-[50vh]
        bg-[#F7EEEF]/90
        backdrop-blur-3xl
        rounded-2xl
        flex flex-col
        items-center
        justify-center
        gap-6
        text-lg
        font-medium
        transition-all
        duration-500
        z-40
        ease-in-out
        ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-[120%] opacity-0 pointer-events-none"
        }
      `}
    >
      <a href="#activities" className={`hover:text-[#F4A6B6] transition ${textColor}`}>
        البرامج والفعاليات
      </a>

      <a href="#book" className={`hover:text-[#F4A6B6] transition ${textColor}`}>
        احجز تذكرتك
      </a>

      <a href="#location" className={`hover:text-[#F4A6B6] transition ${textColor}`}>
        موقع المعرض
      </a>

      <a href="#ourpartner" className={`hover:text-[#F4A6B6] transition ${textColor}`}>
        كُن شريكنا القادم
      </a>

      <a href="#contactus" className={`hover:text-[#F4A6B6] transition ${textColor}`}>
        تواصل معنا
      </a>

    </div>
  );
}