import React from 'react';
import './Win.css';

let Win = ({score}) => {
    return (
        <div className="win">
            <div className="thx">
                <h1>Meus parabéns!</h1>
                <p>Você traduziu tudo corretamente!</p>
                <p>Obrigado por jogar.</p>
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

export default Win;