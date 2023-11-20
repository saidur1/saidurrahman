"use client";
import WebWrapper from "@/components/shared/WebWrapper/WebWrapper";
import CallBookHighLight from "@/components/shared/callBookHighlight/CallBookHighLight";
import MyWistiaVideo from "@/components/trainingVideo/TrainingVideo";

const Content = () => {
    return (
        <WebWrapper>
            <div className="min-h-[calc(100vh-129px)] bg-white">
                <div className="container py-[50px] flex flex-col gap-y-[80px]">
                    <div className="flex flex-col items-center gap-y-[30px] justify-center">
                        <h3 className="text-[24px] leading-[26px] text-center text-gray-900">
                            Become the best version of yourself
                        </h3>
                        <h1 className="text-[30px] text-center text-gray-900 max-w-[700px]">
                            Empowering Excellence: Mastering Accountability for
                            Success
                        </h1>
                        <div className="w-[500px]">
                            {/* <YouTubePlayer videoId="BJDnem6Fzqo" /> */}
                            <MyWistiaVideo />
                        </div>
                    </div>
                    <CallBookHighLight
                        title="Interested to keep a accountable coach?"
                        href="/schedule"
                    />
                </div>
            </div>
        </WebWrapper>
    );
};

export default Content;
