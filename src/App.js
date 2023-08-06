import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import MainLayout from "./components/Layouts/MainLayout"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Main from "./pages/Main"
import About from "./pages/About"

import HostLayout from "./components/Layouts/HostLayout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/Vans"

import HostVansDetail from "./components/Layouts/VansDetailLayout"
import Details from "./pages/Host/VansDetail/Details"
import Pricing from "./pages/Host/VansDetail/Pricing"
import Photos from "./pages/Host/VansDetail/Photos"

export default function App() {
    return (
        <>
            <Router basename="scrimba-vanlife-project">
                <Routes>
                    <Route path="/"element={<MainLayout/>}>
                        <Route index element={<Main />}/>
                        <Route path="about" element={<About />}/>
                        <Route path="vans" element={<Vans />}/>
                        <Route path="vans/:id" element={<VanDetail />}/>

                        <Route path="host" element={<HostLayout />}>
                            <Route index element={<Dashboard />}/>
                            <Route path="income" element={<Income />}/>
                            <Route path="reviews" element={<Reviews />}/>
                            <Route path="vans" element={<HostVans />}/>
                            <Route path="vans/:id" element={<HostVansDetail />}>
                                <Route index element={<Details />}/>
                                <Route path="pricing" element={<Pricing />}/>
                                <Route path="photos" element={<Photos />}/>
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}