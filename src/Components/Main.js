import React, {useState } from "react";
import RegisterAccount from "./RegisterAccount";
import RegisterList from "./RegisterList";

function Main() {
  const [list, setList] = useState([]);
  const [result, setResult] = useState(0);
  return (
  <main>
    <div className="div--main">
      <h1>Balance : {result}</h1>
      <RegisterAccount
        handleSubmit={(text, amount) => {
          const newList = list.concat([{ text, amount }]);
          setList(newList);
          setResult(result + Number(amount));
        }}
      />
      <RegisterList
        list={list}
        deleteOneByOne={index => {
          const newList = [...list];
          newList.splice(index, 1);
          setList(newList);
          setResult(result - Number(list[index].amount));
        }}
      />
    </div>
  </main>

  );
}

export default Main;
