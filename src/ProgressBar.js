import React from "react";




const ProgressBar = ({score,min,max}) => {

//console.log(score)
  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      border: "2px black solid",
      height: "fit-content"
        
      }}>

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