import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { Spinner } from "../common";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  state = {
    name: "",
    password: "",
    preloader: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.auth.isAuthenticated !== this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
      this.setState({
        preloader: !this.state.preloader,
      });
    }
    if (prevProps.login_error !== this.props.login_error) {
      this.setState({
        preloader: !this.state.preloader,
      });
    }
  }

  onLogin = () => {
    const { name, password, preloader } = this.state;
    if (name === "" || password === "") {
      Swal.fire("Error", "All fields are required", "error");
    } else {
      this.setState({
        preloader: !preloader,
      });
      let data = { name, password };
      this.props.loginUser(data, this.props.history);
    }
  };

  render() {
    const { name, password, preloader } = this.state;

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
              aria-describedby="emailHelp"
              onChange={this.handleChange}
              value={name}
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={this.handleChange}
              value={password}
              name="password"
            />
          </div>
          <div className="d-grid gap-2 mt-5">
            {preloader ? (
              <Spinner></Spinner>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onLogin}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  login_error: state.auth.login_error,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
