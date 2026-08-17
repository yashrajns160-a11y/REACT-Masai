import React from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";


function Todo() {
    const [todos, setTodos] = React.useState([]);

    const handleAddTodo = (text) => {
        const newItem = {
            id: Math.random() + Date.now() + text,
            title: text,
            status: false,
        };
        const todosAfterNewItemAdded =[...todos, newItem] 
        setTodos(todosAfterNewItemAdded);
    };

    const handleToggle = (id) => {
        const todosAfterUpdation = todos.map((todo) => {
            return todo.id === id ? {...todo, status:!todo.status} : todo;
        });
        setTodos(todosAfterUpdation);
    }
    const handleDelete = (id) => {
        const todosAfterDeletion = todos.filter((todo) => todo.id != id)
        setTodos(todosAfterDeletion);
    }


    return (
        <div>
            {/* AddTodo Component */}
            <AddTodo handleAddTodo={handleAddTodo} />

            {/* TodoItems component */}
            <div>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        title={todo.title}
                        status={todo.status}
                        id={todo.id}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default Todo;