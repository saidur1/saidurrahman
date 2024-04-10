"use client";
import { useEffect } from "react";

const WistiaPlayer = ({ videoId }) => {
  useEffect(() => {
    // Ensure the script is loaded only once / test
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      className="wistia-wrapper"
      style={{
        border: "3px solid black",
        borderRadius: "10px",
        boxShadow: "0 10px 6px -6px #777",
        overflow: "hidden", // To hide the overflow of the swatch image
        height: "110%",
      }}
    >
      <div
        className="wistia_responsive_padding"
        style={{ padding: "58.33% 0 0 0", position: "relative" }}
      >
        <div
          className="wistia_responsive_wrapper"
          style={{
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <div
            className="wistia_embed wistia_async_30ktnx5jkx seo=false videoFoam=true"
            style={{ height: "100%", position: "relative", width: "100%" }}
          >
            <div
              className="wistia_swatch"
              style={{
                height: "100%",
                left: 0,
                opacity: 0,
                overflow: "hidden",
                position: "absolute",
                top: 0,
                transition: "opacity 200ms",
                width: "100%",
              }}
            >
              <img
                src="https://fast.wistia.com/embed/medias/30ktnx5jkx/swatch"
                style={{
                  filter: "blur(5px)",
                  height: "100%",
                  objectFit: "contain",
                  width: "100%",
                }}
                alt=""
                aria-hidden="true"
                onLoad={(e) => {
                  e.target.parentNode.style.opacity = 1;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WistiaPlayer;
