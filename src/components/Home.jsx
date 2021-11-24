import React, {} from 'react';
import './Home.css';

let Home = () => {
    return (
        <div className="home">
            <div className="header__home">
                <h1>Bem vindo ao Transcribe The Game!</h1>
                <p>Treine seu inglês jogando e se divertindo.</p>
            </div>
            <div className="content">
                <p>Vamos começar?</p>
                <div className="buttons">
                    <a href="/play" className="btn btn-primary">Começar</a>
                    <a href="/help" className="btn">Ajuda</a>
                </div>
            </div>
        </div>
    );
};

export default Home;