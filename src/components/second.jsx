import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const Second = () => {
  const [inputs, setInputs] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    age: null,
    car: "",
    gender: "",
  });

  useEffect(() => {
    if (localStorage.getItem("form")) {
      setInputs({ ...JSON.parse(localStorage.getItem("form")) });
    }
  }, []);
  //   const [text, SetText] = useState();
  //   let location = useLocation();
  // console.log(location)

  //   useEffect(() => {
  //     if (localStorage.getItem("key")) {
  //        SetText(localStorage.getItem("key"));
  //     }
  //     if(location.state && location.state.value){
  //       SetText(location.state.value)
  //     }
  //     if(location.search){
  //       SetText(location.search.split("=")[1])
  //     }
  //   }, []);

  //   let history = useHistory();

  //   const navigateBack=()=>{
  //     history.push("/");
  //     localStorage.removeItem("key")
  //   }
  // return (
  //   <>
  //     {text && <div>{text}</div> }
  //     <button onClick={() => navigateBack()}>Back</button>
  //   </>
  // );
  let history = useHistory();
  const navigateBack = () => {
    history.push("/");
    localStorage.removeItem("form");
  };

  return (
    <>
      <form>
        <label>
          firstName:
          <input
            type="text"
            name="firstName"
            readOnly
            value={inputs.fullName.firstName || ""}
          />
        </label>
        <br />
        <label>
          lastName:
          <input
            type="text"
            name="lastName"
            readOnly
            value={inputs.fullName.lastName || ""}
          />
        </label>
        <br />
        <label>
          age:
          <input type="number" name="age" readOnly value={inputs.age || ""} />
        </label>
        <br />
        <label>Choose a car:</label>
        <select name="car" readOnly value={inputs.car || ""}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          readOnly
          checked={inputs.gender === "male"}
        />
         <label>Male</label>
        <br /> {" "}
        <input
          type="radio"
          name="gender"
          value="female"
          readOnly
          checked={inputs.gender === "female"}
        />
         <label>Female</label>
        <br />
        <input
          type="radio"
          name="gender"
          value="other"
          readOnly
          checked={inputs.gender === "other"}
        />
         <label>Other</label>
        <br />
        <br />
      </form>
      <button onClick={() => navigateBack()}>Back</button>
    </>
  );
};
