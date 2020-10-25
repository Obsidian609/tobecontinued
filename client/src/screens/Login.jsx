import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const { username, password } = formData
    const { error, handleLogin } = props

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            handleLogin(formData)
        }}>
            <h3>Login</h3>
            {
                error &&
                <p>{error}</p>
            }
            <label>
                Username:
                <br />
            <input
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
            />
            </label>
            <br />
            <label>
                Password:
                <br />
            <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            />
            </label>
            <br />
            <button>Login</button>
            <br />
            <br />
            <Link to='/register'>Register</Link>
        </form>
    )
}
