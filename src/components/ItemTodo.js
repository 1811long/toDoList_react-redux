import React from 'react'
import {Item} from 'semantic-ui-react'

const ItemTodo = ({header,description,completed}) => {
  return (
      <Item style={{fontSize:'20px', color:'blue', border: 'none', borderRadius: '5px', padding:'10px'}}>
          <Item.Content verticalAlign='middle'>
                <Item.Header as='a'>{header}</Item.Header> 
                <Item.Meta>Description</Item.Meta>
                <Item.Description>
                    {description}
                </Item.Description>
          </Item.Content>
      </Item>
  )
}

export default ItemTodo

