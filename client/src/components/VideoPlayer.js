// My Videos Video Player

import React, { useContext } from "react";
import { useParams } from "react-router";
import YouTube from "react-youtube";
import UserContext from "../utils/UserContext";
import { Container } from "semantic-ui-react";
import defaultVideo from "../utils/Videos";

function VideoPlayer() {
  const { user } = useContext(UserContext);
  const { id } = useParams();

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const filterVideos = user.videos.filter((video) => {
    return video._id === id;
  });
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  if (user.videos.length === 0) {
    return (
      <Container>
        <YouTube
          videoId={defaultVideo.meme[0].videoUrl}
          opts={opts}
          autoplay={1}
          className="memeVideo"
        />
        <h2 className="blinky">
          {user.first_name} {user.last_name} please choose a category from the
          previous page
        </h2>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="greeting">
        Hello {user.first_name} {user.last_name}!
      </h2>
      {id ? (
        filterVideos.map((video) => (
          <YouTube
            videoId={video.videoUrl}
            opts={opts}
            onReady={onReady}
            key={video._id}
            className="playVideo"
          />
        ))
      ) : (
        <YouTube
          videoId={user.videos[0].videoUrl}
          opts={opts}
          onReady={onReady}
        />
      )}
    </Container>
  );
}

export default VideoPlayer;
