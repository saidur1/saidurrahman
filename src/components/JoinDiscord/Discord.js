"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import acLogo from "../../../public/acLogo.webp";
import DiscordJoiningForm from "./DiscordJoiningForm";

const Discord = () => {
    return (
        <div>
            {/* <Modal
                size="2xl"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="blur"
                placement={isMobile ? "bottom-center" : "center"}
            >
                <ModalContent>
                    {(onClose) => (
                        <div
                            className={
                                isMobile ? "py-[40px]" : "p-[30px] py-[50px]"
                            }
                        >
                            <ModalBody>
                                <DiscordJoiningForm />
                            </ModalBody>
                        </div>
                    )}
                </ModalContent>
                /
            </Modal> */}
            <Dialog>
                <DialogTrigger asChild>
                    <button
                        // href="/accountability-community/request"
                        className="bg-black/70 hover:bg-black/90 text-white/80 rounded-sm px-10 py-2 duration-200 "
                    >
                        Join Now FREE
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className={cn("relative")}>
                        <div className="w-[50px] h-[50px] bg-white border-[1px] border-black/40  rounded-full flex justify-center items-center absolute  top-[-50px] left-[45%] transform translate(-80%, -80%)">
                            <Image
                                src={acLogo}
                                width={30}
                                height={30}
                                alt="discord"
                                placeholder="blur"
                            />
                        </div>
                        <h1 className="text-[16px] text-black/80 font-semibold mb-[30px]">
                            Join the Accountability Community for Consistency,
                            Support, and Success!
                        </h1>
                    </DialogHeader>
                    <DialogDescription>
                        <DiscordJoiningForm />
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Discord;
