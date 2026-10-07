import { TODOS_ADD, TODOS_DELETE, TODOS_GET, TODOS_UPDATE } from "./todos.types";

export const getTodos = () => ({
    type: TODOS_GET,
    payload:[{id:1, value:"Todo 1", isCompleted: false}],
});

export const addTodos = (value) => ({
    type :TODOS_ADD,
    payload: {id:Date.now(),value, isCompleted: false},
});

export const updateTodos = (id, changes) => ({
    type:TODOS_UPDATE,
    payload:{id,changes},
});
export const deleteTodos = (id) => ({
    type:TODOS_DELETE,
    payload:id,
});
