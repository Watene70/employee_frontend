import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex justify-content-center mt-5 flex-column align-items-center">
        <div className="card shadow p-3 d-flex justify-content-center col-md-6 align-items-center">
          <div>Assesment Results</div>
          <div>No results yet</div>
        </div>
        <div className="mt-4">
          <Link className="btn btn-success" to="/questions">
            Take Assessment
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
