import React, { Component, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useDispatch,useSelector } from 'react-redux'
import addTodo from '../actions/addTodo';




const InputTodo = () => {
  const [text,setText] = useState('');
  const dispatch = useDispatch();
  const listTodo = useSelector(state => state.todo)

  const handleSubmit = () => {
     if (text){
        let newId = listTodo.length + 1;
        let newText = text;
        setText('');
        dispatch(addTodo(newId,newText));
     }else{
       alert('Please add some text');
     }
  }

  const textChange = (e) => {
      setText(e.target.value)
  }

  return (
    <Form>
        <label
          style={{
            fontSize: "25px"
          }}  
        >
          Enter a todo here
        </label>
        <hr/>
        <Form.Input
          placeholder='Enter your todo'
          value={text}
          onChange={(e) => textChange(e)}
        />
        <Form.Button content='Add todo' onClick={handleSubmit}/>
    </Form>
  )
}

export default InputTodo