import React from "react"
import { Link } from "react-router-dom"

export default function Van(props) {
    const {name, imageUrl, id, price, type, selectTag} = props

    return (
        <div className="van">
            <Link to={id}>
                <img src={imageUrl} alt="van" className="van-img"/>
            </Link>
            <div className="van-content">
                <div className="van--name">
                    <Link to={id}>
                        <h3 className="van--name">{name}</h3>
                    </Link>
                </div>
                <span className="van--price">${price}</span>
                <div className="van--type-wrapper">
                    <div 
                        className={`van--type van--type-${type}`}
                        onClick={selectTag}
                    >
                        {type}
                    </div>
                </div>
            </div>
        </div>
    )
}