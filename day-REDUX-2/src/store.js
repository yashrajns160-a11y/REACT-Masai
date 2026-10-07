import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./Counter/counter.reducer"
import todoReducer from "./Todos/todos.reducer";
import themeReducer from "./Theme/theme.reducer";

const rootReducer = {
    counter: counterReducer,
    todo: todoReducer,
    theme:themeReducer ,
};


export const store = configureStore({
    reducer: rootReducer,
});