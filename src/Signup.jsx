import React from 'react'
import { useState } from 'react' 
import './Signup.css'
const Signup = () => {
    const [data, setData] = useState({})
    const handle = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submity = (e) => {
        e.preventDefault()


        fetch('https://test-api-da2a0-default-rtdb.firebaseio.com/data.json',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res=>alert('Data Posted'))
    }
    return (
        <div>
            <form onSubmit={submity}>
                <label>Email</label>
                <input type='email' name='email' onChange={handle} /> <br />
                <label>Password</label>
                <input type='password' name='password' onChange={handle} /> <br />
                <input type='submit' value='Sign up' />
            </form>
        </div>
    )
}

export default Signup