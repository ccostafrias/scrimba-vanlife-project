import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target

        setInputs(prevInputs => {
            return (
                {...prevInputs, [name]: value}
            )
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <main className="main-login">
            <h2>Sign in to your account</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email"
                    className="input"
                    autoComplete="email" 
                    placeholder="Email address"
                    value={inputs.email}
                    onChange={handleChange}
                />
                <input 
                    type="password"  
                    name="password"
                    className="input"
                    placeholder="Password"
                    value={inputs.password}
                    onChange={handleChange}
                />
                <input 
                    type="submit" 
                    value="Log in"
                    className="button orange-bg"
                />
            </form>
        </main>
    )
}