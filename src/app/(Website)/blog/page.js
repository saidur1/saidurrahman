import WebWrapper from "@/components/shared/WebWrapper/WebWrapper";
import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Page = () => {
  const data = [
    {
      id: 1,
      title: "Goal Achievement:",
      text: "Entrepreneurs often have ambitious goals. Being accountable to someone, whether it’s a mentor, business partner, or advisor, can help them stay on track and make progress toward these goals.",
    },
    {
      id: 2,
      title: "Focus and Productivity:",
      text: "Accountability fosters discipline and time management. Entrepreneurs are more likely to stay focused on tasks that matter and use their time efficiently when they know they have someone to answer to.",
    },
    {
      id: 3,
      title: "Motivation and Commitment:",
      text: "Knowing that someone is monitoring their progress can boost an entrepreneur’s motivation and commitment to their business. The fear of disappointing others can serve as a powerful incentive.",
    },
    {
      id: 4,
      title: "Personal Growth:",
      text: "Accountability encourages self-reflection and self-improvement. Entrepreneurs can learn from their experiences and mistakes, ultimately growing both personally and professionally.",
    },
    {
      id: 5,
      title: "Increased Resilience:",
      text: "Entrepreneurship can be challenging, and setbacks are common. Accountability can provide the emotional support needed to bounce back from failures and keep moving forward.",
    },
    {
      id: 6,
      title: "Long-Term Success:",
      text: "Ultimately, accountability helps entrepreneurs stay committed to their vision, stay accountable to their customers, employees, and stakeholders, and work consistently toward building a sustainable and successful business.",
    },
  ];
  return (
    <WebWrapper>
      <div className="pb-[100px] px-[20px]">
        <p className="text-[12px] text-center text-[rgb(136,136,136)] mt-[80px]">
          Tuesday 20th June, 2023
        </p>
        <h1
          className={cn(
            raleway.className,
            "text-center max-w-[1100px] mx-auto text-[#2D2D2D] text-[32px] font-bold mt-[50px]"
          )}
        >
          Accountability plays a crucial role in the success of entrepreneurs
          and their ventures. Here are some of the key benefits of
          accountability for entrepreneurs:
        </h1>
        <div className="max-w-[1100px] mx-auto mt-[60px] space-y-4">
          {data.map(({ id, title, text }) => (
            <p
              className={cn(raleway.className, "text-center text-[18px]")}
              key={id}
            >
              <span className="font-bold">{title} </span>
              {text}
            </p>
          ))}
        </div>
        <p
          className={cn(
            raleway.className,
            "text-center max-w-[1100px] mx-auto text-[#2D2D2D] mt-[40px] text-[18px] font-medium"
          )}
        >
          Accountability is a valuable tool for entrepreneurs, helping them set
          and achieve goals, stay focused, and learn from their experiences. It
          can significantly contribute to the growth and success of their
          businesses.
        </p>
      </div>
      <section className="mt-[75px] md:mt-[155px] mb-[100px] md:mb-[175px] max-w-[1170px] mx-auto px-[20px]">
        <h1 className="font-raleway text-center text-[20px] md:text-[32px] text-[#2D2D2D] mb-[118px]">
          Thanks for reading my blog. <br />
          <span className="font-bold">
            Add Me On Instagram,{" "}
            <a
              href="https://www.instagram.com/saidurrahmanorg/"
              target="_instagram"
              className="text-[rgb(26,119,189)]"
            >
              here.
            </a>
          </span>
        </h1>
        <div className="hidden md:block bg-[rgba(45,45,45,1)] h-[1px] w-full"></div>
      </section>
    </WebWrapper>
  );
};

export default Page;
