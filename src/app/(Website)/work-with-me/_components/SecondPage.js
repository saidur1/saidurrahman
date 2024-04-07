import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SecondPage = () => {
  const whyWorkData = [
    {
      id: 1,
      text: "Seven years ago, I was a struggling musician living in my parents spare room, making $1,500 per-month on average. I was completely broke.",
    },
    {
      id: 2,
      text: "To solve my financial situation, I began learning to trade financial markets. A year or so later, I was asked by a friend to teach him what i was learning...",
    },
    {
      id: 3,
      text: "He offered to pay me $50 to spend two hours with me, and he created a Word doc during our session to take away with him. That day, my e-learning company was born.",
    },
    {
      id: 4,
      text: "The Word doc evolved into an e-book, then a Dropbox folder of videos and documents, then a full-blown online coaching program. The price evolved alongside the value from $50, to $500, to $5,000...",
    },
    {
      id: 5,
      text: "Over the following seven years, I made over $16,400,000 selling online education, before selling my company to a private equity firm for millions more.",
    },
  ];
  return (
    <div hidden className=" my-[100px] max-w-[1093px] mx-auto h-auto w-full z-40 text-black flex flex-col md:flex-row gap-x-[50px] px-[20px]">
      <div className="flex-1 ">
        <h1 className="text-[#2F2F2F] text-[26px] md:text-[36px] font-normal border-b-[1px] text-center">
          Why{" "}
          <span
            className="font-semibold
              "
          >
            Work With Will?
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
      <div className="w-full mt-[20px] md:mt-0 lg:w-[525px] flex-1">
        <div className="w-full h-auto md:h-[350px] lg:w-[520px] lg:h-[450px] relative">
          <Image
            src="https://res.cloudinary.com/dzlrpspps/image/upload/v1711890178/Projects/Saidur/Accountability_Community_with_Saidur_Rahman_x2uwbt.png"
            fill
            alt="Saidur Rahman Accountability Coach To 
            Entrepreneurs"
            className="border-black border-[2px] object-contain"
          />
        </div>
        {/* <p className={cn(raleway.className, "mt-[27px] text-center")}>
          <span className="font-semibold">Saidur Rahman</span> Accountability
          Coach To Entrepreneurs
        </p> */}
      </div>
    </div>
  );
};

export default SecondPage;
