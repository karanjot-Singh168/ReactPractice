import React, { useState } from "react";

export default function SecondInput() {
  const [secondInputValue, setSecondInputValue] = useState("");
  return (
    <>
      {/* Second input  */}
      <div className="second">
        <input
          value={secondInputValue}
          onChange={(e) => setSecondInputValue(e.target.value)}
          type="text"
        />
        <label>{secondInputValue}</label>
      </div>
    </>
  );
}
