// My Videos Display List

import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Container, Card, Grid } from "semantic-ui-react";
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
      <div className="card">
        <div className="content">
          <ul>
            <strong>Your Watch List</strong>
            {user.videos.map((video) => (
              <li>
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default VideoList;
