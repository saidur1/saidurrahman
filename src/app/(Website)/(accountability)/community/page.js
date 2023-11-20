"use client";
import WebWrapper from "@/components/shared/WebWrapper/WebWrapper";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Community = () => {
    const router = useRouter();
    useEffect(() => {
        // Open the link in a new tab
    }, []);
    return (
        <WebWrapper>
            <div>Community</div>
        </WebWrapper>
    );
};

export default Community;
