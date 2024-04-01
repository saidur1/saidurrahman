import YouTubePlayer from "@/components/shared/player/YoutubePlayer";
import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";

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
      <div className="mt-[61px] px-[20px]">
        <YouTubePlayer
          videoId="0vcgxhRPdz8"
          playerWidth={1093}
          playerHeight={520}
          isBorder={false}
        />
      </div>
      <div className="flex justify-center mt-[50px] px-[20px]">
        <a
          href="https://www.saidurrahman.org/schedule"
          target="_schedule"
          className="text-white font-semibold text-[36px] bg-[rgb(1,116,199)] hover:shadow-[inset_0px_2px_2px_0_rgba(255,255,255,0.22),_0_233px_233px_0,rgba(255,255,255,0.12)_inset] hover:outline-none border-[1px] border-[rgba(0,0,0,0.2)] rounded-[3px] px-[25px] py-[10px] w-full lg:w-[1093px] text-center hover:bg-[#0c69a8] duration-300 cursor-pointer"
        >
          Click Here To Book A Call
          <p className="text-[12px] md:text-[12px] font-normal text-white/50">
            Please Do Not Book A Call Until You Have Watched The Above Video
            in-Full
          </p>
        </a>
      </div>
    </div>
  );
};

export default FirstPage;
