import './App.css';
import logo from "./logo192.png";
import React from "react";


const App = () => {
    return (
        // <div className = "app-wrapper">
        //     <div><Header/></div>
        //     {/*<div><Navigation/></div>*/}
        //     <div><Content/></div>
        // </div>
        <div className="app-wrapper">
            <header className='header'>
                header
            </header>
            <nav className='sidebar'>
                <div>
                    <img src={logo} alt={"logo"}/>
                </div>
                <div>
                    <a>
                        info
                    </a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    info
                </div>
                <div>
                    content
                </div>
            </div>

        </div>
    );
}

export default App;
