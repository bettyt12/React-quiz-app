import React, { useState, useEffect } from "react";
import "./App.css";
import ReactStars from "react-rating-stars-component";
import * as Statusbar from "react-statusbar";
import QuestionList from "./QuestionList.json";


function App() {
  const [currentquestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {}, [currentquestion]);

  const handleCorrectAnswer = isCorrect => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setClicked(true);
  };
  const handleNextQuestion = () => {
    setClicked(false);
    if (currentquestion < QuestionList.length - 1) {
      setCurrentQuestion(currentquestion + 1);
    }
  };


  return (
    <div className="content">
      <div className="question_stat">
        <h2>
          Question {currentquestion + 1} of {QuestionList.length}
        </h2>
        <p> {QuestionList[currentquestion].category}</p>
        <ReactStars />
      </div>
      <div className="question">
        <p>{QuestionList[currentquestion].question}</p>
      </div>

      <div className="btns">
        {/* {console.log(QuestionList[currentquestion].incorrect_answers)} */}
        {QuestionList[currentquestion].incorrect_answers.map(
          (answerOption, index) => (
            <button
              onClick={() => handleCorrectAnswer(answerOption.isCorrect)}
              key={index}
            >
              {answerOption}
            </button>
          )
        )}
         {console.log(QuestionList[currentquestion].incorrect_answers)}
        {QuestionList[currentquestion].correct_answer.map(
          (answerOption, index) => (
            <button
              onClick={() => handleCorrectAnswer(answerOption.isCorrect)}
              key={index}
            >
              {answerOption}
            </button>
          )
        )}
        {/* {QuestionList[currentquestion].correct_answer.map((answerOption)=>(
                 <button key={uuidv4()} onClick={handleCorrectAnswer(answerOption.isCorrect)}>
                     {answerOption.correct_answer}</button>
             ))} */}

      </div>
      <div>
        <button onClick={() => handleNextQuestion()}>Next</button>
      </div>
    </div>
  );
}

export default App;
