import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Container, Card, Grid } from "semantic-ui-react";
import UserContext from "../utils/UserContext";

function VideoForm() {
  const location = useLocation();
  const user = useContext(UserContext);

  console.log(user);
  if (!user) {
    return null;
  }
  // If the page uses user, the above code needs to be added

  return (
    <>
      <h1>Hello {user.first_name}!</h1>
      <div className="card">
        <div className="content">
          <ul>
            <strong>Your Watch List</strong>
            {user.videos.map((video) => (
              <li>
                <Link
                  to="/Videos"
                  className={
                    location.pathname === "/Videos"
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

export default VideoForm;
