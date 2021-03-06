import React, { Component, useState } from 'react'
import { Button, Checkbox, Form, TextArea } from 'semantic-ui-react'
import { useDispatch,useSelector } from 'react-redux'
import addTodo from '../actions/addTodo';

const InputTodo = () => {

  const [header,setHeader] = useState('');
  const [description,setDescription] = useState('');
  
  const dispatch = useDispatch();
  const listTodo = useSelector(state => state.todo)
 
  const headerChange = (e) => {
    setHeader(e.target.value)
  }

  const descriptionChange = (e) =>{
    setDescription(e.target.value)
  }

  const onAddTodo = () => {
     if (header){
        let newId = listTodo.length + 1;
        let newHeader = header;
        let newDescription = description;
        setHeader('')
        setDescription('')
        dispatch(addTodo(newId,newHeader,newDescription,false));
     }else{
       alert('Please add some text');
     }
  }


  return (
    <Form>
        <Form.Input
          placeholder='Enter a header for your todo'
          value={header}
          label='Title'
          onChange={(e) => headerChange(e)}
        />

        <Form.Field
          control={TextArea}
          value={description}
          onChange={(e) => descriptionChange(e)}
          label='Description'
          placeholder='Put a description here...'
        />

        <Form.Button content='Add todo' onClick={onAddTodo}/>
        <br></br>
    </Form>
  )
}

export default InputTodo