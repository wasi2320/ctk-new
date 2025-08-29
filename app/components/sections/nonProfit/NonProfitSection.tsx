"use client";
import React from "react";
import { nonProfitSectionData } from "@/utils/data/NonProfitSectionData";
import Image from "next/image";

const NonProfitSection = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 gap-8">
      {/* Left: Text Content */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-6xl font-bold text-gray-900 mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
          {nonProfitSectionData.title}
        </h1>
        <p className="text-xl text-gray-800 mb-10">
          {nonProfitSectionData.description}
        </p>
        <button
          onClick={() => {
            window.location.href = "/contact";
          }}
          className="bg-gray-900 text-white text-xl cursor-pointer font-semibold rounded-full px-8 py-4 shadow-lg hover:bg-gray-800 transition drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
        >
          {nonProfitSectionData.buttonText}
        </button>
      </div>
      {/* Right: Illustration */}
      <div className="flex-1 flex items-center justify-center">
        <Image
          src={nonProfitSectionData.image}
          alt="Non profit illustration"
          width={600}
          height={400}
          className="max-w-full h-auto md:max-w-xlg"
        />
      </div>
    </section>
  );
};

export default NonProfitSection;
