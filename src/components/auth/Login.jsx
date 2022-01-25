import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="loginContainer d-flex align-items-center justify-content-center">
        <div className="col-md-4 shadow p-4">
          <div className="mb-3">
            <h6 className="d-flex justify-content-center my-3">Welcome</h6>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="d-grid gap-2 mt-5">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
