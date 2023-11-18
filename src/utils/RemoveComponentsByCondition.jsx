"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

// rejectedRoutes
const rejectedRoutes = ["/schedule"];

const RemoveComponentsByCondition = ({ children }) => {
    const pathname = usePathname();
    const willBeRejected = () => {
        if (rejectedRoutes.includes(pathname)) return true;
        else return false;
    };

    const [rejected, setRejected] = useState(willBeRejected());

    if (!rejected) {
        return <div>{children}</div>;
    }
};

export default RemoveComponentsByCondition;
