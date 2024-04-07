// Components
import HomeContent from "@/components/content/HomeContent";
import Intro from "@/components/content/Intro";
import WebWrapper from "@/components/shared/WebWrapper/WebWrapper";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <WebWrapper>
        <div className="max-w-[1170px] mx-auto pt-[50px] md:pt-[68px]">
          <div className="w-full flex flex-col md:flex-row items-center gap-x-[60px]">
            <div className="flex-1 w-full flex justify-center">
              <div className="w-[150px] h-[150px] md:w-[350px] md:h-[350px]  relative">
                <Image
                  src="https://res.cloudinary.com/dzlrpspps/image/upload/v1700540627/Projects/Saidur/saidur_sfwsaw.jpg"
                  fill
                  alt="photo"
                  className="object-center border-[3px] border-[rgba(0,0,0,0.7)] rounded-[5px] shadow-[0_2px_5px_2px_rgba(0,0,0,0.3)] overflow-clip"
                />
              </div>
            </div>
            <div className="flex-1">
              <Intro />
            </div>
          </div>
        </div>

        {/* content 1 */}
        <div hidden className="max-w-[1170px] mx-auto mt-[85px] md:mt-[110px] px-[20px] ">
          <section className="flex flex-col md:flex-row gap-y-[40px] gap-x-[60px]">
            <div className="flex-1">
              <HomeContent
                title="Title one goes here..."
                content1="Me and my friends began skateboarding. I decided it would be fun to film their stunts and our travels across the country to different skateparks, edit together the video footage and create a product. Skateboard video/s."
                content2="I began selling these to friends and other skateboarders we would meet as we travelled and built a network of other people
              interested in the sport."
                footerText="Footer text goes here."
              />
            </div>
            <div className="flex-1 mt-[20px] md:mt-0">
              <HomeContent
                title="Title two goes here..."
                content1="Me and my friends became interested in street art and graffiti. I decided it would be fun to take pictures of our work, and the work of others, as we traveled across the country. I also interviewed prominent artists, combined all of this and created a product: A graffiti magazine."
                content2="Whilst it was a small bootstrapped endeavour, I was selling advertising in the magazine to large global paint brands, and I had the magazine stocked in boutique art stores."
                footerText="Footer text goes here."
              />
            </div>
          </section>
        </div>

        {/* content 2 */}
        <div hidden className="max-w-[1170px] mx-auto px-[20px]  mt-[85px] md:mt-[125px]">
          <section className="flex flex-col md:flex-row gap-y-[40px] gap-x-[60px] ">
            <div className="flex-1">
              <HomeContent
                title="title three goes here..."
                content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                content2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                content3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                footerText="Footer text goes here."
              />
            </div>
            <div className="flex-1 mt-[20px] md:mt-0">
              <HomeContent
                title="Title four goes here..."
                content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                content2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                content3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                footerText="Footer text goes here."
              />
            </div>
          </section>
        </div>

        {/* content 3 */}
        <div hidden className="max-w-[1170px] mx-auto px-[20px] mt-[85px] md:mt-[125px]">
          <section className="flex flex-col md:flex-row gap-y-[40px] gap-x-[60px] ">
            <div className="flex-1">
              <HomeContent
                title="Title five goes in here..."
                content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                content2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                content3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              "
                content4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                footerText="Footer text goes here."
              />
            </div>
            <div className="flex-1 mt-[20px] md:mt-0">
              <HomeContent
                title="Title six goes from here..."
                content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                content2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                content3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                content4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                footerText="Footer text goes here."
              />
            </div>
          </section>
        </div>

        <section className="mt-[75px] md:mt-[155px] mb-[100px] md:mb-[175px] max-w-[1170px] mx-auto px-[20px]">
          <h1 className="font-raleway text-center text-[20px] md:text-[32px] text-[#2D2D2D] mb-[118px]">
            Thanks for reading my story. <br />
            <span className="font-bold">
              Add Me On linkedIn,{" "}
              <a href="https://www.linkedin.com/in/saidurrahmanorg" target="_linkedin" className="text-[rgb(26,119,189)]">
                here.
              </a>
            </span>
          </h1>
          <div className="hidden md:block bg-[rgba(45,45,45,1)] h-[1px] w-full"></div>
        </section>
      </WebWrapper>
    </>
  );
}
