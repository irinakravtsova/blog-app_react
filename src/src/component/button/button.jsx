import React from 'react'
import './button.css'

function Button({ text, isClass, isDisabled, onClick }) {
  return (
    <button 
        className={isClass}
        disabled={isDisabled} 
        onClick={onClick}>
        {text}</button>
  );
}

export default Button;