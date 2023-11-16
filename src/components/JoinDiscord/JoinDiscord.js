"use client";
import { useState } from "react";
import { NewsLetterPopUp } from "../NewsLetterPopUp/NewsLetterPopUp";

const JoinDiscord = () => {
    const [showModal, setShowModal] = useState(false);
    const modalControll = () => {
        setShowModal(!showModal);
    };
    return (
        <div>
            <button
                className="bg-black/70 hover:bg-black/90 text-white/80 rounded-sm px-10 py-2 duration-200 "
                onClick={modalControll}
            >
                Join Now
            </button>
            {showModal && <NewsLetterPopUp modalControll={modalControll} />}
        </div>
    );
};

export default JoinDiscord;
