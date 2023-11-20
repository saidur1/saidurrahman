"use client";
//Packages
import { Contact2 } from "lucide-react";

// Components
import SidebarItem from "./SidebarItem";

const teacherRoutes = [
    {
        icon: Contact2,
        label: "Contacts",
        href: "/admin/contacts",
    },
];

const SidebarRoutes = () => {
    const routes = teacherRoutes;
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    Icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
};

export default SidebarRoutes;
