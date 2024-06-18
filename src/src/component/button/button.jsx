import React from 'react'
import './button.css'

function Button(props) {
  return (
    <button className='post-btn'>{props.text}</button>
  );
}

export default Button;