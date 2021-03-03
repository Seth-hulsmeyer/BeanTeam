import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />
    </Router>
  );
}

export default App;
