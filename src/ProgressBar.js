import React from "react";



const ProgressBar = (score) => {
 
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 3,
      margin: 30,
      border: ' solid',
    }
  
    const fillerStyles = {
      height: '100%',
      backgroundColor: 'grey',
  
    }
  
    // const labelStyles = {
    //   padding: 5,
    //   color: 'white',
    //   fontWeight: 'bold'
    // }
 
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={{width: `${score}%`}}></span>
      </div>
    </div>
  );
};

export default ProgressBar;