"use client";
import { useState } from "react";

async function postData(data) {
    const res = await fetch(`${process.env.baseURL}/api/prospect`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        toast.error("Something went wrong");
        throw new Error("Failed to fetch data");
    }

    return true;
}

const DiscordJoiningForm = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
    });

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await postData(data);
            window.location.replace("https://discord.com/invite/uxfQY7HmQS");
        } catch (error) {
            // Handle error as needed
            console.error("Error submitting data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full flex justify-center min-h-[calc(100vh-145px)] items-center">
            <div className=" w-[400px] shadow-lg border-[1px] border-black/20 rounded-md p-[30px]">
                <h1 className="text-[16px] text-black/80 font-semibold mb-[30px]">
                    Join the Accountability Community for Consistency, Support,
                    and Success!
                </h1>
                <form className="space-y-4" onSubmit={submit}>
                    <input
                        name="name"
                        className="md:max-w-[400px] w-full border-[1px] border-black/20 rounded-[6px] outline-none px-[12px] py-[6px]  text-[18px] dark:text-black/80"
                        onChange={(e) => {
                            setData((prev) => {
                                return {
                                    ...prev,
                                    name: e.target.value,
                                };
                            });
                        }}
                        placeholder="Your name"
                    />
                    <input
                        name="name"
                        className="md:max-w-[400px] w-full border-[1px] border-black/20 outline-none px-[12px] py-[6px] rounded-[6px] text-[18px] dark:text-black/80"
                        onChange={(e) => {
                            setData((prev) => {
                                return {
                                    ...prev,
                                    email: e.target.value,
                                };
                            });
                        }}
                        placeholder="Your Email"
                    />
                    <button
                        type="submit"
                        className="bg-black/70 hover:bg-black/80 disabled:opacity-75 duration-300 rounded-[6px] text-white w-full py-2"
                        disabled={loading}
                    >
                        Accountability Community
                    </button>
                </form>
            </div>
        </section>
    );
};

export default DiscordJoiningForm;
