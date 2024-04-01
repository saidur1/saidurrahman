import YouTubePlayer from "@/components/shared/player/YoutubePlayer";
import { cn } from "@/lib/utils";
import { Open_Sans, Raleway } from "next/font/google";
import SecondPage from "./_components/SecondPage";
import ThirdPage from "./_components/ThirdPage";
import FirstPage from "./_components/firstPage";

const raleway = Raleway({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const openSans = Open_Sans({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});
const Page = () => {
  return (
    <div>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <div className="relative bg-[#f2e6f3] pb-[122px] pt-[80px]  md:pt-[122px]">
        {/* first */}
        <div className=" max-w-[1093px] mx-auto px-[20px] md:px-0">
          <h1
            className={cn(
              raleway.className,
              "text-[24px] md:text-[36px] text-[#2D2D2D] text-center w-full md:w-[828px] mx-auto"
            )}
          >
            Recently,{" "}
            <span className="font-bold">
              I began sharing everything I've learned with others
            </span>{" "}
            to help other talented people share their value with the world
          </h1>
          <p
            className={cn(
              raleway.className,
              "text-[14px] md:text-[20px] text-[#606060] text-center mt-[25px]"
            )}
          >
            Here are just a few people I've worked with so far...
          </p>
          <div className="py-[50px] flex flex-col gap-y-[50px] md:flex-row gap-x-[50px] px-[20px]">
            <div className=" flex-1 w-full md:w-[460px] rounded-[3px] h-auto md:h-[283px]  ">
              <YouTubePlayer
                videoId="8ohGC3dv-Mo"
                playerHeight={283}
                playerWidth={460}
              />
            </div>

            <div className={cn("w-full flex-1  lg:w-[504px], space-y-[33px]")}>
              <h1
                className={cn(
                  "text-[#E43b2c] text-center font-bold w-full md:w-[456px] mx-auto text-[18px]",
                  openSans.className
                )}
              >
                Do you currently own an online business, but you are stuck at
                'x' per-month, and you cannot scale past it, no matter what you
                try?
              </h1>
              <p className="text-center text-[15px]">
                If yes, meet my client{" "}
                <span className="font-semibold italic">Mike Diamonds.</span>
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                He had this problem. I solved it for him, and he went on to make
                $781,000 in net-cash in the following 10 months, building his
                monthly revenue from $19.8K per-month to{" "}
                <span className="font-bold">$189K per-month</span>, growing his
                business by +854%.
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                All he was missing was product-strategy, some knowledge on
                implementation, and he's now tracking for $2.3M in annual
                revenue, sustainably and predictably, going forwards.
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                How much is "not knowing what you don't know"{" "}
                <span className="underline">costing you?</span>
              </p>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="mt-[50px] md:mt-[122px] max-w-[1093px] mx-auto">
          <div className="my-[50px] flex flex-col-reverse md:flex-row gap-y-[50px] gap-x-[50px] px-[20px]">
            <div className={cn("w-full flex-1 lg:w-[504px], space-y-[33px]")}>
              <h1
                className={cn(
                  "text-[#E43b2c] text-center font-bold w-full md:w-[456px] mx-auto text-[18px]",
                  openSans.className
                )}
              >
                Do you currently have a large personal brand or audience, or one
                you are currently building, but you do not know how to monetise
                it?
              </h1>
              <p className="text-center text-[15px]">
                If yes, meet my client{" "}
                <span className="font-semibold italic">Mike Thurston.</span>
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                He had this problem. I solved it for him, and he went on to make
                $145,000 in net-cash in the following eight weeks.
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                All he was missing was product-strategy, some knowledge on
                implementation, and he's now got an offering that will generate
                over $450,000 <span className="font-bold">per-year</span> in
                net-cash going forwards.
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                How much is "not knowing what you don't know"{" "}
                <span className="underline">costing you?</span>
              </p>
            </div>
            <div className="shadow-[0_10px_6px_-6px_#777] flex-1 w-full md:w-[481px] h-auto md:h-[283px] bg-black rounded-[6px]">
              <YouTubePlayer
                videoId="EPulO5_n12A"
                playerHeight={283}
                playerWidth={460}
              />
            </div>
          </div>
        </div>

        {/* third */}
        <div className="py-[50px] md:my-[122px] flex flex-col md:flex-row gap-y-[50px] gap-x-[50px] max-w-[1093px] mx-auto px-[20px]">
          <div className="shadow-[0_10px_6px_-6px_#777] flex-1 w-full md:w-[481px] h-auto md:h-[283px] bg-black rounded-[6px]">
            <YouTubePlayer
              videoId="bQpFHO7IQlo"
              playerHeight={283}
              playerWidth={460}
            />
          </div>

          <div className={cn("w-full flex-1 md:w-[504px], space-y-[33px]")}>
            <h1
              className={cn(
                "text-[#E43b2c] text-center font-bold w-full md:w-[456px] mx-auto text-[18px]",
                openSans.className
              )}
            >
              Do you currently own an online business, but you are stuck at 'x'
              per-month, and you cannot scale past it, no matter what you try?
            </h1>
            <p className="text-center text-[15px]">
              If yes, meet my client{" "}
              <span className="font-semibold italic">Mike Diamonds.</span>
            </p>
            <p
              className={cn(
                openSans.className,
                "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
              )}
            >
              He had this problem. I solved it for him, and he went on to make
              $781,000 in net-cash in the following 10 months, building his
              monthly revenue from $19.8K per-month to{" "}
              <span className="font-bold">$189K per-month</span>, growing his
              business by +854%.
            </p>
            <p
              className={cn(
                openSans.className,
                "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
              )}
            >
              All he was missing was product-strategy, some knowledge on
              implementation, and he's now tracking for $2.3M in annual revenue,
              sustainably and predictably, going forwards.
            </p>
            <p
              className={cn(
                openSans.className,
                "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
              )}
            >
              How much is "not knowing what you don't know"{" "}
              <span className="underline">costing you?</span>
            </p>
          </div>
        </div>

        {/* fourth */}
        <div className="mt-[50px] md:mt-[122px] max-w-[1093px] mx-auto">
          <div className="my-[50px] flex flex-col md:flex-row gap-y-[50px] gap-x-[50px] px-[20px]">
            <div className={cn("w-full flex-1 lg:w-[504px], space-y-[33px]")}>
              <h1
                className={cn(
                  "text-[#E43b2c] text-center font-bold w-full md:w-[456px] mx-auto text-[18px]",
                  openSans.className
                )}
              >
                Do you currently have a large personal brand or audience, or one
                you are currently building, but you do not know how to monetise
                it?
              </h1>
              <p className="text-center text-[15px]">
                If yes, meet my client{" "}
                <span className="font-semibold italic">Mike Thurston.</span>
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                He had this problem. I solved it for him, and he went on to make
                $145,000 in net-cash in the following eight weeks.
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                All he was missing was product-strategy, some knowledge on
                implementation, and he's now got an offering that will generate
                over $450,000 <span className="font-bold">per-year</span> in
                net-cash going forwards.
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                How much is "not knowing what you don't know"{" "}
                <span className="underline">costing you?</span>
              </p>
            </div>
            <div className="shadow-[0_10px_6px_-6px_#777] flex-1 w-full lg:w-[481px] h-auto md:h-[283px] bg-black rounded-[6px]">
              <YouTubePlayer
                videoId="YwxE6655Ou4"
                playerHeight={283}
                playerWidth={460}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1093px] mx-auto mt-[50px] px-[20px] md:mt-[100px]">
        <h1
          className={cn(
            raleway.className,
            "text-[#2D2D2D] leading-[1.3em] text-[24px] md:text-[36px] text-center"
          )}
        >
          Want me to{" "}
          <span className="font-bold">
            help <span className="underline">you</span>{" "}
          </span>{" "}
          <br />
          achieve the same?
        </h1>
        <p
          className={cn(
            raleway.className,
            "text-[#2D2D2D] my-[25px] text-[14px] md:text-[16px] text-center"
          )}
        >
          Book a call with me now...
        </p>
        <div className="w-full flex justify-center">
          <a
            href="https://www.saidurrahman.org/schedule"
            target="_schedule"
            className="text-white font-semibold text-[26px] bg-[rgb(1,116,199)] hover:shadow-[inset_0px_2px_2px_0_rgba(255,255,255,0.22),_0_233px_233px_0,rgba(255,255,255,0.12)_inset] hover:outline-none border-[1px] border-[rgba(0,0,0,0.2)] rounded-[3px] px-[25px] py-[10px] w-full lg:w-[1093px] text-center hover:bg-[#0c69a8] duration-300 cursor-pointer"
          >
            Click here to Book a Call
            <p className="text-[10px] md:text-[12px] font-normal text-white/50">
              Please Do Not Book A Call Until You Have Watched The Above Video
              in-Full
            </p>
          </a>
        </div>
      </div>
      <div className="mt-[100px] md:mt-[454px] mb-[45px] max-w-[1093px] px-[20px] mx-auto">
        <FooterAction />
      </div>
    </div>
  );
};

export default Page;

export const FooterAction = () => {
  return (
    <h1
      className={cn(
        raleway.className,
        "text-[20px] md:text-[32px] text-[#2F2F2F] text-center leading-[1.3em]"
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
