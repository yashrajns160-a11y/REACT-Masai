import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO } from "./actionTypes";

const initialState = {
    todos: [],
};
export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TODO: {
            return {
                ...state,
                todos: payload,
            }
        }
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, payload],
            }
        }
        case UPDATE_TODO: {
            const updatedTodos = state.todos.map(todo => {
                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        ...payload.changes,
                    }
                }
                return todo;
        });
            return {
                ...state,
                todos: updatedTodos,
            }
        }
        case DELETE_TODO: {
            const filteredTodos = state.todos.filter(todo =>
                (todo.id !== payload))
                return {
                    ...state,
                    todos : filteredTodos,
                }
        }
        default : {
            return state;
        }
    }
}