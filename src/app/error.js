"use client";
import { useEffect } from "react";

const Error = ({ error }) => {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div className="min-h-[calc(100vh-145px)] flex justify-center items-center">
            error
        </div>
    );
};

export default Error;
