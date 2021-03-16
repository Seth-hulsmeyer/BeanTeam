// Main page display of video list

import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { List, Container } from "semantic-ui-react";

function VideoForm() {
  const location = useLocation();
  const {user} = useContext(UserContext);
  // console.log(user);
  if (!user) {
    return null;
  }
  // If the page uses user, the above code needs to be added

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

export default VideoForm;
