import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const CheckBoxTodo = ({onClick}) => {
  return (
    <Checkbox
      style={{
        paddingLeft: '10px'
      }}
      onClick={onClick}
    />
  )
}

export default CheckBoxTodo
