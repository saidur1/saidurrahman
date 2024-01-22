import WebWrapper from "@/components/shared/WebWrapper/WebWrapper";

const MoveOnPage = () => {
  return (
    <WebWrapper>
      <div className="min-h-[calc(100vh-150px)] flex justify-center items-center">
        <iframe
          className="relative aspect-video max-w-[900px] w-full h-auto"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          allowFullScreen
        ></iframe>
      </div>
    </WebWrapper>
  );
};

export default MoveOnPage;
