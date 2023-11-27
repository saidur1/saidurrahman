import DashNavRoutes from "./dash-nav-routes";

const DashNavbar = () => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm pr-20">
            {/* <MobileSidebar /> */}
            <DashNavRoutes />
        </div>
    );
};

export default DashNavbar;
