import './App.css';
import React from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content.jsx";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    );
}

export default App;
