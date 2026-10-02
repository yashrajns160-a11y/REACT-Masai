import { GET_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";

export const getTodos = () => (
    {
        type: GET_TODO, payload: [
            { id: 1, value: "Memory todo1", isCompleted: false },
            { id: 2, value: "Memory todo2", isCompleted: true },
            { id: 3, value: "Memory todo3", isCompleted: true },
            { id: 4, value: "Memory todo4", isCompleted: false },
        ]
    }
);

export const addTodo = (todo) => (
    { type: ADD_TODO, payload: todo }
);

export const updateTodo = (id, changes) => (
    {
        type: UPDATE_TODO,
        payload: {
            id,
            changes,
        }
    }
);
export const deleteTodo = (id) => (
    { type: DELETE_TODO, payload: id }
);