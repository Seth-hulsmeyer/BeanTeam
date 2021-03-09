import React, { useContext } from "react";
// import { Button, Checkbox, Form, Grid, Segment } from "semantic-ui-react";
import UserContext from "../utils/UserContext";

function VideoForm() {
  const user = useContext(UserContext);
  if (!user) {
    return null;
  }
  // If the page uses user, the above code needs to be added

  return (
    <div>
      Hello
      <h2>{user.first_name}</h2>
    </div>
  );
}

export default VideoForm;
