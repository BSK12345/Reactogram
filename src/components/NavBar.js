import React from 'react';
import './NavBar.css';
import logo from '../images/logo.PNG';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-light shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand ms-5">
                        <img alt="logo" src={logo} height="45px" />
                    </NavLink>
                    <form className="d-flex me-md-5" role="search">
                        <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search" onChange={() => {}} />
                        <button className="nav-link text-dark fs-5 searchIcon" type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
                        <NavLink className="nav-link text-dark fs-5" to="/"><i className="fa-solid fa-house"></i></NavLink>
                        <NavLink className="nav-link text-dark fs-5" to="/favorites"><i className="fa-regular fa-heart"></i></NavLink>
                        <div className="dropdown">
                            <button className="btn" type="button" data-bs-toggle="dropdown">
                                <img className='navbar-profile-pic' alt="profile pic" src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink className="dropdown-item mt-0" to="/myprofile">My Profile</NavLink>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">
                                    <NavLink className="logout" to="/">Logout </NavLink>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
