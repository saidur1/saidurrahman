// Components
import WistiaPlayer from "@/components/shared/player/WistiaPlayer";

export default async function Home() {
  return (
    <>
      <div className="my-[61px]">
        <h1 className="text-[#2D2D2D] font-raleway text-[36px] font-bold text-center">
          Here's how I might be able to help you
        </h1>
        <div className="mt-[61px] px-[20px] max-w-[1093px] mx-auto">
          <WistiaPlayer />
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
    </>
  );
}
