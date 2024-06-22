import React from 'react'


function Button({ text, isClass, onClick }) {
  return (
    <button 
        className={isClass}
        onClick={onClick}>
        {text}</button>
  );
}

export default Button;