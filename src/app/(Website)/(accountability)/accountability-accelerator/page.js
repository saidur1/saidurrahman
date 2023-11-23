import WebWrapper from "@/components/shared/WebWrapper/WebWrapper";
import Image from "next/image";

const AccountabilityAccelerator = () => {
    const keyFocusAres = [
        {
            id: Math.floor(Math.random() * 9999),
            title: "Clarity on Personal & Business Goals:",
            lists: [
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Gain a deep understanding of your short-term and long-term objectives.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Define clear, actionable steps to achieve your goals.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Establish a roadmap that aligns with your aspirations.",
                },
            ],
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Build Personal and Work Habits:",
            lists: [
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Identify and cultivate habits that contribute to your success.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Develop a personalized routine that enhances productivity and well-being.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Receive guidance on effective time management strategies.",
                },
            ],
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Identify and Eliminate Distractions:",
            lists: [
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Conduct a thorough assessment of potential distractions in your environment.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Implement strategies to minimize interruptions and maintain focus.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Learn techniques to create a conducive workspace.",
                },
            ],
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Overcome Resistance and Take Action:",
            lists: [
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Understand the psychological aspects of resistance and procrastination.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Receive personalized strategies to overcome mental blocks.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Cultivate a mindset that promotes consistent and decisive action",
                },
            ],
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Hold You Accountable to Your Plan:",
            lists: [
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Regular check-ins to track your progress and celebrate achievements.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Receive constructive feedback and adjustments to your plan as needed.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    item: "Stay motivated through positive reinforcement and accountability partnerships.",
                },
            ],
        },
    ];
    return (
        <WebWrapper>
            <div className="min-h-[calc(100vh-145px)]  py-[50px] space-y-28 relative container ">
                <section className="flex flex-col-reverse md:flex-row h-auto">
                    <div className="flex-1 space-y-8 text-[#333333] mt-[30px] md:mt-0">
                        <h1 className="text-[22px] md:text-[30px] lg:text-[40px] font-semibold">
                            Accountability Accelerator™ for Consistency,
                            Support, and Success!
                        </h1>
                        <p>
                            "Dive into success with our Accountability
                            Accelerator™—your shortcut to consistency,
                            unwavering support, and triumph! Experience
                            accelerated growth and achievement within a
                            dedicated community. This is not just a program;
                            it's your key to unstoppable success!"
                        </p>
                    </div>
                    <div className="flex-1 flex flex-col items-center relative">
                        <Image
                            src="https://res.cloudinary.com/dzlrpspps/image/upload/v1700702648/Projects/Saidur/D7F00F96-176E-4DC8-AE4A-AD005F4A50E7_dcmi8f.jpg"
                            width={400}
                            height={400}
                            className="rounded-md"
                            alt="saidur rahman"
                        />
                        <p>@Accountability Community™</p>
                    </div>
                </section>

                <section>
                    <h3 className="text-[16px] ">
                        <span className="font-medium border-b-[2px] border-b-[#f9dd94] text-[18px]">
                            Accountability Accelerator™
                        </span>{" "}
                        Welcome to our Accountability Accelerator where we
                        empower you to achieve your personal and business goals
                        with clarity, commitment, and consistent progress. Our
                        comprehensive program is designed to provide you with
                        the support and structure needed to enhance your focus,
                        productivity, and overall success.
                    </h3>

                    <div className="mt-20">
                        <h1 className="text-[18px] font-semibold border-b-[2px] border-b-[#f9dd94] w-fit">
                            Key Focus Areas:{" "}
                        </h1>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                            {keyFocusAres.map(({ id, title, lists }) => (
                                <div key={id} className="pl-3 mt-3">
                                    <h4 className="text-[16px] font-medium">
                                        {title}
                                    </h4>
                                    <ul className="pl-6">
                                        {lists.map(({ id, item }) => (
                                            <li
                                                key={id}
                                                className="list-disc text-[14px] font-normal text-[#1a1a1a]/90"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </WebWrapper>
    );
};

export default AccountabilityAccelerator;
