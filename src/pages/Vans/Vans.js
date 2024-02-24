import React, { useState, useEffect } from "react"
import { useSearchParams, useLoaderData } from "react-router-dom"

import Van from "./Van"

import { getVans } from "../../api"

export function loader() {
    return getVans()
}

export default function Vans() {
    const vans = useLoaderData()
    const types = [...new Set(vans.map(van => van.type))]
    
    const [searchParams, setSearchParams] = useSearchParams();
    const queryType = searchParams.get("type")

    const vanElements = filterVans(vans).map(van => {
        return (
                <Van
                    key={van.id}
                    name={van.name}
                    id={van.id}
                    imageUrl={van.imageUrl}
                    description={van.description}
                    price={van.price}
                    type={van.type}
                    queryState={searchParams.get('type')}
                    selectFilter={() => selectFilter(van.type)}
                />
            )
    })

    function filterVans(arr) {
        return queryType ? 
            arr.filter(van => van.type === queryType) :
            arr
    }
    
    function selectFilter(tp) {
        setSearchParams(prevParams => {
            if (tp && queryType !== tp) {
                prevParams.set('type', tp)
            } else {
                prevParams.delete('type')
            }
            
            return prevParams
        })
    }

    function clearFilter() {
        selectFilter(null)
    }

    const filtersElements = types.map(type => {
        return (
            <div 
                className={`filter ${type === queryType ? `van--type-${type}` : ''}`}
                onClick={() => selectFilter(type)}
            >
                {type}
            </div>
        )
    })
    
    return (
        <main className="main-vans">
            <h2>Explore our van options</h2>
            <div className="vans-filter">
                {filtersElements}
                <button 
                    className="vans-filter--clean"
                    onClick={clearFilter}
                >
                    Clear filters
                </button>
            </div>
            <div className="vans-container">
                {vanElements}
            </div>
        </main>
    )
}