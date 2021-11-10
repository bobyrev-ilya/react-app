import React from "react";
import header from "./Header.module.css"

const Header = (props) => {
    return (
        <header className={header.header}>
            Привет, {props.name}!!!
        </header>
    );
}

export default Header;