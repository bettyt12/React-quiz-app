import React, { useState, useEffect } from "react";
import "./App.css";
import ReactStars from "react-rating-stars-component";
import * as Statusbar from "react-statusbar";
import QuestionList from "./QuestionList.json";


function App() {
  const [currentquestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore,setShowscore]=useState(false);

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
    setShowscore(true);
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
        {/* {console.log(QuestionList[currentquestion].correct_answer)} */}
        {QuestionList[currentquestion].incorrect_answers.map(
          (answerOption, index) => (
            <button
              onClick={() => handleCorrectAnswer(false)}
              key={index}
            >
              {answerOption}
            </button>
            
          ),
        )}
         <button onClick={() => handleCorrectAnswer(true)}>
          {QuestionList[currentquestion].correct_answer}
        </button>
        
        {/* {QuestionList[currentquestion].correct_answer.map(
          (answerOption, index) => (
            <button
              onClick={() => handleCorrectAnswer(answerOption.isCorrect)}
              key={index}
            >
              {answerOption}
            </button>
          )
        )} */}
         
       
      </div>

      <div className="result">
             { clicked ? (<h4>
                 { handleCorrectAnswer ? "correct" : "not correct"}
             </h4>): <h6></h6>
             }
               
             

             
      </div>
      <div>
        <button onClick={() => handleNextQuestion()}>Next</button>
      </div>
    </div>
  );
}

export default App;
