import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h1>Counter : {count}</h1>
            <div>
                <button onClick={() => setCount(count+1)}>INC</button>
                <button onClick={() => setCount(count-1)}>DEC</button>

                {/* instead of this we can use button.tsx */}
                <Button handleClick={() => setCount(count -1)}>Minus</Button>
                <Button handleClick={() => setCount(count +1)}>Plus</Button>
            </div>
        </div>
    )
}


export default Counter;