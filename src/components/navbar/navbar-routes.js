import { cn } from "@/lib/utils";
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
      name: "Blog",
      dropdown: false,
      href: "/blog",
    },
    {
      id: 3,
      name: "Work With Me",
      dropdown: false,
      href: "/work-with-me",
    },
  ];
  return (
    <section className="w-full h-[60px]">
      <div
        className={cn(
          "flex justify-center  h-[60px] items-center gap-x-[12px] md:gap-x-[62px]"
        )}
      >
        {routes.map(({ dropdown, name, href, id, menus }) => {
          return <NavbarItem key={id} name={name} href={href} />;
        })}
      </div>
    </section>
  );
};

export default NavbarRoutes;
