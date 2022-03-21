const initialTodo = [
   {
        id: 1,
        header: "EG23",
        description: "Say something",
        completed: false
   }
]

const todoReducer = (todoState = initialTodo, action) => {
    let copyState = [...todoState];
    switch(action.type){
        case 'ADD_TODO':
            copyState.push(action.payload)
            console.log(action.payload)
            return copyState;
        case 'REMOVE_TODO':
            return{

            }
        default:
            return todoState
    }
}

export default todoReducer