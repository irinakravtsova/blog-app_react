import React from 'react'
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../button/button';
import InputErrorTitle from '../InputErrorTitle/InputErrorTitle';
import InputErrorBody from '../InputErrorBody/InputErrorBody';

function Form({isClass, isvalue, onChange, 
  isvalueTextarea, onChangeBody,
onClick}) {
  return (
    <form action=""
        className={isClass}>
      <Input 
          istype={"text"}
          isname={'title'}
          isclass= {'post-title-input'}
          isplaceholder={'Добавь заголовок'}
          isvalue={isvalue}
          onChange={onChange}/>

      <InputErrorTitle 
                len= {isvalue.length}
                text='Твой заголовок превышает 20 символов'/>

      <Textarea 
         
           isname={'body'}
           isclass= {'post-text-input'}
           isplaceholder={'Напиши пост'}
           isvalue={isvalueTextarea}
       
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