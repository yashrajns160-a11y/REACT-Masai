import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./Counter/counter.actions";
import { toggleTheme } from "./Theme/theme.actions";
import "./App.css";

const App = () => {
    const count = useSelector(store => store.counter.count);
    const theme = useSelector(store => store.theme.theme);
    const dispatch = useDispatch();

    return (
        <div
            className="App"
            style={{backgroundColor : theme,
                color : theme === "white" ? "black" : "white",
            }}
        >
            <button onClick={() => dispatch(toggleTheme())}>TOGGLE THEME</button>
            <h1>{count}</h1>
            <div className="card">
                <button onClick={() => dispatch(increment())}>INC</button>
                <button onClick={() => dispatch(decrement())}>DEC</button>
            </div>
        </div>
    )
}
export default App;

