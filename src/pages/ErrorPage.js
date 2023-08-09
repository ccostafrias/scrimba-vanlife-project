import React, { useEffect } from "react"
import { Link, useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()

    useEffect(() => {
        document.title = "Fatal Error!"
    }, [])

    return (
        <main className="main-error">
            <h2>Sorry, an error ocurred</h2>
            <br/>
            <h2>{error.message}</h2>
            <pre>{error.status} - {error.statusText}</pre>
            <Link to="/" className="button black-bg hover-opacity">Return to home</Link>
        </main>
    )
}