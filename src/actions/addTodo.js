const addTodo = (id,text) => {
    return{
        type: 'ADD_TODO',
        payload:{
            id: id,
            text: text,
        }
    }
}
export default addTodo