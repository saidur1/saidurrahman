"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PromotionNavbar = () => {
    const pathName = usePathname();

    if (pathName !== "/accountability-accelerator") {
        return (
            <div className="bg-red-500 h-[40px] ">
                <div className="items-center flex container justify-center h-full text-white font-normal ">
                    Exclusive Black Friday Bundle on Accountability Accelerator
                    - 65% OFF ⏰ Hurry up!
                    <Link
                        className="bg-black px-2 rounded-md py-0 text-white ml-4"
                        href="/accountability-accelerator"
                    >
                        View Offer
                    </Link>{" "}
                </div>
            </div>
        );
    }
};

export default PromotionNavbar;
