"use client";
import { useState, useEffect } from "react";

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
    const [isVideoEnded, setIsVideoEnded] = useState(false);

    useEffect(() => {
        if (isVideoEnded) {
            // Add a small delay before completing to ensure smooth transition
            const timer = setTimeout(() => {
                onLoadingComplete();
            }, 10);
            return () => clearTimeout(timer);
        }
    }, [isVideoEnded, onLoadingComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity duration-700">
            <video
                width="100%"
                height="auto"
                autoPlay
                muted
                playsInline
                onEnded={() => setIsVideoEnded(true)}
                className="max-w-[500px] w-full"
            >
                <source
                    src="https://codetokloudbucketccests.s3.us-east-1.amazonaws.com/websiteSquare.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Loader; 