import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import API from "../utils/API";
import Videos from "../utils/Videos";

function SignUp() {
  // forcing a url change 2/8/25
  const history = useHistory();

  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    videos: [],
    JS: false,
    React: false,
    HTML: false,
    CSS: false,
  });
  // const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formObject);
    // if JS, formObject.concat javascript array
    if (formObject.JS) {
      formObject.videos = formObject.videos.concat(Videos.JsVideoArray);
    }
    if (formObject.React) {
      formObject.videos = formObject.videos.concat(Videos.ReactVideoArray);
    }
    if (formObject.HTML) {
      formObject.videos = formObject.videos.concat(Videos.htmlVideoArray);
    }
    if (formObject.CSS) {
      formObject.videos = formObject.videos.concat(Videos.cssVideoArray);
    }
    API.createUser(formObject).then((res) => {
      console.log(res);
      if (res === "OK") {
        history.push("/api/login");
      }
    });
  };

  //Sign up toggle
  const handleToggle = (name, value) => {
    // const { name, value } = event.target;
    // setting state
    setFormObject({
      ...formObject,
      // dynamically takes in "name" and that value
      [name]: value,
    });
    // console.log(formObject);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // setting state
    setFormObject({
      ...formObject,
      [name]: value,
    });

    // if (name === 'password') {

    //   fetch("/api/checkpassword", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       password: value,
    //     }),
    //   }).then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     passwordStrength.textContent = data.strength
    //   })
    // }

    // console.log(formObject);
  };
  return (
    <>
      <SignUpForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleToggle={handleToggle}
        formObject={formObject}
      />
    </>
  );
}

export default SignUp;
