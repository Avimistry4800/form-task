import React, { useState } from 'react'
import "./app.css"
import FormInput from './components/FormInput'

const App = () => {

const [username, setUsername] = useState('')


const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data));
}

  return (
    <div className='app'>
        <form onSubmit={handleSubmit}>
<FormInput name="username" placeholder="Username"/>
<FormInput name="email" placeholder="Email"/>
<FormInput name="fullname" placeholder="Full Name"/>
<FormInput name="city" placeholder="City"/>
<FormInput name="phonenumber" placeholder="Phone Number"/>
<FormInput name="password" placeholder="Password"/>
<FormInput name="confirmpassword" placeholder="confirm Password"/>
<button>Submit</button>
        </form>
    </div>
  )
}

export default App