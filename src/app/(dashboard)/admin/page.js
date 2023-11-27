import { redirect } from "next/navigation";

const DashboardHome = () => {
    return redirect("/admin/analytics");
};

export default DashboardHome;
