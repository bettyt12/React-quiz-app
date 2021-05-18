import React, { useState, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import QuestionList from "./QuestionList.json";
import ProgressBar from "./ProgressBar.js";
import TopProgressBar from "./TopProgressBar.js";
import "./App.css";

function App() {
  const [currentquestion, setCurrentQuestion] = useState(19);
  const [score, setScore] = useState(0);
  const [rate, setRate] = useState(3);
  const [res, setRes] = useState("");
  const [remain, setRemain] = useState(20);
  const [disable,setDisable]=useState(false);
  const correct_answer=QuestionList[currentquestion].correct_answer;
  const incorrect_answer=QuestionList[currentquestion].incorrect_answers;
  const all_answers=[correct_answer,...incorrect_answer];
  const [end,setEnd]=useState(false);
  const btn=document.getElementsByClassName('btn');
  

  useEffect(() => {}, [currentquestion]);

  const handleCorrectAnswer = (answerOption) => {
    
    setRemain(remain - 1);
    if (answerOption===correct_answer) {
      setRes("correct!!");
      setScore(score + 1);
    } else  {
      setRes("Sorry!!");
    }
    setDisable(true);
    showAns();
  };

  
  const handleNextQuestion = () => {
   
    
    
    if (currentquestion < QuestionList.length - 1) {
      setCurrentQuestion(currentquestion + 1);  
      rateValue();
      setDisable(false);
      setRes("");
    }else if(currentquestion>=QuestionList.length){

      setEnd(true);
      rateValue('');
    }
    
    remvAns();
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
  function shuffle() {
    var currentIndex = all_answers.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = all_answers[currentIndex];
      all_answers[currentIndex] = all_answers[randomIndex];
      all_answers[randomIndex] = temporaryValue;
    }
  
    return all_answers;
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

  //showing the correct answer
  const showAns=()=>{
    for (let i = 0; i< btn.length; i++) {
     if(btn[i].innerHTML===(correct_answer)){
       btn[i].classList.add('green');
     }}
     };
  const remvAns=()=>{
    for (let i = 0; i< btn.length; i++) {
      btn[i].classList.remove('green');
  }}

  return (
    <div className="page">
      {/* progressbar */}
      <TopProgressBar progress={((currentquestion + 1) / QuestionList.length) * 100}/>
      
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
        <p>{decodeURIComponent(QuestionList[currentquestion].question)}</p>
      </div>

      <div className="btns">
        {all_answers.map(
          (answerOption,index) => (
            <button 
             className='btn'
            disabled={disable} 
            key={index}
            onClick={() => handleCorrectAnswer(answerOption)} 
            
            >
            {answerOption}
            </button>
          )
        )}
      </div>

      <div className="result">
         <h4>{res}</h4>
      </div>

      <div className="nextbtn">
        <button disabled={end} onClick={() => handleNextQuestion()}>Next Question</button>
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
