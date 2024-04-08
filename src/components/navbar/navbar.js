import NavbarRoutes from "./navbar-routes";

const Navbar = () => {
  return (
    <>
      <div className="h-[60px] md:h-[109px] w-full md:flex justify-center items-center bg-[rgb(224,224,224)] ">
        <div>
          <div className="space-x-[62px]">
            <NavbarRoutes />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
