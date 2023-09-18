import React from "react"
import { Outlet, Link, NavLink } from "react-router-dom"


export default function Host() {
    return (
        <main className="main-host">
            <Header />
            <Outlet />
        </main>
    )
}

function Header() {
    return (
        <>
            <nav className="nav">
                <NavLink 
                    to="."
                    end
                    className={({isActive}) => {
                        let active = isActive ? " active-link" : ''
                        return 'hover-opacity' + active
                    }}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="income"
                    className={({isActive}) => {
                        let active = isActive ? " active-link" : ''
                        return 'hover-opacity' + active
                    }}
                >
                    Income
                </NavLink>
                <NavLink
                    to="vans"
                    className={({isActive}) => {
                        let active = isActive ? " active-link" : ''
                        return 'hover-opacity' + active
                    }}
                >
                    Vans
                </NavLink>
                <NavLink
                    to="reviews"
                    className={({isActive}) => {
                        let active = isActive ? " active-link" : ''
                        return 'hover-opacity' + active
                    }}
                >
                    Reviews
                </NavLink>
            </nav>

        </>
    )
}