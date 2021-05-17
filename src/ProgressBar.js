import React from "react";




const ProgressBar = ({score,min,max}) => {

console.log(score)
  return (
    <div style={{
      height: "fit-content",
      width: '100%',
      display: "flex",
      flexdirection: "row",
      border:  "2px solid"}}>

            <div style={{
              height: '20px',
              backgroundColor: 'black',
              width: `${min}%`,
              }}>
            </div>

            <div style={{
              height: '20px',
              backgroundColor: 'grey',
              width: `${score}%`,
              }}>
            </div>
            
            <div style={{
              height: '20px',
              backgroundColor: '#d1d1c7',
              width: `${max}%`}}> 
            </div>
    </div>
  );
};

export default ProgressBar;