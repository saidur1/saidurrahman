"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Community = () => {
    const router = useRouter();
    useEffect(() => {
        // Open the link in a new tab
        window.open("https://discord.gg/uxfQY7HmQS", "_discord");

        setTimeout(() => {
            router.push("/");
        }, 1000);
    }, []);
    return (
        <div className="min-h-[calc(100vh-145px)] container flex justify-center items-center text-center ">
            You will be redirect to our discord server
        </div>
    );
};

export default Community;
