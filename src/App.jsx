import React, { useState } from 'react'
import "./app.css"
import FormInput from './components/FormInput'

const App = () => {

const [values, setValues] = useState({
    username: '',
    email: '',
    fullname: '',
    city: '',
    phone: '',
    password: '',
    confirmPassword:"",
});

const inputs = [
    {
id:1,
name: 'username',
type: 'text',
placeholder: 'Username',
label: 'Username',
    },
    {
id:2,
name: 'email',
type: 'email',
placeholder: 'Email',
label: 'Email',
    },
    {
id:3,
name: 'fullname',
type: 'text',
placeholder: 'Full Name',
label: 'Full Name',
    },
    {
id:4,
name: 'city',
type: 'text',
placeholder: 'City',
label: 'City',
    },
    {
id:5,
name: 'phone',
type: 'text',
placeholder: 'Phone Number',
label: 'Phone Number',
    },
    {
id:6,
name: 'password',
type: 'password',
placeholder: 'Password',
label: 'Password',
    },
    {
id:7,
name: 'confirmPassword',
type: 'password',
placeholder: 'Confirm Password',
label: 'Confirm Password',
    },
];


const handleSubmit = (e) => {
    e.preventDefault()

}

  return (
    <div className='app'>
        <form onSubmit={handleSubmit}>
<FormInput name="username" placeholder="Username"/>
<FormInput name="email" placeholder="Email"/>
<FormInput name="fullname" placeholder="Full Name"/>
<FormInput name="city" placeholder="City"/>
<FormInput name="phone" placeholder="Phone Number"/>
<FormInput name="password" placeholder="Password"/>
<FormInput name="confirmPassword" placeholder="confirm Password"/>
<button>Submit</button>
        </form>
    </div>
  )
}

export default App