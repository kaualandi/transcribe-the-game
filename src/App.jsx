import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Play from './components/Play';
import Help from './components/Help';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

let App = () => {
    return (
        <Router>
            <div className="body">
                <Header />
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/play" component={Play}></Route>
                <Route exact path="/help" component={Help}></Route>
                <Footer />
            </div>
        </Router>
    );
}

export default App;