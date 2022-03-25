const removeToDo = (idTodo) => {
    return{
        type: 'REMOVE_TODO',
        payload: idTodo,
    }
}
export default removeToDo