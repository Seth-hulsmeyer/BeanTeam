import React from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../components/Header";
import VideoButton from "../components/VideoButton";

function Main() {
  // UseEffect to call the backend. Get user info based off of ID
  return (
    <>
      <NavBar />
      <Container>
        <VideoButton />
      </Container>
    </>
  );
}

export default Main;
