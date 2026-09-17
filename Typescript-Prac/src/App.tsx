import React from "react";
import Button from "./Component/Button";
import Counter from "./Component/Counter";

function App() {

  return (
    <div className="App">
      <Button color="red">Hello</Button>
      <Button color="green">BYE</Button>
      <Button color="blue">OKAY</Button>
      <br />
      <br />
      <br />
      <Counter />
    </div>
  )
}

export default App;