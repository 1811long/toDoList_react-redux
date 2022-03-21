const addTodo = (id,header,description,completed) => {
    return{
        type: 'ADD_TODO',
        payload:{
            id: id,
            header: header,
            description: description,
            completed: completed,
        }
    }
}
export default addTodo