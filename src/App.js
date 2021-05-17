import React, { useState, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import QuestionList from "./QuestionList.json";
import ProgressBar from "./ProgressBar.js";
import "./App.css";

function App() {
  const [currentquestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [rate, setRate] = useState(3);

  useEffect(() => {}, [currentquestion]);

  const handleCorrectAnswer = isCorrect => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setClicked(true);
    res();
  };
  const handleNextQuestion = () => {
    setClicked(false);
    if (currentquestion < QuestionList.length - 1) {
      setCurrentQuestion(currentquestion + 1);
    }
    setShowScore(true);
    rateValue();
  };

  // Rating star value
  const rateValue = () => {
    if (QuestionList[currentquestion + 1].difficulty === "easy") {
      setRate(1);
    } else if (QuestionList[currentquestion + 1].difficulty === "medium") {
      setRate(2);
    } else setRate(3);
    return rate;
  };

  //correct or wrong answer
  const res = () => {
    if (handleCorrectAnswer) {
      <h4>correct</h4>;
    } else {
      <h4>Sorry</h4>;
    }
  };
  

  //progressbar
 // const completed = (QuestionList[currentquestion + 1] * 100) / 20;

  return (
    <div className="content">
      {/* progressbar */}
      <ProgressBar score={(QuestionList[currentquestion + 1]*100) / 20}  />
    {/* {console.log(setscore={(score*100) / 20)} */}
     
      <div className="question_stat">
        <h2>
          Question {currentquestion + 1} of {QuestionList.length}
        </h2>
        <p> {QuestionList[currentquestion].category}</p>
        {/* rating */}
        <div>
          <Rating size="small" name="rating" readOnly value={rate} />
        </div>
      </div>
      <div className="question">
        <p>{QuestionList[currentquestion].question}</p>
      </div>

      <div className="btns">
        {/* {console.log(QuestionList[currentquestion].correct_answer)} */}
        {QuestionList[currentquestion].incorrect_answers.map(
          (answerOption, index) => (
            <button onClick={() => handleCorrectAnswer(false)} key={index}>
              {answerOption}
            </button>
          )
        )}
        <button onClick={() => handleCorrectAnswer(true)}>
          {QuestionList[currentquestion].correct_answer}
        </button>
      </div>

      <div className="result">
        <h6> {() => res()}</h6>
      </div>

      <div className="nextbtn">
        <button onClick={() => handleNextQuestion()}>Next Question</button>
      </div>
    </div>
  );
}

export default App;
