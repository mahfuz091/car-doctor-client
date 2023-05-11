// import React from 'react';

import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const NavItems = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
        {user?.email ? <>
            <li><Link to="/bookings">My Bookings</Link></li>
            <li><button onClick={handleLogOut}>Log out</button></li>
        </>
            : <li> <Link to="/login">Login</Link> </li>
        }
    </>
    return (


        <div className="navbar bg-base-100 h-[90px] mb-12" >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline border-red-600 text-red-600 hover:border-red-600 hover:bg-red-600">Appoinment</a>
            </div>
        </div >
    );
};

export default Navbar;