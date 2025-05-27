
import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png';
export default function Navbar() {
   
    return (
        <div>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarBasic">
      <ul className="navbar-nav me-auto mb-2 mb-xl-0">
        <li className="nav-item">
        <Link to="/" className="nav-link active">Home         
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/studentregister" className="nav-link active">Student Register         
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/lecturesignup" className="nav-link active">Lecturer Register         
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/login" className="nav-link active">Login         
        </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}