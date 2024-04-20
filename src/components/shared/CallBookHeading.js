import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const CallBookHeading = () => {
  return (
    <div>
      <h1
        className={cn(
          raleway.className,
          "text-[#2D2D2D] text-[30px] md:text-[48px] text-center font-bold leading-[1.3em]"
        )}
      >
        Book your call now:
      </h1>
      <p
        className={cn(
          raleway.className,
          "text-[#E43B2C] text-[12px] md:text-[16px] font-bold text-center"
        )}
      >
        (Please wait 5 seconds for the calendar to load)
      </p>
    </div>
  );
};

export default CallBookHeading;
