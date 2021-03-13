// My Videos Display List

import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, List } from "semantic-ui-react";
import UserContext from "../utils/UserContext";

function VideoList() {
  const location = useLocation();
  const user = useContext(UserContext);
  const [video, currentVideo] = useState();

  // const setCurrentVideo = (event) => {
  //   currentVideo(event.currentTarget.id);
  //   console.log(video);
  // };

  useEffect(() => {
    console.log(video);
  }, [currentVideo]);

  console.log(currentVideo);

  return (
    <>
      <Container>
        <h3>Your Watch List</h3>
        <List selection verticalAlign="middle">
          {user.videos.length &&
            user.videos.map((video) => (
              <List.Item key={video.id}>
                <Link
                  to={`/Videos/${video._id}`}
                  className={
                    location.pathname === "/videos"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {video.title}
                </Link>
              </List.Item>
            ))}
        </List>
      </Container>
    </>
  );
}

export default VideoList;
