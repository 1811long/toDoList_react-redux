import React from 'react'
import { useDispatch } from 'react-redux'
import { Checkbox, Item, Icon } from 'semantic-ui-react'
import finishTodo from '../actions/finishTodo'
import CheckBoxTodo from './CheckBoxTodo'
import EditTodo from './EditTodo'

const drag = (e) => {
}

const ItemTodo = ({onRemove, id, header, description, completed }) => {
    const [showDescription, setShowDescription] = React.useState(true)
    const dispatch = useDispatch();

    function onClickCheckBox (){
        dispatch(finishTodo(id))
    }

    return (
        <Item 
            style={{
                backgroundColor:'#e6eaf0',
                paddingTop:'10px',
                paddingBottom:'10px'
            }}
            draggable="true"
            onDragStart={(e) => drag(e)}
        >
            <CheckBoxTodo onClick={onClickCheckBox}/>
           
            <Item.Content
              verticalAlign='middle'
              style={{
                  cursor:'pointer',
                  paddingLeft:'20px'
              }}
              onClick={()=>setShowDescription(!showDescription)}
            >
                <Item.Header as='a'>
                    {header}
                </Item.Header>
                {showDescription && description != '' ? 
                    <Item.Description>
                        {description}
                    </Item.Description>
                 : null
                }
            </Item.Content>

            <div>
                <Icon name = 'close' link onClick={onRemove}/>
                <Icon name = 'dropdown' link onClick={() => setShowDescription(!showDescription)}/>
                <EditTodo curId ={id} curHeader={header} curDescription={description}/>
            </div>
        </Item>
    )
}

export default ItemTodo

