import React, {useState} from 'react';
import Data from './../Data';
import Win from './Win';
import Lose from './Lose';
import Heart from './Icons';
import './Play.css';

let Play = (randomArr) => {
    const [level, setLevel] = useState(0);
    const [life, setLife] = useState(3);
    const [score, setScore] = useState(0);
    const [textareaValue, setTextareaValue] = useState('');
    const lifeInnerImages = () => {
        if (life === 3) {
            return (<><Heart /><Heart /><Heart /></>)
        } else if (life === 2) {
            return (<><Heart /><Heart /></>)
        } else if (life === 1) {
            return (<><Heart /></>)
        }
    }
    const verify = () => {
        if ((textareaValue.trim()).toUpperCase() === (Data[level].portugues.trim()).toUpperCase()) {
            setScore(score + 10);
            nextLevel();
        } else {
            loseLife();
        }
    }
    const handleTextArea = e => {
        setTextareaValue(e.target.value);
    }
    const nextLevel = () => {
        setLevel(level + 1);
        setTextareaValue('');
    }
    const loseLife = () => {
        setLife(life - 1);
    }
    const skipLevel = () => {
        loseLife();
        nextLevel();
    }
    if (life < 0) {
        return (
            <Lose score={score} />
        );
    } else if (Data.length === level) {
        return (
            <Win score={score} />
        );
    } else {
        return (
            <div className="play">
                <div className="play-container">
                    <div className="play-container-header">
                        <h1>Nível: {level}</h1>
                        <div className="lifes">
                            {lifeInnerImages()}
                        </div>
                    </div>
                    <div className="play-container-body">
                        <div className="traduza">
                            <h3>Traduza: {Data[level].ingles}</h3>
                        </div>
                        <div className="campo">
                            <textarea onChange={handleTextArea} value={textareaValue} placeholder={Data[level].ingles}></textarea>
                        </div>
                        <div className="actions">
                            <button onClick={skipLevel}>Pular</button>
                            <button onClick={verify}>Verificar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Play;