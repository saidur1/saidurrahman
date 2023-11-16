"use client";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
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

        try {
            await postData(data);
            window.location.replace("https://discord.com/invite/uxfQY7HmQS");
        } catch (error) {
            // Handle error as needed
            console.error("Error submitting data:", error);
        } finally {
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
                    <Input
                        label="Your Name"
                        onChange={(e) => {
                            setData((prev) => {
                                return {
                                    ...prev,
                                    name: value,
                                };
                            });
                        }}
                    />
                    <Input
                        label="Your email"
                        onChange={(e) => {
                            setData((prev) => {
                                return {
                                    ...prev,
                                    email: value,
                                };
                            });
                        }}
                    />
                    <Button type="submit">Join Community</Button>
                </form>
            </div>
        </section>
    );
};

export default DiscordJoiningForm;
