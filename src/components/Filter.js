import React from "react"

export default function Filter(props) {
    const {type, selected, selectFilter} = props

    return (
        <div 
            className={`filter ${selected ? `van--type-${type}` : ''}`}
            onClick={selectFilter}
        >
            {type}
        </div>
    )
}