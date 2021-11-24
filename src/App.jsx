import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Play from './components/Play';
import Help from './components/Help';
import Home from './components/Home';
import Footer from './components/Footer';
import Data from './Data';
import './App.css';

let App = () => {
    let shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    let dados = shuffleArray(Data);
    dados = dados.slice(0, 10);
    return (
        <Router>
            <div className="body">
                <Header />
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/play">
                    <Play dados={dados}/>
                </Route>
                <Route exact path="/help" component={Help}></Route>
                <Footer />
            </div>
        </Router>
    );
}

export default App;