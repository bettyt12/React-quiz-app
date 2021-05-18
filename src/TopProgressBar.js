const TopProgressBar = (score) => {
    return ( 
        <div style={{
            width: "100%",
            display: "flex",
            marginTop: '0px',
            flexDirection: "row",
            backgroundColor: 'lightgray',
            height: "fit-content"
              
            }}>
      
                  <div style={{
                    
                    height: '20px',
                    backgroundColor: 'black',
                    width: `${score}%`,
                    }}>
                  </div>
        </div>
     );
}
 
export default TopProgressBar;