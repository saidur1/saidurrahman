"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// rejectedRoutes
const rejectedRoutes = ["/schedule"];

const RemoveComponentsByCondition = ({ children }) => {
    const [rejected, setRejected] = useState(false);
    const pathname = usePathname();

    const willBeRejected = () => {
        if (rejectedRoutes.includes(pathname)) return true;
        else return false;
    };

    useEffect(() => {
        setRejected(willBeRejected());
    }, []);

    if (!rejected) {
        return <div>{children}</div>;
    }
};

export default RemoveComponentsByCondition;
