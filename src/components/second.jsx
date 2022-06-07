import React, { useEffect, useState } from "react";
import { useHistory,useLocation } from "react-router-dom";

export const Second = () => {
  const [text, SetText] = useState();
  let location = useLocation();
console.log(location)
 
  useEffect(() => {
    if (localStorage.getItem("key")) {
       SetText(localStorage.getItem("key"));
    }
    if(location.state && location.state.value){
      SetText(location.state.value)
    }
    if(location.search){
      SetText(location.search.split("=")[1])
    }
  }, []);

  let history = useHistory();

  const navigateBack=()=>{
    history.push("/");
    localStorage.removeItem("key")
  }
  return (
    <>
      {text && <div>{text}</div> }
      <button onClick={() => navigateBack()}>Back</button>
    </>
  );
};
