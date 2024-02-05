import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  function handlerClick(e) {
    e.stopPropagation();
    setTimeout(()=>{
        setNumber(number=>number+1);
    },2000)
    
    console.log(number);
  }
  return (
    <>
      <h1>{number}</h1>
      <button
        style={{
          width: "auto",
          backgroundColor: "black",
          fontSize: "20px",
          color: "white",
        }}
        onClick={handlerClick}
      >
        Counter
      </button>
    </>
  );
}

export default Counter;
