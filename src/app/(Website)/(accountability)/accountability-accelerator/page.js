"use client";
import WebWrapper from "@/components/shared/WebWrapper/WebWrapper";
import CallBookHighLight from "@/components/shared/callBookHighlight/CallBookHighLight";
import { Chip } from "@nextui-org/react";
import {
    FolderIcon,
    HeartHandshakeIcon,
    LibraryBigIcon,
    MapIcon,
    PhoneCallIcon,
    TargetIcon,
} from "lucide-react";
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

    const highlights = [
        {
            id: Math.floor(Math.random() * 9999),
            title: "Tailored Action Plan for Goal Achievement",
            description:
                "Get a detailed look at what you want to achieve, the difficulties you might face, and your big dreams. We'll work together to create a special plan just for you.",
            Icon: TargetIcon,
            color: "#A2C3D1",
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Weekly Accountability Calls",
            description:
                "Stay on target with bi-weekly check-ins! We'll review your progress, tackle challenges, and keep you motivated with personalized guidance.",
            Icon: PhoneCallIcon,
            color: "#F4D9E6",
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Weekly Call Recordings Access",
            description:
                "Get recordings of every check-in! Revisit valuable insights, feedback, and action items whenever you want. It's your personalized resource for future reference.",
            Icon: FolderIcon,
            color: "#C3E7C6",
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Personalized Planning and Milestones",
            description:
                "We break down your goals into weekly, manageable steps, refining your plan based on progress and feedback.",
            Icon: MapIcon,
            color: "#6495ED",
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Accountability Partner Support",
            description:
                "Cultivate teamwork through regular check-ins. Share successes, face challenges, and find encouragement from a supportive peer.",
            Icon: HeartHandshakeIcon,
            color: "#FFA07A",
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Access Resource Hub",
            description:
                "Elevate your journey with our Resource Hub: Access tools, expert guides, and inspiring content for effective goal-setting and habit formation success",
            Icon: LibraryBigIcon,
            color: "#FFB6C1",
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Community Engagement",
            description:
                "Participate in group discussions, share experiences, and forge connections with like-minded individuals on similar journeys. Engage, learn, grow together.",
            Icon: LibraryBigIcon,
            color: "#EEE8AA",
        },
    ];

    const trainingProcess = [
        {
            id: Math.floor(Math.random() * 9999),
            title: "Foundation",
            week: "Week - #1",
            options: [
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Introductory Call",
                    description:
                        "Discover your path with a focused goal-setting discussion. Identify challenges and aspirations for a journey toward personal and professional fulfillment.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Personalized Action Plan",
                    description:
                        "Co-create a structured roadmap with us, outlining clear short-term and long-term objectives collaboratively. Your journey to success starts with a well-defined plan.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Resource Introduction",
                    description:
                        "Explore a toolkit of resources and an introduction to the program's core principles. Equip yourself with the essentials for a successful journey ahead.",
                },
            ],
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Principles",
            week: "Week - #2",
            options: [
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Weekly Accountability Call (1)",
                    description:
                        "Reflect on your progress since Week 1 with a thorough review. Dive into an in-depth discussion on the principles of effective goal attainment to enhance your path to success.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Principles Workshop",
                    description:
                        "Delve deep into key success principles and apply them directly to your individual goals. Unlock a tailored approach to achieve your aspirations effectively.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Reflection and Refinement",
                    description:
                        "Reflect on insights, refine action plan based on learned principles for enhanced effectiveness.",
                },
            ],
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Habits",
            week: "Week - #3",
            options: [
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Weekly Accountability Call (2)",
                    description:
                        "Assess habits, identify those fostering success. Tailor strategies for a path to achievement.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Habit-Building Workshop",
                    description:
                        "Cultivate positive habits with tailored strategies. Seamlessly integrate new habits into your daily routines.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Milestone Setting",
                    description:
                        "Set weekly milestones for habit formation, track progress, and celebrate small victories along the way.",
                },
            ],
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Distractions",
            week: "Week - #4",
            options: [
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Weekly Accountability Call (3)",
                    description:
                        "Identify potential distractions, devise a focused distraction management plan for enhanced productivity.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Distraction Elimination Strategies",
                    description:
                        "Minimize interruptions with effective techniques. Craft an optimal work environment for enhanced focus and productivity.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Distraction Audit",
                    description:
                        "Self-assess, identify personal distractions, and implement solutions for sustained focus and productivity.",
                },
            ],
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Resistance",
            week: "Week - #5",
            options: [
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Weekly Accountability Call (4)",
                    description:
                        "Explore resistance and procrastination. Develop a mindset for overcoming challenges and fostering productivity..",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Resistance Workshop",
                    description:
                        "Explore psychological aspects of resistance. Implement practical strategies to overcome mental blocks and enhance productivity.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Mindset Shift",
                    description:
                        "Foster a positive, resilient mindset. Apply mindset principles to drive success in goal pursuit.",
                },
            ],
        },
        {
            id: Math.floor(Math.random() * 9999),
            title: "Accountability",
            week: "Week - #6",
            options: [
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Weekly Accountability Call (5)",
                    description:
                        "Integrate learned concepts, prepare for ongoing self-accountability to solidify progress and growth.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Accountability Partner Introduction",
                    description:
                        "Introduce accountability partnerships. Assign partners for ongoing mutual support and encouragement in your journey.",
                },
                {
                    id: Math.floor(Math.random() * 9999),
                    title: "Program Review and Future Planning",
                    description:
                        "Reflect on the program journey, develop a plan for continued accountability and sustained success.",
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

                <section className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-[100px]">
                    <div className="p-6">
                        <h1 className="text-[24px] border-b-[2px] border-b-[#f9dd94] pb-2">
                            Program Highlights{" "}
                        </h1>
                        <p className="text-[12px] tracking-wider mt-6">
                            Fast-track your goals with our Accountability
                            Accelerator Program. Discover top highlights for
                            rapid growth
                        </p>
                    </div>
                    {highlights.map(
                        ({ Icon, id, color, title, description }) => (
                            <div
                                className={`p-6 py-8 shadow-md border-t-3 rounded-sm border-t-[#0000004D] space-y-8 max-w-[500px] min-h-[250px] hover:scale-105 duration-300`}
                                key={id}
                            >
                                <div className="flex justify-between items-center">
                                    <h3
                                        style={{ fontSize: "18px" }}
                                        className="text-medium text-[#2f2f2f]"
                                    >
                                        {title}
                                    </h3>
                                    <div>
                                        <Icon
                                            className={`w-7 h-7 text-[#0000004D]`}
                                        />
                                    </div>
                                </div>
                                <p className="text-[14px] text-black/70 font-light leading-5">
                                    {description}
                                </p>
                            </div>
                        )
                    )}
                </section>

                <section className="mt-[100px] ">
                    <h1 className="border-b-[3px] border-b-[#f9dd94] text-[25px] md:text-[40px] pb-2">
                        Accountability Accelerator Program: 6-Week Journey
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                        {trainingProcess.map(({ id, title, week, options }) => (
                            <div className="p-6 border rounded-sm" key={id}>
                                <div className="flex flex-col items-end gap-y-2">
                                    <Chip size="sm">
                                        <p className="text-[10px]">{week}</p>
                                    </Chip>
                                    <Chip size="md">{title}</Chip>
                                </div>
                                <div className="space-y-4 mt-2">
                                    {options.map(
                                        ({ id, title, description }) => (
                                            <div
                                                className="px-8 space-y-2"
                                                key={id}
                                            >
                                                <h3 className="font-medium text-[14px] text-black/80">
                                                    {title}
                                                </h3>
                                                <p className="font-light text-black/70 text-[12px]">
                                                    {description}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <CallBookHighLight
                    title="Interested to Join Accountability Accelerator?"
                    href="/schedule"
                />
            </div>
        </WebWrapper>
    );
};

export default AccountabilityAccelerator;
