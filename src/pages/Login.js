import React, { useState, useEffect } from "react"
import { 
    useLoaderData, 
    useActionData, 
    Navigate, 
    useNavigation,
    Form } from "react-router-dom"
import { loginUser } from "../api"

export async function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    const path = new URL(request.url).searchParams.get("redirectTo") || "/host"

    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedIn", true)
        return ({ redirect: true, path })

    } catch(err) {
        return err
    }
}

export default function Login() {
    const messageLoader = useLoaderData()
    const actionData = useActionData()
    const navigation = useNavigation()

    return (
        <>
            {actionData?.redirect ? (
                <Navigate to={actionData.path} replace />
            ) : (
                <main className="main-login">
                    <h2>Sign in to your account</h2>
                    {messageLoader && !actionData?.message && <div className="alert-box">{messageLoader}</div>}
                    {actionData?.message && <div className="alert-box">{actionData.message}</div>}

                    <Form method="POST" replace>
                        <input 
                            type="email" 
                            name="email"
                            className="input"
                            autoComplete="email" 
                            placeholder="Email address"
                        />
                        <input 
                            type="password"  
                            name="password"
                            className="input"
                            placeholder="Password"
                        />
                        <input 
                            type="submit" 
                            className="button orange-bg"
                            value={navigation.state === "idle" ? "Log in" : "Logging in..."}
                            disabled={navigation.state === "idle" ? false : true}
                        />
                    </Form>
                </main>
            )}
        </>
    )
}