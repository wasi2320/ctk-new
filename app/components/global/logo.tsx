import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/Images/logo.svg"
        alt="logo"
        height={60}
        width={60}
        className="w-[60px] h-[60px]"
      />
    </Link>
  );
};
