import React from "react"
import { Link } from "react-router-dom"

import logo from "../images/logo.png"

export default function Header() {
    return (
        <>
            <header className="nav">
                <Link to="/" className="nav--img">
                    <img src={logo}/>
                </Link>

                <Link to="/about" className="hover-opacity">About</Link>
                <Link to="/vans" className="hover-opacity">Vans</Link>
            </header>

        </>
    )
}