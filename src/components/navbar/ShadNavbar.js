"use client";

import NavbarRoutes from "@/components/navbar/navbar-routes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const ShadNavbar = () => {
    return (
        <div className="bg-black/80 h-[80px] flex items-center">
            <section className="hidden container md:flex justify-between">
                <div>
                    <Link
                        href="/"
                        className="font-bold  text-white/60 duration-250 cursor-pointer hover:text-white duration-200 flex items-center h-full"
                    >
                        Saidur Rahman
                    </Link>
                </div>
                <NavbarRoutes />
            </section>
            <section className="md:hidden container">
                <Sheet>
                    <div className="flex items-center justify-between">
                        <SheetTrigger>
                            <Menu className="w-5 h-5 text-white/80" />
                        </SheetTrigger>
                        <Link
                            href="/"
                            className="font-bold  text-white/60 duration-250 cursor-pointer hover:text-white duration-200 flex items-center h-full"
                        >
                            Saidur Rahman
                        </Link>
                    </div>
                    <SheetContent side="left" className="p-0 bg-white">
                        <NavbarRoutes />
                    </SheetContent>
                </Sheet>
            </section>
        </div>
    );
};

export default ShadNavbar;
