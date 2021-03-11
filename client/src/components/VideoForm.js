// Main page display of video list

import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../utils/UserContext";

function VideoForm() {
  const location = useLocation();

  const user = useContext(UserContext);
  // console.log(user);
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
              <li key={video._id}>
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

export default VideoForm;
