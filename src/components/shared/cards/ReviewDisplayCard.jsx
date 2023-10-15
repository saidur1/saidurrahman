"use client";
import Image from "next/image";
import { useState } from "react";
import ReviewPlayerModal from "../modals/ReviewPlayerModal";

const ReviewDisplayCard = () => {
    const [modalOpen, setModalOpen] = useState(false);

    function modalControll() {
        setModalOpen(!modalOpen);
    }
    return (
        <>
            <div
                className="rounded-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] p-[20px] cursor-pointer max-w-[350px] mx-auto"
                onClick={modalControll}
            >
                <Image
                    src="https://img.freepik.com/free-photo/joy-positiveness-body-language-beautiful-happy-young-mulatto-girl-with-curly-black-hair-posing-isolated-dressed-silk-pajamas-making-thumbs-up-gesture-showing-ok-sign-smiling_343059-2617.jpg?w=1380&t=st=1697331923~exp=1697332523~hmac=38de00b93199005f744121eeb02b3036c9bf180343fcd6ec172aac5adb2b226c"
                    sizes="100vw"
                    width={100}
                    height={100}
                    style={{
                        width: "100%",
                        height: "150px",
                    }}
                />
                <div className="pt-[20px]">
                    <h3 className="text-[20px] text-gray-800 font-semibold">
                        Tim Garret
                    </h3>
                    <p className="text-gray-500 font-light text-[14px]">
                        Alberta, CA
                    </p>
                    <p className="text-[16px] text-gray-800 font-normal pt-[10px]">
                        How Tia is creating generational wealth by shifting into
                        the 2.0 version of herself
                    </p>
                </div>
            </div>
            {modalOpen && <ReviewPlayerModal {...{ modalControll }} />}
        </>
    );
};

export default ReviewDisplayCard;
