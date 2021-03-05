import React from "react";
import { Container } from "semantic-ui-react";
import VideoButton from "../components/VideoButton";

function Main() {
  // UseEffect to call the backend. Get user info based off of ID
  return (
    <>
      <Container>
        <h1>THIS IS THE MAIN PAGE!</h1>
        <VideoButton />
      </Container>
    </>
  );
}

export default Main;
