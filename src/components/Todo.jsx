function Todo({ time, text, deleteHandler,id}){

  const todoStyles = {
    todoCheckbox: {
        height: "20px",
        width: "20px",
        cursor: "pointer",
    }
  }

    return(
        
        <>
                <input style={todoStyles.todoCheckbox} className="todo-checkbox"  type="checkbox"/>
                <span> {time} ,  Todo: {text} {"\u00A0  \u00A0 \u00A0"} </span>    
                <button onClick={() => {deleteHandler(id)}} >Delete</button>
                <br/>
                <br/>
        </>
    )
}

export default Todo;