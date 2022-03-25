import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Icon, Form, TextArea, Button} from 'semantic-ui-react'
import editTodo from '../actions/editTodo'

const EditTodo = ({curId, curHeader, curDescription}) => {
  const [open, setOpen] = React.useState(false)

  const [header,setHeader] = React.useState(curHeader)
  const [description,setDescription] = React.useState(curDescription)

  const dispatch = useDispatch();

  const handleSubmit = () =>{
      dispatch(editTodo(curId,header,description))
      setOpen(false)
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Icon name='edit' link />}
    >
      <Modal.Header>Change your to do here</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
              label='Title'
              value={header}
              onChange={(e) => setHeader(e.target.value)}
          />
          <Form.Field
              control={TextArea}
              label='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Put a description here...'
          />
       </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color='black'
          onClick={handleSubmit}
        >
            Submit
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default EditTodo
