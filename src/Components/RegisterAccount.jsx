import React, { useState } from "react";

function RegisterAccount(props) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.handleSubmit(title, value);
        setTitle("");
        setValue(0);
      }}
    >

      <input
        type="text"
        name="title"
        value={title}
        placeholder="Insert your text here!"
        onChange={event => setTitle(event.target.value)}
        className="input--style"
      />
    
      <input
        type="number"
        name="value"
        value={value}
        onChange={event => setValue(event.target.value)}
        className="input--style"
      />

      <button className="button--styleAdd">Add</button>
    </form>
  );
}

export default RegisterAccount;
