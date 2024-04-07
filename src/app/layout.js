// Packages
import { CookiesProvider } from "next-client-cookies/server";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import Script from 'next/script' 
// import for live chat


// Components
import GoogleAnalytics from "@/utils/GoogleAnalytics";

// CSS
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
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        {/* Google analytics */}
        <GoogleAnalytics />
        {/* Google analytics */}
        <ToastContainer />
        <CookiesProvider>{children}</CookiesProvider>
  <!--Start of Tawk.to Script-->
<Script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5d7b72919f6b7a4457e180c6/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</Script>
<!--End of Tawk.to Script-->
      </body>
    </html>
  );
}
