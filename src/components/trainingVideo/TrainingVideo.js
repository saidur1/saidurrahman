const VideoPlayer = () => {
    return (
        <div
            className="wistia_responsive_padding"
            style={{ padding: "62.5% 0 0 0", position: "relative" }}
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
                    className="wistia_embed wistia_async_veve7li79k seo=false videoFoam=true"
                    style={{
                        height: "100%",
                        position: "relative",
                        width: "100%",
                    }}
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
                            src="https://fast.wistia.com/embed/medias/veve7li79k/swatch"
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

            <script
                src="https://fast.wistia.com/embed/medias/veve7li79k.jsonp"
                async
            ></script>
            <script
                src="https://fast.wistia.com/assets/external/E-v1.js"
                async
            ></script>
        </div>
    );
};

export default VideoPlayer;
