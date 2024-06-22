import React from 'react'


function Input({
  istypeInput, 
  isnameInput, 
  isclassInput, 
  isplaceholderInput, 
  isvalue,
  onChange,}) {

  return (
    <input
              type={istypeInput}
              name={isnameInput}
              className={isclassInput}
              placeholder={isplaceholderInput}
              value={isvalue} 
              onChange={onChange}/>
  
  );
}

export default Input;