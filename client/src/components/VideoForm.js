// Main page display of video list

import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { List, Container, Image } from "semantic-ui-react";
import jsAvatar from "../images/32px-Javascript-icon.png";
import reactAvatar from "../images/32px-React-icon.png";
import cssAvatar from "../images/32px-CSS3-icon.png";
import htmlAvatar from "../images/32px-HTML5-icon.png";

function VideoForm() {
  const location = useLocation();
  const user = useContext(UserContext);
  // console.log(user);
  if (!user) {
    return null;
  }
  // If the page uses user, the above code needs to be added
  function vidIcon(video) {
    switch (video.category) {
      case "JS":
        return jsAvatar;
        break;
      case "React":
        return reactAvatar;
        break;
      case "CSS":
        return cssAvatar;
        break;
      case "HTML":
        return htmlAvatar;
        break;
    }
  }

  return (
    <>
      <Container>
        <h3>Your Watch List</h3>
        <List selection verticalAlign="middle">
          {user.videos.length &&
            user.videos.map((video) => (
              <List.Item key={video.id}>
                <Image src={vidIcon(video)} className="iconSmall" />
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

export default VideoForm;
