import React from "react"
import { render } from 'react-dom'
import { Outlet, NavLink, Link } from "react-router-dom"
import { PersonCircleOutline } from 'react-ionicons'

import Footer from "../Footer"

import logo from "../../images/logo.png"

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

function Header() {
    return (
        <>
            <header className="nav">
                <Link 
                    to="/"
                    className="nav--img"
                >
                    <img src={logo}/>
                </Link>

                <NavLink 
                    to="/host"
                    className={({isActive}) => {
                        let active = isActive ? " active-link" : ''
                        return 'hover-opacity' + active
                    }}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => {
                        let active = isActive ? " active-link" : ''
                        return 'hover-opacity' + active
                    }}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    className={({isActive}) => {
                        let active = isActive ? " active-link" : ''
                        return 'hover-opacity' + active
                    }}
                >
                    Vans
                </NavLink>
                <NavLink
                    to="/login"
                    className={({isActive}) => {
                        let active = isActive ? " active-link" : ''
                        return 'hover-opacity' + active
                    }}    
                >
                    <PersonCircleOutline
                        color={'#000000'} 
                        height="25px"
                        width="25px"
                    />
                </NavLink>
            </header>

        </>
    )
}