import React from "react"
import { Star } from 'react-ionicons'

import { useLoaderData } from "react-router-dom"

import { getReviews } from "../../api"
import { requireAuth } from "../../utils"

import reviewsImg from "../../images/reviews-graph.png"

export async function loader({request}) {
    await requireAuth(request)
    return getReviews()
}

export default function Reviews() {
    const reviews = useLoaderData()
    const reviewsElement = reviews.sort((a, b) => a.rating + b.rating).map(review => {
        return (
            <Review
                key={review.id}
                user={review.user}
                rating={review.rating}
                commentary={review.commentary}
                date={review.date}
            />
        )
    })

    const average = (reviews.reduce((prev, curr) => {
        return Number(curr.rating) + prev
    }, 0)  / reviews.length).toFixed(1)

    const reviewsGraph = Array.from({length: 5}, (_, i) => {
        const percentage = reviews.filter(r => Math.floor(r.rating) == i + 1).length / reviews.length * 100
        return (
            <>
                <span>{i+1} star{i+1 == 1 ? '' : 's'}</span>
                <div className="review-bar--box">
                    <div className="review-bar--empty">
                        <div className="review-bar--filled" style={{
                            width: `${percentage}%`,
                        }}></div>
                    </div>
                </div>
                <span className="review-percentage">{percentage}%</span>
            </>
        )
    }).reverse()

    return (
        <main className="reviews-main">
            <header>
                <h2 className="reviews-title">Your reviews</h2>
                <div className="rating-average--box">
                    <span className="rating-average">{average}</span>
                    <Star
                        color={'#FF8C38'}
                        height="20px"
                        width="20px"
                    />
                    <span>Overall rating</span>
                </div>
                <div className="review-ratings">
                    {reviewsGraph}
                </div>
                {/* <img src={reviewsImg} alt="reviews graph"/> */}
            </header>
            <section>
                <h2 className="reviews">Reviews ({reviews.length})</h2>
                <ul>
                    {reviewsElement}
                </ul>
            </section>
        </main>
    )
}

function Review(props) {
    const {user, date, rating, commentary} = props

    const emptyStars = Array.from({ length: 5 }, () => {
        return (
            <Star
                color={'#ffbc8b'}
                height="20px"
                width="20px"
            />
        )
    })

    const stars = Array.from({ length: Math.ceil(rating) }, (_, i) => {
        if (rating % 1 !== 0 && i == Math.floor(rating)) {
            const percentage = rating % 1 * 100
            return (
                <span>
                    <Star
                        color={'#FF8C38'}
                        height="20px"
                        width="20px"
                        style={{
                            clipPath: `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0% 100%)`
                        }}
                    />
                </span>
            )
        } else {
            return (
                <Star
                    color={'#FF8C38'}
                    height="20px"
                    width="20px"
                />
            )
        }
    })

    return (
        <li className="review-card">
            <div className="rating-box">
                <div className="empty-stars">
                    {emptyStars}
                </div>
                <div className="stars">
                    {stars}
                </div>
            </div>
            <header className="review-header">
                <span className="review-name">{user}</span>
                <span className="review-date">{date}</span>
            </header>
            <p>{commentary}</p>
        </li>
    )
}