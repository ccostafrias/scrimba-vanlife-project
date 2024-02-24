import React, { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Main() {        
    return (
        <main className="main-home">
            <div className="main-home--content">
                <h2>You got the travel plans, we got the travel vans.</h2>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="/vans" className="button orange-bg hover-opacity">Find your van</Link>
            </div>
        </main>
    )
}