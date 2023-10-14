"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSolidLock } from "react-icons/bi";

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

const FreeTraining = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const router = useRouter();

    const emailSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const email = e.target.email.value;
        const name = e.target.name.value;
        const data = { email, name };
        const result = await postData(data);
        setLoading(false);
        router.push("/free_training/content");
    };
    return (
        <div className="min-h-[calc(100vh-129px)]">
            <section className="container py-[50px]">
                <h1 className="font-bold text-center text-[40px] md:text-[60px]">
                    Join Our Exclusive Email List
                </h1>
                <p className="text-[18px] text-center text-red-500 font-medium">
                    Free Identify Shifting Bootcamp upon Joining + 4 new bonuses
                    every week!
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-[30px] py-[50px]">
                    <div>
                        <Image
                            src="https://img.freepik.com/free-vector/flat-design-english-lessons-youtube-thumbnail_23-2149287548.jpg?size=626&ext=jpg&ga=GA1.2.1223700389.1697031934&semt=ais"
                            alt="thumbnail"
                            width={500}
                            height={500}
                        />
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
                                className="md:max-w-[400px] w-full shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px] outline-none px-[12px] py-[6px] rounded-[4px] text-[18px]"
                                name="name"
                                placeholder="First Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                className="md:max-w-[400px] w-full shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px] outline-none px-[12px] py-[6px] rounded-[4px] text-[18px]"
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
                                    <span class="loader"></span>
                                ) : (
                                    <>
                                        <BiSolidLock /> Access Now
                                    </>
                                )}
                            </button>
                        </form>
                        <p>Yes this is updated</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeTraining;
