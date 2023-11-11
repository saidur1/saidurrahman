"use client";
import { InlineWidget } from "react-calendly";

const Booking = () => {
    return (
        <div className="min-h-[calc(100vh-129px)]">
            <InlineWidget
                className="h-full"
                url="https://calendly.com/saidur/schedule"
            />
        </div>
    );
};

export default Booking;
