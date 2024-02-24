import React, { useState, useEffect } from "react"
import { Link, useLoaderData } from "react-router-dom"

import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({request}) {
    // await requireAuth(request)
    return getHostVans()
}

export default function Vans() {
    const vans = useLoaderData()

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
            {
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
            }
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