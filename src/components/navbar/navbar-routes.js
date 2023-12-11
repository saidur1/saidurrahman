import { cn } from "@/lib/utils";
import NavbarDropdownItem from "./navbar-dropdown-item";
import NavbarItem from "./navbar-item";

const NavbarRoutes = () => {
    const routes = [
        {
            id: 1,
            name: "Home",
            href: "/",
            dropdown: false,
        },
        {
            id: 2,
            name: "About",
            dropdown: true,
            menus: [
                {
                    id: 1,
                    name: "Contact",
                    href: "/contact",
                },
                {
                    id: 2,
                    name: "Our Story",
                    href: "/story",
                },
            ],
        },
        {
            id: 3,
            name: "Reviews",
            href: "/reviews",
            dropdown: false,
        },
        // {
        //     id: 4,
        //     name: "Free Training",
        //     href: "/free-training",
        //     dropdown: false,
        // },
    ];
    return (
        <section className="mt-[50px] md:mt-0">
            <div
                className={cn(
                    "flex flex-col md:flex-row  h-full md:items-center gap-x-[12px]"
                )}
            >
                {routes.map(({ dropdown, name, href, id, menus }) => {
                    if (dropdown) {
                        return (
                            <NavbarDropdownItem
                                key={id}
                                menus={menus}
                                name={name}
                            />
                        );
                    } else {
                        return <NavbarItem key={id} name={name} href={href} />;
                    }
                })}
            </div>
        </section>
    );
};

export default NavbarRoutes;
