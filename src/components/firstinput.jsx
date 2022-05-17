import React, { useState } from "react";
export default function FirstInput() {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [ShowFirstInputValue, setShowFirstInputValue] = useState(false);

  // const firstInput = useRef();
  // const setFirstInput = () => {
  //   setFirstInputValue(firstInput.current.value)
  // };
  function firstInputChangeHandler(firstInputValue) {
    setFirstInputValue(firstInputValue);
    setShowFirstInputValue(false);
  }
  function countChars(){
    console.log(firstInputValue.replace(/\s/g, "").length)
  }
  return (
    <>
      {/* First input */}
      <div className="first">
        <input
          type="text"
          value={firstInputValue}
          onChange={(e) => firstInputChangeHandler(e.target.value)}
        />
        {/* <input
          type="text"
          ref={firstInput}
        /> */}
        <button onClick={() => setShowFirstInputValue(true)}>Show</button>
        {/* <button onClick={setFirstInput}>Show text</button> */}
        <label>{ShowFirstInputValue ? firstInputValue : ""}</label>
        <button onClick={() => setFirstInputValue("")}>Reset</button>
        <button onClick={() => setFirstInputValue(firstInputValue.toUpperCase())}>UpperCase</button>
        <button onClick={() => setFirstInputValue(firstInputValue.toLowerCase())}>LowerCase</button>
        <button onClick={() => setFirstInputValue(firstInputValue.replace(/\s/g, ""))}>Remove Whitespace</button>
        <button onClick={() => countChars()}>Count Characters</button>


      </div>
      <hr />
    </>
  );
}
