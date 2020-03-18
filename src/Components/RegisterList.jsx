import React from "react";
import RegisterItem from "./RegisterItem";
import "../Styles/style.css";

function RegisterList(props) {
  return (
    <ul>
      {props.list.map((value, index) => (
        <div className="div--dinamic">
          <RegisterItem key={index} text={value.text} amount={value.amount} />
          <button className="button--style" onClick={() => props.deleteOneByOne(index)}>✖</button>
        </div>
      ))}
    </ul>
  );
}

export default RegisterList;
