"use client";
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
} from "@material-tailwind/react";
import { useState } from "react";

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
            <Dialog open={open} handler={handleClose}>
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody>
                    The key to more success is to have a lot of pillows. Put it
                    this way, it took me twenty five years to get these plants,
                    twenty five years of blood sweat and tears, and I&apos;m
                    never giving up, I&apos;m just getting started. I&apos;m up
                    to something. Fan luv.
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleClose}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={handleClose}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default Discord;
