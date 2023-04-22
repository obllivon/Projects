import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../componenets/footer/Footer'
import Header from '../componenets/header/Header'

function MainLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default MainLayout