"use client";
import { useState } from "react";
import Modal from "../Modal/Modal";
import DiscordJoiningForm from "./DiscordJoiningForm";

const Discord = () => {
    const [open, setOpen] = useState(false);
    const modalControll = () => setOpen(!open);
    return (
        <div>
            <button
                // href="/accountability-community/request"
                className="bg-black/70 hover:bg-black/90 text-white/80 rounded-sm px-10 py-2 duration-200 "
                onClick={modalControll}
            >
                Join Now
            </button>
            {open && (
                <Modal modalControll={modalControll}>
                    <DiscordJoiningForm />
                </Modal>
            )}
        </div>
    );
};

export default Discord;
