import React from "react"
import { Outlet, Link, NavLink, useLoaderData } from "react-router-dom"

import { getVan } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({ params, request }) {
    await requireAuth(request)
    return getVan(params.id)
}

export default function VansDetail() {
    const van = useLoaderData()

    return (
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