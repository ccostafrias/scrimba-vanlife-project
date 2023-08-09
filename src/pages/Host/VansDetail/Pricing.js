import React, { useState } from "react"
import { useOutletContext } from "react-router-dom"

export default function Pricing() {
    const [van, setVan] = useState(useOutletContext())

    function currency(money) {
        return (money.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        }))
    }
    
    return (
        <>
            <div>
                <span className="detail-price">{currency(van.price)}</span>
            </div>
        </>
    )
}