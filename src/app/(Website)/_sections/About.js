// components
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Image from "next/image";
import Highlight from "./Highlight";

const About = () => {
    const data = [
        {
            id: 1,
            number: 160,
            text: "Students",
            text2: "Transformed their lives",
        },
        {
            id: 2,
            number: 5,
            text: "Years",
            text2: "Of Experiences",
        },
    ];
    return (
        <section className="bg-white">
            <section className="py-[50px] md:py-[100px] container grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                <div className="flex-1 max-w-[450px] h-auto relative imgContainer">
                    <Image
                        src="https://res.cloudinary.com/dzlrpspps/image/upload/v1700540627/Projects/Saidur/saidur_sfwsaw.jpg"
                        fill
                        className="rounded-md hover:scale-105 duration-300"
                        title="Saidur Rahman"
                        alt="Saidur Rahman"
                    />
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
            {/* states */}
            <section className="py-[50px] md:py-[100px] container">
                <Highlight highlightData={data} />
            </section>
        </section>
    );
};

export default About;
