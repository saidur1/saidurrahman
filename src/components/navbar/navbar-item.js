import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarItem = ({ name, href }) => {
    const pathname = usePathname();
    const isActive =
        (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname?.startsWith(`${href}/`);
    return (
        <Link
            href={href}
            className={cn(
                "px-4 py-4 md:py-2  rounded-sm text-gray-400 hover:bg-gray-700 hover:text-white/90 cursor-pointer",
                isActive && "bg-white/10"
            )}
        >
            {name}
        </Link>
    );
};

export default NavbarItem;
