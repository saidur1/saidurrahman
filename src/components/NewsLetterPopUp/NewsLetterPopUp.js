"use client";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-toastify";

// Components
import Modal from "../Modal/Modal";

export const NewsLetterPopUp = ({ modalControll }) => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();

        // checking if name and email are empty
        if (name === "" || email === "") {
            toast.warning("Please enter your name and email");
            return;
        }
        setLoading(true);

        // preparing body for the fetch request
        const data = {
            email,
            name,
        };

        // POST request going to the server
        const res = await fetch("/api/prospect", {
            method: "POST",
            body: JSON.stringify(data),
        });

        // if fetch not comppleted
        if (!res.ok) {
            toast.error("Something went wrong. Please try again later");
            setLoading(false);
            return;
        }

        // if fetch completed then redirect to the discord server
        // redirect
        window.location.replace("https://discord.com/invite/uxfQY7HmQS");
        setLoading(false);
    };

    return (
        <>
            <Modal modalControll={modalControll}>
                <div>
                    <h1 className="text-center text-[22px] text-black/80 font-semibold">
                        Habit Hack Newsletter
                    </h1>
                    <p className="text-[14px] text-center">
                        Discover expert tips for accountability and habit
                        building. Sign up for quick, actionable insights to fuel
                        your journey to success!
                    </p>
                </div>
                <form className="space-y-4">
                    <Input
                        label="Your Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="flex justify-end">
                        <Button type="submit" disabled={loading}>
                            Subscribe
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};
