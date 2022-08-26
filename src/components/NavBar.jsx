import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
        <nav className="navbar sgs-nav bg-dark navbar-expand-sm">
            <div className="container">
                <Link to={'/'} className="navbar-brand text-white">
                     {/* <i className="fa fa-mobile text-warning">
                        </i> */}
                        <img src="https://logodix.com/logo/1883567.png" style={{width:'100px'}}/>
                        Sgs  </Link>
            </div>
        </nav>
        </>
    )
}

export default NavBar;