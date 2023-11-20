import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@nextui-org/react";

const EditProspectModal = ({ isOpen, onOpen, onOpenChange, prospectId }) => {
    //function
    const onDelete = async () => {
        const res = await fetch(``);
    };
    return (
        <>
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    backdrop:
                        "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
                size="5xl"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Modal Title
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit
                                    amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit
                                    amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute
                                    tempor cupidatat consequat elit dolor
                                    adipisicing. Mollit dolor eiusmod sunt ex
                                    incididunt cillum quis. Velit duis sit
                                    officia eiusmod Lorem aliqua enim laboris do
                                    dolor eiusmod. Et mollit incididunt nisi
                                    consectetur esse laborum eiusmod pariatur
                                    proident Lorem eiusmod et. Culpa deserunt
                                    nostrud ad veniam.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <div className="w-full flex justify-between">
                                    <Button
                                        color="danger"
                                        variant="light"
                                        onPress={onClose}
                                    >
                                        Delete
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Action
                                    </Button>
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditProspectModal;
