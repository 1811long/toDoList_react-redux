import React from 'react'

const editTodo = (id,newHeader,newDescription) => {
  return {
      type:'EDIT_TODO',
      payload:{
        id: id,
        header: newHeader,
        description: newDescription,
      }
  }
}

export default editTodo
