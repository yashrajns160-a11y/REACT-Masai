import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducer";


// export const store = configureStore(todoReducer);
//this is wrong configureStore() expect a configuration object
export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

