import React from 'react';
import './Lose.css';

let Lose = ({score}) => {
    return (
        <div className="lose">
            <div className="thx">
                <h1>Sinto muito!</h1>
                <p>Você errou muitas vezes</p>
            </div>
            <div className="score">
                <h1>Pontuação: {score}<span className="small">/100</span></h1>
            </div>
            <div className="buttons">
                    <a href="/" className="btn btn-primary">Início</a>
                    <a href="/help" className="btn">Ajuda</a>
                </div>
        </div>
    );
}

export default Lose;