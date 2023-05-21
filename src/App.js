import React, { useState } from "react";
import "./App.css";

function App() {
  const arr = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  const actions = ["+", "-", "c", "="];
  const [operators, setOperators] = useState("");
  const [value1, setValue] = useState("0");
  const [value2, setValue1] = useState("");
  const [equals, setEquals] = useState(true);
  const result = value1 + operators + value2;

  const handleClick = (value) => {
    if (value1 === "0") {
      setValue(value);
    } else if (operators) {
      setValue1((prev) => {
        return prev + value;
      });
    } else {
      setValue((prev) => prev + value);
    }
  };

  const handlOperator = (operator) => {
    if (operator !== "=") {
      setEquals(true);
    }
    if (operator === "c") {
      setOperators("");
      setValue("0");
      setValue1("");
    } else if (operator === "=" && operators === "+") {
      setEquals(false);
      const res = Number(value1) + Number(value2);
      setValue(res.toString());
      setValue1("");
      setOperators("");
    } else if (operator === "=" && operators === "-") {
      setEquals(false);
      const res1 = Number(value1) - Number(value2);
      setValue(res1.toString());
      setValue1("");
      setOperators("");
    } else {
      setOperators(operator);
    }
  };

  return (
    <div className="calc">
      <div className="calc-screen">
        <p className={equals ? "calc-screen-p" : "calc-screen-p-equals"}>
          {result}
        </p>
      </div>
      <ul>
        {arr.map((item, ind) => (
          <button key={ind} onClick={() => handleClick(item)} className="btn">
            <div>{item}</div>
          </button>
        ))}
      </ul>
      <ul>
        {actions.map((act) => (
          <button
            key={act}
            className="btn-orange"
            onClick={() => handlOperator(act)}
          >
            {act}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default App;
