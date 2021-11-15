import './App.css';
import React from "react";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import Info from "./components/Info/Info";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ContentContainer from "./components/Content/ContentContainer";
import CardsContainer from "./components/Cards/CardsContainer";

const App = () => {
    return (
        <Router>
            <div className="app-wrapper">
                <Header name={`TestUser1`}/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/' element={<Info/>}/>
                        <Route path='/info' element={<Info/>}/>
                        <Route path='/content/*' element={<ContentContainer/>}/>
                        <Route path='/cards/*' element={<CardsContainer/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
