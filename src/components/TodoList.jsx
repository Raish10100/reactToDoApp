import { useState } from "react";
import Todo from "./Todo";

function TodoList({ data,deleteHandler }) {

    


  return (
    <div>
      {/* <h1 className="text-center">TODO LIST</h1> */}
      <br/>
      <br/>
      <br/>
     {
        data && data.map((todo, index) => <Todo deleteHandler={deleteHandler} id={index} key={ index } time={ todo.time } text={ todo.text } />)
        
     }
    </div>
  );
}
export default TodoList;

