"use client";
import {
    Modal,
    ModalBody,
    ModalContent,
    useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import DiscordJoiningForm from "./DiscordJoiningForm";

const Discord = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if window is defined (i.e., we are in the browser)
        if (typeof window !== "undefined") {
            // Set initial value based on window width
            setIsMobile(window.innerWidth < 600);

            // Add event listener for window resize
            const handleResize = () => {
                setIsMobile(window.innerWidth < 600);
            };

            window.addEventListener("resize", handleResize);

            // Clean up the event listener on component unmount
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);
    return (
        <div>
            <button
                // href="/accountability-community/request"
                className="bg-black/70 hover:bg-black/90 text-white/80 rounded-sm px-10 py-2 duration-200 "
                onClick={onOpen}
            >
                Join Now
            </button>
            <Modal
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
            </Modal>
        </div>
    );
};

export default Discord;
