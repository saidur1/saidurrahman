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
        <div className="max-w-[1170px] mx-auto mt-[85px] md:mt-[110px] px-[20px] ">
          <section className="flex flex-col md:flex-row gap-y-[40px] gap-x-[60px]">
            <div className="flex-1">
              <HomeContent
                title="In my mid-teens..."
                content1="Me and my friends began skateboarding. I decided it would be fun to film their stunts and our travels across the country to different skateparks, edit together the video footage and create a product. Skateboard video/s."
                content2="I began selling these to friends and other skateboarders we would meet as we travelled and built a network of other people
              interested in the sport."
                footerText="Selling these made me 2-figures."
              />
            </div>
            <div className="flex-1 mt-[20px] md:mt-0">
              <HomeContent
                title="In my late-teens..."
                content1="Me and my friends became interested in street art and graffiti. I decided it would be fun to take pictures of our work, and the work of others, as we traveled across the country. I also interviewed prominent artists, combined all of this and created a product: A graffiti magazine."
                content2="Whilst it was a small bootstrapped endeavour, I was selling advertising in the magazine to large global paint brands, and I had the magazine stocked in boutique art stores."
                footerText="Selling these made me 4-figures."
              />
            </div>
          </section>
        </div>

        {/* content 2 */}
        <div className="max-w-[1170px] mx-auto px-[20px]  mt-[85px] md:mt-[125px]">
          <section className="flex flex-col md:flex-row gap-y-[40px] gap-x-[60px] ">
            <div className="flex-1">
              <HomeContent
                title="In my early-twenties..."
                content1="Me and my friends got into DJ-ing. I decided it would be fun to, rather than just play other people's music, produce my own, creating a product under the moniker Compa."
                content2="Two years later, I got my music into the hands of a global DJ, Mala who signed me to his Deep Medi label. From there, I got a booking agent, a manager and began touring the world, playing in over 40+ countries and releasing records on a variety of prominent elec-
              tronic music record labels."
                content3="I also self-released my own music, digitally and on vinyl, and created my own merchandise and my own 'sample packs' that other
              producers could buy."
                footerText="Performing and selling records and merch made me 6-figures."
              />
            </div>
            <div className="flex-1 mt-[20px] md:mt-0">
              <HomeContent
                title="In my mid-twenties..."
                content1="I became interested in investment and building wealth through real estate. I realised that I may not be able to sustain a music career forever, and that it would be wise to invest excess capital to
              grow it for the future."
                content2="I started off by investing in small town-houses in the North of England, then grew to investing in larger family-houses, and then expanded
              into off-plan city centre apartments, with investments growing
              in size at each step forwards."
                content3="I worked with a property management company to outsource the sourcing, renovation and lettings side of things, to make my
              life easier."
                footerText="My real estate company currently sits at 7-figures."
              />
            </div>
          </section>
        </div>

        {/* content 3 */}
        <div className="max-w-[1170px] mx-auto px-[20px] mt-[85px] md:mt-[125px]">
          <section className="flex flex-col md:flex-row gap-y-[40px] gap-x-[60px] ">
            <div className="flex-1">
              <HomeContent
                title="In my late-twenties..."
                content1="I became interested in trading financial markets, as a way to supple-ment my music income, which at times could be slow if I only had
              one or two DJ bookings in a month."
                content2="After working with a handful of coaches and mentors, I learned the necessary skills to construct my own strategies, unique to me. I
              didn't know it at the time, but I had unknowingly created yet
              another saleable product that I would end up sharing
              with others."
                content3="One day, a friend messaged me asking if I could teach him what I had learned, what I was doing, along with my strategies. This was when
              my e-learning business WBTrading birthed itself organically.
              "
                content4="Fast forward to today and we have a team of 14 people, across 5 cou-ntries, working at the company. We work with many fantastic
              clients on a global scale."
                footerText="My e-learning company made me 8-figures."
              />
            </div>
            <div className="flex-1 mt-[20px] md:mt-0">
              <HomeContent
                title="In my early-thirties..."
                content1="In September 2023, I sold my e-learning company to a private equity firm, based in America, for a multi seven-figure sum."
                content2="Over the last year or so, I've been increasingly approached by people who've asked me to help them either build, or grow, or exit, their online education companies, and after my YouTube channel blew up at the start of 2024, growing by 40K subs and 1M views in just four months, the volume of people requesting consulting grew and grew."
                content3="This led me to found my new company Build, Grow and Exit in order to help them to either build, grow or exit their online education companies. My mission statement is simple: 'Make money, have fun, and help people'"
                content4="If you are someone who either aspires to build your own six or seven figure online education company, or you own one and want to either grow it or exit it, go here for more information."
                footerText="I'll see if I can help."
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
