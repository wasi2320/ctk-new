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
      ? "bg-[url('/Images/Partner_Bg.png')]"
      : "bg-[url('/Images/Partner_Bg_Main.png')]";
  const inputBg = pathname === "/" ? "bg-[#152F27]" : "bg-[#254F42]";

  return (
    <footer>
      <div
        className={`py-10 px-4 md:px-20 ${backgroundImage} bg-cover bg-center bg-no-repeat flex justify-between items-center`}
      >
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl text-white">
            {FOOTER_DATA.heading}
          </h2>
        </div>
        <div className="md:w-[40%] space-y-5">
          <h3 className="text-white md:text-3xl">{FOOTER_DATA.subHeading}</h3>
          <div
            className={`${inputBg} p-1.5 flex justify-between items-center rounded-full`}
          >
            <input
              type="email"
              placeholder={FOOTER_DATA.placeholder}
              className="text-white outline-none ml-6 text-lg w-7/12"
            />
            <button className="rounded-full nunito-medium font-semibold px-9 py-2 bg-white text-[#1C3D7A] cursor-pointer text-lg">
              {FOOTER_DATA.buttonText}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[url('/Images/Footer_Bg.png')] bg-cover bg-center bg-no-repeat text-white md:px-20 px-4 py-12">
        <div className="flex justify-between">
          <div className="md:w-[45%]">
            <LogoWhite />
            <p className="md:text-lg mt-10 mb-20 leading-8">
              {FOOTER_DATA.logoCol.subHeading}
            </p>
            <h3 className="md:text-4xl">{FOOTER_DATA.logoCol.heading}</h3>
          </div>
          <div className="md:w-1/2 border-t-2 border-white flex justify-center gap-20 mt-14">
            <div className="md:ml-20">
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
            <div>
              <h4 className="md:text-lg mt-10">Address</h4>
              <p className="text-[#CCCBC9] mb-1 mt-4 md:w-9/12">
                {FOOTER_DATA.addressCol.addressOne}
              </p>
              <p className="text-[#CCCBC9] md:w-9/12 w-1/2 text-center md:text-start">
                {FOOTER_DATA.addressCol.addressTwo}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white mt-16 flex justify-between items-center">
          <div className="md:w-[45%] mt-8">
            <div className="flex justify-between">
              {FOOTER_DATA.otherPages.map((item, index) => (
                <Link href={item.link} key={index}>
                  <p className="md:text-lg">{item.name}</p>
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
                  className="w-7 h-7 flex justify-center items-center bg-white rounded-full"
                >
                  <Image
                    src={item.icon}
                    alt=""
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
