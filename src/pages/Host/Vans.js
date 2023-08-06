import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Loading from "../../components/Loading"

export default function Vans() {
    const [vans, setVans] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)
                setIsLoading(false)
            })
            
    }, [])

    const vansElement = vans.map(van => {
        return (
            <Van 
                key={van.id}
                id={van.id}
                name={van.name}
                imageUrl={van.imageUrl}
                price={van.price}
            />
        )
    })

    return (
        <>
            {!isLoading ? (
                vans.length === 0 ? (
                    <section className="host-vans">
                        <div className="host-vans--cards">
                            <div className="host-vans--card">
                                <span className="txt-center">You don't have any vans yet :&#40;</span>
                            </div>
                        </div>
                    </section>
                )
                : (
                    <section className="host-vans">
                        <h2>Your listed vans</h2>
                        <div className="host-vans--cards">
                            {vansElement}
                        </div>
                    </section>
                )

            ) : (
                <Loading />
            )}
        </>
    )
}

function Van(props) {
    const {name, imageUrl, price, id} = props

    return (
        <Link to={id}>
            <div className="host-vans--card">
                <img src={imageUrl} />
                <div className="host-vans--card--text">
                    <h3 className="vans-name">{name}</h3>
                    <span className="vans-price">${price}/day</span>
                </div>
            </div>
        </Link>
    )
}