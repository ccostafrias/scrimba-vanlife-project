import React, { useState, useEffect } from "react"
import { Outlet, Link, NavLink, useParams } from "react-router-dom"

import Loading from "../Loading"


export default function VansDetail() {
    const [van, setVan] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                setVan(data.vans)
                setIsLoading(false)
            })
            
    }, [])

    return (
        <>
            {!isLoading ? (
                <section className="host-vans">
                    <Link to=".." relative="path">
                        <span className="arrow">&lt;- </span>
                        <span className="detail--back">Back to all vans</span>
                    </Link>
                    <div className="host-vans--detail">
                        <Header 
                            imageUrl={van.imageUrl}
                            type={van.type}
                            price={van.price}
                            name={van.name}
                        />
                        <nav className="nav nav-white">
                            <NavLink 
                                to="."
                                end
                                className={({isActive}) => {
                                    let active = isActive ? " active-link" : ''
                                    return 'hover-opacity' + active
                                }}
                            >
                                Details
                            </NavLink>
                            <NavLink 
                                to="pricing"
                                end
                                className={({isActive}) => {
                                    let active = isActive ? " active-link" : ''
                                    return 'hover-opacity' + active
                                }}
                            >
                                Pricing
                            </NavLink>
                            <NavLink 
                                to="photos"
                                end
                                className={({isActive}) => {
                                    let active = isActive ? " active-link" : ''
                                    return 'hover-opacity' + active
                                }}
                            >
                                Photos
                            </NavLink>
                        </nav>
                        <Outlet context={van}/>
                    </div>
                </section>

            ) : (
                <Loading />
            )}
        </>
    )
}

function Header(props) {
    const { imageUrl, name, price, type } = props

    return (
        <header>
            <img src={imageUrl} />
            <div className="host-vans--card--text">
                <div className={`van--type van--type-${type}`}>{type}</div>
                <h3 className="vans-name">{name}</h3>
                <span className="vans-price">${price}</span>
            </div>
        </header>
    )
}