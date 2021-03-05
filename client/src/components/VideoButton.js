import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import jsLogo from "../images/512-Javascript-shield.png";
import reactLogo from "../images/512-React-icon.png";
import htmlLogo from "../images/512-HTML5_logo_and_wordmark.png";
import cssLogo from "../images/512-CSS3_logo_and_wordmark.png";

function getVideo() {
  console.log("meow");
}
// put in functionality to populate videos associated with user

function VideoButton({ category, title, videoUrl }) {
  return (
    <Card>
      <Image
        src={jsLogo}
        alt="javascript logo"
        onClick={getVideo}
        className="javascript"
      />
      <Image
        src={reactLogo}
        alt="react logo"
        onClick={getVideo}
        className="react"
      />
      <Image
        src={htmlLogo}
        alt="html logo"
        onClick={getVideo}
        className="html"
      />
      <Image src={cssLogo} alt="css logo" onClick={getVideo} className="css" />
      <Card.Content>
        <Card.Meta></Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default VideoButton;
