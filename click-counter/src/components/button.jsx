import React from 'react';
import '../styles/button.css';
function Button({ texto, isButtonClick, actionClick }) {
    return (

        <button
            className={isButtonClick ? "boton-click" : "boton-reiniciar"}
            onClick={actionClick}>
            {texto}
        </button>
    );
}

export default Button;