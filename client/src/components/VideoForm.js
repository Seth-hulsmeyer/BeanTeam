import React, { useContext } from "react";
import { Button, Checkbox, Form, Grid, Segment } from "semantic-ui-react";
import UserContext from "../utils/UserContext";

function VideoForm() {
    
  const user = useContext(UserContext);

  return <div>{user.firstName}</div>;
}

export default VideoForm;
