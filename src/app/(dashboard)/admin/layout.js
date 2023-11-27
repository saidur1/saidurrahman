// Components
import DashNavbar from "./_components/dash-navbar";
import DashSidebar from "./_components/dash-sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="h-full">
            <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
                <DashNavbar />
            </div>
            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <DashSidebar />
            </div>
            <main className="md:pl-56 pt-[80px] h-full">{children}</main>
        </div>
    );
};

export default DashboardLayout;
