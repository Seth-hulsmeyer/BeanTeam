import React from "react";
import NavBar from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
import VideoForm from "../components/VideoForm";
import { Grid } from "semantic-ui-react";

function VideoDisplay() {
  return (
    <>
      <NavBar />
      <br></br>
      <Grid columns={2} style={{ margin: "2vw" }}>
        <Grid.Row>
          <Grid.Column className="vDisplay">
            <VideoPlayer />
          </Grid.Column>
          <Grid.Column className="vListContainer">
            <VideoForm />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* <VideoPlayer /> */}
      {/* <VideoForm /> */}
    </>
  );
}

export default VideoDisplay;
