import React, { useState, useEffect } from "react"

import Van from "../components/Van"

export default function Vans() {
    const [vans, setVans] = useState([])
    const [types, setTypes] = useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
        }, [])
        
    useEffect(() => {
        if (vans !== []) {
            setTypes([...new Set(vans.map(van => van.type))])
        }
    }, [vans])
    
    console.log(vans)
    console.log(types)

    const vanElements = vans.map(van => {
        return (
            <Van
                key={van.id}
                name={van.name}
                imageUrl={van.imageUrl}
                description={van.description}
                price={van.price}
                type={van.type}
            />
        )
    })

    const filtersElements = types.map(type => {
        return <div className="filter">{type}</div>
    })
    
    return (
        <main className="main-vans">
            <h2>Explore our van options</h2>
            <div className="vans-filter">
                {filtersElements}
                <button>Clear filters</button>
            </div>
            <div className="vans-container">
                {vanElements}
            </div>
        </main>
    )
}