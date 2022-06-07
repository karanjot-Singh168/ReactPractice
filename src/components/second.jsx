import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const Second = () => {
  const [text, SetText] = useState();
 
  useEffect(() => {
    if (localStorage.getItem("key")) {
       SetText(localStorage.getItem("key"));
    }
  }, []);

  let history = useHistory();
  return (
    <>
      {text && <div>{text}</div> }
      <button onClick={() => history.push("/")}>Back</button>
    </>
  );
};
