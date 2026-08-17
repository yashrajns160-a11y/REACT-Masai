import React from "react";
import { useState } from "react";
import Posts from "./component/posts";
 

export default function app() {
  const [amount , setAmount] = React.useState(0);
  const handleDeposite = () => {
    setAmount((prevAmount) => prevAmount + 100);
    setAmount((prevAmount) => prevAmount + 100);
    setAmount((prevAmount) => prevAmount + 100);
    setAmount((prevAmount) => prevAmount + 100);

    /*setAmount((prevAmount) => {
      return prevAmount + 100
      });
    */
  }
  const handleWithdraw = () => {
    setAmount(amount - 100);
  }
  return (
    <div className="App">
      <h1>Current : {amount}</h1>
      <button onClick={handleDeposite}>DEPOSITE 100</button>
      <button onClick={handleWithdraw}>WITHDRAW 100</button>
      <br />
      <br />
      <hr />
      {/* this is getPost data  */}
      <Posts/>
    </div>
  )

}