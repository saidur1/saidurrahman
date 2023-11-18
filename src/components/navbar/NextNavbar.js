"use client";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NextNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isWillBeHide, setisWillBeHide] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const menuItems = [
        {
            id: 1,
            label: "Home",
            href: "/",
        },
        {
            id: 2,
            label: "About",
            subMenus: [
                {
                    id: 1,
                    label: "Contact",
                    href: "/contact",
                },
                {
                    id: 2,
                    label: "Our Story",
                    href: "/story",
                },
                {
                    id: 3,
                    label: "Mission, Vision",
                    href: "/mission",
                },
            ],
        },
        {
            id: 2,
            label: "Reviews",
            href: "/reviews",
        },
        {
            id: 3,
            label: "Free Training",
            href: "/free-training",
        },
    ];

    const mobileSubMenuClick = (href) => {
        router.push(href);

        // Close the menu when a mobile submenu is clicked
        setIsMenuOpen(false);
    };

    const isActiveLink = (hrefArray) => {
        return hrefArray?.includes(pathname);
    };

    // just add routes to ignore the render this navbar on the specific route
    const arrayOfIgnoredRoutes = ["/schedule"];

    useEffect(() => {
        if (arrayOfIgnoredRoutes.includes(pathname)) {
            setisWillBeHide(true);
        }
    }, [pathname]);

    if (!isWillBeHide) {
        return (
            <Navbar
                onMenuOpenChange={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
                shouldHideOnScroll
                className="bg-black/80"
                maxWidth="xl"
                classNames={{
                    item: [
                        "flex",
                        "relative",
                        "h-full",
                        "items-center",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:-bottom-0",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-[4px]",
                        "data-[active=true]:after:rounded-[2px]",
                        "data-[active=true]:after:bg-[#FFFFFF]",
                    ],
                }}
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                        style={{ color: "white" }}
                    />
                    <NavbarBrand>
                        <Link
                            href="/"
                            className="font-bold  text-white/60 duration-250 cursor-pointer hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Saidur Rahman
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex " justify="end">
                    <NavbarItem
                        className=" px-4 py-1 rounded-sm text-gray-400 hover:bg-gray-700 hover:text-white/90 cursor-pointer"
                        isActive={isActiveLink(["/"])}
                    >
                        <Link color="foreground" href="/">
                            Home
                        </Link>
                    </NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <NavbarItem
                                className=" pl-4 pr-2 py-1 rounded-sm text-gray-400 hover:bg-gray-700 hover:text-white/90 cursor-pointer"
                                isActive={isActiveLink([
                                    "/contact",
                                    "/story",
                                    "/mission",
                                ])}
                            >
                                <div className="flex items-center gap-x-3">
                                    <button color="foreground">About</button>
                                    <ChevronDown className="w-4 h-4 text-white/60" />
                                </div>
                            </NavbarItem>
                        </DropdownTrigger>

                        <DropdownMenu
                            aria-label="ACME features"
                            className="w-[340px]"
                            itemClasses={{
                                base: "gap-4",
                            }}
                        >
                            <DropdownItem className="relative">
                                <Link
                                    href="/contact"
                                    className="flex justify-start w-full"
                                >
                                    Contact
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link
                                    href="/story"
                                    className="flex justify-start w-full"
                                >
                                    Our Story
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link
                                    href="/mission"
                                    className="flex justify-start w-full"
                                >
                                    Mission, Vision
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavbarItem
                        className=" px-4 py-1 rounded-sm text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer"
                        isActive={isActiveLink(["/reviews"])}
                    >
                        <Link
                            color="foreground"
                            href="/reviews"
                            className="text-white/60 duration-250 cursor-pointer hover:text-white"
                        >
                            Reviews
                        </Link>
                    </NavbarItem>
                    <NavbarItem
                        className=" px-4 py-1 rounded-sm text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer"
                        isActive={isActiveLink(["/free-training"])}
                    >
                        <Link
                            color="foreground"
                            href="/free-training"
                            className="text-white/60 duration-250 cursor-pointer hover:text-white"
                        >
                            Free Training
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map(({ id, label, href, subMenus }) => (
                        <NavbarMenuItem key={id}>
                            {!subMenus && (
                                <Link
                                    href={href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex"
                                >
                                    {label}
                                </Link>
                            )}
                            {subMenus && (
                                <Dropdown
                                    onOpenChange={(isOpen) =>
                                        handleDropdownToggle(isOpen)
                                    }
                                    backdrop="blur"
                                >
                                    <DropdownTrigger>
                                        <div className="w-full group flex justify-between items-center ">
                                            <button>{label}</button>

                                            <ChevronDown
                                                className={`h-5 w-5  opacity-50 group-hover:opacity-100 duration-300 ${
                                                    isDropdownOpen
                                                        ? "rotate-0"
                                                        : "-rotate-90"
                                                }`}
                                            />
                                        </div>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="ACME features"
                                        className="w-[340px]"
                                        itemClasses={{
                                            base: "gap-4",
                                        }}
                                    >
                                        {subMenus.map(({ id, href, label }) => (
                                            <DropdownItem
                                                key={id}
                                                style={{
                                                    padding: 0,
                                                }}
                                            >
                                                <button
                                                    onClick={() =>
                                                        mobileSubMenuClick(href)
                                                    }
                                                    className=" w-full flex px-[10px] py-[7px] rounded-sm"
                                                >
                                                    {label}
                                                </button>
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            )}
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        );
    }
}
