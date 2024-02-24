import React from "react"
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom"
import { PersonCircleOutline } from 'react-ionicons'

import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from "../../api"

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
    const navigate = useNavigate()
    const [signOut, loading, error] = useSignOut(auth);

    async function logOut() {
        const sucess = await signOut()
        if (sucess) {
            navigate("/")
        }
    }

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
                <button onClick={logOut}>X</button>
            </header>

        </>
    )
}