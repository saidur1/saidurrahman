import dynamic from "next/dynamic";
const YouTubePlayer = dynamic(() =>
    import("@/components/shared/player/YoutubePlayer")
);

const Reviews = () => {
    const data = [
        {
            id: 1,
            videoID: "Cl7oOD7Q-gc",
        },
        {
            id: 2,
            videoID: "EPulO5_n12A",
        },
        {
            id: 3,
            videoID: "YwxE6655Ou4",
        },
        {
            id: 4,
            videoID: "oRYuQyq2P-s",
        },
        {
            id: 5,
            videoID: "4QaYEJGQFFk",
        },
        {
            id: 6,
            videoID: "RLwua6CAIgQ",
        },
    ];
    return (
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 mt-[100px]">
            {data?.map(({ id, videoID }) => (
                <YouTubePlayer key={id} videoId={videoID} />
            ))}
        </div>
    );
};

export default Reviews;
