import React, { useEffect, useState } from "react";

 const Child1 =({ child1ToParent, valueForChild1 })=> {
  const [inputValue, setInputValue] = useState(valueForChild1);
  const [value, setValue] = useState(inputValue);
  console.log(valueForChild1);
  // useEffect(() => {
  //   console.log("called")
  //   setInputValue(valueForChild1);
  // }, [valueForChild1]);

  const handleChange = (event) => {
    // setInputValue(event.target.value);
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("")
    // setInputValue("");
    child1ToParent("");
  };

  return (
    <>
      <label>Child 1</label>
      <input type="text" value={value} onChange={(e) => handleChange(e)} />
      <button onClick={() => child1ToParent(value)}>Update</button>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}

export default Child1;
