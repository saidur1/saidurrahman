"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSolidLock } from "react-icons/bi";
import { toast } from "react-toastify";

async function postData(data) {
    const res = await fetch(`${process.env.baseURL}/api/prospect`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return true;
}

const FreeTraining = async () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const router = useRouter();

    const emailSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const email = e.target.email.value;
            const name = e.target.name.value;
            const data = { email, name };
            await postData(data);
            setLoading(false);
            toast.success("Successfully authorized");
            router.push("/free-training/content");
        } catch (error) {
            setLoading(false);
            toast.error("Something is wrong!");
        }
    };
    return (
        <div className="min-h-[calc(100vh-129px)] dark:bg-[#DFE3E4]">
            <section className="container py-[50px]">
                <h1 className="font-bold text-center text-[40px] md:text-[60px] dark:text-black/80">
                    Join Our Exclusive Email List
                </h1>
                <p className="text-[18px] text-center text-red-500 font-medium">
                    Free Identify Shifting Bootcamp upon Joining + 4 new bonuses
                    every week!
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-x-[50px] gap-[30px] py-[50px]">
                    <div className="flex flex-col items-center gap-y-8">
                        <Image
                            src="https://res.cloudinary.com/dzlrpspps/image/upload/v1699577047/Projects/Saidur/said_afxj8v.png"
                            alt="thumbnail"
                            width={300}
                            height={300}
                            className="rounded-full"
                        />
                        <div className="text-center">
                            <h3 className="text-[18px] font-medium">
                                Saidur Rahman
                            </h3>
                            <p className="text-[14px]">Accountability Coach</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[30px] font-semibold text-gray-800">
                            Access Exclusive Content
                        </h3>
                        <p className="text-[18px] text-gray-800 font-medium">
                            Enter your name & email below to get immediate
                            access!
                        </p>
                        <form
                            className="mt-[20px] flex flex-col gap-[30px]"
                            onSubmit={emailSubmit}
                        >
                            <input
                                type="text"
                                className="md:max-w-[400px] w-full shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px] outline-none px-[12px] py-[6px] rounded-[4px] text-[18px] dark:text-black/80"
                                name="name"
                                placeholder="First Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                className="md:max-w-[400px] w-full shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px] outline-none px-[12px] py-[6px] rounded-[4px] text-[18px] dark:text-black/80"
                                placeholder="Email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                style={{ maxWidth: "max-content" }}
                                className="py-[14px]  px-[56px] bg-red-500 text-white font-semibold text-[16px] gap-x-[10px] leading-[26px] text-center disabled:bg-red-400 flex items-center"
                                disabled={!name || !email}
                            >
                                {loading ? (
                                    <span className="loader"></span>
                                ) : (
                                    <>
                                        <BiSolidLock /> Access Now
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeTraining;
