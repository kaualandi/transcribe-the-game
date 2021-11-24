import React from 'react';
import './Help.css';

let Help = () => {
    return (
        <div className="help">
            <h1>Ajuda</h1>
            <div className="instructions">
                <h2>Instruções</h2>
                <p>O objetivo do jogo é traduzir as frases que aparecem na tela.</p>
                <p>Para cada frase que você acertar, você ganha um ponto.</p>
                <p>Para cada frase que você errar, você perde uma vida.</p>
                <p>Se você perder todas as vidas, você perde o jogo.</p>
                <p>Se você acertar todas as frases, você ganha o jogo.</p>
            </div>
            <div className="dev-notes">
                <h2>Notas de desenvolvimento</h2>
                <p>Agradeço por jogar meu jogo.</p>
                <p>O jogo foi desenvolvido por <a href="https://kaualf.netlify.app">Kauã Landi</a>, utilizando o React.js.</p>
                <p>O código fonte do jogo está disponível em <a href="#">GitHub</a>.</p>
            </div>
        </div>
    );
}

export default Help;