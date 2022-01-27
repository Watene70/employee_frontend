import React, { Component } from "react";
import { useStopwatch } from "react-timer-hook";

class Assesment extends Component {
  state = {};

  MyStopwatch = () => {
    const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
      useStopwatch({ autoStart: true });

    return (
      <div style={{ textAlign: "center" }}>
        <h1>react-timer-hook</h1>
        <p>Stopwatch Demo</p>
        <div style={{ fontSize: "100px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
        <p>{isRunning ? "Running" : "Not running"}</p>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  };
  render() {
    return (
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <div className="card shadow p-4 col-md-6">
          <div className="d-flex justify-content-end text-primary">
            {/* {MyStopwatch} */}
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
