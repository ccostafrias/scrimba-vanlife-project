import React, { useState, useEffect } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { Star } from 'react-ionicons'

import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({request}) {
    await requireAuth(request)
    return getHostVans()
}

export default function Dashboard() {
    const [income, setIncome] = useState()

    const vans = useLoaderData()
    const vansElement = vans.map(van => {
        return (
            <Van 
                key={van.id}
                id={van.id}
                name={van.name}
                imageUrl={van.imageUrl}
                price={van.price}
            />
        )
    })

    return (
        <>
            <main >
                <header className="host-header">
                    <div>
                        <div className="center">
                            <div>
                                <h2 className="welcome">Welcome!</h2>
                                <h3>Income last <span className="underline">30 days</span></h3>
                                <span className="income">$2,260</span>
                            </div>
                            <button>Details</button>
                        </div>
                    </div>
                    <div>
                        <div className="center">
                            <div className="review">
                                <span className="review-score">Review score</span>
                                <div className="rate">
                                    <Star
                                        color={'#FF8C38'}
                                        height="20px"
                                        width="20px"
                                    />
                                    <span><span className="bold">5.0</span>/5</span>
                                </div>
                            </div>
                            <button>Details</button>
                        </div>
                    </div>
                </header>

                <section className="host-vans">
                    <h2 className="title">Your listed vans</h2>
                    <div className="host-vans--cards">
                        {vansElement}
                    </div>
                </section>
            </main>
        </>
    )
}

function Van(props) {
    const {name, imageUrl, price, id} = props

    return (
        <Link to={id}>
            <div className="host-vans--card">
                <img src={imageUrl} />
                <div className="host-vans--card--text">
                    <h3 className="vans-name">{name}</h3>
                    <span className="vans-price">${price}/day</span>
                </div>
            </div>
        </Link>
    )
}