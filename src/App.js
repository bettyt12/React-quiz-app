import React, { useState, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import QuestionList from "./QuestionList.json";
import ProgressBar from "./ProgressBar.js";
import TopProgressBar from "./TopProgressBar.js";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./App.css";

function App() {
  const [currentquestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [rate, setRate] = useState(3);
  const [res, setRes] = useState("");
  const [remain, setRemain] = useState(20);
  const [disable,setDisable]=useState(false);
  const correct_answer=QuestionList[currentquestion].correct_answer;
  const incorrect_answer=QuestionList[currentquestion].incorrect_answers;
  const all_answers=[correct_answer,...incorrect_answer]

  useEffect(() => {}, [currentquestion]);

  const handleCorrectAnswer = isCorrect => {
    
    setRemain(remain - 1);
    if (isCorrect) {
      setScore(score + 1);
      setRes("correct!!");
    } else {
      setRes("Sorry!!");
    }
    setDisable(true);
  };

  const handleNextQuestion = () => {
    
    setDisable(false);
    setRes("");
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

  //shuffling the answers 
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

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
    <div className="page">
      {/* progressbar */}
      <TopProgressBar score={(score / 20) * 100}/>
      {/* <LinearProgress
        variant="determinate"
        value={((currentquestion + 1) / QuestionList.length) * 100}
      /> */}
    <div className="content">
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
        {shuffle(all_answers).map(
          (answerOption) => (
            <button 
            disabled={disable} 
            onClick={() => handleCorrectAnswer(false)} 
            >
            {answerOption}
            </button>
          )
        )}
      </div>

      <div className="result">
         <h4 style={{ alignSelf: "center" }}>{res}</h4>
      </div>

      <div className="nextbtn">
        <button onClick={() => handleNextQuestion()}>Next Question</button>
      </div>
      <div>
        <div className='scores'>
        <h5 className='scr'>Score : {(score / 20) * 100}%</h5>
        <h5 className='maxsc'> Max score: {maxval()}%</h5>
        </div>
       
        <ProgressBar score={(score / 20) * 100} min={minval()} max={maxval()} />
      </div>
    </div>
    </div>
  );
}

export default App;
