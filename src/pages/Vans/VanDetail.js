import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

import Loading from "../../components/Loading"

export default function VanDetail() {
    const [van, setVan] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVan(data.vans)
                setIsLoading(false)
            });
    }, [params.id])

    return (
        <>
            {!isLoading ?
                <main className="main-detail">
                    <Link to=".." relative="path">
                        <span className="arrow">&lt;- </span>
                        <span className="detail--back">Back to all vans</span>
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
                        <button className="button hover-opacity">Rent this van</button>
                    </div>
                </main>
                : (
                    <Loading />
                )
            }
        </>
    )
}