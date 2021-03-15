import React, { useEffect, useContext, useState, useRef } from "react";
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
  const [JS, SetJS] = useState(false);
  const [CSS, SetCSS] = useState(false);
  const [REACT, SetREACT] = useState(false);
  const [HTML, SetHTML] = useState(false);
  const JStoggleEl = useRef();
  const CSStoggleEl = useRef();
  const REACTtoggleEl = useRef();
  const HTMLtoggleEl = useRef();

  const [topicsData, setData] = useState({
    JS: false,
    HTML: false,
    CSS: false,
    React: false,
    videos: [],
  });

  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.replace("/");
    }
  }, [user, history]);

  useEffect(
    (name, value) => {
      const userVideos = [];
      console.log("this changed", JS);

      if (JS) {
        console.log("inside JS if");
        setData((data) => ({
          videos: [...Videos.JsVideoArray],
        }));
        topicsData.videos.push(...Videos.JsVideoArray);
        console.log(topicsData);
        console.log("this changed", JS);
      }

      // else {
      //   topicsData.videos.filter((video) => {
      //     return
      //   })
      // }

      const currentVideos = user.videos.map((item) => {
        return item.category;
      });
      if (!currentVideos.includes("JS")) {
        API.addVideo({
          topic: name,
          [name]: value,
          videos: topicsData.videos,
        });
      }
    },
    [JS]
  );

  useEffect(
    (name, value) => {
      if (CSS) {
        console.log("inside CSS if");
        setData((data) => ({
          videos: [...Videos.cssVideoArray],
        }));
        topicsData.videos.push(...Videos.cssVideoArray);
        console.log(topicsData);
        console.log("this changed", CSS);
      }

      const currentVideos = user.videos.map((item) => {
        return item.category;
      });

      if (!currentVideos.includes("CSS")) {
        API.addVideo({
          topic: name,
          [name]: value,
          videos: topicsData.videos,
        });
      }
    },
    [CSS]
  );

  useEffect(
    (name, value) => {
      if (HTML) {
        console.log("inside HTML if");
        setData((data) => ({
          videos: [...Videos.htmlVideoArray],
        }));
        topicsData.videos.push(...Videos.htmlVideoArray);
        console.log(topicsData);
        console.log("this changed", HTML);
      }
      const currentVideos = user.videos.map((item) => {
        return item.category;
      });

      if (!currentVideos.includes("HTML")) {
        API.addVideo({
          topic: name,
          [name]: value,
          videos: topicsData.videos,
        });
      }
    },
    [HTML]
  );

  useEffect(
    (name, value) => {
      if (REACT) {
        console.log("inside React if");
        setData((data) => ({
          videos: [...Videos.ReactVideoArray],
        }));
        topicsData.videos.push(...Videos.ReactVideoArray);
        console.log(topicsData);
        console.log("this changed", REACT);
      }

      const currentVideos = user.videos.map((item) => {
        return item.category;
      });

      if (!currentVideos.includes("React")) {
        API.addVideo({
          topic: name,
          [name]: value,
          videos: topicsData.videos,
        });
      }
    },
    [REACT]
  );

  if (!user) {
    return null;
  }

  return (
    <>
      <NavBar />
      <br></br>
      <Container>
        <VideoButton
          jsSetter={SetJS}
          jsState={JS}
          jsRef={JStoggleEl}
          CSSSetter={SetCSS}
          CSSState={CSS}
          CSSRef={CSStoggleEl}
          REACTSetter={SetREACT}
          REACTState={REACT}
          REACTRef={REACTtoggleEl}
          HTMLSetter={SetHTML}
          HTMLState={HTML}
          HTMLRef={HTMLtoggleEl}
          // handleVidToggle={handleVidToggle}
          topicsData={topicsData}
        />
        <VideoForm />
      </Container>
    </>
  );
}
export default Main;
