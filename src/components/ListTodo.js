import React from 'react'
import {useSelector} from 'react-redux'

const ListTodo = () => {
  const listTodo = useSelector(state => state.todo) 
  return (
    <div>
      <br></br>
      <ol>
        {listTodo.map((todo) => (
          <li 
            key={todo.id}
            style={{fontSize:"30px", marginTop:'20px'}}>
              {todo.text}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ListTodo