import Footer from "@/components/footer/Footer";
import SNavbar from "@/components/navbar/SNavbar";
import { Inter } from "next/font/google";
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
                <SNavbar />
                {children}

                <Footer />
            </body>
        </html>
    );
}
