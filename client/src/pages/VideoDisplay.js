import React from "react";
import NavBar from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
import VideoForm from "../components/VideoForm";

function VideoDisplay() {
  return (
    <>
      <NavBar />
      <VideoPlayer />
      <VideoForm />
    </>
  );
}

export default VideoDisplay;

