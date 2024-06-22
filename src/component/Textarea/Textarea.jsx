import React from 'react'


function Textarea({
  isvalueTextarea, 
  onChange, 
  isplaceholderTextarea,
  isnameTextarea,
  isclassTextarea}) {
  return (
    <textarea 
        name={isnameTextarea}
        className={ isclassTextarea}
        placeholder={isplaceholderTextarea}
        value={isvalueTextarea} 
        onChange={onChange}></textarea>  
   
  );
}

export default Textarea;