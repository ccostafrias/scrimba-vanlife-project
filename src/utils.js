import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const isLoggedIn = localStorage.getItem("loggedIn") || false
    const path = new URL(request.url).pathname.split('/').filter((p, i) => i !== 1).join('/')

    
    if (!isLoggedIn) {
        const response = redirect(`/login?message=You must log in first&redirectTo=${path}`)
        response.body = true
        throw response
    }

    return null
}