import YouTubePlayer from "@/components/shared/player/YoutubePlayer";
import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const FirstPage = () => {
  return (
    <div className="mt-[61px]">
      <h1
        className={cn(
          raleway.className,
          "text-[#2D2D2D] text-[36px] font-bold text-center"
        )}
      >
        Here's how I might be able to help you
      </h1>
      <div className="mt-[20px] px-[20px]">
        <YouTubePlayer
          videoId="0vcgxhRPdz8"
          playerWidth={1093}
          playerHeight={520}
        />
      </div>
      <div className="flex justify-center mt-[50px] px-[20px]">
        <Link
          href="/schedule"
          className="py-[10px] px-[26px] md:px-[56px] bg-[#0174C7] text-white font-semibold text-[20px] md:text-[28px] leading-[26px] text-center hover:bg-[#0174C7]/90 duration-200 w-full lg:w-[1093px] flex flex-col gap-y-[1px]"
        >
          Click here to Book a Call
          <span className="text-[8px] md:text-[12px] font-normal text-white/50">
            Please Do Not Book A Call Until You Have Watched The Above Video
            in-Full
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FirstPage;
