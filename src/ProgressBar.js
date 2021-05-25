import React from "react";




const ProgressBar = ({score,min,max}) => {

//console.log(score)
  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      border: "2px black solid",
      height: "fit-content",
      position: 'relative'  ,
      marginLeft: 'auto',
      marginRight: 'auto',
      }}>

            <div style={{
              
              height: '20px',
              backgroundColor: 'black',
              width: `${min}%`,
              display:'inline-block',
               
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
              width: `${max}%`,
             
            }}
              > 
            </div>
    </div>
  );
};

export default ProgressBar;
// .boxwrap{
//   marginLeft: 'auto',
//   marginRight: 'auto',
//   top: 50px;
// }

// .box{
//   width: 100px;
//   height: 100px;
// }

// #box1{
//   margin-left: -100px;
//   background-color: red;
// display:inline-block
// }

// #box2{
//   margin-top: -50px;
//   margin-bottom: -50px;
//   margin-left: 0px;
//   background-color: black;
// }

// #box3{
//   margin-left: 100px;
//   background-color: green;
// }