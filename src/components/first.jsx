import React, { useState } from "react";
import { useHistory,Link} from "react-router-dom";

export const First = () => {
  const [inputValue, setInputValue] = useState("");
  let history = useHistory();
  const navigation = () => {
      if(inputValue){
        localStorage.setItem("key", JSON.stringify(inputValue));
      }
    
    history.push("/second");
  };

  return (
    <>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => navigation()}>LocalStorage</button>&nbsp;&nbsp;
      <Link
            to={{
              pathname: "/second",
              state: {value:inputValue}
            }}
          >
            UseLocation
            </Link>
    </>
  );
};
