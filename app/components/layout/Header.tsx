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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileExpertiseOpen, setIsMobileExpertiseOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const toggleExpertise = () => {
    setIsExpertiseOpen((prev) => !prev);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen((prev) => !prev);
  };

  const toggleMobileExpertise = () => {
    setIsMobileExpertiseOpen((prev) => !prev);
  };

  // Find the services nav item
  const servicesItem = HEADER.navItems.find(
    (item) => item.name.toLowerCase() === "services" && Array.isArray(item.link)
  );
  const servicesLinks = Array.isArray(servicesItem?.link)
    ? servicesItem.link
    : [];

  // Find the expertise nav item
  const expertiseItem = HEADER.navItems.find(
    (item) => item.name.toLowerCase() === "expertise" && Array.isArray(item.link)
  );
  const expertiseLinks = Array.isArray(expertiseItem?.link)
    ? expertiseItem.link
    : [];

  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-28 pt-3">
        <div>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-10">
            {HEADER.navItems.map((item, index) => {
              // Services Dropdown
              if (item.name.toLowerCase() === "services" && Array.isArray(item.link)) {
                return (
                  <div key={index} className="relative">
                    <button
                      className="flex items-center gap-1 text-lg focus:outline-none cursor-pointer"
                      onMouseEnter={toggleServices}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      onClick={toggleServices}
                      onBlur={() => setTimeout(() => setIsServicesOpen(false), 150)}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isServicesOpen && (
                      <div
                        className="absolute left-0 mt-2 w-fit bg-white shadow-xl rounded-xl z-50 p-4 flex gap-8"
                        onMouseEnter={toggleServices}
                        onMouseLeave={() => setIsServicesOpen(false)}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        <div className="flex flex-col gap-3">
                          {servicesLinks.slice(0, 5).map((service, idx) => (
                            <Link href={service.link} key={idx} className="whitespace-nowrap">
                              {service.name}
                            </Link>
                          ))}
                        </div>
                        <div className="flex flex-col gap-3">
                          {servicesLinks.slice(5, 10).map((service, idx) => (
                            <Link href={service.link} key={idx} className="whitespace-nowrap">
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Expertise Dropdown
              if (item.name.toLowerCase() === "expertise" && Array.isArray(item.link)) {
                return (
                  <div key={index} className="relative">
                    <button
                      className="flex items-center gap-1 text-lg focus:outline-none cursor-pointer"
                      onClick={toggleExpertise}
                      onBlur={() => setTimeout(() => setIsExpertiseOpen(false), 150)}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${isExpertiseOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isExpertiseOpen && (
                      <div
                        className="absolute left-0 mt-2 w-fit bg-white shadow-xl rounded-xl z-50 p-4 flex gap-8"
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        <div className="flex flex-col gap-3">
                          {expertiseLinks.map((expertise, idx) => (
                            <Link href={expertise.link} key={idx} className="whitespace-nowrap">
                              {expertise.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Normal nav item
              return (
                <Link href={item.link as string} key={index}>
                  <p className="text-lg">{item.name}</p>
                </Link>
              );
            })}
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
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
              <IconClose />
            </button>
          </div>

          <div className="flex flex-col space-y-6 p-6">
            {HEADER.navItems.map((item, index) => {
              if (item.name.toLowerCase() === "services" && Array.isArray(item.link)) {
                return (
                  <div key={index} className="flex flex-col">
                    <button
                      onClick={toggleMobileServices}
                      className="flex items-center justify-between w-full text-lg text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          isMobileServicesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isMobileServicesOpen && (
                      <div className="mt-2 pl-4 flex flex-col gap-3">
                        {servicesLinks.map((service, idx) => (
                          <Link
                            href={service.link}
                            key={idx}
                            className="text-gray-800 hover:text-blue-600 transition-colors"
                            onClick={toggleMenu}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.name.toLowerCase() === "expertise" && Array.isArray(item.link)) {
                return (
                  <div key={index} className="flex flex-col">
                    <button
                      onClick={toggleMobileExpertise}
                      className="flex items-center justify-between w-full text-lg text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          isMobileExpertiseOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isMobileExpertiseOpen && (
                      <div className="mt-2 pl-4 flex flex-col gap-3">
                        {expertiseLinks.map((expertise, idx) => (
                          <Link
                            href={expertise.link}
                            key={idx}
                            className="text-gray-800 hover:text-blue-600 transition-colors"
                            onClick={toggleMenu}
                          >
                            {expertise.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link href={item.link as string} key={index} onClick={toggleMenu}>
                  <p className="text-lg text-gray-800 hover:text-blue-600 transition-colors">
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
