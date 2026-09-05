
import { useState } from "react";


const initialState = {
    name: "",
    city: ""
}
function AddCity({handleAddCity}) {
    const [formState, setFormState] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === "number" ? Number(value) : value;
        setFormState({ ...formState, [name]: val });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        handleAddCity(formState);
        setFormState(initialState);
    }

    const { name, city } = formState;
    return (
        <div style={{padding:"25px" ,border : "1px solid black"}}>
            <h1>ADD NEW CITY</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name :</label>
                    <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleChange}
                        placeholder="PERSON NAME"
                    />
                </div>
                <div>
                    <label>City :</label>
                    <input
                        name="city"
                        type="text"
                        value={city}
                        onChange={handleChange}
                        placeholder="ADD CITY"
                    />
                </div>
                <input type="submit" value="ADD CITY" />
            </form>
        </div>
    )
}

export default AddCity;