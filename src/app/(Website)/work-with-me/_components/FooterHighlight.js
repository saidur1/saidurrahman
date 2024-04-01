import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const FooterHighlight = () => {
  return (
    <h1
      className={cn(
        raleway.className,
        "text-[20px] md:text-[32px] text-[#2F2F2F] text-center"
      )}
    >
      <span className="font-bold">Have Questions?</span> No problem. <br /> Drop
      Me A Message on Whatsapp{" "}
      <a
        href="https://wa.me/8801745095753"
        target="whatsapp"
        className="text-[#1A77BD] hover:underline font-bold"
      >
        here
      </a>
    </h1>
  );
};

export default FooterHighlight;
