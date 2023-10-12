

const YouTubePlayer = ({ videoId }) => {


  return (
    <div className="video-responsive">
        <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video Player"
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
