import React from 'react';
import './Header.css';
import { BiHelpCircle } from 'react-icons/bi';

let Header = () => {
    return (
        <div className="header">
            <h1>Transcribe The Game</h1>
            <a href="/help"><BiHelpCircle/></a>
        </div>
    );
};

export default Header;