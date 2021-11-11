import './App.css';
import React from "react";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import Info from "./components/Info/Info";
import Content from "./components/Content/Content";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <Router>
            <div className="app-wrapper">
                <Header name={`TestUser1`}/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/' element={<Info/>}/>
                        <Route path='/info' element={<Info/>}/>
                        <Route path='/content/*' element={<Content state={props.state.contentPage}/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
