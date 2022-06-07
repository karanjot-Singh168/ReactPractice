import React, { useEffect, useState } from "react";
import { useHistory,useLocation } from "react-router-dom";

export const Second = () => {
  const [text, SetText] = useState();
  let location = useLocation();

 
  useEffect(() => {
    if (localStorage.getItem("key")) {
       SetText(localStorage.getItem("key"));
    }
    if(location?.state?.value){
      SetText(location.state.value)
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
