// Packages

// Components

import WistiaPlayer from "@/components/shared/player/WistiaPlayer";
import YouTubePlayer from "@/components/shared/player/YoutubePlayer";
import { cn } from "@/lib/utils";
import { Open_Sans, Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const openSans = Open_Sans({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});
const Page = () => {
  const whyWorkData = [
    {
      id: 1,
      text: "I was struggling to be an entrepreneur, after quitting my 9-5 job.",
    },
    {
      id: 2,
      text: "To improve my productivity I asked my brother to hold me accountable. Thats how I learned the power of accountability.",
    },
    {
      id: 3,
      text: "One of my clients from IT services I was offering back then, offered to pay me to hold him accountable. my accountability coaching journey began.",
    },
  ];
  return (
    <div>
      {/* video intro */}
      <div className="mt-[61px]">
        <h1
          className={cn(
            raleway.className,
            "text-[#2D2D2D] text-[36px] font-bold text-center"
          )}
        >
          Here's how I might be able to help you
        </h1>
        <div className="mt-[61px] px-[20px] max-w-[1093px] h-auto mx-auto">
          {/* pass video id to change a video */}
          <WistiaPlayer videoId="30ktnx5jkx" />
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

      {/* why work with saidur section */}
      <div className=" my-[100px] max-w-[1093px] mx-auto h-auto w-full z-40 text-black flex flex-col md:flex-row gap-x-[50px] px-[20px]">
        <div className="flex-1 ">
          <h1 className="text-[#2F2F2F] text-[26px] md:text-[36px] font-normal border-b-[1px] text-center">
            Why{" "}
            <span
              className="font-semibold
              "
            >
              Work With Saidur?
            </span>
          </h1>
          <div className="space-y-[21px] md:space-y-[41px] mt-[41px] flex-1">
            {whyWorkData.map(({ id, text }) => (
              <p
                className={cn(
                  raleway.className,
                  "text-center font-normal text-[16px] text-[#2F2F2F]"
                )}
                key={id}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full mt-[20px] md:mt-0 lg:w-[525px] flex-1 ">
          <div className="w-full  h-[240px]  md:h-[250px] md:w-auto lg:w-[520px] lg:h-[350px]  relative">
            <Image
              src="https://res.cloudinary.com/dzlrpspps/image/upload/v1711890178/Projects/Saidur/Accountability_Community_with_Saidur_Rahman_x2uwbt.png"
              fill
              alt="Saidur Rahman Accountability Coach To 
            Entrepreneurs"
              className="border-black border-[2px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Introduce work history */}
      <section className="bg-[#f2e6f3]  relative">
        <div className="flex flex-col md:flex-row gap-x-[50px] mt-[50px] md:mt-0 py-[50px] md:pb-0 md:pt-[100px] max-w-[1093px] mx-auto relative px-[20px]">
          <div className="flex-1">
            <div className="w-full  h-[340px]  md:h-[350px] md:w-auto lg:w-[520px] lg:h-[350px] relative  flex justify-center items-center">
              <Image
                src="https://res.cloudinary.com/dzlrpspps/image/upload/v1711890670/Projects/Saidur/Accountability_Community_1_-_Saidur_Rahman_vacwxg.png"
                fill
                alt="Saidur Rahman Accountability Coach 
              to Entrepreneurs 1"
                className="border-black border-[2px] object-contain"
              />
            </div>
          </div>
          <div className="space-y-[22px] md:space-y-[32px] flex-1 mt-[50px] md:mt-0">
            <p
              className={cn(
                raleway.className,
                "text-center font-normal text-[16px] text-[#2F2F2F]"
              )}
            >
              I have worked with entrepreneurs, students from UC Berkeley,
              Georgia Tech, Harvard University PHD, and employees from Google,
              Amazon, and Microsoft.
            </p>
            <p
              className={cn(
                raleway.className,
                "text-center font-normal text-[16px] text-[#2F2F2F]"
              )}
            >
              Within my accountability coaching I have worked with 160+ clients,
              from 15+ countries. I was also traveled different countries while
              I was working online.
            </p>
            <p
              className={cn(
                raleway.className,
                "text-center font-normal text-[16px] text-[#2F2F2F]"
              )}
            >
              Now I am focused on helping entrepreneurs to improve their
              productivity with my accountability coaching skills.
            </p>
            <a
              href="https://www.saidurrahman.org/schedule"
              target="_schedule"
              className="text-white font-semibold text-[26px] bg-[rgb(1,116,199)] hover:shadow-[inset_0px_2px_2px_0_rgba(255,255,255,0.22),_0_233px_233px_0,rgba(255,255,255,0.12)_inset] hover:outline-none border-[1px] border-[rgba(0,0,0,0.2)] rounded-[3px] px-[25px] py-[10px] duration-300 w-full text-center hover:bg-[#0c69a8] flex flex-col items-center"
            >
              Click Here To Book A Call
              <span className="text-[10px] font-normal text-white/50">
                Please Do Not Book A Call Until You Have Watched The Above Video
                in-Full
              </span>
            </a>
          </div>
        </div>
      </section>

      <div className="relative bg-[#f2e6f3] pb-[122px] pt-[80px]  md:pt-[122px]">
        {/* first */}
        <div className=" max-w-[1093px] mx-auto px-[20px] md:px-0">
          <h1
            className={cn(
              raleway.className,
              "text-[24px] md:text-[36px] text-[#2D2D2D] text-center w-full md:w-[828px] mx-auto"
            )}
          >
            {" "}
            <span className="font-bold">
              I began working with entrepreneurs
            </span>{" "}
            to help them stay focused and productive by holding them accountable
            to their goals.
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
                Do you currently see inconsistencies on your actions, cannot
                execute on your most important task for the day, no matter what
                you try?
              </h1>
              <p className="text-center text-[15px]">
                Meet my client{" "}
                <span className="font-semibold italic">
                  Michael Virahsawmy.
                </span>
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                He had this problem, I helped solved it for him, and he was able
                to be consistent, <span className="font-bold">consistent</span>,
                getting the most important things done.
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                All he was missing was accountability, He feels amazing to be
                able to do the most important things. Working with me helped him
                in a big scale.
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                How much is "not keeping you accountable"{" "}
                <span className="underline">costing you?</span>
              </p>
            </div>
          </div>
        </div>
        {/* second */}
        {/* <div hidden className="mt-[50px] md:mt-[122px] max-w-[1093px] mx-auto">
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
                Meet my client{" "}
                <span className="font-semibold italic">Richard Rowlands.</span>
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
                How much is "not keeping you accountable"{" "}
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
        </div> */}

        {/* third */}
        {/* <div className="py-[50px] md:my-[122px] flex flex-col md:flex-row gap-y-[50px] gap-x-[50px] max-w-[1093px] mx-auto px-[20px]">
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
              Meet my client{" "}
              <span className="font-semibold italic">Jared Roger.</span>
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
              How much is "not keeping you accountable"{" "}
              <span className="underline">costing you?</span>
            </p>
          </div>
        </div> */}

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
                Are you an entrepreneur, trying to get a lot done, looking for
                someone to keep you accountable?
              </h1>
              <p className="text-center text-[15px]">
                Meet my client{" "}
                <span className="font-semibold italic">Faith Aumor.</span>
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                I helped her <span className="font-bold">2x her business</span>{" "}
                after working with me.
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                All she was missing was accountability, She increased
                productivity to a level that she didn't realise was possible.
              </p>
              <p
                className={cn(
                  openSans.className,
                  "text-[#2D2D2D] text-[15px] w-full md:w-[456px] mx-auto text-center"
                )}
              >
                How much is "not keeping you accountable"{" "}
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
            Click Here To Book A Call
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
      <span className="font-bold">Have Questions?</span> No problem. <br /> Add
      Me On Linkedin{" "}
      <a
        href="https://www.linkedin.com/in/saidurrahmanorg"
        target="whatsapp"
        className="text-[#1A77BD] hover:underline font-bold"
      >
        here
      </a>
    </h1>
  );
};
