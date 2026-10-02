import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { getTodos } from "../Redux/action";

const TodoApp = () => {
    const todos = useSelector((store) => store.todos.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    },[dispatch]);
    return (
        <div>
            <h1>TodoApp</h1>
            <TodoInput />
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </div>
    )
}
export default TodoApp;