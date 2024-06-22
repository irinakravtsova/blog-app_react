import React from 'react'
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../button/button';
import InputErrorTitle from '../InputErrorTitle/InputErrorTitle';
import InputErrorBody from '../InputErrorBody/InputErrorBody';



function Form({
                isClass, 
                isvalue, 
                onChange, 
                isplaceholderInput,                
                isvalueTextarea,
                onChangeBody, 
                isplaceholderTextarea,
                onClick,
                istypeInput,
                isnameInput,
                isclassInput,
                isnameTextarea,
                isclassTextarea}) {

  return (
    <form action=""
        className={isClass}>
      <Input 
         istypeInput={istypeInput}
         isnameInput={isnameInput}
         isclassInput= {isclassInput}
          isplaceholderInput={isplaceholderInput}
          isvalue={isvalue}
          onChange={onChange}/>

      <InputErrorTitle 
                len= {isvalue.length}
                text='Твой заголовок превышает 20 символов'/>

      <Textarea 
         
           isnameTextarea={isnameTextarea}
           isclassTextarea= {isclassTextarea}
           isplaceholderTextarea={isplaceholderTextarea}
           isvalueTextarea={isvalueTextarea}
           onChange={onChangeBody}/>      
     

      <InputErrorBody 
                len= {isvalueTextarea.length}
                text='Твой пост превышает 40 символов'/>

      <Button 
                text={'Опубликовать'}
                isClass={'post-btn'}
                onClick={onClick} />
    
    </form> 
     
  );
}

export default Form;