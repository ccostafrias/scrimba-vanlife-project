import React, { useState, useEffect } from "react"
import { 
    // useLoaderData, 
    // useActionData,
    // Navigate, 
    // useNavigation,
    // Form, 
    useNavigate,
    useSearchParams,
} from "react-router-dom"

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../api";


export async function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    // const messageLoader = useLoaderData()
    // const actionData = useActionData()
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const messageLoader = searchParams.get("message")
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const [message, setMessage] = useState(error?.message || messageLoader)

    useEffect(() => {
        if (error || messageLoader) {
            setMessage(error?.message || messageLoader)
        } else {
            setMessage('')
        }
    }, [error, messageLoader])

    useEffect(() => {
        if  (user) {
            const path = new URL(window.location.href).searchParams.get("redirectTo") || "/host"
            navigate(path)
        }
    }, [user])

    function handleLogin() {
        if (!email || !password) {
            setMessage('Fill all fields!')
            return
        }
        
        signInWithEmailAndPassword(email, password)
    }

    return (
        <>
            <main className="main-login">
                <h2>Sign in to your account</h2>
                {message && <div className="alert-box">{message}</div>}

                <div className="form">
                    <input 
                        type="email" 
                        name="email"
                        value={email}
                        className="input"
                        autoComplete="email" 
                        placeholder="Email address"
                        onChange={(e) => (setEmail(e.target.value), setMessage(''))}
                    />
                    <input 
                        type="password"  
                        name="password"
                        value={password}
                        className="input"
                        placeholder="Password"
                        onChange={(e) => (setPassword(e.target.value), setMessage(''))}
                    />
                    <input 
                        type="button" 
                        className="button orange-bg"
                        value={!loading ? "Log in" : "Logging in..."}
                        disabled={!loading ? false : true}
                        onClick={handleLogin}
                    />
                </div>

            </main>
        </>
    )
}