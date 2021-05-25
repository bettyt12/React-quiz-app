import Rating from '@material-ui/lab'

const Questioninfo = ({currentquestion,QuestionList,rate}) => {
    return ( 
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
       </div>
     );
}
 
export default Questioninfo;