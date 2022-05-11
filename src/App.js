import "./App.css";
import React,{ useState } from "react";

function App() {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [ShowFirstInputValue, setShowFirstInputValue] = useState(false);
  const [secondInputValue, setSecondInputValue] = useState("");
  return (
    <div className="App">
      {/* First input */}
      <div className="first">
        <input
          type="text"
          value={firstInputValue}
          onChange={(e) => setFirstInputValue(e.target.value)}
        />
        <button onClick={() => setShowFirstInputValue(true)}>Show</button>
        <label>{ShowFirstInputValue ? firstInputValue : ""}</label>
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

export default App;
