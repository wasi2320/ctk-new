import Link from "next/link";
import Image from "next/image";

export const LogoWhite = () => {
  return (
    <Link href="/">
      <Image
        src="/Images/logoWhite.svg"
        alt="logo"
        height={60}
        width={60}
        className="w-[60px] h-[60px]"
      />
    </Link>
  );
};
