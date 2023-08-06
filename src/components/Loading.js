import React from "react"

export default function Loading() {
    return (
        <div className="loading">
            <h2>Loading</h2>
            <div className="kombi">
                <div className="upper"></div>
                <div className="lower"></div>
                <div className="windows">
                    <div className="window-s"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                    <div className="window-l"></div>
                </div>
                <div className="bumper bumper-left"></div>
                <div className="bumper bumper-right"></div>
                <div className="wheel wheel-left"></div>
                <div className="wheel wheel-right"></div>
                <div className="light"></div>
                <div className="handle handle-left"></div>
                <div className="handle handle-right"></div>
            </div>
        </div>
    )
}