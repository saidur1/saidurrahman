import YouTubePlayer from "@/components/shared/player/YoutubePlayer"

const MissionAndVision = () => {
  return (
    <section className="">
      <div className="min-h-[20vh] bg-gray-300 flex justify-center items-center">
        <h1 className="text-black/80 text-[40px] md:text-[50px] font-bold text-center">Mission & Vision</h1>
      </div>
      <section className="container h-auto py-[100px] min-h-[calc(80vh-129px)]">
        <YouTubePlayer videoId="zpzZumZCdWA" />
      </section>
    </section>
  )
}

export default MissionAndVision