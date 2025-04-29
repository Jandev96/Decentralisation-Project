import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'

function RootLayout() {
  return (
   <> <Navbar />
   <div className="min-h-96">
       <Outlet />
   </div>
    <Footer />
   </>
  )
}

export default RootLayout