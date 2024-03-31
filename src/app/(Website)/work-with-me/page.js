import YouTubePlayer from "@/components/shared/player/YoutubePlayer";
import { cn } from "@/lib/utils";
import { Open_Sans, Raleway } from "next/font/google";
import Link from "next/link";
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
            <div className="shadow-[0_10px_6px_-6px_#777] flex-1 w-full md:w-[481px] h-auto md:h-[283px] bg-black rounded-[6px]">
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
            "text-[#2D2D2D] text-[24px] md:text-[36px] text-center"
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
            "text-[#2D2D2D] text-[14px] md:text-[16px] text-center"
          )}
        >
          Book a call with me now...
        </p>
        <div className="w-full flex justify-center">
          <Link
            href="/schedule"
            className="py-[6px] px-[26px] md:px-[56px] bg-[#0174C7] text-white font-semibold text-[18px] md:text-[26px] leading-[26px] text-center hover:bg-[#0174C7]/90 duration-200 w-full md:w-[560px] lg:w-[1093px] flex flex-col gap-y-[1px] mt-[38px]"
          >
            Click here to Book a Call
            <span className="text-[8px] md:text-[10px] font-normal text-white/50">
              Please Do Not Book A Call Until You Have Watched The Above Video
              in-Full
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-[100px] md:mt-[454px] mb-[45px] max-w-[1093px] px-[20px] mx-auto">
        <h1
          className={cn(
            raleway.className,
            "text-[20px] md:text-[32px] text-[#2F2F2F] text-center"
          )}
        >
          <span className="font-bold">Have Questions?</span> No problem. Drop Me
          A Message on <br /> Whatsapp{" "}
          <a
            href="https://wa.me/8801745095753"
            target="whatsapp"
            className="text-[#1A77BD] hover:underline font-bold"
          >
            here
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Page;
