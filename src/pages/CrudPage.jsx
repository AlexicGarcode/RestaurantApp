import React from 'react'
import Crud from '../components/Crud'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import UcampersInfo from '../components/UcampersInfo'

const CrudPage = () => {
  return (
    <>
        <Navbar/>
        <Crud/>
        <UcampersInfo/>
        <Footer/>
    </>
  )
}

export default CrudPage