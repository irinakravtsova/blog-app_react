import React from "react";
import './InputErrorBody.css';
import { TEXT_VALIDATHION_LIMIT } from "../../utils/constans";

function InputErrorBody(props) {

  if (props.len >= TEXT_VALIDATHION_LIMIT) {
    return (
      <p className='text__countSumbol'>{props.text}</p>
    )
  }
} 

export default InputErrorBody
