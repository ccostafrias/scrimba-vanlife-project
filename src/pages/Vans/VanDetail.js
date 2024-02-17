import React from "react"
import { useLocation, useLoaderData , Link } from "react-router-dom"

import { getVan } from "../../api"

export function loader({ params }) {
    const {id} = params
    return getVan(id)
}

export default function VanDetail() {
    const van = useLoaderData()
    const location = useLocation()
    const search = location.state.search

    return (
        <main className="main-detail">
            <Link to={search ? `..?type=${search}` : `..`} relative="path">
                <span className="arrow">&lt;- </span>
                <span className="detail--back">Back to {search ? `${search}` : "all"} vans</span>
            </Link>
            <div className="detail--content">
                <img src={van.imageUrl} className="detail--image"/>
                <div className="van--type-wrapper">
                    <div 
                        className={`van--type van--type-${van.type}`}
                    >
                        {van.type}
                    </div>
                </div>
                <h2 className="van--name">{van.name}</h2>
                <span className="van--price detailed">${van.price}</span>
                <p>{van.description}</p>
                <button className="button orange-bg hover-opacity">Rent this van</button>
            </div>
        </main>
    )
}