import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';

export default function Main() {
    const location = useLocation()
    const loggedOut = location.state?.logedOut

    useEffect(() => {
        if (loggedOut) {
            toast('You have successfully signed out!', {
                duration: 3000,
                position: 'top-center',
                // style: {
                //     backgroundColor: '#252525',
                //     color: '#AAAAAA',
                //     padding: '.75em',
                //     fontWeight: 'var(--fw-bold)'
                // }
                style: {
                    backgroundColor: '#FF8C38',
                    color: '#fff',
                    padding: '.75em',
                    fontWeight: 'var(--fw-bold)'
                }
            })
        }
    }, [loggedOut])

    return (
        <>
            <Toaster/>
            <main className="main-home">
                <div className="main-home--content">
                    <h2>You got the travel plans, we got the travel vans.</h2>
                    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <Link to="/vans" className="button orange-bg hover-opacity">Find your van</Link>
                </div>
            </main>
        </>
    )
}