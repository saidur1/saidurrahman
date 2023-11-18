"use client";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import acLogo from "../../../public/acLogo.webp";

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

const DiscordJoiningForm = ({ isMobile }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([
        {
            status: false,
            msg: "Please enter your name",
        },
        {
            status: false,
            msg: "Please enter a valid email address",
        },
    ]);
    const [data, setData] = useState({
        name: "",
        email: "",
    });

    const submit = async (e) => {
        e.preventDefault();

        if (data.name === "") {
            setError((prev) => {
                return [
                    {
                        ...prev[0],
                        status: true,
                    },
                    ...prev.slice(1),
                ];
            });
            return;
        } else if (data.email === "") {
            setError((prev) => {
                return [
                    { ...prev[0], status: false },
                    {
                        ...prev[1],
                        status: true,
                    },
                ];
            });
            return;
        } else {
            setError((prev) => {
                return [
                    ...prev.slice(0, 1),
                    {
                        ...prev[1],
                        status: false,
                    },
                ];
            });
        }

        setLoading(true);

        try {
            await postData(data);
            window.location.replace("https://discord.com/invite/uxfQY7HmQS");
        } catch (error) {
            // Handle error as needed
            console.error("Error submitting data:", error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full  flex justify-center h-auto items-center relative">
            <div className="w-[50px] h-[50px] bg-white border-[1px] border-black/40  rounded-full flex justify-center items-center absolute top-[-25px]">
                <Image src={acLogo} width={30} height={30} alt="discord" />
            </div>
            <div className=" w-[400px] shadow-lg border-[1px] border-black/20 rounded-md p-[30px] pt-[50px]">
                <div>
                    <h1 className="text-[16px] text-black/80 font-semibold mb-[30px]">
                        Join the Accountability Community for Consistency,
                        Support, and Success!
                    </h1>
                </div>
                <form className="space-y-4" onSubmit={submit}>
                    <Input
                        type="text"
                        label="Name"
                        placeholder="Your name"
                        variant="bordered"
                        color={error[0].status ? "danger" : "success"}
                        errorMessage={error[0].status && error[0].msg}
                        onValueChange={(value) =>
                            setData((prev) => {
                                return {
                                    ...prev,
                                    name: value,
                                };
                            })
                        }
                    />
                    <Input
                        type="email"
                        label="Email"
                        placeholder="Your email"
                        color={error[1].status ? "danger" : "success"}
                        errorMessage={error[1].status && error[1].msg}
                        variant="bordered"
                        onValueChange={(value) =>
                            setData((prev) => {
                                return {
                                    ...prev,
                                    email: value,
                                };
                            })
                        }
                    />
                    <Button
                        type="submit"
                        className="w-full disabled:bg-black bg-black/70 hover:bg-black/90 text-white"
                        isLoading={loading}
                        disabled={loading}
                    >
                        Accountability Community
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default DiscordJoiningForm;
