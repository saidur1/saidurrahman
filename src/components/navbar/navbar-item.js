"use client";
import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const railway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const NavbarItem = ({ name, href }) => {
  const pathname = usePathname();
  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      // className={cn(
      //   "px-4 py-4 md:py-2  rounded-sm text-gray-400 hover:bg-gray-700 hover:text-white/90 cursor-pointer",
      //   isActive && "bg-white/10"
      // )}
      className={cn(
        "text-[24px] font-bold hover:underline",
        railway.className,
        isActive ? "text-[rgb(45,45,45)]" : " text-[#1A0DAB]"
      )}
    >
      {name}
    </Link>
  );
};

export default NavbarItem;
