import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'

import Home from './HomeComp/Home'
import AboutUs from './AboutUs/AboutUs'
import Dashboard from './Dashboard/Dashboard'
import Events from './Events/Events'
import Blog from './Blog/Blog'
import Clubs from './Clubs/Clubs'
import Learning from './Learning/Learning'
import ContactUs from './ContactUs/ContactUs'
import Register from './Register/Register'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Routes>
                <Route path="/about" element={<AboutUs />} />
            </Routes>
            <Routes>
                <Route path="/events" element={<Events />} />
            </Routes>
            <Routes>
                <Route path="/blog" element={<Blog />} />
            </Routes>
            <Routes>
                <Route path="/clubs" element={<Clubs />} />
            </Routes>
            <Routes>
                <Route path="/learning" element={<Learning />} />
            </Routes>
            <Routes>
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default App
