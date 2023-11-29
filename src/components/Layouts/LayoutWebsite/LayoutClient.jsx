import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../LayoutComponents/Header'
import Footer from '../LayoutComponents/Footer'
const LayoutClient = () => {
    return (
        <div className="container mx-auto static">
            <Header />
            <div className="content">
                <Outlet />{/* Content */}
            </div>
            <Footer />
        </div>
    )
}

export default LayoutClient