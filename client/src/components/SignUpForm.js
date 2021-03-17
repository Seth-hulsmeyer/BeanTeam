import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Segment,
  Image,
} from "semantic-ui-react";
import FYB_finals2 from "../images/FYB_finals2.png";

//SIGNUP PAGE
const SignUpForm = (props) => (
  <>
    <Grid
      textAlign="center"
      style={{
        height: "99vh",
        marginTop: "1%",
      }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="small" onSubmit={props.handleSubmit}>
          <Segment stacked>
            <Image
              src={FYB_finals2}
              className="fyblue"
              alt="logo"
              style={{
                height: "auto",
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <Form.Input
              label="First Name"
              name="firstName"
              value={props.formObject.firstName}
              type=""
              onChange={props.handleInputChange}
              placeholder="First Name"
            />
            <Form.Input
              label="Last Name"
              name="lastName"
              type=""
              value={props.formObject.lastName}
              onChange={props.handleInputChange}
              placeholder="Last Name"
            />
            <Form.Input
              label="Email"
              name="email"
              value={props.formObject.email}
              type="email"
              onChange={props.handleInputChange}
              placeholder="Email"
            />
            <Form.Input
              label="Password"
              name="password"
              value={props.formObject.password}
              type="password"
              onChange={props.handleInputChange}
              placeholder="Password"
            />
            {props.passwordStrength.length > 0 ? (
              <>
                <p>Your Password is: {props.passwordStrength}&nbsp;</p>
              </>
            ) : null}

            <Grid.Row>
              <Grid.Column>
                <Checkbox
                  style={{ margin: "2%", marginRight: "15%" }}
                  toggle
                  label="JS"
                  name="videos"
                  value="JS"
                  onChange={() => {
                    props.handleToggle("JS", !props.formObject.JS);
                  }}
                />
                <Checkbox
                  toggle
                  label="React"
                  name="videos"
                  value="React"
                  onChange={() => {
                    props.handleToggle("React", !props.formObject.React);
                  }}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Checkbox
                  style={{ margin: "2%", marginRight: "10%" }}
                  toggle
                  label="HTML"
                  name="videos"
                  value="HTML"
                  onChange={() => {
                    props.handleToggle("HTML", !props.formObject.HTML);
                  }}
                />
                <Checkbox
                  toggle
                  label="CSS"
                  name="videos"
                  value="CSS"
                  onChange={() => {
                    props.handleToggle("CSS", !props.formObject.CSS);
                  }}
                />
              </Grid.Column>
            </Grid.Row>
            <Button type="submit" onClick={props.handleSubmit}>
              Submit
            </Button>
            <p>
              Or log in <Link to="/login">here</Link>
            </p>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </>
);

export default SignUpForm;
