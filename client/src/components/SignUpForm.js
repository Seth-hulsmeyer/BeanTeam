import React from "react";
import { Button, Checkbox, Form, Grid, Segment } from "semantic-ui-react";

const SignUpForm = (props) => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size="large" onSubmit={props.handleSubmit}>
        <Segment stacked>
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
          <Checkbox
            toggle
            label="JS"
            name="videos"
            value="JS"
            onChange={() => {
              props.handleToggle("JS", !props.formObject.JS);
            }}
          />
          {/* onChange.something */}
          <Checkbox
            toggle
            label="React"
            name="videos"
            value="React"
            onChange={() => {
              props.handleToggle("React", !props.formObject.React);
            }}
          />
          <Checkbox
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
          <Button type="submit">Submit</Button>
          <p>
            Or log in <a href="/login">here</a>
          </p>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default SignUpForm;
