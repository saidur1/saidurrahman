"use client";
import { useEffect, useState } from "react";

const YouTubePlayer = ({ videoId, playerHeight, playerWidth }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      if (!isMobile && window.innerWidth <= 1023) {
        setIsTab(true);
      }

      if (!isMobile && !isTab && window.innerWidth > 1023) {
        setDesktop(true);
      }
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define dynamic width and height based on the device type
  // const width = isMobile ? 350 : playerWidth ? playerWidth : 560;
  const height = isMobile ? 250 : playerHeight ? playerHeight : 320;

  return (
    <div className="video-responsive flex justify-center">
      <iframe
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video Player"
        style={{ width: isTab ? "100%" : isMobile ? "100%" : "1093px" }}
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
