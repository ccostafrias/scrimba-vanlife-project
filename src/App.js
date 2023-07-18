import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Vans from "./pages/Vans"
import Main from "./pages/Main"
import About from "./pages/About"

export default function App() {
    return (
        <>
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Main />}/>  
                    <Route path="/about" element={<About />}/>
                    <Route path="/vans" element={<Vans />}/>
                </Routes>

                <Footer />
            </Router>
        </>
    )
}