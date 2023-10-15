"use client";
import { useEffect, useState } from "react";

const YouTubePlayer = ({ videoId }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        handleResize(); // Initial check

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Define dynamic width and height based on the device type
    const width = isMobile ? 350 : 560;
    const height = isMobile ? 250 : 320;

    return (
        <div className="video-responsive">
            <iframe
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allowFullScreen
                title="YouTube Video Player"
            ></iframe>
        </div>
    );
};

export default YouTubePlayer;
