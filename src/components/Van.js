import React from "react"

export default function Van(props) {
    const {name, imageUrl, description, price, type} = props
    return (
        <div className="van">
            <img src={imageUrl} alt="van" className="van-img"/>
            <div className="van-content">
                <h3 className="van--name">{name}</h3>
                <span className="van--price">${price}</span>
                <div className="van--type-wrapper">
                    <div className={`van--type van--type-${type}`}>{type}</div>
                </div>
            </div>
        </div>
    )
}