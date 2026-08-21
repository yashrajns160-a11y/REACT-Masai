import { useState } from "react";
import React from "react";
// why use one object ---
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [country, setCountry] = useState("");
// const [employed, setEmployed] = useState(false);
// this become messy -- instead we use this object
const initState = {
    email: "",
    password: "",
    employed: false,
    country: ""
}
function Form() {

    const [formState, setFormState] = useState(initState);
    /*by this initially we get
    formState = {
        email: "",
        password: ""
    } */
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setFormState({ ...formState, [name]: val });
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        name="email"
                        onChange={handleChange}
                        type="text"
                        placeholder="email"
                        value={formState.email}
                    />
                </div>
                <div>
                    <input
                        name="password"
                        onChange={handleChange}
                        type="text"
                        placeholder="password"
                        value={formState.password}
                    />
                </div>
                <div>
                    <label >
                        Are you employed ?
                        <input
                            checked={formState.employed}
                            name="employed"
                            onChange={handleChange}
                            type="checkbox"
                        />
                    </label>
                </div>
                <div>
                    <select
                        name="country"
                        value={formState.country}
                        onChange={handleChange}
                    >
                        <option value="">Please choose an option</option>
                        <option value="IN">INDIA</option>
                        <option value="US">USA</option>
                        <option value="CAN">CANADA</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="SUBMIT" />
                </div>
            </form>
        </div>
    )

}

export default Form;