import { cn } from "@/lib/utils";

const HomeContent = ({ title, content1, content2, content3, footerText }) => {
  return (
    <div>
      {title && (
        <h1
          className={cn(
            "text-[23px] text-center md:text-left font-bold text-[#2D2D2D] font-raleway"
          )}
        >
          {title}
        </h1>
      )}
      <div className="space-y-[19px] mt-[25px] text-center md:text-left">
        {content1 && (
          <p
            className={cn(
              "text-[16px] font-normal text-[#2D2D2D] font-raleway leading-normal"
            )}
          >
            {content1}
          </p>
        )}
        {content2 && (
          <p
            className={cn(
              "text-[16px] font-normal text-[#2D2D2D] font-raleway leading-normal"
            )}
          >
            {content2}
          </p>
        )}
        {content3 && (
          <p
            className={cn(
              "text-[16px] font-normal text-[#2D2D2D] font-raleway leading-normal"
            )}
          >
            {content3}
          </p>
        )}
        {footerText && <p className="font-raleway font-bold">{footerText}</p>}
      </div>
    </div>
  );
};

export default HomeContent;
