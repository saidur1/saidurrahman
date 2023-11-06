"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    ChevronDownIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";

const navigation = [
    { name: "Home", href: "/", current: true, icon: false },
    {
        name: "About",
        href: "/",
        current: false,
        icon: true,
        submenus: [
            { name: "Contact", href: "/contact", current: false },
            { name: "Our Story", href: "/our_story", current: false },
            {
                name: "Mission, Vision",
                href: "/mission&Vision",
                current: false,
            },
        ],
    },
    // {
    //     name: "Programs",
    //     href: "#",
    //     current: false,
    //     icon: true,
    //     submenus: [
    //         {
    //             name: "Accountability Community",
    //             href: "/community",
    //             current: false,
    //         },
    //         {
    //             name: "Accountability Accelerator",
    //             href: "/accelerator",
    //             current: false,
    //         },
    //         {
    //             name: "Accountability Mastermind",
    //             href: "/mastermind",
    //             current: false,
    //         },
    //     ],
    // },
    { name: "Reviews", href: "/reviews", current: false, icon: false },
];

export default function SNavbar() {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="container">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
                                <Link
                                    href="/"
                                    className="flex flex-shrink-0 items-center text-white/70 hover:text-white/90 cursor-pointer duration-150"
                                >
                                    <h1>Saidur</h1>
                                </Link>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        <Link
                                            href="/"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium "
                                        >
                                            Home
                                        </Link>
                                    </div>
                                </div>

                                {/* About */}
                                <Menu
                                    as="div"
                                    className="relative hidden sm:block"
                                >
                                    <div>
                                        <Menu.Button className="relative flex items-center gap-x-[10px]  text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ">
                                            About
                                            <ChevronDownIcon className="text-white h-3 w-3" />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                <Link
                                                    href="/contact"
                                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                                                >
                                                    Contact
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link
                                                    href="/our_story"
                                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                                                >
                                                    Our Story
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link
                                                    href="/mission&Vision"
                                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                                                >
                                                    Mission, Vision
                                                </Link>
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>

                                {/* Programs */}
                                {/* <Menu
                                    as="div"
                                    className="relative hidden sm:block"
                                >
                                    <div>
                                        <Menu.Button className="relative group flex items-center gap-x-[10px] text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium duration-300 transition-all">
                                            Programs
                                            <ChevronDownIcon className="text-white h-3 w-3 " />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                <Link
                                                    href="/community"
                                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                                                >
                                                    Accountability Community
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link
                                                    href="/accelerator"
                                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                                                >
                                                    Accountability Accelerator
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link
                                                    href="/mastermind"
                                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                                                >
                                                    Accountability Mastermind
                                                </Link>
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu> */}
                                {/* Mobile Navigation Menus */}
                                <div className="hidden sm:block">
                                    <div className="flex ">
                                        <Link
                                            href="/reviews"
                                            className={`text-gray-300 hover:bg-gray-700 hover:text-white  rounded-md px-3 py-2 text-sm font-medium `}
                                        >
                                            Reviews
                                        </Link>
                                        <Link
                                            href="/free_training"
                                            className={`text-gray-300 hover:bg-gray-700  rounded-md px-3 py-2 text-sm font-medium `}
                                        >
                                            Free Training
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    <Disclosure as="div" className="space-y-1">
                                        {({ open }) => (
                                            <>
                                                <Link href={item.href}>
                                                    <Disclosure.Button className="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center gap-x-[10px] rounded-md px-3 py-2 text-start font-medium w-full">
                                                        {item.name}
                                                        {item.icon && (
                                                            <ChevronDownIcon className="text-white h-3 w-3 " />
                                                        )}
                                                    </Disclosure.Button>
                                                </Link>
                                                <Disclosure.Panel>
                                                    <div className="pl-4 space-y-1">
                                                        {item.submenus &&
                                                            item.submenus.map(
                                                                (submenu) => (
                                                                    <Link
                                                                        key={
                                                                            submenu.name
                                                                        }
                                                                        href={
                                                                            submenu.href
                                                                        }
                                                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium w-full"
                                                                    >
                                                                        {
                                                                            submenu.name
                                                                        }
                                                                    </Link>
                                                                )
                                                            )}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}
                            <Link href="/free_training">
                                <Disclosure.Button className="text-gray-300 bg-gray-600 hover:bg-gray-700  block rounded-md px-3 py-2 text-start font-medium w-full">
                                    Free Training
                                </Disclosure.Button>
                            </Link>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
