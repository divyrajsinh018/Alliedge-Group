import React from "react";
import MiddleVideo from "../assets/Middle.mp4"

const VideoSection = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-black">
      <video
        className="w-full h-full object-cover"
        src={MiddleVideo}
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
};

export default VideoSection;
