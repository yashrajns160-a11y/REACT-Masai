import React from "react";
import Post from "./Components/Post";



function App() {

  return (
    <div className="App">
      <Post/>
      
    </div>
  )
}


// function App(props) {
//   const [count,setCount] = React.useState(0);

//   const handleClick = () =>{
//     return setCount(count+1);
//   }
//   return (
//     <div className="App">
//       <h1>Count : {count}</h1>
//       <button onClick={handleClick}>Inc</button>
//     </div>
//   )
// }
export default App;