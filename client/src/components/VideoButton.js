// Main Page Video Button

import React, { useContext } from "react";
import { Grid, Checkbox, Divider } from "semantic-ui-react";
import UserContext from "../utils/UserContext";
import jsLogo from "../images/512px-Javascript-icon.png";
import reactLogo from "../images/512px-React-icon.png";
import htmlLogo from "../images/512px-HTML5-icon.png";
import cssLogo from "../images/512px-CSS3-icon.png";

function VideoButton(props) {
  const {user} = useContext(UserContext);
  return (
    <Grid className="videoButtonCard" columns={4} style={{ margin: "2vw" }}>
      <h1>
        Hello {user.first_name} {user.last_name}!
      </h1>
      <Grid.Row>
        <Grid.Column
          mobile={16}
          tablet={8}
          computer={4}
          className="ui card vbCard"
        >
          <img alt="js" src={jsLogo} className="languageImage" />
          <div className="content">
            <h3>JavaScript (1995)</h3>
            <div className="meta">
              <span className="date">Created in 1995</span>
            </div>
            <div className="description">
              As a multi-paradigm language that supports event-driven,
              functional, and imperative programming styles.
            </div>
            <br></br>
            <Divider horizontal></Divider>
            <Checkbox 
              toggle 
              ref={props.jsRef}
              checked={props.jsState}
              onClick={()=> props.jsSetter(!props.jsState)}
            />
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4} className="ui card">
          <img alt="react" src={reactLogo} className="languageImage" />
          <div className="content">
            <h3>REACT</h3>
            <div className="meta">
              <span className="date">Created in 2011</span>
            </div>
            <div className="description">
              React is only concerned with state management and rendering that
              state to the DOM. New age coding if you will!
            </div>
            <br></br>
            <Divider horizontal></Divider>
            <Checkbox 
              toggle
              ref={props.REACTRef}
              checked={props.REACTState}
              onClick={()=> props.REACTSetter(!props.REACTState)}
            />
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4} className="ui card">
          <img alt="css" className="languageImage" src={cssLogo} />
          <div className="content">
            <h3>CSS</h3>
            <div className="meta">
              <span className="date">Created in 1996</span>
            </div>
            <div className="description">
              Style sheet language used for describing the presentation of a
              document. Primary works with HTML.
            </div>
            <br></br>
            <Divider horizontal></Divider>
            <Checkbox 
              toggle 
              ref={props.CSSRef}
              checked={props.CSSState}
              onClick={()=> props.CSSSetter(!props.CSSState)}
            />
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4} className="ui card">
          <img
            alt="html"
            className="languageImage"
            src={htmlLogo}
            // style={{ width: "auto", height: "auto" }}
          />
          <div className="content">
            <h3>HTML</h3>
            <div className="meta">
              <span className="date">Created in 1993</span>
            </div>
            <div className="description">
              Standard markup language for documents designed to be displayed in
              a browser.
            </div>
            <br />
            <br />
            <Divider horizontal></Divider>
            <Checkbox
              toggle 
              ref={props.HTMLRef}
              checked={props.HTMLState}
              onClick={()=> props.HTMLSetter(!props.HTMLState)}
            />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default VideoButton;
