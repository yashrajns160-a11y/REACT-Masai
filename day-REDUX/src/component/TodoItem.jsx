import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../Redux/action";

const TodoItem = ({ id, value, isComplete }) => {
    const dispatch = useDispatch();
    return (
        <div
            // onClick={() =>
            //     dispatch(updateTodo(id, {
            //         isCompleted: !isCompleted,
            //     })
            //     )
            // }
        >
            {value} --  {isComplete ? "completed" : "incomplete"}
            <button onClick={() =>
                dispatch(updateTodo(id, {
                    isComplete: !isComplete,
                })
                )}>click</button>
        </div>
    )
}

export default TodoItem; 