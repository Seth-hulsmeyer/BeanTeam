// My Videos Display List

import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, List } from "semantic-ui-react";
import UserContext from "../utils/UserContext";
// import image from "../images/32px-CSS3-icon.png";

function VideoList() {
  const location = useLocation();
  const {user} = useContext(UserContext);
  const [video, currentVideo] = useState();

  // const setCurrentVideo = (event) => {
  //   currentVideo(event.currentTarget.id);
  //   console.log(video);
  // };
  // function vidIcon(video) {
  //   if ((video.category = "JS")) {
  //     return "../images/32px-Javascript-icon.png";
  //   } else if ((video.category = "React")) {
  //     return "../images/32px-React-icon.png";
  //   } else if ((video.category = "CSS")) {
  //     return "../images/32px-CSS3-icon.png";
  //   } else if ((video.category = "HTML")) {
  //     return "../images/32px-HTML5-icon.png";
  //   }
  // }

  useEffect(() => {
    console.log(video);
  }, [currentVideo]);

  console.log(currentVideo);

  return (
    <>
      <Container>
        {user.videos.length > 0 ? (
          <>
            <h3>Your Watch List</h3>
            <List selection verticalAlign="middle">
              {user.videos.map((video) => (
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
          </>
        ) : null }
      </Container>
    </>
  );
}

export default VideoList;
