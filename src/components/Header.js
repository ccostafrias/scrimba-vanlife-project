import React from "react"
import { Link } from "react-router-dom"

import logo from "../images/logo.png"

export default function Header() {

    const prefix = "scrimba-vanlife-project"

    return (
        <>
            <header className="nav">
                <Link to={`${prefix}/`} className="nav--img">
                    <img src={logo}/>
                </Link>

                <Link to={`${prefix}/about`} className="hover-opacity">About</Link>
                <Link to={`${prefix}/vans`} className="hover-opacity">Vans</Link>
            </header>

        </>
    )
}