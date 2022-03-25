import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Item } from 'semantic-ui-react'
import ItemTodo from './ItemTodo'
import removeTodo from '../actions/removeTodo'
import { ReactSortable } from 'react-sortablejs'

const ListTodo = () => {
  const listTodo = useSelector(state => state.todo) 

  const dispatch = useDispatch();

  const [state, setState] = React.useState(listTodo);

  const onRemove = (idTodo) => {
      dispatch(removeTodo(idTodo))
  }

  const onModify = () =>{

  }
  
  return (
    <Item.Group>
        {listTodo.map((itemTodo) => (
              <ItemTodo 
                    key={itemTodo.id}
                    onRemove={() => {onRemove(itemTodo.id)}} 
                    onEdit={onModify()}
                    id = {itemTodo.id}
                    header={itemTodo.header} 
                    description={itemTodo.description} 
                    completed={itemTodo.completed}
              />
          ))}
    </Item.Group>
  )
}

export default ListTodo