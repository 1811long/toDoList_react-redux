const initialTodo = [
   
]

const todoReducer = (todoState = initialTodo,action) => {
    let copyState = [...todoState];

    switch(action.type){
        case 'ADD_TODO':
            copyState.push(action.payload)
            return copyState;
        case 'REMOVE_TODO':
            return{

            }
        default:
            return todoState
    }
}

export default todoReducer