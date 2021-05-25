const Choice = (all,disable,handleCorrectAnswer) => {
    return ( 
        <div className="btns">
        {all.map(
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
     );
}
 
export default Choice;