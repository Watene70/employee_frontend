import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useStopwatch, useTimer } from "react-timer-hook";
import { getAllAssessment } from "../../actions/questionsActions";

const Assesment = ({ getAllAssessment, allQuestions }) => {
  const [time, setTime] = useState(new Date());
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    getAllAssessment();
  }, [allQuestions]);

  useEffect(() => {
    setTime(time.setSeconds(time.getSeconds() + 40));
  }, []);

  const { seconds, minutes, hours, days, isRunning, reset, pause } =
    useStopwatch({
      autoStart: true,
    });

  if (seconds === 40) {
    reset();
    setCurrentQuestion(currentQuestion + 1);
  }

  const goToNext = () => {
    reset();
    setCurrentQuestion(currentQuestion + 1);
  };

  let displayQuestions =
    allQuestions instanceof Array
      ? allQuestions
          .filter((qsn, index) => index === currentQuestion)
          .map((question, index) => (
            <div
              className="mt-2 d-flex justify-content-center align-items-center"
              key={index}
            >
              <div className="card shadow p-4 col-md-6">
                <div className="">
                  <div className="my-3">{question.question}</div>
                  <div className="my-3 ms-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        {question.choice1}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        {question.choice2}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        {question.choice3}
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-success" onClick={goToNext}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
      : null;

  return (
    <>
      <div
        style={{ textAlign: "center" }}
        className={seconds < 30 ? "text-primary mt-3" : "text-danger mt-3"}
      >
        <div className={currentQuestion >= allQuestions.length && "d-none"}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
        <p className={currentQuestion >= allQuestions.length && "d-none"}>
          {isRunning ? "Running (40 secs maximum)" : "Not running"}
        </p>
      </div>
      {currentQuestion >= allQuestions.length ? (
        <div className="mt-2 d-flex justify-content-center align-items-center">
          <div className="card shadow p-4 col-md-6">
            Thank you for finishing up the assessment
          </div>
        </div>
      ) : (
        displayQuestions
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  allQuestions: state.question.questions,
});

export default connect(mapStateToProps, { getAllAssessment })(Assesment);
