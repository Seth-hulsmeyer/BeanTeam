import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Header, Grid, Button } from "semantic-ui-react";
// import { Link } from "react-router-dom";
// import FYBlogo from "../images/FeedYourBean_Blue.png";

function NavBar() {
  const location = useLocation();

  return (
    <>
      <Header className="navHeader">
        <Menu fixed="top">
          <Menu.Item className="navBar" as="a" header>
            <img
              // src={FYBlogo}+
              className="fyblue"
              size="large"
              alt=""
              // src={FYBlogo}
              // style={{ marginRight: "1.5em" }}
            />
          </Menu.Item>
          <Menu.Item
            className="navItem"
            action="logout"
            method="post"
            as="form"
          >
            <Button type="submit">Logout</Button>
          </Menu.Item>
          <Menu.Item>
            {/* className="navItem"
          name="My Videos"
          active={activeItem === "Home"}
          onClick={} */}
            <Link
              to="/videos"
              className={
                location.pathname === "/videos" ? "nav-link active" : "nav-link"
              }
            >
              My Videos
            </Link>
          </Menu.Item>
        </Menu>
        <Grid.Row>
          {/* <h4 class="center-align">Welcome {props.formObject.firstName} {props.formObject.lastName}, time to work!</h4> */}
        </Grid.Row>
      </Header>
    </>
  );
}

export default NavBar;
