"use client";
import CallBookHeading from "@/components/shared/CallBookHeading";
import { InlineWidget } from "react-calendly";
import { FooterAction } from "../work-with-me/page";

const Booking = () => {
  return (
    <section className="h-auto">
      <div className="mt-[66px] mb-[66px] md:mb-0 ">
        <CallBookHeading />
      </div>
      <InlineWidget
        className="h-full bg-transparent"
        styles={{
          height: "700px",
          overflowY: "scroll",
        }}
        url="https://calendly.com/saidur/schedule"
      />
      <div className="mt-[737px] mb-[90px]">
        <FooterAction />
      </div>
    </section>
  );
};

export default Booking;
