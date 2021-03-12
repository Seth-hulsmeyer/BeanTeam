import React, { useEffect, useContext, useState } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../components/Header";
import VideoButton from "../components/VideoButton";
import VideoForm from "../components/VideoForm";
import UserContext from "../utils/UserContext";
import API from "../utils/API";
import Videos from "../utils/Videos";
import { useHistory } from "react-router-dom";

function Main() {
  const user = useContext(UserContext);
  console.log(user);

  const [topicsData, setTopicsData] = useState({
    JS: user.topics.JS,
    HTML: user.topics.HTML,
    CSS: user.topics.CSS,
    React: user.topics.React,
    videos: [],
  });

  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.replace("/");
    }
  }, [user, history]);

  if (!user) {
    return null;
  }
  const handleVidToggle = (name, value) => {
    console.log(name, value);
    let whichVideoArray = [];

    if (user.topics) {
      whichVideoArray = whichVideoArray.concat(Videos);
    } else {
      console.log("else statement");
    }
    topicsData.videos = topicsData.videos.concat(whichVideoArray);
    setTopicsData({
      ...topicsData,
      [name]: value,
      videos: topicsData.videos,
    });
    API.addVideo({
      topic: name,
      [name]: value,
      videos: topicsData.videos,
    });
  };

  return (
    <>
      <NavBar />
      <br></br>
      <Container>
        <VideoButton
          handleVidToggle={handleVidToggle}
          topicsData={topicsData}
        />
        <VideoForm />
      </Container>
    </>
  );
}
export default Main;
