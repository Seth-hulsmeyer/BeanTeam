// My Videos Video Player

import React, { useContext } from "react";
import { useParams } from "react-router";
import YouTube from "react-youtube";
import UserContext from "../utils/UserContext";
import { Container, Card } from "semantic-ui-react";

function VideoPlayer() {
  const user = useContext(UserContext);
  const { _id } = useParams();

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const filterVideos = user.videos.filter((video) => {
    return video._id === _id;
  });
  console.log(_id);
  const onReady = (event) =>
    // access to player in all event handlers via event.target
    event.target.pauseVideo();

  return (
    <Container>
      <Card.Group itemsPerRow={1}>
        {_id ? (
          filterVideos.map((video) => (
            <YouTube videoId={video.videoUrl} opts={opts} onReady={onReady} />
          ))
        ) : (
          <YouTube
            videoId={user.videos[0].videoUrl}
            opts={opts}
            onReady={onReady}
          />
        )}
      </Card.Group>
    </Container>
  );
}

export default VideoPlayer;