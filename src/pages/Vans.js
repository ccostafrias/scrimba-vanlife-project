import React, { useState, useEffect } from "react"


import Van from "../components/Van"
import Filter from "../components/Filter"

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
            setTypes([...new Set(vans.map(van => van.type))].map((type, id) => ({type, selected: false, id})))
        }
    }, [vans])

    const vanElements = getVans(vans).map(van => {
        return (
                <Van
                    key={van.id}
                    name={van.name}
                    id={van.id}
                    imageUrl={van.imageUrl}
                    description={van.description}
                    price={van.price}
                    type={van.type}
                    selectTag={() => selectTag(van.type)}
                />
            )
        })

    function getVans(arr) {
        return types.every(type => !type.selected) ? 
            arr :
            arr.filter(van => {
                const realTypes = types.filter(type => type.selected).map(type => type.type)
                return realTypes.some(realType => realType === van.type)
            })
    }

    function selectTag(tag) {
        selectFilter(getId(types, "type", tag))
    }

    function getId(arr, prop, item) {
        return arr.find(element => element[prop] === item).id
    }

    function selectFilter(id) {
        setTypes(prevTypes => {
            return prevTypes.map(type => {
                return type.id === id ? {...type, selected: !type.selected} : type
            })
        })
    }

    function clearFilter() {
        setTypes(prevTypes => {
            return prevTypes.map(type => {
                return {...type, selected: false}
            })
        })
    }

    const filtersElements = types.map(type => {
        return (
            <Filter 
                key={type.id}
                type={type.type}
                selected={type.selected}
                selectFilter={() => selectFilter(type.id)}
            />
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