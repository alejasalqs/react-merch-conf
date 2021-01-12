import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import '../styles/componets/layout.css';

export const Layout = ({children}) => {
    return (
        <div className="main">
            <Header />
            {children}
            <Footer />
        </div>
    )
}
