import Footer from "@/components/footer/Footer";
import NProgress from "@/components/progressBar/NProgress";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import NextNavbar from "@/components/navbar/NextNavbar";
import GoogleAnalytics from "@/utils/GoogleAnalytics";
import RemoveComponentsByCondition from "@/utils/RemoveComponentsByCondition";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Saidur Rahman | Accountability Coach",
    description:
        "I help entrepreneurs improve productivity; achieve goals by keeping them accountable for habits and actions. Are you struggling to improve your business, productivity, get more done and to achieve your goals? If you’re interested in getting more out of your life & business contact me for the FREE discovery call.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className}`}
                suppressHydrationWarning={true}
            >
                {/* Google analytics */}
                <GoogleAnalytics />
                {/* Google analytics */}

                <NProgress />
                <NextNavbar />
                <ToastContainer />
                {children}
                <RemoveComponentsByCondition>
                    <Footer />
                </RemoveComponentsByCondition>
            </body>
        </html>
    );
}
