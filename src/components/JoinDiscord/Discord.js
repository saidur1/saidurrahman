"use client";
import { useState } from "react";
import { DefaultDialog } from "../Modal/Dialog";

const Discord = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button
                className="bg-black/70 hover:bg-black/90 text-white/80 rounded-sm px-10 py-2 duration-200 "
                onClick={handleOpen}
            >
                Join Now
            </button>
            {open && <DefaultDialog />}
        </div>
    );
};

export default Discord;
