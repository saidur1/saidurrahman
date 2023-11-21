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
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

const EditProspectModal = ({ isOpen, onOpenChange, initialData }) => {
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

    console.log(initialData);

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
                                Manage Prospect
                            </ModalHeader>
                            <ModalBody>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <Input
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
                                    <div>
                                        <Input
                                            value={
                                                initalEmail
                                                    ? initalEmail
                                                    : email
                                            }
                                            className="max-w-[400px]"
                                            variant="underlined"
                                            placeholder={"Prospect Email"}
                                            onValueChange={(value) =>
                                                setEmail(value)
                                            }
                                            readOnly={!isEditable}
                                            disabled={!isEditable}
                                        />
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
