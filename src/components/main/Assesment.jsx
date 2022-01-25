import React, { Component } from "react";

class Assesment extends Component {
  state = {};
  render() {
    return (
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <div className="card shadow p-4 col-md-6">
          <div className="d-flex justify-content-end text-primary">
            Time 20/40
          </div>

          <div className="d-flex justify-content-center fw-bold">
            Question 1
          </div>
          <div className="my-3">Who is the next president of Kenya?</div>
          <div className="my-3 ms-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Baba
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Hustler
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-success">Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Assesment;
