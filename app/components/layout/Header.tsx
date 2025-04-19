"use client";
import { useState } from "react";
import { HEADER } from "@/utils/data/header";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "../global/logo";
import IconClose from "../icons/IconClose";
import IconMenu from "../icons/IconMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-20 pt-3">
        <div>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-10">
            {HEADER.navItems.map((item, index) => (
              <Link href={item.link} key={index}>
                <p className="text-lg">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
          <Image
            src={HEADER.search}
            alt="Search"
            height={35}
            width={35}
            className="w-[30px] h-[30px] cursor-pointer"
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <IconMenu />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={toggleMenu}
        />

        {/* Sidebar Content */}
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700"
            >
              <IconClose />
            </button>
          </div>

          <div className="flex flex-col space-y-6 p-6">
            {HEADER.navItems.map((item, index) => (
              <Link href={item.link} key={index} onClick={toggleMenu}>
                <p className="text-lg text-gray-800 hover:text-blue-600 transition-colors">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
