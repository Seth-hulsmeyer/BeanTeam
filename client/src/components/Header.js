import React from "react";
import { Menu, Header } from "semantic-ui-react";
// import { Link } from "react-router-dom";
// import FYBlogo from "../images/FeedYourBean_Blue.png";

const NavBar = () => (
  <>
    <Header className="navHeader">
      <Menu fixed="top">
        <Menu.Item className="navBar" as="a" header>
          <img
            // src={FYBlogo}+
            className="fyblue"
            size="large"
            // src={FYBlogo}
            // style={{ marginRight: "1.5em" }}
          />
        </Menu.Item>
        <Menu.Item
          className="navItem"
          name="Logout"
          href="/login"
          //   active={activeItem === "Home"}
          //   onClick={}
        />
        <Menu.Item
          className="navItem"
          name="My Videos"
          //   active={activeItem === "Home"}
          //   onClick={}
        />
      </Menu>
      <div class="row">
    {/* <h4 class="center-align">Welcome {props.formObject.firstName} {props.formObject.lastName}, time to work!</h4> */}
</div>
    </Header>
  </>
);

export default NavBar;
