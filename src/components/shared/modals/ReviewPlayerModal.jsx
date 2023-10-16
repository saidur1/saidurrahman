import { AiOutlineClose } from "react-icons/ai";
import PrimaryButton from "../buttons/PrimaryButton";
import YouTubePlayer from "../player/YoutubePlayer";
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
            <section className="flex flex-col justify-between gap-[20px]">
                <div className="flex-1">
                    <YouTubePlayer videoId="2Wpr5E9G5vU" />
                </div>
                <div className="flex-1">
                    <h1 className="text-[20px] text-gray-800 font-semibold">
                        How Tia is creating generational wealth by shifting into
                        the 2.0 version of herself
                    </h1>
                    <h3 className="text-[16px] text-gray-800 font-medium mt-[20px]">
                        Tim Garret (Businessman)
                    </h3>
                    <p className="text-gray-500 font-light text-[14px]">
                        Alberta, CA
                    </p>
                </div>
                <PrimaryButton title="Book A Free Call" href="/booking" />
            </section>
        </Modal>
    );
};

export default ReviewPlayerModal;
