const finishTodo = (id) => {
        return{
            type: "FINISH_TODO",
            payload:{
                id: id
            }
        }
}
export default finishTodo