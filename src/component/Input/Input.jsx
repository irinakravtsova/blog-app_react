import React from 'react'


function Input({istype, isname, isclass, isplacehplder, isvalue, onChange}) {
  return (
    <input
              type={istype}
              name={isname}
              className={isclass}
              placeholder={isplacehplder}
              value={isvalue} 
              onChange={onChange}/>
  
  );
}

export default Input;