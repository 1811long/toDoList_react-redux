const initialTodo = [
   {
        id: 1,
        header: "EG23",
        description: "Do homework",
        completed: false
   }
]

const todoReducer = (todoState = initialTodo, action) => {
    let cloneState = [...todoState];
    switch(action.type){
        case 'ADD_TODO':
            cloneState.push(action.payload)
            return cloneState;

        case 'REMOVE_TODO':
            let idTodoRemove = action.payload;
            cloneState = todoState.filter((todo) => {
                return todo.id != idTodoRemove
            })
            return cloneState

        case 'EDIT_TODO':
            let toDoEditted = action.payload;
            cloneState = todoState.map((todo) => {
                if (todo.id == toDoEditted.id){
                    return{
                        ...toDoEditted,
                        completed:todo.completed
                    }
                }
                return todo 
            })
            return cloneState

        case 'FINISH_TODO':
            let idTodoFinish = action.payload.id
            cloneState = todoState.map((todo) => {
                if (todo.id == idTodoFinish){
                    return{
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return cloneState
            
        default:
            return todoState
    }
}

export default todoReducer