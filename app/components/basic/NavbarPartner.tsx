"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import MobileMenuPartner from "./MobileMenuPartner";

type NavbarPartnerProps = {
  forceDark?: boolean;
};

export default function NavbarPartner({
  forceDark = false,
}: NavbarPartnerProps) {

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  // إذا forceDark=true يصبح رمادي دائمًا
  const textColor =
    forceDark || scrolled
      ? "text-gray-800"
      : "text-white";

  return (
    <nav className="fixed top-0 w-full z-50 pt-5 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="flex items-center justify-center">

          {/* Desktop Menu */}
          <ul
            className={`
              hidden md:flex items-center justify-between
              w-full max-w-7xl
              text-sm font-light
              transition
              ${textColor}
            `}
          >

            <li>
              <a href="\#activities" className="hover:text-[#F4A6B6] transition">
                البرامج والفعاليات
              </a>
            </li>

            <li>
              <a href="\#book" className="hover:text-[#F4A6B6] transition">
                احجز تذكرتك
              </a>
            </li>

            <li className="flex justify-center">
              <Image
                src="/images/logos/mini-green-logo.png"
                alt="Beauty Care Expo"
                width={75}
                height={75}
                priority
              />
            </li>

            <li>
              <a href="\#ourpartner" className="hover:text-[#F4A6B6] transition">
                إنضم إلينا كشريك
              </a>
            </li>

            <li>
              <a href="\#contactus" className="hover:text-[#F4A6B6] transition">
                اتصل بنا
              </a>
            </li>

          </ul>

          {/* Mobile */}
          <div
            className={`
              md:hidden
              w-full
              flex
              items-center
              justify-between
              ${textColor}
            `}
          >

            {/* Burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="z-50"
            >
              <div className="space-y-1">
                <span className="block w-6 h-[2px] bg-current"></span>
                <span className="block w-6 h-[2px] bg-current"></span>
                <span className="block w-6 h-[2px] bg-current"></span>
              </div>
            </button>

            <Image
              src="/images/logos/mini-green-logo.png"
              alt="Beauty Care Expo"
              width={65}
              height={65}
              priority
            />

            <div className="w-[45px]" />

          </div>

        </div>

      </div>

      <MobileMenuPartner
        isOpen={isOpen}
        forceDark={forceDark}
        scrolled={scrolled}
      />

    </nav>
  );
}