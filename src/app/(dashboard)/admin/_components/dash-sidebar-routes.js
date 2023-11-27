"use client";
import { BarChart, List } from "lucide-react";
import DashSidebarItem from "./dash-sidebar-item";

const routes = [
    {
        icon: BarChart,
        label: "Analytics",
        href: "/admin/analytics",
    },
    {
        icon: List,
        label: "Leads",
        href: "/admin/leads",
    },
];

const DashSidebarRoutes = () => {
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <DashSidebarItem
                    key={route.href}
                    Icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
};

export default DashSidebarRoutes;
