import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import API from "../utils/API";

function SignUp() {
  // forcing a url change 2/8/25
  const history = useHistory();
  //functions go here
  //
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  // const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formObject);
    API.createUser(formObject).then((res) => {
      console.log(res);
      if (res.statusText === "OK") {
        history.push("/main");
      }
    });
    // setPassword(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // setting state
    setFormObject({
      ...formObject,
      // dynamically takes in "name" and that value
      [name]: value,
    });
  };

  return (
    <>
      <SignUpForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        firstName={formObject.firstName}
        lastName={formObject.lastName}
        email={formObject.email}
        password={formObject.password}
      />
    </>
  );
}

export default SignUp;
