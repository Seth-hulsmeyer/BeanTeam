import React from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";

const SignUpForm = (props) => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size="large" onSubmit={props.handleSubmit}>
        <Segment stacked>
          <Form.Input
            label="First Name"
            name="firstName"
            value={props.firstName}
            type=""
            onChange={props.handleInputChange}
            placeholder="First Name"
          />
          <Form.Input
            label="Last Name"
            name="lastName"
            type=""
            value={props.lastName}
            onChange={props.handleInputChange}
            placeholder="Last Name"
          />
          <Form.Input
            label="Email"
            name="email"
            value={props.email}
            type="email"
            onChange={props.handleInputChange}
            placeholder="Email"
          />
          <Form.Input
            label="Password"
            name="password"
            value={props.password}
            type="password"
            onChange={props.handleInputChange}
            placeholder="Password"
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
