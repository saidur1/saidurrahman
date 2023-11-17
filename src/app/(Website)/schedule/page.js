"use client";
import { InlineWidget } from "react-calendly";

const Booking = () => {
    return (
        <div className="min-h-[calc(100vh-129px)] bg-[#DDDDDD] hover:bg-[#EEE] ">
            <InlineWidget
                className="h-full bg-transparent"
                url="https://calendly.com/saidur/schedule"
            />
        </div>
    );
};

export default Booking;
