const Question = ({QuestionList,currentquestion}) => {
    return ( 
        <div className="question">
        <p>{decodeURIComponent(QuestionList[currentquestion].question)}</p>
      </div>
     );
}
 
export default Question;