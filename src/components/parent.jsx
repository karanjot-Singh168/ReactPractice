import React,{useState} from "react";
import Child1 from "./child1";
import Child2 from "./child2";

const Parent = ()=> {
 
  const [input1, setInput1] = useState("");
  const [valueForChild1, setValueForChild1] = useState("");

  const [input2, setInput2] = useState("");
  const [valueForChild2, setValueForChild2] = useState("");

  const child1ToParent = (ChildData)=>{
    console.log('in child1ToParent', ChildData);
    setInput1(ChildData);
  };

  const child2ToParent=(ChildData)=> {
    console.log(ChildData);
    setInput2(ChildData);
  };

  const handleChangeInput1 = (event)=>{
    setInput1(event.target.value);  
  };
  const handleChangeInput2 =(event)=>{
    setInput2(event.target.value);
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    setValueForChild1(input1.slice());
    setValueForChild2(input2.slice());
  };

    return (
      <>
        <div>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <label>Enter input1 value for Child 1:</label>
            <input
              type="text"
              value={input1}
              onChange={(e) => handleChangeInput1(e)}
            />
            <br />
            <label>Enter input2 value for child 2:</label>
            <input
              type="text"
              value={input2}
              onChange={(e) => handleChangeInput2(e)}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        {/* <Child1 child1ToParent={child1ToParent} valueForChild1={valueForChild1} /> */}
        <Child1 key={valueForChild1} valueForChild1={valueForChild1} child1ToParent={child1ToParent}/>
        <Child2 child2ToParent={child2ToParent} key={valueForChild2 + " "} valueForChild2={valueForChild2} />
      </>
    );
  }
  
export default Parent;
