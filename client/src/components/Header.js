import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Header, Grid } from "semantic-ui-react";
// import { Link } from "react-router-dom";
import FYB_Logo from "../images/FYB_Logo.png";

function NavBar() {
  const location = useLocation();

  return (
    <>
      <Header className="navHeader">
        <Menu fixed="top">
          <Menu.Item className="navBar" as="a" header>
            <img
              src={FYB_Logo}
              className="fyblue"
              size="large"
              // src={FYBlogo}
              // style={{ marginRight: "1.5em" }}
            />
          </Menu.Item>
          <Menu.Item className="navItem">
            {" "}
            <Link
              to="/main"
              className={
                location.pathname === "/main" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/videos"
              className={
                location.pathname === "/videos" ? "nav-link active" : "nav-link"
              }
            >
              My Videos
            </Link>
          </Menu.Item>
          <Menu.Item
            className="navItem"
            action="logout"
            method="post"
            as="form"
          >
            <Link
              to="/logout"
              className={
                location.pathname === "/logout" ? "nav-link active" : "nav-link"
              }
            >
              Logout
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
