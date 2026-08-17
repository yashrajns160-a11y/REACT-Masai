import React from "react";

export default function Counter() {
    const [ count , setcounter ] = React.useState(0);

    return (
        <div className="App">
            <h1>Count : {count}</h1>
            <button onClick={() => setcounter(count + 1)}>INC</button>
            <button disabled = {count <=0 } onClick={() => setcounter(count - 1)}>DEC</button>
            <button onClick={() => setcounter(0)}>RESET</button>
        </div>
    )
}