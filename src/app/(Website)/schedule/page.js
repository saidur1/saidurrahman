"use client";
import { InlineWidget } from "react-calendly";

const Booking = () => {
    return (
        <div className="min-h-screen ">
            <InlineWidget
                className="h-full bg-transparent"
                styles={{
                    height: "100vh",
                    overflowY: "scroll",
                }}
                url="https://calendly.com/saidur/schedule"
            />
        </div>
    );
};

export default Booking;
