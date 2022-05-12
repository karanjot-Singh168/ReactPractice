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
      </div>
      <hr />
    </>
  );
}
