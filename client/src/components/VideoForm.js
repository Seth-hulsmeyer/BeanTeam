// Main page display of video list

import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { Image, List, Container, Table } from "semantic-ui-react";
import jsAvatar from "../images/32px-Javascript-icon.png";
import reactAvatar from "../images/32px-React-icon.png";
import cssAvatar from "../images/32px-CSS3-icon.png";
import htmlAvatar from "../images/32px-HTML5-icon.png";

function VideoForm() {
  const location = useLocation();
  const { user } = useContext(UserContext);
  // console.log(user);
  if (!user) {
    return null;
  }
  // If the page uses user, the above code needs to be added
  function vidIcon(video) {
    switch (video.category) {
      case "JS":
        return jsAvatar;
      case "REACT":
        return reactAvatar;
      case "CSS":
        return cssAvatar;
      case "HTML":
        return htmlAvatar;
      default:
        return;
    }
  }
  return (
    <>
      <Container className="videoSelection">
        {user.videos.length > 0 ? (
          <>
            <h3>Your Watch List</h3>
            <Table celled inverted selectable>
              <Table.Body>
                {user.videos.map((video) => (
                  <Table.Row>
                    <Table.Cell style={{ width: "5vw" }}>
                      {" "}
                      <Image src={vidIcon(video)} className="iconSmall" />
                    </Table.Cell>
                    <Table.Cell>
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
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>

              {/* <List selection verticalAlign="middle">
                {user.videos.map((video) => (
                  <List.Item key={video._id}>
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
              </List> */}
            </Table>
          </>
        ) : null}
      </Container>
    </>
  );
}

export default VideoForm;
