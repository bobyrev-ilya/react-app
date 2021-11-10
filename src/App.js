import './App.css';
import React from "react";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content.jsx";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header name={`TestUser1`}/>
            <Sidebar/>
            <Content/>
        </div>
    );
}

export default App;
