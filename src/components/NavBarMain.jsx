import React from "react";
import { Link } from "react-router-dom";

const NavBarMain = () => {
    return (
        <>
        <nav className="navbar navbar-sgs  navbar-expand-sm">
            <div className="container">
                <Link to={'/'} className="navbar-brand fs-14 nav-sgs">  <img src="https://logodix.com/logo/1883567.png" style={{width:'100px'}}/><span className="text-sgs">When You Want To Be Sure</span></Link>
            </div>
        </nav>
        </>
    )
}

export default NavBarMain;