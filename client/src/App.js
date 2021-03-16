import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import VideoDisplay from "./pages/VideoDisplay";
import API from "./utils/API";
import UserContext from "./utils/UserContext";
// import { set } from "mongoose";

function App() {
  const [user, setUser] = useState();
  const [isFetchingUser, setIsFetchingUser] = useState(true);

  useEffect(() => {
    API.getCurrentUser()
      .then((res) => {
        setUser(res.data);
        setIsFetchingUser(false);
        console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
        setIsFetchingUser(false);
      });
  }, []);

  return (
    <Router>
      <Switch>
        {/* <UserContext.Provider value={user}> */}
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        {/* </UserContext.Provider> */}
        <UserContext.Provider value={user}>
          {isFetchingUser ? null : (
            <Route exact path="/main" component={Main} />
          )}
          {isFetchingUser ? null : (
            <Route exact path="/videos/:id" component={VideoDisplay} />
          )}
          {isFetchingUser ? null : (
            <Route exact path="/videos" component={VideoDisplay} />
          )}
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
