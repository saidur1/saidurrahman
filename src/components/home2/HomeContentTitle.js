import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const HomeContentTitle = () => {
  return (
    <div>
      <h1
        className={cn(
          raleway.className,
          "text-[#2D2D2D] text-center md:text-left text-[20px] md:text-[32px] font-bold leading-[.8em]"
        )}
      >
        My name is Saidur Wahman.
      </h1>
    </div>
  );
};

export default HomeContentTitle;
