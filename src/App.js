import React from "react"
import { 
    RouterProvider as Router, 
    createBrowserRouter, 
    createRoutesFromElements,
    Route,
} from "react-router-dom"

import MainLayout from "./components/Layouts/MainLayout"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail, { loader as vansDetailLoader } from "./pages/Vans/VanDetail"
import Main from "./pages/Main"
import About from "./pages/About"

import NotFound from "./pages/NotFound"
import ErrorPage from "./pages/ErrorPage"

import HostLayout from "./components/Layouts/HostLayout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans, { loader as hostVansLoader } from "./pages/Host/Vans"

import HostVansDetail, { loader as hostVansDetailLoader } from "./components/Layouts/VansDetailLayout"
import Details from "./pages/Host/VansDetail/Details"
import Pricing from "./pages/Host/VansDetail/Pricing"
import Photos from "./pages/Host/VansDetail/Photos"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"element={<MainLayout/>}>
        <Route index element={<Main />}/>
        <Route path="about" element={<About />}/>
        <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<ErrorPage />}/>
        <Route path="vans/:id" element={<VanDetail />} loader={vansDetailLoader} errorElement={<ErrorPage />}/>
        <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path="income" element={<Income />}/>
            <Route path="reviews" element={<Reviews />}/>
            <Route path="vans" element={<HostVans />} loader={hostVansLoader} errorElement={<ErrorPage />}/>
            <Route path="vans/:id" element={<HostVansDetail />} loader={hostVansDetailLoader} errorElement={<ErrorPage />}>
                <Route index element={<Details />} />
                <Route path="pricing" element={<Pricing />}/>
                <Route path="photos" element={<Photos />}/>
            </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
    </Route>
), {basename: "/scrimba-vanlife-project"})

export default function App() {
    return (
        <Router 
            router={router}
        />
    )
}