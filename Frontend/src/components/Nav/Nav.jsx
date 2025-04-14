import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.webp"

function Nav() {
    return (
        <nav>
        <NavLink to="/">
          <img src={logo} alt="Argent Bank Logo" />
        </NavLink>
        </nav>
    )
}

export default Nav;