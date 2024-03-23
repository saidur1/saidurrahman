import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import NavbarRoutes from "./navbar-routes";

const Navbar2 = () => {
  return (
    <>
      <div className="h-[60px] md:h-[109px] w-full md:flex justify-center items-center bg-[rgb(224,224,224)] ">
        <div>
          <div className="hidden md:block space-x-[62px]">
            {/* <Link href="/" className="text-[24px] font-bold text-[rgb(45,45,45)]">
            Home
          </Link>
          <Link href="/" className="text-[24px] font-bold text-[rgb(45,45,45)]">
            Contact
          </Link>
          <Link href="/" className="text-[24px] font-bold text-[rgb(45,45,45)]">
            Reviews
          </Link> */}
            <NavbarRoutes />
          </div>
        </div>
        <section className="md:hidden container h-full">
          <Sheet>
            <div className="flex w-full h-full items-center justify-between">
              <SheetTrigger>
                <Menu className="w-5 h-5 hover:text-[#1A0DAB]" />
              </SheetTrigger>
              <Link
                href="/"
                className="font-bold  text-black/80 duration-250 cursor-pointer  duration-200 flex items-center h-full"
              >
                Saidur Rahman
              </Link>
            </div>
            <SheetContent side="left" className="p-0 bg-[rgb(224,224,224)]">
              <NavbarRoutes />
            </SheetContent>
          </Sheet>
        </section>
      </div>
    </>
  );
};

export default Navbar2;
