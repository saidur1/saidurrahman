import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { useEffect } from "react";

export default function BlackFridayPromotionModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        setTimeout(() => {
            onOpen();
        }, 10000);
    }, []);
    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Accountability Accelerator (Offer) - SAVE $1820
                            </ModalHeader>
                            <ModalBody>
                                <Image
                                    src="https://res.cloudinary.com/dzlrpspps/image/upload/v1700786927/Projects/Saidur/promote_t176yk.png"
                                    width={600}
                                    height={400}
                                    alt="black friday"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <a
                                    className="bg-black/80 text-white rounded-2xl hover:bg-black/90 duration-300 flex justify-center items-center px-3"
                                    href="https://buy.stripe.com/aEU8wZ7Ew6fP5ZS3ch?prefilled_promo_code=FRIDAY23"
                                    target="_payment"
                                    onClick={onClose}
                                >
                                    I want Offer
                                </a>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
