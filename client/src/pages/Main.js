import React, { useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../components/Header";
import VideoButton from "../components/VideoButton";
import VideoForm from "../components/VideoForm";
import UserContext from "../utils/UserContext";
import { useHistory } from "react-router-dom";

function Main() {
  const user = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.replace("/");
    }
  }, [user, history]);

  if (!user) {
    return null;
  }
  return (
    <>
      <NavBar />
      <Container>
        <VideoButton />
        <VideoForm />
      </Container>
    </>
  );
}

export default Main;
