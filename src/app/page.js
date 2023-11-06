import profile from "@/assets/images/saidur.jpeg";
import Reviews from "@/components/reviews/Reviews";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { isFreeTrainingAccess } from "@/utils/cookies";
import Image from "next/image";

export default async function Home() {
    const programs = [
        {
            id: 1,
            CH: "AC",
            title: "Accountability Community",
            desc: "Reality Creator Academy is for beginners on the journey who want to master the fundamentals of reality creation alongside a community.",
            href: "/community",
        },
        {
            id: 2,
            CH: "AA",
            title: "Accountability Accelerator",
            desc: "Reality Creator Academy is for beginners on the journey who want to master the fundamentals of reality creation alongside a community.",
            href: "/accelerator",
        },
        {
            id: 3,
            CH: "AM",
            title: "Accountability Mastermind",
            desc: "Reality Creator Academy is for beginners on the journey who want to master the fundamentals of reality creation alongside a community.",
            href: "/mastermind",
        },
    ];

    const access = isFreeTrainingAccess();

    return (
        <main className="bg-[#DFE3E4]">
            <section className="bg-gray-300 h-auto py-[50px] md:min-h-[40vh]">
                <div className="container flex flex-col gap-[30px] justify-center items-center h-full">
                    <h1 className="text-black/80 text-[50px] font-bold text-center">
                        How to master your reality by mastering <br /> yourself.
                    </h1>
                    <p className="text-black/80 text-[17px] font-medium text-center">
                        We help entrepreneurs grow to 6 & 7 figures through the
                        art of reality creation.
                    </p>
                    <PrimaryButton
                        href="/free_training"
                        title={access ? "Access Now" : "Free Training"}
                    />
                </div>
            </section>
            <section className=" py-[50px] md:py-[100px] w-full container justify-between grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg">
                {programs?.map(({ id, CH, title, desc, href }) => {
                    return (
                        <div
                            key={id}
                            className="px-[20px] py-[30px] border-[1px] border-gray-600 max-w-[380px] flex gap-y-[20px] flex-col justify-center items-center rounded-[6px] mx-auto"
                        >
                            <div className="h-[90px] w-[90px] text-[30px] bg-gray-800 text-white rounded-[20px] flex justify-center items-center">
                                {CH}
                            </div>
                            <h1 className="text-[30px] text-center font-bold text-gray-800">
                                {title}
                            </h1>
                            <p className="text-[#2c2c2c] font-normal text-[17px] mb-[40px]">
                                {desc}
                            </p>
                            <div className="w-full flex justify-center">
                                <PrimaryButton title="Learn More" href={href} />
                            </div>
                        </div>
                    );
                })}
            </section>
            <section className="py-[50px] md:py-[100px] container grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                <div className="flex-1">
                    <Image src={profile} width={500} alt="Profile" />
                </div>
                <div className="flex-1">
                    <h1 className="text-[30px] text-gray-800 font-bold mb-[20px] md:mb-[30px]">
                        Meet Saidur Rahman,
                    </h1>
                    <p className="text-[20px] font-normal text-[#2c2c2c] mb-[40px] md:mb-[80px]">
                        I help entrepreneurs improve productivity; achieve goals
                        by keeping them accountable for habits and actions. Are
                        you struggling to improve your business, productivity,
                        get more done and to achieve your goals? If you’re
                        interested in getting more out of your life & business
                        contact me for the FREE discovery call.
                    </p>
                    <div>
                        <PrimaryButton
                            title="Learn more about saidur"
                            href="/our_story"
                        />
                    </div>
                </div>
            </section>
            <section className="py-[50px] md:py-[100px] container">
                <h1 className="text-center text-[40px] md:text-[60px] font-semibold">
                    Here's What People <br /> Are Saying
                </h1>
                <div>
                    <Reviews />
                </div>
            </section>
        </main>
    );
}
