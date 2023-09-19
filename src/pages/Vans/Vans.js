import React, { useState, useEffect } from "react"
import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom"

import Van from "./Van"
import Filter from "../../components/Filter"

import { getVans } from "../../api"

export function loader() {
    // const vansPromise = getVans()
    // return defer({vans: vansPromise})
    return getVans()
}

export default function Vans() {
    const vans = useLoaderData()
    const [types, setTypes] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    const queryType = searchParams.get("type")
        
    useEffect(() => {
        if (vans.length !== 0) {
            setTypes(
                [...new Set(
                    vans.map(van => van.type))]
                        .map((type, id) => {

                            return ({type, selected: type === queryType ? true : false, id})
                        }
                )
            )
        }
    }, [vans])
    
    useEffect(() => {
        if (types.length !== 0) {
            setSearchParams(prevParams => {
                const selected = types.find(type => type.selected === true)?.type

                if (selected) {
                    prevParams.set('type', selected)
                } else {
                    prevParams.delete('type')
                }
                
                return prevParams
            })
        }
    }, [types])

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
        return types.every(type => !type.selected) ? 
            arr :
            arr.filter(van => {
                const realTypes = types.filter(type => type.selected).map(type => type.type)
                return realTypes.some(realType => realType === van.type)
            })
    }
    
    function selectFilter(tp) {
        setTypes(prevTypes => {
            return prevTypes.map(type => {
                return type.type === tp ? {...type, selected: !type.selected} : {...type, selected: false}
            })
        })
    }

    function clearFilter() {
        selectFilter(null)
    }

    const filtersElements = types.map(type => {
        return (
            <Filter 
                key={type.id}
                type={type.type}
                selected={type.selected}
                selectFilter={() => selectFilter(type.type)}
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