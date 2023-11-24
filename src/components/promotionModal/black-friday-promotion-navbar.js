"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PromotionNavbar = () => {
    const pathName = usePathname();

    if (pathName !== "/accountability-accelerator") {
        return (
            <div className="bg-red-500 min-h-[40px] flex items-center py-1 md:py-0">
                <div className="items-center flex container justify-center h-full text-[12px] md:text-[14px] text-white font-normal ">
                    Exclusive Black Friday Bundle on Accountability Accelerator
                    - 65% OFF ⏰ Hurry up!
                    <Link
                        className="bg-black px-2 rounded-md py-2 md:py-0 min-w-[80px] text-white ml-4 text-[12px] md:text-[14px]"
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
