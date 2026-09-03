
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getTodos } from "./axios";

function Todo () {
    const [data , setData] = useState([]);

    useEffect(() =>{
        getTodos().then((res) => console.log(res.data));
    },[])
    return (
        <div>
            Todo
        </div>
    )
}
export default Todo;