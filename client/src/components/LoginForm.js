import React from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";

const LoginForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size="large">
        <Segment stacked>
          <Form.Input label="Email" type="email" placeholder="Email" />
          <Form.Input label="Password" type="password" placeholder="Password" />
          <Button type="submit" onClick="#">
            {" "}
            {/* something weird about the onClick here, error about requiring a string */}
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
