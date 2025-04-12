import { FOOTER_DATA } from "@/utils/data/footer";
import { LogoWhite } from "../global/logoWhite";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[url('/Images/Footer_Bg.png')] bg-cover bg-center bg-no-repeat text-white md:px-20 px-4 py-12">
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
            <h4 className="nunito-medium md:text-lg mt-10">Learn</h4>
            <div className="flex flex-col gap-4 mt-4">
              {FOOTER_DATA.learnCol.map((item, index) => (
                <Link href={item.link} key={index}>
                  <p className="text-[#CCCBC9]">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="nunito-medium md:text-lg mt-10">Contact</h4>
            <div className="flex flex-col gap-4 mt-4">
              {FOOTER_DATA.contactCol.map((item, index) => (
                <Link href={item.link} key={index}>
                  <p className="text-[#CCCBC9]">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="nunito-medium md:text-lg mt-10">Address</h4>
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
    </footer>
  );
};

export default Footer;
