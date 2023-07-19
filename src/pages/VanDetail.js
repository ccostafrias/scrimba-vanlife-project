import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()

    return (
        <h1>This is van {params.id} </h1>
    )
}