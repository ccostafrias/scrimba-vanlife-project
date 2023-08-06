import React, { useEffect, useState } from "react"
import { useParams, useOutletContext } from "react-router-dom"

export default function Details() {
    const [van, setVan] = useState(useOutletContext())

    return (
        <article className="van-details">
            <p className="van-detail">
                <span className="detail-title">Name:</span>
                <span>{van.name}</span>
            </p>
            <p className="van-detail">
                <span className="detail-title">Category:</span>
                <span>{van.type}</span>
            </p>
            <p className="van-detail">
                <span className="detail-title">Description:</span>
                <span>{van.description}</span>
            </p>
            <p className="van-detail">
                <span className="detail-title">Visibility:</span>
                <span>Public</span>
            </p>
        </article>
    )
}