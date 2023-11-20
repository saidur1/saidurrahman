import Discord from "@/components/JoinDiscord/Discord";
import WebWrapper from "@/components/shared/WebWrapper/WebWrapper";
import Image from "next/image";

const AccountabilityCommunity = () => {
    const benefits = [
        {
            id: 2,
            title: "Accountability Partnerships: ",
            description:
                "Forge meaningful connections with like-minded individuals dedicated to achieving their goals. Our community thrives on mutual support, ensuring that you're never alone on your journey.",
        },
        {
            id: 3,
            title: "Habit Building Mastery: ",
            description:
                "Unlock the secrets to sustainable habit formation. From proven techniques to personalized advice, our community is a hub for cultivating habits that propel you towards success.",
        },
        {
            id: 4,
            title: "Weekly Challenges: ",
            description:
                "Engage in exciting challenges designed to boost motivation and foster a sense of accomplishment. Whether it's a fitness challenge, productivity sprint, or a creativity boost, our weekly challenges keep you on your toes.",
        },
        {
            id: 5,
            title: "Interactive Workshops: ",
            description:
                "Join live workshops led by experts in the fields of productivity, goal-setting, and habit formation. Immerse yourself in interactive sessions that provide actionable strategies for long-term success.",
        },
        {
            id: 6,
            title: "Resource Library: ",
            description:
                "Access a curated collection of resources, including articles, videos, and tools, handpicked to accelerate your journey. Stay informed and inspired with our regularly updated library.",
        },
        {
            id: 7,
            title: "Positive Vibes Only: ",
            description:
                "Our community is built on positivity, encouragement, and a shared commitment to growth. Experience a welcoming environment where every success, big or small, is celebrated.",
        },
    ];

    return (
        <WebWrapper>
            <div className="min-h-[calc(100vh-145px)]  py-[50px] space-y-28 relative container ">
                <section className="flex flex-col-reverse md:flex-row h-auto">
                    <div className="flex-1 space-y-8 text-[#333333] mt-[30px] md:mt-0">
                        <h1 className="text-[22px] md:text-[30px] lg:text-[40px] font-semibold">
                            Join the Accountability Community™ for Consistency,
                            Support, and Success!
                        </h1>
                        <p>
                            Dive into a world of growth and achievement! Join
                            the Accountability Community on Discord for a
                            supportive space where consistency, encouragement,
                            and success converge. Your journey to unlocking your
                            full potential begins here!
                        </p>
                        <div>
                            <Discord />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <Image
                            src="discord.svg"
                            width={230}
                            height={230}
                            alt="discord"
                            className=""
                        />
                        <p>@Accountability Community™</p>
                    </div>
                </section>
                <section className="text-[#1a1a1a]">
                    <h3 className="text-[16px] ">
                        <span className="font-medium border-b-[2px] border-b-[#f9dd94] text-[18px]">
                            Accountability Community™
                        </span>{" "}
                        meets camaraderie! Join our Discord server to embark on
                        a transformative journey towards achieving your goals.
                        Here, we understand the power of accountability, and
                        we've curated a supportive community that empowers you
                        to stay consistent and build habits that last.
                    </h3>
                    <div className="mt-[50px] space-y-14 text-[15px]">
                        <ol className="text-[16px] space-y-4">
                            {benefits?.map(({ id, title, description }) => {
                                return (
                                    <li key={id} className="text-[15px]">
                                        <span className="font-medium">
                                            {title}
                                        </span>
                                        {description}
                                    </li>
                                );
                            })}
                        </ol>
                        <p className="text-[15px]">
                            Don't just dream about your goals—achieve them with
                            the Accountability Community™. Join us on Discord
                            and take the first step towards a more accountable,
                            empowered, and fulfilling life. Your journey to
                            success starts here! 💪🚀
                        </p>
                    </div>
                </section>
            </div>
        </WebWrapper>
    );
};

export default AccountabilityCommunity;
