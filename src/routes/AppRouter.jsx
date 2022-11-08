import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CrudPage from '../pages/CrudPage';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import UcampersPage from '../pages/UcampersPage';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            
            <Route path="/ucampers" element={<UcampersPage/>}/>
            <Route path="/crud" element={<CrudPage/>}/>
            <Route path="/ucampersinfo" element={<MenuPage/>}/>
            <Route path="*" element={<h1>Error404</h1>}/>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter