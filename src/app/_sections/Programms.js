import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

const Programms = () => {
    const programs = [
        {
            id: 1,
            CH: "AC",
            title: "Accountability Community",
            desc: "Accountability community is a group of online entrepreneurs who want to keep themselves accountability to stay on track with their habits and priorities.",
            href: "/accountability-community",
        },
        {
            id: 2,
            CH: "AA",
            title: "Accountability Accelerator",
            desc: "Accountability accelerator is a six weeks program for online entrepreneurs who want to learn and implement fundamental principles, build habits, identify and eliminate distractions, and keep themself accountable.",
            href: "/schedule",
        },
    ];
    return (
        <section className=" py-[50px] md:py-[100px] w-full container justify-between grid gap-[30px] grid-cols-1 md:grid-cols-2  bg">
            {programs?.map(({ id, CH, title, desc, href }) => {
                return (
                    <div
                        key={id}
                        className="px-[20px] py-[30px] border-[1px] border-gray-600 max-w-[380px] flex gap-y-[20px] flex-col justify-center items-center rounded-[6px] mx-auto hover:shadow-md duration-300"
                    >
                        <div className="h-[90px] w-[90px] text-[30px] bg-gray-800 text-white rounded-[20px] flex justify-center items-center">
                            {CH}
                        </div>
                        <h1 className="text-[30px] text-center font-bold text-gray-800">
                            {title}
                        </h1>
                        <p className="text-[#2c2c2c] font-normal text-[17px] mb-[40px] text-center">
                            {desc}
                        </p>
                        <div className="w-full flex justify-center">
                            <PrimaryButton title="Learn More" href={href} />
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Programms;
