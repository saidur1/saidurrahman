import Blur from "@/components/plaiceholder/blur";
import WebWrapper from "@/components/shared/WebWrapper/WebWrapper";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Programms from "./(Website)/_sections/Programms";
import Reviews from "./(Website)/_sections/Reviews";

export default async function Home() {
    return (
        <WebWrapper>
            <main className="bg-[#DFE3E4]">
                <section className="bg-gray-100 h-auto py-[50px] md:min-h-[45vh]">
                    <div className="container flex flex-col gap-[30px] justify-center items-center h-full">
                        <h1 className="text-black/80 text-[50px] font-bold text-center">
                            Accountability coaching for <br /> entrepreneurs.
                        </h1>
                        <p className="text-black/80 text-[17px] font-medium text-center">
                            We help ENTREPRENEURS stay ACCOUNTABLE so they
                            achieve their financial goals
                        </p>
                        <PrimaryButton
                            href="/schedule"
                            title="Book A FREE Discovery Call"
                        />
                    </div>
                </section>
                <Programms />
                <section className="bg-white">
                    <section className="py-[50px] md:py-[100px] container grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        <div className="flex-1 max-w-[450px] h-auto relative imgContainer">
                            <Blur
                                src="https://res.cloudinary.com/dzlrpspps/image/upload/v1700540627/Projects/Saidur/saidur_sfwsaw.jpg"
                                className="rounded-md hover:scale-105 duration-300"
                                title="Saidur Rahman"
                            />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-[30px] text-gray-800 font-bold mb-[20px] md:mb-[30px]">
                                Meet Saidur Rahman,
                            </h1>
                            <p className="text-[20px] font-normal text-[#2c2c2c] mb-[40px] md:mb-[80px]">
                                I help entrepreneurs improve productivity;
                                achieve goals by keeping them accountable for
                                habits and actions. Are you struggling to
                                improve your business, productivity, get more
                                done and to achieve your goals? If you’re
                                interested in getting more out of your life &
                                business contact me for the FREE discovery call.
                            </p>
                            <div>
                                <PrimaryButton
                                    title="Learn more about saidur"
                                    href="/our_story"
                                />
                            </div>
                        </div>
                    </section>
                </section>
                <section className="py-[50px] md:py-[100px] container">
                    <h1 className="text-center text-[40px] md:text-[60px] font-semibold dark:text-black/80">
                        Here's What People <br /> Are Saying
                    </h1>
                    <div>
                        <Reviews />
                    </div>
                </section>
            </main>
        </WebWrapper>
    );
}
