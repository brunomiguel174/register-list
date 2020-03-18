import React, { Fragment } from "react";

function RegisterItem(props) {
  
  return (
    <Fragment>
        <li>
           <p>Text : {props.text}</p> 
           <p>Amount : {props.amount} </p>
        </li>
    </Fragment>
  );
}

export default RegisterItem;

