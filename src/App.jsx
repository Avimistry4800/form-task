import React, { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        fullname: "",
        birthdate: "",
        city: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "Email is invalid",
            label: "Email",
        },
        {
            id: 3,
            name: "fullname",
            type: "text",
            placeholder: "Full Name",
            errorMessage: "Full name is required",
            label: "Full Name",
        },
        {
            id: 4,
            name: "birthdate",
            type: "date",
            placeholder: "Date of birth",
            errorMessage: "Date of birth is required",
            label: "Date of Birth",
        },
        {
            id: 5,
            name: "city",
            type: "text",
            placeholder: "City",
            errorMessage: "City is required",
            label: "City",
        },
        {
            id: 6,
            name: "phone",
            type: "text",
            placeholder: "Phone Number",
            errorMessage: "Phone number is invalid",
            label: "Phone Number",
        },
        {
            id: 7,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
        },
        {
            id: 8,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords do not match",
            label: "Confirm Password",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
console.log(values);
    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default App;
