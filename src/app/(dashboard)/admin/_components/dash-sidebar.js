// Components

import DashSidebarRoutes from "./dash-sidebar-routes";

const DashSidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">Saidur Rahman</div>
            <div className="flex flex-col w-full">
                <DashSidebarRoutes />
            </div>
        </div>
    );
};

export default DashSidebar;
