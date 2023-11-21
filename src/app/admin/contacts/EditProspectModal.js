import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Select,
    SelectItem,
    Spinner,
} from "@nextui-org/react";
import { Check, Edit3 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const tagsOptions = [
    {
        lable: "Leads",
        value: "Leads",
    },
    {
        lable: "Customer",
        value: "Customer",
    },
    {
        lable: "Follow Up",
        value: "Follow Up",
    },
];

async function updateData({ data, prospectId }) {
    console.log("yes propspect id", prospectId);
    try {
        const res = await fetch(
            `${process.env.baseURL}/api/admin/prospects/${prospectId}`,
            {
                method: "PUT",
                body: JSON.stringify(data),
            }
        );

        if (!res.ok) {
            toast.error("Cannot update data");
        }
        return true;
    } catch (error) {
        console.log("Updated prospect from modal error:", error);
    }
}

const EditProspectModal = ({ isOpen, onOpenChange, initialData, refetch }) => {
    const {
        _id,
        email: initalEmail,
        name: initialName,
        tags: initaialTags,
    } = initialData || {};
    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initalEmail);
    const [country, setCountry] = useState("United States");
    const [tags, setTags] = useState(new Set(initaialTags));
    const [isEditable, setIsEditable] = useState(false);
    const [actionLoading, setActionLoading] = useState(false);
    //function
    const [loading, setLoading] = useState({
        name: false,
        email: false,
    });

    useEffect(() => {
        // Reset state when the modal is closed
        if (!isOpen) {
            setName(null);
            setEmail(null);
            setCountry(null);
            setTags(new Set());
            setIsEditable(false);
            setActionLoading(false);
            setLoading((prev) => {
                return {
                    name: false,
                    email: false,
                };
            });
        } else {
            // Set initial values when the modal is opened
            setName(initialName);
            setEmail(initalEmail);
            setCountry("United States");
            setTags(new Set(initaialTags));
            setIsEditable(false);
            setActionLoading(false);
        }
    }, [isOpen, initialName, initalEmail, initaialTags]);

    const router = useRouter();
    const onDelete = async () => {
        setActionLoading(true);

        try {
            const res = await fetch(
                `${process.env.baseURL}/api/admin/prospects/${_id}`,
                {
                    method: "DELETE",
                }
            );
            if (!res.ok) {
                alert("failed");
            }
            router.refresh();
            toast.success("Deleted Successfully");
            onOpenChange();
        } catch (error) {
            console.log("DELETE Prospect Error", error);
            toast.error("Something went wrong");
        } finally {
            setActionLoading(false);
        }
    };

    const handleSelectionChange = (e) => {
        setTags(new Set(e.target.value.split(",")));
    };

    // responsible for change the name
    const nameChange = async (e) => {
        e.preventDefault();

        // set start loading
        setLoading((prev) => {
            return {
                ...prev,
                name: true,
            };
        });
        const updatedName = e.target.name.value;
        const data = {
            name: updatedName,
        };

        try {
            await updateData({ data, prospectId: _id });
            setIsEditable(false);
            refetch();
            toast.success("Update name successfully");
        } catch (error) {
            toast.error("cannot updated the name");
        } finally {
            setLoading((prev) => {
                return {
                    ...prev,
                    name: false,
                };
            });
        }
    };

    const emailChange = async (e) => {
        e.preventDefault();

        // set start loading
        setLoading((prev) => {
            return {
                ...prev,
                email: true,
            };
        });
        const updatedName = e.target.email.value;
        const data = {
            email: updatedName,
        };

        try {
            await updateData({ data, prospectId: _id });
            setIsEditable(false);
            refetch();
            toast.success("Update email successfully");
        } catch (error) {
            toast.error("cannot updated the email");
        } finally {
            setLoading((prev) => {
                return {
                    ...prev,
                    email: false,
                };
            });
        }
    };

    return (
        <>
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable={false}
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
                                Manage Prospect
                            </ModalHeader>
                            <ModalBody>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <form
                                        className="flex items-center"
                                        onSubmit={nameChange}
                                    >
                                        <Input
                                            name="name"
                                            value={name}
                                            className="max-w-[400px]"
                                            variant="underlined"
                                            onValueChange={(value) =>
                                                setName(value)
                                            }
                                            placeholder="Prospect Name"
                                            readOnly={!isEditable}
                                            disabled={!isEditable}
                                        />

                                        {loading.name ? (
                                            <div>
                                                <Spinner
                                                    size="sm"
                                                    color="danger"
                                                />
                                            </div>
                                        ) : !isEditable ? (
                                            <div>
                                                <Edit3 className="w-4 h-4" />
                                            </div>
                                        ) : (
                                            <button
                                                type="submit"
                                                className="bg-gray-200 p-1 rounded-full hover:bg-pink-200 duration-200 group"
                                            >
                                                <Check className="w-4 h-4 group-hover:text-white" />
                                            </button>
                                        )}
                                    </form>
                                    <div>
                                        <form
                                            className="flex items-center"
                                            onSubmit={emailChange}
                                        >
                                            <Input
                                                value={email}
                                                name="email"
                                                className="max-w-[400px]"
                                                variant="underlined"
                                                placeholder={"Prospect Email"}
                                                onValueChange={(value) =>
                                                    setEmail(value)
                                                }
                                                readOnly={!isEditable}
                                                disabled={!isEditable}
                                            />
                                            {loading.email ? (
                                                <div>
                                                    <Spinner
                                                        size="sm"
                                                        color="danger"
                                                    />
                                                </div>
                                            ) : !isEditable ? (
                                                <div>
                                                    <Edit3 className="w-4 h-4" />
                                                </div>
                                            ) : (
                                                <button
                                                    type="submit"
                                                    className="bg-gray-200 p-1 rounded-full hover:bg-pink-200 duration-200 group"
                                                >
                                                    <Check className="w-4 h-4 group-hover:text-white" />
                                                </button>
                                            )}
                                        </form>
                                    </div>
                                    <Input
                                        value={country}
                                        className="max-w-[400px]"
                                        variant="underlined"
                                        placeholder={"Prospect Country"}
                                        onValueChange={(value) =>
                                            setCountry(value)
                                        }
                                        readOnly={!isEditable}
                                        disabled={!isEditable}
                                    />
                                    <Select
                                        label="Tags"
                                        selectionMode="multiple"
                                        placeholder="Select Tags"
                                        selectedKeys={tags}
                                        className="max-w-xs"
                                        onChange={handleSelectionChange}
                                    >
                                        {tagsOptions.map(({ lable, value }) => (
                                            <SelectItem
                                                key={value}
                                                value={value}
                                            >
                                                {lable}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <div className="w-full flex justify-between">
                                    <Button
                                        color="danger"
                                        variant="light"
                                        onPress={onDelete}
                                        isLoading={actionLoading}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        color={
                                            isEditable ? "danger" : "primary"
                                        }
                                        onPress={() =>
                                            setIsEditable(!isEditable)
                                        }
                                    >
                                        {isEditable ? "Save" : " Edit"}
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
