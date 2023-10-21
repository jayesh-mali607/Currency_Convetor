import { useState } from "react";
//import React { useState} from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    if (counter == 20) {
      setCounter(20);
    } else {
      setCounter(counter + 1);
    }
  };
  const HandleRemove = () => {
    if (!counter == 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1> {counter} </h1>

      <button onClick={handleAdd}>Add</button>
      <button onClick={HandleRemove}>Remove</button>
    </>
  );
};

export default ConuterApp;
