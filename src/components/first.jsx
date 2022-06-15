import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

export const First = () => {
  // const [inputValue, setInputValue] = useState("");
  // let history = useHistory();
  // const navigation = () => {
  //     if(inputValue){
  //       localStorage.setItem("key", JSON.stringify(inputValue));
  //     }

  //   history.push("/second");
  // };

  // return (
  //   <>
  //     <input type="text" onChange={(e) => setInputValue(e.target.value)} />
  //     <button onClick={() => navigation()}>LocalStorage</button>&nbsp;&nbsp;
  //     <Link
  //           to={{
  //             pathname: "/second",
  //             state: {value:inputValue}
  //           }}
  //         >
  //           UseLocation
  //           </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  //           <Link
  //           to={{
  //             pathname: "/second",
  //             search: `?value=${inputValue}`,
  //           }}
  //         >
  //           Query String
  //           </Link>
  //   </>
  // );
  let history = useHistory();
  const [inputs, setInputs] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    age: null,
    car: "",
    gender: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // setInputs({
    //   ...inputs,
    //   [event.target.name]: event.target.value,
    // });
    if (name === "firstName") {
      setInputs({
        ...inputs,
        fullName: {
          ...inputs.fullName,
          firstName: value,
        },
      });
    }
    if (name === "lastName") {
      setInputs({
        ...inputs,
        fullName: {
          ...inputs.fullName,
          lastName: value,
        },
      });
    }

    if (name === "age") {
      setInputs({
        ...inputs,
        age: value,
      });
    }

    if (name === "car") {
      setInputs({
        ...inputs,
        car: value,
      });
    }
    if (name === "gender") {
      setInputs({
        ...inputs,
        gender: value,
      });
    }
  };

  // setInputs((values) => ({ ...values, [name]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    localStorage.setItem("form", JSON.stringify(inputs));
    history.push("/second");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your firstName:
        <input
          type="text"
          name="firstName"
          value={inputs.fullName.firstName || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter your lastName:
        <input
          type="text"
          name="lastName"
          value={inputs.fullName.lastName || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Choose a car:</label>
      <select name="car" value={inputs.car || ""} onChange={handleChange}>
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
        onChange={handleChange}
        checked={inputs.gender === "male"}
      />
       <label>Male</label>
      <br /> {" "}
      <input
        type="radio"
        name="gender"
        value="female"
        onChange={handleChange}
        checked={inputs.gender === "female"}
      />
       <label>Female</label>
      <br />
      <input
        type="radio"
        name="gender"
        value="other"
        onChange={handleChange}
        checked={inputs.gender === "other"}
      />
       <label>Other</label>
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};
