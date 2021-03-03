import React from "react";

function SignUp() {
  return (
    <>
      <nav className="navbar navbar-default">
        <div className="text-center">
          <img src="./assets/Provider Portal.jpg" id="logo-signup" />
        </div>

        <div className="container-fluid">
          <div className="navbar-header"></div>
        </div>
      </nav>
      <div className="jumbotron container" id="jumbo-img">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Build Healthy Connections</h2>
            <h4>Sign Up below</h4>
            <form className="signup">
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
              <div
                style="display: none"
                id="alert"
                className="alert alert-danger"
                role="alert"
              >
                <span
                  className="glyphicon glyphicon-exclamation-sign"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Error:</span>{" "}
                <span className="msg"></span>
              </div>
              <button type="submit" className="btn btn-default">
                Sign Up
              </button>
            </form>
            <br />
            {/* <!-- href path by htm-routes.js --> */}
            <p>
              Or log in <a href="/login">here</a>
            </p>

            <footer>
              <hr id="footer-break" />
              <div id="footer" className="text-center">
                <img src="assets/PP logo.jpg" id="footer-img" />
                <p id="footer-text">
                  Created for practitioners by practitioners
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>

      <script type="text/javascript" src="js/signup.js"></script>
    </>
  );
}

export default SignUp;
