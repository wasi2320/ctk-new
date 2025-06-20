"use client";

import { FOOTER_DATA } from "@/utils/data/footer";
import { LogoWhite } from "../global/logoWhite";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Footer = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const backgroundImage =
    pathname === "/"
      ? "bg-[url('/Images/Partner_Bg.png')]"
      : "bg-[url('/Images/Partner_Bg_Main_.png')]";
  const inputBg = pathname === "/" ? "bg-[#152F27]" : "bg-[#254F42]";

  const sendToDiscord = async (emailAddress: string) => {
    setIsLoading(true);
    try {
      const webhookUrl =
        "https://discord.com/api/webhooks/1382850558288855200/FdgEKZeNdokxtBgahKci9FS70F_AS3lObDBZEaA0ruun7H98PxK-_oGKjFQs65KvQnU4";

      const message = {
        content: `📧 **New Connection Request**\n\n**Email:** ${emailAddress}\n**Message:** This email wants to get connected with you!\n\n*Sent from your website footer subscription.*`,
        embeds: [
          {
            title: "New Subscription Request",
            description: `Someone wants to connect with you!`,
            color: 0x00ff00,
            fields: [
              {
                name: "Email Address",
                value: emailAddress,
                inline: true,
              },
              {
                name: "Request Type",
                value: "Connection Request",
                inline: true,
              },
              {
                name: "Timestamp",
                value: new Date().toLocaleString(),
                inline: false,
              },
            ],
            footer: {
              text: "Website Footer Subscription",
            },
          },
        ],
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        alert("Thank you! Your connection request has been sent successfully.");
        setEmail(""); // Clear the email input
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending to Mail:", error);
      alert(
        "Sorry, there was an error sending your request. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    sendToDiscord(email);
  };

  return (
    <footer>
      <div className="py-10 px-4 md:px-28 bg-gradient-to-r from-[#000209] to-[#13241E] flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-6xl text-white">
            {FOOTER_DATA.heading}
          </h2>
        </div>
        <div className="md:w-[40%] space-y-5">
          <h3 className="text-white md:text-3xl text-xl">
            {FOOTER_DATA.subHeading}
          </h3>
          <div className="bg-white/10 p-1.5 flex justify-between items-center rounded-full">
            <input
              type="email"
              placeholder={FOOTER_DATA.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-white outline-none ml-6 text-lg w-7/12 bg-transparent placeholder-white/70"
            />
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`rounded-full nunito-medium font-semibold px-9 py-2 bg-white text-[#1C3D7A] text-lg hover:bg-white/90 transition-colors ${
                isLoading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {isLoading ? "Sending..." : FOOTER_DATA.buttonText}
            </button>
          </div>
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
