import React from "react";
import { Button, Grid, Icon } from "semantic-ui-react";
import jsLogo from "../images/512px-Javascript-icon.png";
import reactLogo from "../images/512px-React-icon.png";
import htmlLogo from "../images/512px-HTML5-icon.png";
import cssLogo from "../images/512px-CSS3-icon.png";

// put in functionality to populate videos associated with user

function VideoButton({ category, title, videoUrl }) {
  return (
    <Grid columns={3} style={{ margin: "2vw" }}>
      <Grid.Row>
        <Grid.Column className="ui card">
          <img src={jsLogo} className="languageImage" />
          <div className="content">
            <a className="header">JavaScript</a>
            <div className="meta">
              <span className="date">Created in 1995</span>
            </div>
            <div className="description">
              As a multi-paradigm language that supports event-driven,
              functional, and imperative programming styles.
            </div>
            <br />
            <Button animated compact>
              <Button.Content visible>Javascript VIdeos</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </div>
        </Grid.Column>
        <Grid.Column className="ui card">
          <img src={reactLogo} className="languageImage" />
          <div className="content">
            <a className="header">REACT</a>
            <div className="meta">
              <span className="date">Created in 2011</span>
            </div>
            <div className="description">
              React is only concerned with state management and rendering that
              state to the DOM.
            </div>
            <br />
            <br />
            <Button animated compact>
              <Button.Content visible>React Videos</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column className="ui card">
          <img
            className="languageImage"
            src={cssLogo}
            // style={{ width: "auto", height: "auto" }}
          />
          <div className="content">
            <a className="header">CSS</a>
            <div className="meta">
              <span className="date">Created in 1996</span>
            </div>
            <div className="description">
              Style sheet language used for describing the presentation of a
              document.
            </div>
            <br />
            <Button animated compact>
              <Button.Content visible>CSS Videos</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </div>
        </Grid.Column>
        <Grid.Column className="ui card">
          <img className="languageImage" src={htmlLogo} />
          <div className="content">
            <a className="header">HTML</a>
            <div className="meta">
              <span className="date">Created in 1993</span>
            </div>
            <div className="description">
              The standard markup language for documents designed to be
              displayed in a web browser.
            </div>
            <br />
            <Button animated compact>
              <Button.Content visible>HTML Videos</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    // <Grid columns={2}>
    //   <Grid.Row>
    //     <div class="ui card">
    //       <div class="image">
    //         <img src={jsLogo} />
    //       </div>
    //       <div class="content">
    //         <a class="header">JavaScript</a>
    //         <div class="meta">
    //           <span class="date">Created in 1995</span>
    //         </div>
    //         <div class="description">
    //           As a multi-paradigm language that supports event-driven,
    //           functional, and imperative programming styles.
    //         </div>
    //         <br></br>
    //         <button>Videos</button>
    //       </div>
    //     </div>
  );
}

export default VideoButton;
