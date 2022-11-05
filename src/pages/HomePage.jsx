import React from 'react'
import ComponenteCualquiera from '../components/ComponenteCualquiera'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import UcampersInfo from '../components/UcampersInfo'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <ComponenteCualquiera/>
    <UcampersInfo/>
    <Footer/>
    </>
  )
}

export default HomePage