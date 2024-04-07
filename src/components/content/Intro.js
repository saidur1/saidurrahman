import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const Intro = () => {
  return (
    <section>
      <div className="space-y-[16px] md:space-y-[25px] mt-[41px] md:mt-0">
        <h1
          className={cn(
            raleway.className,
            "text-[#2D2D2D] text-center md:text-left text-[20px] md:text-[32px] font-bold leading-[.8em]"
          )}
        >
          Hi,
        </h1>
        <h1
          className={cn(
            raleway.className,
            "text-[#2D2D2D] text-center md:text-left text-[20px] md:text-[32px] font-bold leading-[.8em]"
          )}
        >
          My name is Saidur Rahman.
        </h1>
        <h1
          className={cn(
            raleway.className,
            "text-[#2D2D2D] text-center md:text-left text-[20px] md:text-[32px] font-bold leading-[.8em]"
          )}
        >
          I'm an Coach.
        </h1>
      </div>
      <div className="hidden md:block w-full h-[1px] bg-[rgb(25,25,25)] mt-[30px] "></div>
      <div className="mt-[20px] md:mt-[25px]">
        <p className="text-[14px] text-center md:text-left md:text-[22px] text-[#2D2D2D]">
          Here’s how I became a coach...
        </p>
      </div>
      <div className="block md:hidden w-1/2 mx-auto h-[1px] bg-[rgba(25,25,25,0.2)] mt-[30px] "></div>
    </section>
  );
};

export default Intro;
