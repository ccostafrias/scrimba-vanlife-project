import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import Main from "./pages/Main"
import About from "./pages/About"

export default function App() {

    const prefix = "scrimba-vanlife-project"

    return (
        <>
            <Router>
                <Header />

                <Routes>
                    <Route path={`${prefix}/`} element={<Main />}/>  
                    <Route path={`${prefix}/about`} element={<About />}/>
                    <Route path={`${prefix}/vans`} element={<Vans />}/>
                    <Route path={`${prefix}/vans/:id`} element={<VanDetail />}/>
                </Routes>

                <Footer />
            </Router>
        </>
    )
}