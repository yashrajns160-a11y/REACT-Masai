import  { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/action";

const TodoInput = () => {

    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            dispatch(
                addTodo({
                    id: Date.now(),
                    value,
                    iscomplete: false,
                })
            );
            setValue("");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="add something"
                value={value}
                onChange={handleChange}
            />
            <button type="Submit">Add</button>
        </form>
    )


}

export default TodoInput;