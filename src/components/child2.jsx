import React, { useState, useEffect } from "react";

const Child2 =({ child2ToParent, valueForChild2 }) =>{
  const [inputValue, setInputValue] = useState(valueForChild2);
  const [value, setValue] = useState(inputValue);
  console.log(valueForChild2);
  // useEffect(() => {
  //   setInputValue(valueForChild2);
  //   console.log("called")
  // }, [valueForChild2]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("")
    child2ToParent("");
  };

  return (
    <>
      <label>Child 2</label>
      <input type="text" value={value} onChange={(e) => handleChange(e)} />
      <button onClick={() => child2ToParent(value)}>Update</button>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}

export default Child2;