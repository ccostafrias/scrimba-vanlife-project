import React, { useState } from "react"
import { useOutletContext } from "react-router-dom"

export default function Photos() {
    const [van, setVan] = useState(useOutletContext())

    return (
        <>
            <img className="detail-van-img" src={van.imageUrl} />
        </>
    )
}