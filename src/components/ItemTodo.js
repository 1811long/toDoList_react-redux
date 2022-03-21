import React from 'react'
import {Item} from 'semantic-ui-react'

const ItemTodo = ({text}) => {
  return (
      <Item 
          style={{fontSize:'20px', color:'blue', border: 'none', borderRadius: '5px', padding:'10px'}}>
          <Item.Content 
              verticalAlign='middle' 
          >
                {text}
                
          </Item.Content>
      </Item>
  )
}

export default ItemTodo

