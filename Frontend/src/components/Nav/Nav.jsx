import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightFromBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import "./nav.css";

function Nav() {
    return (
        <nav>
            <NavLink to="/">
                <img src={logo} alt="Argent Bank Logo" />
            </NavLink>
        </nav>
        );
}

export default Nav;
