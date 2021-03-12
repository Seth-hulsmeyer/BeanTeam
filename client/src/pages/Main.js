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
  // console.log(user);
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

    // if (user.topics) {
    //   whichVideoArray = whichVideoArray.concat(Videos);
    // } else {
    //   console.log("else statement");
    // }
    // topicsData.videos = topicsData.videos.concat(whichVideoArray); // 4 times,
    setTopicsData({
      ...topicsData,
      [name]: value,
      videos: [],
    });
    const userVideos = [];
    user.videos.forEach((element) => {
      user.videos.push(element.category);
    });
    console.log(userVideos);
    // if (user.topics) {
    if (topicsData.JS === true && !userVideos.includes("JS")) {
      setTopicsData({ ...topicsData, videos: [...Videos.JsVideoArray] });
    }
    if (topicsData.CSS === true && !userVideos.includes("CSS")) {
      setTopicsData({ ...topicsData, videos: [...Videos.cssVideoArray] });
    }
    if (topicsData.HTML === true && !userVideos.includes("HTML")) {
      setTopicsData({ ...topicsData, videos: [...Videos.htmlVideoArray] });
    }
    if (topicsData.React === true && !userVideos.includes("React")) {
      setTopicsData({ ...topicsData, videos: [...Videos.ReactVideoArray] });
    }
    // }

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
