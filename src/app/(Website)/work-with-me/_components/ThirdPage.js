import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const ThirdPage = () => {
  return (
    <section className="bg-[#f2e6f3]  relative">
      <div className="flex flex-col md:flex-row gap-x-[50px] mt-[50px] md:mt-0 py-[50px] md:pb-0 md:pt-[100px] max-w-[1093px] mx-auto relative px-[20px]">
        <div className="flex-1">
          <div className="w-full lg:w-[502px] h-[370px] relative">
            <Image
              src="https://res.cloudinary.com/dzlrpspps/image/upload/v1711890670/Projects/Saidur/Accountability_Community_1_-_Saidur_Rahman_vacwxg.png"
              fill
              alt="Saidur Rahman Accountability Coach 
              to Entrepreneurs 1"
              className="border-black border-[2px]"
            />
          </div>
          <p className={cn(raleway.className, "mt-[27px] text-center")}>
            Saidur Rahman{" "}
            <span className="font-semibold">'Accountability'</span> Coach to
            Entrepreneurs 1
          </p>
        </div>
        <div className="space-y-[22px] md:space-y-[32px] flex-1 mt-[50px] md:mt-0">
          <p
            className={cn(
              raleway.className,
              "text-center font-normal text-[16px] text-[#2F2F2F]"
            )}
          >
            Within my e-learning company, at the point I sold the business, we
            had 16 members of staff, we had served over 4,000 clients globally
            across seven years, and were one of the largest trading education
            companies on earth.
          </p>
          <p
            className={cn(
              raleway.className,
              "text-center font-normal text-[16px] text-[#2F2F2F]"
            )}
          >
            Last year, I won the prestigious 'Two Comma Club X' award from
            ClickFunnels for collecting over $10,000,000 in cash.
          </p>
          <p
            className={cn(
              raleway.className,
              "text-center font-normal text-[16px] text-[#2F2F2F]"
            )}
          >
            Building the company was fun, fulfilling, rewarding and made me a
            multi-millionaire by the time I turned 30.
          </p>
          <Link
            href="/schedule"
            className="py-[8px] px-[16px] bg-[#0174C7] text-white font-semibold text-[18px] md:text-[24px] leading-[26px] text-center hover:bg-[#0174C7]/90 duration-200 w-full flex flex-col gap-y-[1px]"
          >
            Click here to Book a Call
            <span className="text-[12px] font-normal text-white/50">
              Please Do Not Book A Call Until You Have Watched The Above Video
              in-Full
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
