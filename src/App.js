import React, { useState, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import QuestionList from "./QuestionList.json";
import ProgressBar from "./ProgressBar.js";
import LinearProgress from "@material-ui/core/LinearProgress"
import "./App.css";

function App() {
  const [currentquestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [rate, setRate] = useState(3);
  const [res,setRes]=useState("");
  const [remain,setRemain]=useState(20);

  useEffect(() => {}, [currentquestion]);

  const handleCorrectAnswer = isCorrect => {
    setRemain(remain-1)
    if (isCorrect) {
      setScore(score + 1);
      setRes("correct!!");
    }else{
      setRes("Sorry");
    }    
    setClicked(true);
  
  };


  const handleNextQuestion = () => {
    setRes("");
    setClicked(false);
    if (currentquestion < QuestionList.length - 1) {
      setCurrentQuestion(currentquestion + 1);
    }
    
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


  
 // progress control
  const maxval = () => {
    let max = ((score + remain) * 100) / 20;
    return max;
  };
  const minval = () => {
    let min = (score * 100) / 20;
    return min;
  };

  return (
    <div className="content">
      {/* progressbar */}
      <LinearProgress variant="determinate" 
      value={((currentquestion + 1) / (QuestionList.length)) * 100}
       />
 
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
        <h6>{res}</h6>
      </div>

      <div className="nextbtn">
        <button onClick={() => handleNextQuestion()}>Next Question</button>
      </div>
      <div>
          <h5>Score : {(score/20) * 100}%</h5>
          <h5 style={{marginLeft: ""}}> Max score: {maxval()}%</h5>
      <ProgressBar score={(score/20) * 100} min={minval()} max={maxval()}  />
      </div>
    </div>
  );
}

export default App;
