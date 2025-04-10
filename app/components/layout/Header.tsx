import { HEADER } from "@/utils/data/header";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-20 pt-3">
      <div>
        <Link href="/">
          <Image
            src={HEADER.logo}
            alt="logo"
            height={60}
            width={60}
            className="w-[60px] h-[60px]"
          />
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-10">
          {HEADER.navItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <p className="text-lg">{item.name}</p>
            </Link>
          ))}
        </div>
        <Image
          src={HEADER.search}
          alt="logo"
          height={35}
          width={35}
          className="w-[30px] h-[30px] cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Header;
