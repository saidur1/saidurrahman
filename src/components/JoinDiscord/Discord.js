"use client";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Discord = () => {
    const [error, setError] = useState({
        name: false,
        email: false,
    });
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
    });

    const modalControll = () => {
        setOpen(!open);
        setError({
            name: false,
            email: false,
        });
        setData({
            name: "",
            email: "",
        });
    };

    const submit = (e) => {
        e.preventDefault();
        if (data.name === "" || data.email === "") {
            if (data.name === "") {
                setError((prev) => {
                    return {
                        ...prev,
                        name: true,
                    };
                });
            }

            if (data.email === "") {
                setError((prev) => {
                    return {
                        ...prev,
                        email: true,
                    };
                });
            }
        }
    };

    return (
        <div>
            <button
                className="bg-black/70 hover:bg-black/90 text-white/80 rounded-sm px-10 py-2 duration-200 "
                onClick={modalControll}
            >
                Join Now
            </button>
            {open ? (
                <Modal modalControll={modalControll}>
                    <form className="space-y-4" onSubmit={submit}>
                        <Input
                            label={
                                error.name
                                    ? "Please enter your name"
                                    : "Your Name"
                            }
                            onChange={(e) =>
                                setData((prev) => {
                                    return {
                                        ...prev,
                                        name: e.target.value,
                                    };
                                })
                            }
                            error={error.name}
                        />
                        <Input
                            label={
                                error.name
                                    ? "Please enter your email"
                                    : "Your email"
                            }
                            onChange={(e) =>
                                setData((prev) => {
                                    return {
                                        ...prev,
                                        email: e.target.value,
                                    };
                                })
                            }
                            error={error.email}
                        />
                        <Button type="submit">Subscribe</Button>
                    </form>
                </Modal>
            ) : null}
        </div>
    );
};

export default Discord;
