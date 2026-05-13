import Image from "next/image";
export default function Footer() {
  return (
    <div>

<footer className="bg-[#9DAA8B] text-white mt-20" id="contactus">
  <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">

    <div className="flex flex-col items-center md:items-start gap-4">
      <Image src="/images/white-logo.png" alt="logo" width={160} height={160}>
      </Image>
      <div className="flex gap-5 text-xl">

        <a href="https://www.tiktok.com/@beautycare_expo" target="_blank" className="hover:opacity-80 transition">
          <i className="fa-brands fa-tiktok"></i>
        </a>

        <a href="https://www.instagram.com/beautycare_expo" target="_blank" className="hover:opacity-80 transition">
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="https://x.com/beautycare_expo" target="_blank" className="hover:opacity-80 transition">
          <i className="fa-brands fa-x-twitter"></i>
        </a>

          <a href="https://wa.me/966598919215" target="_blank"
     className="hover:opacity-80 transition">
    <i className="fa-brands fa-whatsapp"></i>
    
  </a>

      </div>

    </div>



    <div className="flex flex-col items-center md:items-start gap-2">
      <h3 className="font-bold text-lg">تواصل معنا عبر</h3>
      <p>info@beautycxpo.com</p>
      <p style={{ direction: 'ltr', letterSpacing: '0.2em' }}>
  +966598919215
</p>
    </div>


    <div className="flex flex-col items-center md:items-start gap-4">
      <h3 className="font-bold text-lg">الراعي والقائم الرسمي</h3>
      <div className="-mt-9">
      <Image src="https://www.miraspoint.com/images/logo.svg"
           alt="Miras Point Event Management"
           width={128}
           height={128} />
           </div>
    </div>

  </div>

  <div className="text-center text-sm py-4 bg-[#9cae83]" style={{ direction: 'ltr' }}>
    &copy; 2026 Beauty Care Expo. All rights reserved.
  </div>
</footer>

    </div>
  )
}
