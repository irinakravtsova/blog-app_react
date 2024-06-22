import React from 'react'


function Textarea({isname, isclass, isplacehplder, isvalue, onChange}) {
  return (
    <textarea 
        name={isname}
        className={isclass}
        placeholder={isplacehplder}
        value={isvalue} 
        onChange={onChange}></textarea>  
   
  );
}

export default Textarea;