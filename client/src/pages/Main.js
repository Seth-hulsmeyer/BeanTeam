import React, { useEffect, useContext, useState, useRef, useMemo } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../components/Header";
import VideoButton from "../components/VideoButton";
import VideoForm from "../components/VideoForm";
import UserContext from "../utils/UserContext";
import Videos from "../utils/Videos";
import { useHistory } from "react-router-dom";

//USER's FIRST PAGE AFTER LOGIN
function Main() {
  const { user, addVideo, removeTopic } = useContext(UserContext);
  const userVideoCategories = useMemo(() => {
    return (user?.videos ?? []).map((item) => item.category);
  }, [user]);
  const [JS, SetJS] = useState(() => {
    return userVideoCategories.includes("JS");
  });
  const [CSS, SetCSS] = useState(() => {
    return userVideoCategories.includes("CSS");
  });
  const [REACT, SetREACT] = useState(() => {
    return userVideoCategories.includes("REACT");
  });
  const [HTML, SetHTML] = useState(() => {
    return userVideoCategories.includes("HTML");
  });
  const JStoggleEl = useRef();
  const CSStoggleEl = useRef();
  const REACTtoggleEl = useRef();
  const HTMLtoggleEl = useRef();
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
        <VideoButton
          jsSetter={(value) => {
            SetJS(value);
            if (!userVideoCategories.includes("JS")) {
              addVideo(Videos.JsVideoArray);
            } else {
              removeTopic("JS");
            }
          }}
          jsState={JS}
          jsRef={JStoggleEl}
          CSSSetter={(value) => {
            SetCSS(value);
            if (!userVideoCategories.includes("CSS")) {
              addVideo(Videos.cssVideoArray);
            } else {
              removeTopic("CSS");
            }
          }}
          CSSState={CSS}
          CSSRef={CSStoggleEl}
          REACTSetter={(value) => {
            SetREACT(value);
            if (!userVideoCategories.includes("REACT")) {
              addVideo(Videos.ReactVideoArray);
            } else {
              removeTopic("REACT");
            }
          }}
          REACTState={REACT}
          REACTRef={REACTtoggleEl}
          HTMLSetter={(value) => {
            SetHTML(value);
            if (!userVideoCategories.includes("HTML")) {
              addVideo(Videos.htmlVideoArray);
            } else {
              removeTopic("HTML");
            }
          }}
          HTMLState={HTML}
          HTMLRef={HTMLtoggleEl}
        />
        <VideoForm />
      </Container>
    </>
  );
}
export default Main;
