import React, { useEffect,  useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import "./App.css";
import API from "./utils/API";
import UserContext from "./utils/UserContext";


function App() {

  const [users, setUsers] = useState("")
  

  useEffect(() => {
    API.getUsers()
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}, []); 



  return (
    <UserContext.Provider value= {users}>
    <Router>
      <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />
      </Switch>
    </Router>
      </UserContext.Provider>
  );
}

export default App;
