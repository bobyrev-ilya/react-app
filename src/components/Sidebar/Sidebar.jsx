import React from "react";
import logo from "../../logo192.png";
import sidebar from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className={sidebar.sidebar}>
            <div>
                <img src={logo} alt={"logo"}/>
            </div>
            <div className={sidebar.item}>
                <NavLink to='/content'>
                    Content
                </NavLink>
            </div>
            <div className={sidebar.item}>
                <NavLink to='/info'>
                    Info
                </NavLink>
            </div>
            <div className={sidebar.item}>
                <NavLink to='/cards'>
                    Cards
                </NavLink>
            </div>
        </nav>
    );
}

export default Sidebar;