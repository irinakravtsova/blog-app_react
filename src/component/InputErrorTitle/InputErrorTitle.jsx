import React from "react";
import './InputErrorTitle.css'
import { TITLE_VALIDATHION_LIMIT } from "../../utils/constans";

function InputErrorTitle(props) {
  if (props.len >= TITLE_VALIDATHION_LIMIT) {
    return (
      <p className='title__countSumbol'>{props.text}</p>
    )
  }
} 

export default InputErrorTitle
