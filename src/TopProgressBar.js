

const TopProgressBar = ({progress}) => {
 
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
                    transition : "width 2s ease",
                    height: '20px',
                    backgroundColor: 'gray',
                    width: `${progress}%`,
                    }}>
                  </div>
        </div>
     );
}
 
export default TopProgressBar;