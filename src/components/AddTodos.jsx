import { useRef } from "react";

function AddTodos(props) {


const InputBox = useRef()

  return (
    <div>
     <input type="text" style={{height:'30px',width:'30%', fontSize: '20px'}} className="todo-input" placeholder="Enter todo here..." ref={InputBox} />{"  \u00A0"}
     <button className='btn btn-primary' onClick={() => {
                    props.handler( InputBox.current.value);
                    // {console.log( InputBox.current.value)}
                    InputBox.current.value = '';
     }}>Add Todo</button>
    </div>
  );
}

export  default AddTodos;

