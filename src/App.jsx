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
            pattern: "^[a-zA-Z0-9]{3,16}$",
            label: "Username",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "Email is invalid",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "fullname",
            type: "text",
            placeholder: "Full Name",
            errorMessage: "Full name is required",
            label: "Full Name",
            required: true,
        },
        {
            id: 4,
            name: "birthdate",
            type: "date",
            placeholder: "Date of birth",
            errorMessage: "Date of birth is required",
            label: "Date of Birth",
            required: true,
        },
        {
            id: 5,
            name: "city",
            type: "text",
            placeholder: "City",
            errorMessage: "City is required",
            label: "City",
            required: true,
        },
        {
            id: 6,
            name: "phone",
            type: "text",
            placeholder: "Phone Number",
            errorMessage: "Phone number is invalid",
            pattern:`^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$`,
            label: "Phone Number",
            required: true,
        },
        {
            id: 7,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            label: "Password",
            required: true,
        },
        {
            id: 8,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords do not match",
            pattern: values.password,
            label: "Confirm Password",
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

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
