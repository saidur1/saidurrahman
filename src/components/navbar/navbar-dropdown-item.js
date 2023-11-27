"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarDropdownItem = ({ name, menus }) => {
    const routes = menus.map((item) => item.href);
    const pathname = usePathname();
    const isActive = routes.includes(pathname);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div
                    className={cn(
                        "px-4 py-4 md:py-2  rounded-sm text-gray-400 hover:bg-gray-700 hover:text-white/90 cursor-pointer flex items-center gap-x-3",
                        isActive && "bg-white/10"
                    )}
                >
                    <span>{name}</span>
                    <ChevronDown className="w-4 h-4 md:text-white/60 text-black/60" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {menus.map(({ id, name, href }) => (
                    <DropItem key={id} {...{ id, name, href }} />
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default NavbarDropdownItem;

const DropItem = ({ id, href, name }) => {
    return (
        <>
            <DropdownMenuItem>
                <Link href={href}>{name}</Link>
            </DropdownMenuItem>
            {id !== 2 && <DropdownMenuSeparator />}
        </>
    );
};
