import React from 'react'
import {useSelector} from 'react-redux'
import { Item } from 'semantic-ui-react'
import ItemTodo from './ItemTodo'

const ListTodo = () => {
  const listTodo = useSelector(state => state.todo) 
  return (
    <Item.Group divided>
        {listTodo.map((itemTodo) => (
            <ItemTodo key={itemTodo.id} text={itemTodo.text}/>
        ))}
    </Item.Group>
  )
}

export default ListTodo