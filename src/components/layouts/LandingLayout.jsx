import React from 'react'
import { Footer } from './Footer/Footer'
import { Navbar } from './Navbar/Navbar'

export const LandingLayout = ({ children, user }) => {
    return (
        <>
            <Navbar user={user} />
            <main>{children}</main>
            <Footer />
        </>
    )
}
