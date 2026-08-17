import React from "react";

function AddTodo ({handleAddTodo}) {

    const [text , setText] = React.useState("");
    const onClick = () => {
        handleAddTodo(text);
        setText("");
    }
    return (
        <div>
            <input 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="ADD TODO"
            />
            <button onClick={onClick}>ADD</button>
        </div>
    )
}
export default AddTodo;