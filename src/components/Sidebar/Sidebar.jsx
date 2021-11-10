import React from "react";
import logo from "../../logo192.png";
import sidebar from "./Sidebar.module.css"

const Sidebar = () => {
    return (
        <nav className={sidebar.sidebar}>
            <div>
                <img src={logo} alt={"logo"}/>
            </div>
            <div className={sidebar.item}>
                <a href='/content'>
                    Content
                </a>
            </div>
            <div className={sidebar.item}>
                <a href='/info'>
                    Info
                </a>
            </div>
        </nav>
    );
}

export default Sidebar;