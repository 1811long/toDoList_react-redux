import { Container } from 'semantic-ui-react';
import InputTodo from './components/InputTodo'
import ListTodo from './components/ListTodo';


function App() {
  return (
    <Container style={{marginTop:'100px'}}>
        <InputTodo />
        <ListTodo />
    </Container>
  );
}

export default App;
