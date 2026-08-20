"use client";
import { useState, useEffect } from "react";
import { HEADER } from "@/utils/data/header";
import Link from "next/link";
import { Logo } from "../global/logo";
import IconClose from "../icons/IconClose";
import IconMenu from "../icons/IconMenu";
import { useRouter, usePathname } from "next/navigation";

interface DropdownLink {
  name: string;
  link: string;
}

/** Split a list into columns of at most `size` for the desktop dropdown grid. */
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Name of the currently open dropdown (desktop / mobile), or null.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 90) {
            clearInterval(timer);
            return 90;
          }
          return prev + 10;
        });
      }, 100);

      return () => clearInterval(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    if (pathname) {
      setLoadingProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setLoadingProgress(0);
      }, 200);
    }
  }, [pathname]);

  const handleNavigation = (href: string) => {
    setIsLoading(true);
    router.push(href);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // The redesigned homepage ships its own header.
  if (pathname === "/") return null;

  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-28 pt-3 shadow-md bg-white sticky top-0 z-40">
        <div>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-10">
            {HEADER.navItems.map((item, index) => {
              // Grouped mega-menu dropdown (e.g. Case Studies).
              if ("groups" in item) {
                const groups = item.groups;
                const isOpen = openDropdown === item.name;
                return (
                  <div key={index} className="relative">
                    <button
                      className="flex items-center gap-1 text-lg focus:outline-none cursor-pointer"
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : item.name)
                      }
                      onBlur={() =>
                        setTimeout(
                          () =>
                            setOpenDropdown((cur) =>
                              cur === item.name ? null : cur
                            ),
                          150
                        )
                      }
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <div
                        className="absolute left-0 mt-2 w-fit bg-white shadow-xl rounded-xl z-50 p-6 flex gap-10"
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {groups.map((g, gi) => (
                          <div key={gi} className="flex flex-col gap-3">
                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                              {g.heading}
                            </p>
                            {g.items.map((l, li) => (
                              <Link
                                href={l.link}
                                key={li}
                                className="whitespace-nowrap hover:text-[#0d1526] transition-colors"
                                prefetch={true}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setOpenDropdown(null);
                                  handleNavigation(l.link);
                                }}
                              >
                                {l.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Dropdown nav item (any item whose link is a list).
              if (Array.isArray(item.link)) {
                const links = item.link as DropdownLink[];
                const columns = chunk(links, 5);
                const isOpen = openDropdown === item.name;
                return (
                  <div key={index} className="relative">
                    <button
                      className="flex items-center gap-1 text-lg focus:outline-none cursor-pointer"
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : item.name)
                      }
                      onBlur={() =>
                        setTimeout(
                          () =>
                            setOpenDropdown((cur) =>
                              cur === item.name ? null : cur
                            ),
                          150
                        )
                      }
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <div
                        className="absolute left-0 mt-2 w-fit bg-white shadow-xl rounded-xl z-50 p-4 flex gap-8"
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {columns.map((col, ci) => (
                          <div key={ci} className="flex flex-col gap-3">
                            {col.map((l, li) => (
                              <Link
                                href={l.link}
                                key={li}
                                className="whitespace-nowrap hover:text-[#0d1526] transition-colors"
                                prefetch={true}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setOpenDropdown(null);
                                  handleNavigation(l.link);
                                }}
                              >
                                {l.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Normal nav item
              return (
                <Link
                  href={item.link as string}
                  key={index}
                  className="hover:text-[#0d1526] transition-colors"
                  prefetch={true}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.link as string);
                  }}
                >
                  <p className="text-lg">{item.name}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <IconMenu />
        </button>
      </nav>

      {/* Loading Progress Bar */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-[#0d1526]/20 z-50">
          <div
            className="h-full bg-[#0d1526] transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
      )}

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
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto ${
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
            {HEADER.navItems.map((item, index) => {
              // Grouped mega-menu dropdown (e.g. Case Studies).
              if ("groups" in item) {
                const groups = item.groups;
                const isOpen = openMobileDropdown === item.name;
                return (
                  <div key={index} className="flex flex-col">
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(isOpen ? null : item.name)
                      }
                      className="flex items-center justify-between w-full text-lg text-gray-800 hover:text-[#0d1526] transition-colors"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="mt-2 pl-4 flex flex-col gap-4">
                        {groups.map((g, gi) => (
                          <div key={gi} className="flex flex-col gap-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                              {g.heading}
                            </p>
                            {g.items.map((l, li) => (
                              <Link
                                href={l.link}
                                key={li}
                                className="text-gray-800 hover:text-[#0d1526] transition-colors"
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleMenu();
                                  handleNavigation(l.link);
                                }}
                              >
                                {l.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Dropdown nav item.
              if (Array.isArray(item.link)) {
                const links = item.link as DropdownLink[];
                const isOpen = openMobileDropdown === item.name;
                return (
                  <div key={index} className="flex flex-col">
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(isOpen ? null : item.name)
                      }
                      className="flex items-center justify-between w-full text-lg text-gray-800 hover:text-[#0d1526] transition-colors"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="mt-2 pl-4 flex flex-col gap-3">
                        {links.map((l, li) => (
                          <Link
                            href={l.link}
                            key={li}
                            className="text-gray-800 hover:text-[#0d1526] transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleMenu();
                              handleNavigation(l.link);
                            }}
                          >
                            {l.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Normal nav item
              return (
                <Link
                  href={item.link as string}
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu();
                    handleNavigation(item.link as string);
                  }}
                >
                  <p className="text-lg text-gray-800 hover:text-[#0d1526] transition-colors">
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
