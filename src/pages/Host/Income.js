import React from "react"
import { useLoaderData } from "react-router-dom"

import { getHostTransactions } from "../../api"
import { requireAuth } from "../../utils"

import graph from "../../images/income-graph.png"

export async function loader({request}) {
    // await requireAuth(request)
    return getHostTransactions()
}

export default function Income() {
    const transactions = useLoaderData()
    const transactionsElement = transactions.map(transaction => {
        return (
            <Transaction 
                price={transaction.price}
                date={transaction.date}
            />
        )
    })

    return (
        <main className="income-main">
            <header className="income-header">
                <h2 className="income-title">Income</h2>
                <h3>Last <span className="underline">30 days</span></h3>
                <span className="income">${transactions.reduce((prev, curr) => Number(curr.price) + prev, 0).toLocaleString("en-US")}</span>
            </header>
            <section className="highlight">
                <div className="graph-container">
                    <img src={graph} alt="graph" />
                </div>
            </section>
            <section className="transactions-section">
                <header className="transactions-header">
                    <h2 className="transactions">Your transactions ({transactions.length})</h2>
                    <h3>Last <span className="underline">30 days</span></h3>
                </header>
                <ul className="transaction-cards">
                    {transactionsElement}
                </ul>
            </section>
        </main>
    )
}

function Transaction(props) {
    const {price, date} = props

    return (
        <li className="transaction-card">
            <span className="price">${price}</span>
            <span>{date}</span>
        </li>
    )
}