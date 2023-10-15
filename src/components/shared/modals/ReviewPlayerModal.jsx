import { AiOutlineClose } from "react-icons/ai";
import { Modal } from "./Modal";

const ReviewPlayerModal = ({ modalControll }) => {
    return (
        <Modal modalControll={modalControll}>
            <div
                className="bg-red-500 w-[25px] h-[25px] flex justify-center items-center cursor-pointer"
                onClick={modalControll}
            >
                <AiOutlineClose className="text-white" />
            </div>
        </Modal>
    );
};

export default ReviewPlayerModal;
