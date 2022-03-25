import { Container, Modal, Button} from 'semantic-ui-react';
import InputTodo from './components/InputTodo'
import ListTodo from './components/ListTodo';
import React from 'react';
import {Helmet} from "react-helmet";

function App() {
  return (
    <Container>
      <InputTodo />
      <ListTodo />
    </Container>
  )
}

export default App;
