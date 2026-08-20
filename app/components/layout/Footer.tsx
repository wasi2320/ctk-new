"use client";

import { FOOTER_DATA } from "@/utils/data/footer";
import { LogoWhite } from "../global/logoWhite";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const backgroundImage =
    pathname === "/"
      ? "bg-[url('/Images/Partner_Bg.webp')]"
      : "bg-[url('/Images/Partner_Bg_Main_.webp')]";
  const inputBg = pathname === "/" ? "bg-[#16212e]" : "bg-[#1b4a74]";

  // The redesigned homepage ships its own footer.
  if (pathname === "/") return null;

  return (
    <footer>
      <div className="py-10 px-4 md:px-28 bg-gradient-to-r from-[#0d1526] to-[#16212e] flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-6xl text-white">
            {FOOTER_DATA.heading}
          </h2>
        </div>
        <div className="md:w-[40%] space-y-5">
          <h3 className="text-white md:text-3xl text-xl">
            {FOOTER_DATA.subHeading}
          </h3>
          <Link
            href="/contact"
            className="inline-block rounded-full nunito-medium font-semibold px-10 py-3 bg-white text-[#0972d3] text-lg hover:bg-white/90 transition-colors"
          >
            {FOOTER_DATA.buttonText}
          </Link>
        </div>
      </div>

      <div className="bg-[url('/Images/Footer_Bg.png')] bg-cover bg-center bg-no-repeat text-white md:px-28 px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-[45%]">
            <LogoWhite />
            <p className="md:text-lg md:mt-10 mt-5 mb-8 md:mb-20 leading-8">
              {FOOTER_DATA.logoCol.subHeading}
            </p>
            <h3 className="md:text-4xl text-2xl nunito-medium">
              {FOOTER_DATA.logoCol.heading}
            </h3>
          </div>
          <div className="ml-[9%] md:border-t-2 md:border-white flex justify-between md:mt-14 mt-6 gap-10">
            <div>
              <h4 className="md:text-lg mt-10">Learn</h4>
              <div className="flex flex-col gap-4 mt-4">
                {FOOTER_DATA.learnCol.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <p className="text-[#CCCBC9]">{item.name}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="md:text-lg mt-10">Contact</h4>
              <div className="flex flex-col gap-4 mt-4">
                {FOOTER_DATA.contactCol.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <p className="text-[#CCCBC9]">{item.name}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-[50%">
              <h4 className="md:text-lg mt-10">Address</h4>
              <p className="text-[#CCCBC9] mb-1 mt-4 whitespace-pre-line">
                {FOOTER_DATA.addressCol.addressOne}
              </p>
              <p className="text-[#CCCBC9] ">
                {FOOTER_DATA.addressCol.addressTwo}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white mt-16 flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-[30%] mt-8">
            <div className="flex justify-between gap-4 md:gap-0">
              {FOOTER_DATA.otherPages.map((item, index) => (
                <Link href={item.link} key={index}>
                  <p className="md:text-lg text-sm">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 mt-8 flex justify-end">
            <div className="flex gap-5">
              {FOOTER_DATA.socialCol.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="w-7 h-7 flex justify-center items-center bg-white rounded-full"
                >
                  <Image
                    src={item.icon}
                    alt={item.ariaLabel}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
