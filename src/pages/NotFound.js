import React, { useEffect } from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <main className="main-error">
            <h2>Sorry, the page you were looking for was not found.</h2>
            <Link to="/" className="button black-bg hover-opacity">Return to home</Link>
        </main>
    )
}