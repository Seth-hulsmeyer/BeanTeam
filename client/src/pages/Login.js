import React from "react";

function Login() {
  //function goes here
  return (
    <>
      <nav className="navbar navbar-default">
        <div className="text-center">
          <img src="./assets/Provider Portal.jpg" id="logo-signup" />
        </div>
      </nav>

      <div className="jumbotron container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Log Into My Connections</h2>
            <h4>Let's get to work</h4>
            <form className="login">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-input"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password-input"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-default">
                Login
              </button>
            </form>
            <br />
            <p>
              Or sign up <a href="/">here</a>
            </p>
          </div>
        </div>
      </div>

      <footer>
        <hr id="footer-break" />
        <div id="footer" className="text-center">
          <img src="assets/PP logo.jpg" id="footer-img" />
          <p id="footer-text">Created for practitioners by practitioners</p>
        </div>
      </footer>
    </>
  );
}

export default Login;
