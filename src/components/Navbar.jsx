import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    {/*  <a className="navbar-brand" href="/ucampersinfo">Menu</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({isActive})=>(isActive ? "nav-link " : "nav-link")} aria-current="page" to="/">Home</NavLink>
        </li>

        {/* <li className="nav-item">
          <NavLink className={({isActive})=>(isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/ucampers">UCAMP</NavLink>
        </li> */}

        <li className="nav-item">
          <NavLink className={({isActive})=>(isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/crud">Ordena tus tacos</NavLink>
        </li>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Quiero recibir promos" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Enviar</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar