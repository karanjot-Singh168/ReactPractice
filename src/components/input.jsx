import React, { useState,useRef } from "react";
import "../App.css";
export default function Input() {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [ShowFirstInputValue, setShowFirstInputValue] = useState(false);
  const [secondInputValue, setSecondInputValue] = useState("");
  const firstInput = useRef();
  const setFirstInput = () => {
    setFirstInputValue(firstInput.current.value)
  };
  return (
    <div className="App">
      {/* First input */}
      <div className="first">
        {/* <input
          type="text"
          value={firstInputValue}
          onChange={(e) => setFirstInputValue(e.target.value)}
        /> */}
        <input
          type="text"
          ref={inputElement}
        />
        {/* <button onClick={() => setShowFirstInputValue(true)}>Show</button> */}
        <button onClick={setFirstInput}>Show text</button>
        <label>{firstInputValue}</label>
      </div>
      <hr />

      {/* Second input  */}
      <div className="second">
        <input
          value={secondInputValue}
          onChange={(e) => setSecondInputValue(e.target.value)}
          type="text"
        />
        <label>{secondInputValue}</label>
      </div>
    </div>
  );
}
