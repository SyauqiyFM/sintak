import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="w-full min-h-screen">

            <header className="w-full bg-amber-200 p-5">
                <nav className="flex flex-row justify-between">
                    <div className='flex items-center gap-2'>
                        <img src="logokopi.png" alt="" className='size-15'/>
                        <h1><strong>AROMA <br /> SRIWIJAYA</strong></h1>
                    </div>
                    <ul className="flex items-center space-x-3.5">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/product">Product</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                </nav>
            </header>

            <main className='h-screen'>
                <Outlet />
            </main>

            <footer className='bottom-0 w-full bg-white p-4'>
                <p>© 2025 MyWebsite</p>
            </footer>

        </div>
    )
}
